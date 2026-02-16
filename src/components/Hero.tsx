import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

import doctor1 from "@/assets/doctor-1.jpg";
import doctor2 from "@/assets/doctor-3----.jpg";
import doctor3 from "@/assets/doctor-3.jpg";
import doctor4 from "@/assets/hanzla.png";

const doctors = [
  {
    id: 1,
    image: doctor1,
    name: "Dr. Jibran Ahmed MD",
    specialty: "Family Medicine",
    bio: "Experienced Family Medicine physician in Oakbrook Terrace, IL, with over 10 years in the medical field. Dr. Ahmed graduated from Saba University School of Medicine in 2013, is affiliated with Northwestern Medicine Central Dupage Hospital, and is currently accepting telehealth appointments."
  },
 {
    id: 2,
    image: doctor2,
    name: "Dr. Keane",
    specialty: "[Insert Specialty]",
    bio: "Dr. Keane provides personalized patient care with an emphasis on [Insert Expertise]. (Please update this bio with specific clinical background and education)."
  },
  {
    id: 3,
    image: doctor3,
    name: "Dr. Jawwad Hussain",
    specialty: "Internal Medicine",
    bio: "Board-certified internal medicine physician specializing in adult primary care, chronic disease management, and long-term health coordination. Dr. Hussain focuses on preventive medicine and continuity of care."
  },
  {
    id: 4,
    image: doctor4,
    name: "Dr. Hanzla",
    specialty: "Physical Medicine & Rehabilitation",
    bio: "Physical Medicine & Rehabilitation physician focused on restoring mobility and function through rehabilitation-based care, helping patients recover safely and return to daily life with confidence."
  },
];

const Hero = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedDoctor, setSelectedDoctor] =
    useState<typeof doctors[0] | null>(null);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % doctors.length);
    }, 4000);

    return () => clearInterval(timer);
  }, []);

  return (
    <>
      <section className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-background via-primary/5 to-background">

        {/* Content */}
        <div className="container relative z-10 mx-auto px-4 py-20">
          <div className="grid lg:grid-cols-2 gap-16 items-center">

            {/* Text Left */}
            <div className="space-y-8 animate-fade-in-up">
              <h1 className="text-6xl md:text-8xl font-heading text-foreground mb-6 leading-tight">
                Post-Acute Care
                <br />
                <span className="font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                  Excellence
                </span>
              </h1>

              <p className="text-2xl md:text-3xl text-muted-foreground mb-8 font-light max-w-xl leading-relaxed">
                Compassion. Collaboration. Innovation.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  size="lg"
                  asChild
                  className="bg-primary text-primary-foreground hover:bg-primary/90 text-lg px-10 py-6 rounded-full shadow-lg hover:shadow-xl transition-all"
                >
                  <Link to="/about">About Us</Link>
                </Button>

                <Button
                  size="lg"
                  variant="outline"
                  onClick={() =>
                    document.getElementById("subsidiaries")?.scrollIntoView({
                      behavior: "smooth",
                    })
                  }
                  className="border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground text-lg px-10 py-6 rounded-full transition-all"
                >
                  Explore Our Network
                </Button>
              </div>
            </div>

            {/* Doctors Grid */}
            <div className="grid grid-cols-2 gap-6 lg:gap-8">
              {doctors.map((doctor, index) => (
                <div
                  key={doctor.id}
                  onClick={() => setSelectedDoctor(doctor)}
                  className={`relative overflow-hidden rounded-3xl transition-all duration-700 cursor-pointer ${
                    currentIndex === index
                      ? "scale-105 shadow-2xl z-10"
                      : "scale-95 opacity-60"
                  }`}
                  style={{
                    transform:
                      currentIndex === index
                        ? "translateY(-10px)"
                        : "translateY(0)",
                    transition: "all 1s ease",
                  }}
                >
                  <img
                    src={doctor.image}
                    alt={doctor.name}
                    className="w-full h-64 lg:h-80 object-contain bg-white"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/40 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                    <div>
                      <p className="text-white font-medium text-xl">
                        {doctor.name}
                      </p>
                      <p className="text-white/80 text-sm">
                        {doctor.specialty}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

          </div>
        </div>
      </section>

      {/* Doctor Modal */}
      <Dialog
        open={!!selectedDoctor}
        onOpenChange={(open) => !open && setSelectedDoctor(null)}
      >
        <DialogContent className="sm:max-w-[500px]">
          <DialogHeader>
            <DialogTitle className="text-2xl font-heading text-foreground">
              {selectedDoctor?.name}
            </DialogTitle>
            <DialogDescription className="text-accent font-semibold">
              {selectedDoctor?.specialty}
            </DialogDescription>
          </DialogHeader>

          <div className="space-y-4">
            <img
              src={selectedDoctor?.image}
              alt={selectedDoctor?.name}
              className="w-full h-48 object-contain rounded-xl bg-muted/30"
            />
            <p className="text-muted-foreground leading-relaxed">
              {selectedDoctor?.bio}
            </p>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default Hero;
