import os
import datetime
import smtplib
from email.mime.text import MIMEText
from email.mime.multipart import MIMEMultipart
import io
import json

from flask import Flask, request, jsonify
from flask_cors import CORS
from google.oauth2 import service_account
from googleapiclient.discovery import build
from googleapiclient.http import MediaIoBaseUpload

app = Flask(__name__)
CORS(app)

# --- CONFIGURATION ---
SERVICE_ACCOUNT_FILE = 'credentials.json'
SCOPES = ['https://www.googleapis.com/auth/spreadsheets', 'https://www.googleapis.com/auth/drive']

# 1. MAIN JOBS SHEET (Stores "Posted_Jobs" and specific role tabs)
# (UPDATED WITH YOUR NEW LINK)
JOBS_SPREADSHEET_ID = '1DyobrhQR2EwuaS86AWYBHNfRS4LF76TdEObGJW4Xdtw'

# 2. NEW GENERAL RESUME SHEET (For the "Positions Box" / General Submissions)
GENERAL_RESUME_SPREADSHEET_ID = '1Oyzz8VYmyUPyoncKhpKnmu5RUZdoOFqR-y8kIrOle-I'

# 3. CONTACT FORM SHEET
CONTACT_SPREADSHEET_ID = '1KvnpdnkBF9ZKoI08H3iiSyczeNwRQ6tlu02r97oeGWU'

# 4. SUBSCRIBE SHEET
SUBSCRIBE_SPREADSHEET_ID = '1-AQtuJhC1LmLJSl3ag5pJMBAs1FIbfJe5vj1qR0LIiw'

# 5. GOOGLE DRIVE (Where files are stored)
DRIVE_FOLDER_ID = '0AECpyehOWBsLUk9PVA'

# 6. EMAIL CONFIG
SENDER_EMAIL = "your-email@gmail.com"       # <--- UPDATE THIS
SENDER_PASSWORD = "your-app-password"       # <--- UPDATE THIS
RECIPIENT_EMAIL = "info@cphysicians.org"

# --- HELPERS ---

def authenticate_google():
    return service_account.Credentials.from_service_account_file(SERVICE_ACCOUNT_FILE, scopes=SCOPES)

def ensure_tab_exists(service, spreadsheet_id, tab_name):
    """Checks if a tab exists. If not, creates it."""
    try:
        sheet_metadata = service.spreadsheets().get(spreadsheetId=spreadsheet_id).execute()
        sheets = sheet_metadata.get('sheets', [])
        if any(sheet['properties']['title'] == tab_name for sheet in sheets):
            return 

        # Create Tab
        body = {'requests': [{'addSheet': {'properties': {'title': tab_name}}}]}
        service.spreadsheets().batchUpdate(spreadsheetId=spreadsheet_id, body=body).execute()
        
        # Add Headers
        headers = [['Timestamp', 'Name', 'Email', 'File Name', 'File Link']]
        service.spreadsheets().values().update(
            spreadsheetId=spreadsheet_id, range=f"{tab_name}!A1",
            valueInputOption="USER_ENTERED", body={'values': headers}
        ).execute()
        print(f"Created new tab: {tab_name}")
    except Exception as e:
        print(f"Tab Error: {e}")

def send_email_notification(data, type="Contact"):
    try:
        if "your-email" in SENDER_EMAIL: return False
        msg = MIMEMultipart()
        msg['From'] = SENDER_EMAIL
        msg['To'] = RECIPIENT_EMAIL
        msg['Subject'] = f"New {type} from {data.get('name', 'User')}"
        
        body = f"Name: {data.get('name')}\nEmail: {data.get('email')}\nMessage: {data.get('message', 'No message')}"
        msg.attach(MIMEText(body, 'plain'))

        server = smtplib.SMTP('smtp.gmail.com', 587)
        server.starttls()
        server.login(SENDER_EMAIL, SENDER_PASSWORD)
        server.sendmail(SENDER_EMAIL, RECIPIENT_EMAIL, msg.as_string())
        server.quit()
    except Exception as e:
        print(f"Email Error: {e}")

# --- ROUTES ---

# 1. GET JOBS (From Sheet A)
# 1. GET JOBS (From Sheet A - Posted_Jobs Tab)
# 1. GET JOBS (From Sheet A - Posted_Jobs Tab)
@app.route('/get-jobs', methods=['GET'])
def get_jobs():
    try:
        creds = authenticate_google()
        service = build('sheets', 'v4', credentials=creds)
        
        # UPDATE: Range now goes to H to include Responsibilities & Requirements
        result = service.spreadsheets().values().get(
            spreadsheetId=JOBS_SPREADSHEET_ID, 
            range="Posted_Jobs!A2:H" 
        ).execute()
        
        rows = result.get('values', [])
        
        jobs = []
        for r in rows:
            # Only process rows that have a Title
            if len(r) > 0:
                jobs.append({
                    "title": r[0] if len(r) > 0 else "",
                    "department": r[1] if len(r) > 1 else "",
                    "location": r[2] if len(r) > 2 else "",
                    "type": r[3] if len(r) > 3 else "",
                    "salary": r[4] if len(r) > 4 else "",
                    "description": r[5] if len(r) > 5 else "",
                    # NEW COLUMNS
                    "responsibilities": r[6] if len(r) > 6 else "",
                    "requirements": r[7] if len(r) > 7 else ""
                })
                
        return jsonify(jobs), 200
    except Exception as e:
        print(f"Get Jobs Error: {e}")
        return jsonify({"error": str(e)}), 500
# 2. UPLOAD RESUME (Handles BOTH Specific Jobs and General Box)
@app.route('/upload-resume', methods=['POST'])
def upload_resume():
    try:
        file = request.files['file']
        name = request.form.get('name')
        email = request.form.get('email')
        job_title = request.form.get('jobTitle', 'General Application')

        creds = authenticate_google()
        drive_service = build('drive', 'v3', credentials=creds)
        sheets_service = build('sheets', 'v4', credentials=creds)

        # Upload to Drive
        metadata = {'name': file.filename, 'parents': [DRIVE_FOLDER_ID]}
        media = MediaIoBaseUpload(io.BytesIO(file.read()), mimetype=file.content_type, resumable=True)
        uploaded_file = drive_service.files().create(
            body=metadata, media_body=media, fields='id, webViewLink', supportsAllDrives=True
        ).execute()
        link = uploaded_file.get('webViewLink')

        timestamp = datetime.datetime.now().strftime("%Y-%m-%d %H:%M:%S")
        values = [[timestamp, name, email, file.filename, link]]

        # LOGIC: General Box vs Specific Job
        if job_title == "General Application":
            # Save to the GENERAL RESUME SHEET (Sheet B)
            sheets_service.spreadsheets().values().append(
                spreadsheetId=GENERAL_RESUME_SPREADSHEET_ID,
                range="Sheet1!A:E", valueInputOption="USER_ENTERED", body={'values': values}
            ).execute()
        else:
            # Save to MAIN JOBS SHEET (Sheet A) in a Specific Tab
            # Clean the job title to be a valid tab name
            safe_tab_name = "".join([c for c in job_title if c.isalnum() or c in " -_"])[:50]
            
            ensure_tab_exists(sheets_service, JOBS_SPREADSHEET_ID, safe_tab_name)
            
            sheets_service.spreadsheets().values().append(
                spreadsheetId=JOBS_SPREADSHEET_ID,
                range=f"{safe_tab_name}!A:E", valueInputOption="USER_ENTERED", body={'values': values}
            ).execute()

        return jsonify({"message": "Success", "link": link}), 200

    except Exception as e:
        return jsonify({"error": str(e)}), 500

# 3. CONTACT FORM (Sheet C)
@app.route('/submit-contact', methods=['POST'])
def submit_contact():
    try:
        data = request.json
        creds = authenticate_google()
        service = build('sheets', 'v4', credentials=creds)
        
        values = [[datetime.datetime.now().strftime("%Y-%m-%d %H:%M:%S"), 
                   data.get('name'), data.get('email'), data.get('phone'), 
                   data.get('facility'), data.get('message')]]
        
        service.spreadsheets().values().append(
            spreadsheetId=CONTACT_SPREADSHEET_ID, range="Sheet1!A:F",
            valueInputOption="USER_ENTERED", body={'values': values}
        ).execute()
        
        send_email_notification(data, "Contact Message")
        return jsonify({"message": "Received"}), 200
    except Exception as e:
        return jsonify({"error": str(e)}), 500

# 4. SUBSCRIBE (Sheet D)
@app.route('/subscribe', methods=['POST'])
def subscribe():
    try:
        email = request.json.get('email')
        if not email: return jsonify({"error": "Email required"}), 400
        
        creds = authenticate_google()
        service = build('sheets', 'v4', credentials=creds)
        values = [[datetime.datetime.now().strftime("%Y-%m-%d %H:%M:%S"), email]]
        
        service.spreadsheets().values().append(
            spreadsheetId=SUBSCRIBE_SPREADSHEET_ID, range="Sheet1!A:B",
            valueInputOption="USER_ENTERED", body={'values': values}
        ).execute()
        return jsonify({"message": "Subscribed"}), 200
    except Exception as e:
        return jsonify({"error": str(e)}), 500

if __name__ == '__main__':
    app.run(debug=True, port=5000)