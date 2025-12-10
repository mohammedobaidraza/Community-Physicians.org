import { useState, useEffect } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { MapPin, Clock, DollarSign, Loader2, FileText, CheckCircle, ListChecks } from "lucide-react";
import careersImage from "@/assets/careers-image.jpg";

// 1. Updated Interface with new fields
interface Job {
  title: string;
  department: string;
  location: string;
  type: string;
  salary: string;
  description: string;
  responsibilities: string; // New
  requirements: string;     // New
}

const Careers = () => {
  const { toast } = useToast();
  const [jobListings, setJobListings] = useState<Job[]>([]);
  const [isLoadingJobs, setIsLoadingJobs] = useState(true);

  const [selectedJob, setSelectedJob] = useState<Job | { title: string, department: string, location: string, description?: string, responsibilities?: string, requirements?: string } | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const [applicationData, setApplicationData] = useState({
    name: "",
    email: "",
    phone: "",
    coverLetter: "",
    resume: null as File | null,
  });

  useEffect(() => {
    const fetchJobs = async () => {
      try {
        const response = await fetch("http://127.0.0.1:5000/get-jobs");
        if (response.ok) {
          const data = await response.json();
          setJobListings(data);
        }
      } catch (error) {
        console.error("Error fetching jobs:", error);
      } finally {
        setIsLoadingJobs(false);
      }
    };
    fetchJobs();
  }, []);

  const handleApplicationSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!applicationData.resume) {
      toast({ title: "Missing Resume", description: "Please upload a PDF resume.", variant: "destructive" });
      return;
    }

    setIsSubmitting(true);

    try {
      const formData = new FormData();
      formData.append("name", applicationData.name);
      formData.append("email", applicationData.email);
      formData.append("file", applicationData.resume);
      const jobTitle = selectedJob && 'title' in selectedJob ? selectedJob.title : "General Application";
      formData.append("jobTitle", jobTitle);

      const response = await fetch("http://127.0.0.1:5000/upload-resume", {
        method: "POST",
        body: formData,
      });

      if (!response.ok) throw new Error("Upload failed");

      toast({ title: "Success!", description: "Your application has been submitted." });
      setSelectedJob(null);
      setApplicationData({ name: "", email: "", phone: "", coverLetter: "", resume: null });
    } catch (error) {
      toast({ title: "Error", description: "Something went wrong. Please try again.", variant: "destructive" });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleGeneralApply = () => {
    setSelectedJob({
      title: "General Application",
      department: "Talent Network",
      location: "Remote/Headquarters",
      description: "Join our general talent pool.",
      responsibilities: "",
      requirements: ""
    });
  };

  return (
    <div className="min-h-screen bg-slate-50">
      <Navigation />
      <main>
        <section
          className="relative py-32 bg-cover bg-center"
          style={{
            backgroundImage: `linear-gradient(135deg, rgba(61, 56, 86, 0.9), rgba(61, 56, 86, 0.8)), url(${careersImage})`,
          }}
        >
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-3xl">
              <h1 className="text-5xl md:text-6xl font-heading text-primary-foreground mb-6">
                Join Our Team
              </h1>
              <p className="text-xl text-primary-foreground/90 mb-8">
                Be part of something meaningful. Help us transform post-acute care.
              </p>
              <Button
                size="lg"
                className="bg-secondary hover:bg-secondary/90 text-secondary-foreground"
                onClick={() => document.getElementById('job-listings')?.scrollIntoView({ behavior: 'smooth' })}
              >
                View Open Positions
              </Button>
            </div>
          </div>
        </section>

        <section id="job-listings" className="py-20">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-heading text-primary mb-12 text-center">Current Opportunities</h2>
            
            <div className="max-w-5xl mx-auto space-y-6">
              {isLoadingJobs && (
                <div className="text-center py-12">
                  <Loader2 className="mx-auto h-10 w-10 animate-spin text-primary mb-4" />
                  <p>Loading positions...</p>
                </div>
              )}

              {!isLoadingJobs && jobListings.length === 0 && (
                <div className="text-center py-12 bg-white rounded-xl border border-dashed">
                  <p className="text-muted-foreground">No specific positions right now.</p>
                  <Button variant="link" onClick={handleGeneralApply}>Submit a General Application</Button>
                </div>
              )}

              {!isLoadingJobs && jobListings.map((job, index) => (
                <Card key={index} className="hover:shadow-md transition-all">
                  <CardHeader>
                    <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                      <div className="flex-1">
                        <CardTitle className="text-2xl text-primary mb-1">{job.title}</CardTitle>
                        <CardDescription className="text-base">{job.department}</CardDescription>
                      </div>
                      <Button onClick={() => setSelectedJob(job)}>Apply Now</Button>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-3 mb-4">
                      <Badge variant="secondary"><MapPin size={14} className="mr-1"/>{job.location}</Badge>
                      <Badge variant="outline"><Clock size={14} className="mr-1"/>{job.type}</Badge>
                      <Badge variant="outline" className="text-green-600 border-green-200 bg-green-50"><DollarSign size={14} className="mr-1"/>{job.salary}</Badge>
                    </div>
                    <p className="text-muted-foreground line-clamp-2">{job.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20 bg-primary text-primary-foreground text-center">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-heading mb-4">Don't see the right role?</h2>
            <p className="mb-8 opacity-90">We are always looking for talent. Send us your resume.</p>
            <Button size="lg" variant="secondary" onClick={handleGeneralApply}>Submit Your Resume</Button>
          </div>
        </section>
      </main>
      <Footer />

      {/* --- UPGRADED APPLICATION MODAL --- */}
      <Dialog open={!!selectedJob} onOpenChange={() => !isSubmitting && setSelectedJob(null)}>
        <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto flex flex-col md:flex-row gap-0 p-0">
          
          {/* LEFT SIDE: JOB DETAILS */}
          <div className="md:w-1/2 bg-slate-50 p-6 border-r overflow-y-auto">
            <DialogHeader className="mb-6">
              <DialogTitle className="text-2xl font-heading text-primary">{selectedJob?.title}</DialogTitle>
              <DialogDescription className="text-base">{selectedJob?.department} • {selectedJob?.location}</DialogDescription>
            </DialogHeader>

            <div className="space-y-6">
              {/* Description */}
              <div>
                <h4 className="font-semibold flex items-center gap-2 mb-2 text-foreground"><FileText size={18} className="text-primary"/> Overview</h4>
                <p className="text-sm text-muted-foreground whitespace-pre-line">{selectedJob && 'description' in selectedJob ? selectedJob.description : ""}</p>
              </div>

              {/* Responsibilities - Only show if exists */}
              {selectedJob && 'responsibilities' in selectedJob && selectedJob.responsibilities && (
                <div>
                  <h4 className="font-semibold flex items-center gap-2 mb-2 text-foreground"><ListChecks size={18} className="text-primary"/> Responsibilities</h4>
                  <div className="text-sm text-muted-foreground whitespace-pre-line pl-2 border-l-2 border-primary/20">
                    {selectedJob.responsibilities}
                  </div>
                </div>
              )}

              {/* Requirements - Only show if exists */}
              {selectedJob && 'requirements' in selectedJob && selectedJob.requirements && (
                <div>
                  <h4 className="font-semibold flex items-center gap-2 mb-2 text-foreground"><CheckCircle size={18} className="text-primary"/> Requirements</h4>
                  <div className="text-sm text-muted-foreground whitespace-pre-line pl-2 border-l-2 border-primary/20">
                    {selectedJob.requirements}
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* RIGHT SIDE: APPLICATION FORM */}
          <div className="md:w-1/2 p-6 bg-white">
            <h4 className="font-semibold text-lg mb-4">Submit Application</h4>
            <form onSubmit={handleApplicationSubmit} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="app-name">Full Name *</Label>
                <Input id="app-name" required value={applicationData.name} onChange={(e) => setApplicationData({ ...applicationData, name: e.target.value })} disabled={isSubmitting} />
              </div>
              <div className="space-y-2">
                <Label htmlFor="app-email">Email *</Label>
                <Input id="app-email" type="email" required value={applicationData.email} onChange={(e) => setApplicationData({ ...applicationData, email: e.target.value })} disabled={isSubmitting} />
              </div>
              <div className="space-y-2">
                <Label htmlFor="app-phone">Phone *</Label>
                <Input id="app-phone" type="tel" required value={applicationData.phone} onChange={(e) => setApplicationData({ ...applicationData, phone: e.target.value })} disabled={isSubmitting} />
              </div>
              <div className="space-y-2">
                <Label htmlFor="app-resume">Resume (PDF) *</Label>
                <Input id="app-resume" type="file" accept=".pdf" required disabled={isSubmitting} onChange={(e) => {
                  const file = e.target.files?.[0];
                  if (file && file.type === 'application/pdf') setApplicationData({ ...applicationData, resume: file });
                  else { toast({ title: "Invalid File", description: "PDF only.", variant: "destructive" }); e.target.value = ''; }
                }} />
              </div>
              <div className="space-y-2">
                <Label htmlFor="app-cover">Cover Letter</Label>
                <Textarea id="app-cover" rows={4} value={applicationData.coverLetter} onChange={(e) => setApplicationData({ ...applicationData, coverLetter: e.target.value })} placeholder="Why you?" disabled={isSubmitting} />
              </div>
              <div className="flex gap-3 justify-end pt-2">
                <Button type="button" variant="ghost" onClick={() => setSelectedJob(null)} disabled={isSubmitting}>Cancel</Button>
                <Button type="submit" className="bg-primary hover:bg-primary/90" disabled={isSubmitting}>
                  {isSubmitting ? <><Loader2 className="mr-2 h-4 w-4 animate-spin" /> Sending...</> : "Submit"}
                </Button>
              </div>
            </form>
          </div>

        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Careers;