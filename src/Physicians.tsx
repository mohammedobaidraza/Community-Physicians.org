import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { useState } from "react";

/* IMPORT IMAGES */
import jibranImg from "@/assets/doctor-1.jpg";
import jawwadImg from "@/assets/doctor-3.jpg";
import arifImg from "@/assets/doctor-2.jpg";
import mansoorImg from "@/assets/doctor-4.jpg";

import nazimuddinImg from "@/assets/Ahmed Nazimuddin.jpg";
import nabilImg from "@/assets/Nabil.jpg";
import alexisImg from "@/assets/alexis.jpg";
import enasImg from "@/assets/Enas .jpg";
import kristenImg from "@/assets/kristen rogers.jpg";
import sanaImg from "@/assets/Sana .jpg";

/* UPDATED IMAGES */
import rabiImg from "@/assets/Rabi.png";
import dennisImg from "@/assets/doctor-3----.jpg";

/* PHYSICIANS LIST - UPDATED SPECIALTIES */
const physicians = [
  {
    id: 2,
    image: jibranImg,
    name: "Dr. Jibran Ahmed, MD",
    specialty: "Family Medicine",
    bio: "Experienced Family Medicine physician providing compassionate primary care and chronic disease management."
  },
  {
    id: 7,
    image: nabilImg,
    name: "Dr. Nabil Dada",
    specialty: "Family Medicine",
    bio: "Family Medicine specialist dedicated to comprehensive patient care and long-term health strategies."
  },
  {
    id: 3,
    image: jawwadImg,
    name: "Dr. Jawwad Hussain",
    specialty: "Family Medicine",
    bio: "Board-certified physician specializing in primary care, preventive health, and family wellness."
  },
  {
    id: 4,
    image: arifImg,
    name: "Dr. Arif B. Hussain",
    specialty: "Pain Management & Physical Medicine",
    bio: "Interventional pain specialist with advanced training from Johns Hopkins and the University of Michigan."
  },
  {
    id: 5,
    image: mansoorImg,
    name: "Dr. Mansoor Ali",
    specialty: "Internal Medicine",
    bio: "Internal Medicine physician focused on chronic disease management, preventive care, and long-term wellness."
  },
  {
    id: 6,
    image: nazimuddinImg,
    name: "Dr. Ahmed Nazimuddin, MD",
    specialty: "Family Medicine",
    bio: "Specializes in care for adults and seniors, focusing on chronic disease management and family health."
  },
  {
    id: 9,
    image: enasImg,
    name: "Dr. Enas Kanama, MD",
    specialty: "Family Medicine",
    bio: "Family medicine physician specializing in patient-centered holistic care and chronic condition management."
  },
  {
    id: 8,
    image: alexisImg,
    name: "Alexis Kozlowski, APRN, RN",
    specialty: "Advanced Practice Nursing",
    bio: "Accomplished nurse practitioner providing comprehensive evaluation, treatment planning, and chronic care support."
  },
  {
    id: 10,
    image: kristenImg,
    name: "Kristen Rogers, APRN, RN",
    specialty: "Nurse Practitioner",
    bio: "Nurse practitioner providing long-term patient support, care coordination, and clinical assessment expertise."
  },
  {
    id: 11,
    image: sanaImg,
    name: "Dr. Sana Siddiqui",
    specialty: "Physical Medicine & Rehabilitation",
    bio: "Board-certified PM&R physician specializing in mobility restoration, physical rehabilitation, and neurological recovery."
  },
  {
    id: 12,
    image: rabiImg,
    name: "Dr. Joseph Rabi, MD",
    specialty: "Physical Medicine & Rehabilitation",
    bio: "Specialist in spine pain, migraines, electrodiagnostics, and regenerative medicine."
  },
  {
    id: 13,
    image: dennisImg,
    name: "Dr. Dennis Keane, MD",
    specialty: "Pain Management & Rehabilitation",
    bio: "Specialist with over 35 years of experience treating musculoskeletal injuries through tailored rehabilitation."
  }
];

const Physicians = () => {
  const [selectedFilter, setSelectedFilter] = useState("All");
  const [selectedPhysician, setSelectedPhysician] = useState(null);

  // Extract unique specialties for the filter buttons
  const specialties = ["All", ...new Set(physicians.map((p) => p.specialty))];

  // Filter logic
  const filteredPhysicians =
    selectedFilter === "All"
      ? physicians
      : physicians.filter((p) => p.specialty === selectedFilter);

  return (
    <div className="min-h-screen">
      <Navigation />

      <main>
        <section className="relative py-20 bg-gradient-to-br from-background via-primary/5 to-background">
          <div className="container mx-auto px-4">

            {/* HEADER */}
            <div className="text-center mb-10">
              <h1 className="text-5xl md:text-6xl font-heading text-foreground mb-6">
                Our{" "}
                <span className="font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                  Physicians
                </span>
              </h1>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Meet our exceptional team of healthcare professionals dedicated to world-class care.
              </p>
            </div>

            {/* FILTERS */}
            <div className="flex flex-wrap justify-center gap-4 mb-10">
              {specialties.map((spec) => (
                <button
                  key={spec}
                  onClick={() => setSelectedFilter(spec)}
                  className={`
                    px-5 py-2 rounded-full border transition-all
                    ${selectedFilter === spec
                      ? "bg-primary text-white border-primary shadow-md"
                      : "bg-white text-primary border-primary hover:bg-primary hover:text-white"}
                  `}
                >
                  {spec}
                </button>
              ))}
            </div>

            {/* GRID */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
              {filteredPhysicians.map((physician) => (
                <div 
                  key={physician.id} 
                  onClick={() => setSelectedPhysician(physician)}
                >
                  {/* CARD DESIGN (White Style) */}
                  <div className="relative overflow-hidden rounded-3xl cursor-pointer transition-all duration-300 hover:scale-105 hover:shadow-2xl group bg-white">

                    {/* CENTERED IMAGE */}
                    <div className="w-full h-64 lg:h-80 flex items-center justify-center bg-white">
                      <img
                        src={physician.image}
                        alt={physician.name}
                        className="object-contain max-h-full rounded-2xl"
                      />
                    </div>

                    {/* OVERLAY */}
                    <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                      <div>
                        <p className="text-white font-medium text-xl">{physician.name}</p>
                        <p className="text-white/80 text-sm">{physician.specialty}</p>
                      </div>
                    </div>
                    
                    {/* Plus Icon for Click Indication */}
                    <div className="absolute top-4 right-4 w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <span className="text-primary font-bold">+</span>
                    </div>

                  </div>
                </div>
              ))}
            </div>

          </div>
        </section>
      </main>

      {/* Physician Bio Dialog (Click to Open) */}
      <Dialog open={!!selectedPhysician} onOpenChange={() => setSelectedPhysician(null)}>
        <DialogContent className="sm:max-w-md bg-white border-none shadow-2xl">
          <DialogHeader>
            <DialogTitle className="text-2xl font-bold text-primary">
              {selectedPhysician?.name}
            </DialogTitle>
          </DialogHeader>
          <div className="space-y-4">
             {/* Image in Dialog */}
             <div className="w-full h-64 flex items-center justify-center bg-gray-50 rounded-xl overflow-hidden">
                <img
                  src={selectedPhysician?.image}
                  alt={selectedPhysician?.name}
                  className="object-contain max-h-full"
                />
            </div>
            
            <div className="space-y-2">
                <span className="inline-block px-3 py-1 bg-primary/10 text-primary text-xs font-bold rounded-full">
                    {selectedPhysician?.specialty}
                </span>
                <p className="text-muted-foreground leading-relaxed">
                {selectedPhysician?.bio}
                </p>
            </div>
          </div>
        </DialogContent>
      </Dialog>

      <Footer />
    </div>
  );
};

export default Physicians;
