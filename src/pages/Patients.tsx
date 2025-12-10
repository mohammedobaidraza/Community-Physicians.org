import { useEffect } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Phone } from "lucide-react";

const Patients = () => {
  // Use useEffect to set the document title
  useEffect(() => {
    document.title = "For Patients - Accepted Insurance | Community Physicians";
  }, []);

  const insuranceList = [
    { name: "Aetna Better Health", phone: "866-600-2139" },
    { name: "Aetna/Coventry", phone: "800-624-0756" },
    { name: "Blue Cross", phone: "800-972-8088" },
    { name: "Clear Spring Health", phone: "877-364-4566" },
    { name: "Champ VA", phone: "800-733-8387" },
    { name: "Cigna/Great West/The Alliance", phone: "800-882-4462" },
    { name: "Forward Health (Wisconsin Medicaid)", phone: "800-947-9627" },
    { name: "Health Alliance", phone: "800-851-3379" },
    { name: "Humana", phone: "800-626-2741" },
    { name: "Illinois Medicaid", phone: "877-782-5565" },
    { name: "Longevity", phone: "888-886-9770" },
    { name: "Medicare Illinois", phone: "866-234-7340" },
    { name: "Medicare Wisconsin", phone: "866-234-7340" },
    { name: "Meridian", phone: "312-894-4600" },
    { name: "Molina", phone: "888-858-2156" },
    { name: "Physicians Care Network", phone: "815-963-6699" },
    { name: "Provider Partners Health Plan", phone: "800-405-9681" },
    { name: "Railroad Medicare", phone: "888-355-9165" },
    { name: "Sunrise", phone: "844-502-4149" },
    { name: "United Healthcare", phone: "877-842-3210", note: "Not in network for Medicare replacement" },
    { name: "Wellcare", phone: "855-538-0454" },
  ];

  return (
    <div className="min-h-screen flex flex-col font-sans">
      <Navigation />

      <main className="flex-grow">
        {/* Hero Section */}
        <section className="py-20 md:py-28 bg-gradient-to-b from-white to-secondary/10">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 font-heading">
              <span className="text-secondary">Accepted </span>
              <span className="text-primary">
                Insurance
              </span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              We work with a wide range of insurance providers to ensure you receive the accessible, high-quality care you deserve.
            </p>
          </div>
        </section>

        {/* Insurance Cards Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {insuranceList.map((insurance, index) => (
                  <div 
                    key={index} 
                    className="bg-white border border-gray-100 rounded-xl p-6 shadow-sm hover:shadow-md hover:border-primary/20 transition-all duration-300 group h-full flex flex-col"
                  >
                    <div className="flex items-start justify-between mb-4">
                      <h3 className="font-bold text-lg text-gray-800 group-hover:text-primary transition-colors">
                        {insurance.name}
                      </h3>
                      {/* Decorative dot */}
                      <div className="mt-1.5 w-2 h-2 rounded-full bg-secondary/30 group-hover:bg-primary transition-colors shrink-0 ml-2"></div>
                    </div>
                    
                    <div className="mt-auto">
                      <div className="flex items-center gap-2 text-sm text-muted-foreground mb-1 group-hover:text-gray-600 transition-colors">
                        <Phone size={14} className="text-primary/70" />
                        <a 
                          href={`tel:${insurance.phone.replace(/[^0-9]/g, '')}`}
                          className="hover:text-primary hover:underline transition-all"
                        >
                          {insurance.phone}
                        </a>
                      </div>

                      {insurance.note && (
                        <div className="mt-3 pt-3 border-t border-gray-100">
                          <p className="text-xs font-medium text-red-600 bg-red-50 px-2 py-1 rounded inline-block">
                            {insurance.note}
                          </p>
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="mt-12 text-center text-sm text-muted-foreground bg-gray-50 p-6 rounded-lg border border-gray-100 max-w-2xl mx-auto">
                <p>
                  <span className="font-semibold text-primary">Don't see your insurance listed?</span> <br className="hidden md:block"/>
                  Please contact our office at <a href="tel:6303206871" className="text-primary hover:underline font-medium">630.320.6871</a> to verify coverage, as our accepted networks are constantly expanding.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Patients;