import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";
import neuroscienceLogo from "@/assets/neuroscience-logo.png";
import carepodsLogo from "@/assets/carepods-logo.png";
import inhomeLogo from "@/assets/inhome-logo.png";

const subsidiaries = [
  {
    name: "Neuroscience Spine Clinic",
    tagline: "Advanced Neurological Care",
    description:
      "Advanced neurological and spinal rehabilitation with cutting-edge treatment protocols and expert physician teams.",
    logo: neuroscienceLogo,
    link: "https://www.neurospinechicago.com/",
  },
  {
    name: "CarePods",
    tagline: "Community-Based Care",
    description:
      "Innovative care model providing coordinated, interdisciplinary healthcare for older adults in their homes and communities.",
    logo: carepodsLogo,
    link: "https://carepods.com",
  },
  {
    name: "In-Home Medical Group",
    tagline: "Healthcare Where You Live",
    description:
      "Comprehensive in-home medical services delivering hospital-quality care in the comfort and safety of your home.",
    logo: inhomeLogo,
    link: "https://www.inhomemedicalgroup.com/",
  },
];

const SubsidiariesShowcase = () => {
  return (
    <section id="subsidiaries" className="py-24 bg-gradient-to-br from-background via-accent/5 to-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-heading text-foreground font-bold mb-6">
            Our Healthcare Network
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Comprehensive care solutions across specialized healthcare services
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {subsidiaries.map((subsidiary, index) => (
            <Card
              key={index}
              className="group hover:shadow-2xl transition-all duration-500 hover:scale-105 border-2 hover:border-primary bg-card backdrop-blur-sm hover:animate-glow h-full flex flex-col"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardHeader>
                <div className="mb-6 h-24 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <img 
                    src={subsidiary.logo} 
                    alt={`${subsidiary.name} logo`}
                    className="h-full w-auto object-contain"
                  />
                </div>
                <CardTitle className="text-3xl font-heading text-foreground font-bold mb-2">
                  {subsidiary.name}
                </CardTitle>
                <p className="text-sm text-accent font-semibold uppercase tracking-wide">
                  {subsidiary.tagline}
                </p>
              </CardHeader>
              <CardContent className="flex flex-col gap-6 h-full">
                <p className="text-muted-foreground leading-relaxed text-lg">
                  {subsidiary.description}
                </p>
                <Button
                  variant="outline"
                  className="w-full mt-auto group-hover:bg-primary group-hover:text-primary-foreground transition-all border-2 py-6 rounded-xl font-medium text-lg"
                  asChild
                >
                  <a 
                    href={subsidiary.link} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2"
                  >
                    Visit Website
                    <ExternalLink size={18} />
                  </a>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SubsidiariesShowcase;
