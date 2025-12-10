import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { HoverCard, HoverCardContent, HoverCardTrigger } from "@/components/ui/hover-card";
import { useState } from "react";

/* IMPORT IMAGES */
import baderImg from "@/assets/Founder1.jpg";
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
import rabiImg from "@/assets/Rabi.png";             // ← Correct Rabi image
import dennisImg from "@/assets/doctor-3----.jpg";   // ← Correct Keane image

/* PHYSICIANS LIST */
const physicians = [
 /* {
    id: 1,
    image: baderImg,
    name: "Dr. Bader Almoshelli",
    specialty: "Physical Medicine & Rehabilitation",
    bio: "Specializing in PM&R with extensive experience in pain management, musculoskeletal rehab, and neurologic recovery."
  },*/
  {
    id: 2,
    image: jibranImg,
    name: "Dr. Jibran Ahmed, MD",
    specialty: "Family Medicine",
    bio: "Experienced Family Medicine physician providing compassionate primary care and chronic disease management."
  },
  {
    id: 3,
    image: jawwadImg,
    name: "Dr. Jawwad Hussain",
    specialty: "Internal Medicine",
    bio: "Board-certified internal medicine physician specializing in adult primary care and preventive health."
  },
  {
    id: 4,
    image: arifImg,
    name: "Dr. Arif B. Hussain",
    specialty: "Pain Management & Rehabilitation",
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
    specialty: "Geriatric & Family Medicine",
    bio: "Specializes in care for older adults, chronic disease management, and empowering patients with long-term health strategies."
  },
  {
    id: 7,
    image: nabilImg,
    name: "Dr. Nabil Dada",
    specialty: "Cardiology",
    bio: "Cardiology specialist with expertise in cardiovascular diagnostics, preventive medicine, and long-term heart health."
  },
  {
    id: 8,
    image: alexisImg,
    name: "Alexis Kozlowski, APRN, RN",
    specialty: "Advanced Practice Nursing",
    bio: "Accomplished nurse practitioner providing comprehensive evaluation, treatment planning, and chronic care support."
  },
  {
    id: 9,
    image: enasImg,
    name: "Dr. Enas Kanama, MD",
    specialty: "Internal Medicine",
    bio: "Internal medicine physician specializing in chronic disease management and patient-centered holistic care."
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
    specialty: "Pain Management & PM&R",
    bio: "Pain management and rehabilitation physician experienced in spine pain, migraines, electrodiagnostics, and regenerative medicine."
  },
  {
    id: 13,
    image: dennisImg,
    name: "Dr. Dennis Keane, MD",
    specialty: "Physical Medicine & Rehabilitation",
    bio: "PM&R specialist with over 35 years of experience treating musculoskeletal injuries and neurological conditions through tailored rehabilitation."
  }
];

/* MAIN COMPONENT */
const Physicians = () => {
  const [selectedFilter, setSelectedFilter] = useState("All");

  const specialties = ["All", ...new Set(physicians.map((p) => p.specialty))];

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
                <HoverCard key={physician.id} openDelay={200}>
                  <HoverCardTrigger asChild>

                    {/* CARD */}
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
                    </div>

                  </HoverCardTrigger>

                  {/* BIO CARD */}
                  <HoverCardContent className="w-80" side="top">
                    <div className="space-y-2">
                      <h4 className="text-lg font-semibold text-foreground">{physician.name}</h4>
                      <p className="text-sm font-medium text-accent">{physician.specialty}</p>
                      <p className="text-sm text-muted-foreground leading-relaxed">{physician.bio}</p>
                    </div>
                  </HoverCardContent>
                </HoverCard>
              ))}
            </div>

          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Physicians;
