import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Phone, Search, Info, ShieldCheck, HelpCircle } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Input } from "@/components/ui/input";
import insuranceImage from "@/assets/insurance-page.png"; // 👈 ADD THIS

const Patients = () => {
  const [search, setSearch] = useState("");

  useEffect(() => {
    document.title = "Accepted Insurance | Community Physicians";
    window.scrollTo(0, 0);
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
    { name: "United Healthcare", phone: "877-842-3210", note: "Not in network for Medicare replacement plans" },
    { name: "Wellcare", phone: "855-538-0454" },
  ];

  const filtered = insuranceList.filter(i =>
    i.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-background font-sans flex flex-col">
      <Navigation />

      <main className="flex-grow">

    {/* Header Section */}
<section
  className="relative pt-32 pb-20 lg:pt-40 lg:pb-28 bg-cover bg-center"
  style={{ backgroundImage: `url(${insuranceImage})` }}
>
  {/* Dark overlay for readability */}
  <div className="absolute inset-0 bg-white/85 backdrop-blur-sm"></div>



  <div className="relative container mx-auto px-6 lg:px-8">
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="max-w-3xl"
    >
      <div className="flex items-center gap-2 mb-6">
        <span className="h-px w-8 bg-primary"></span>
        <span className="text-xs tracking-widest uppercase text-primary font-semibold">
          Patient Resources
        </span>
      </div>

     <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading mb-6">
  <span className="text-orange-500">Accepted</span>{" "}
  <span className="text-primary font-bold">Insurance</span>
</h1>


      <p className="text-lg text-muted-foreground leading-relaxed mb-8 max-w-2xl">
        Navigating insurance coverage can be complex. We partner with a wide
        range of providers to make your care accessible. Please use the list
        below as a guide, but always verify your specific benefits.
      </p>

      {/* Coverage Note */}
      <div className="bg-white border border-border p-6 rounded-lg shadow-sm flex gap-4 items-start max-w-2xl">
        <Info className="text-primary flex-shrink-0 mt-1" size={24} />
        <div>
          <h4 className="font-semibold text-foreground mb-1">
            Important Coverage Note
          </h4>
          <p className="text-sm text-muted-foreground">
            Insurance networks change frequently. Even if your plan is listed,
            we recommend contacting our billing department or your insurance
            provider directly to confirm coverage for specific services.
          </p>
        </div>
      </div>
    </motion.div>
  </div>
</section>


        {/* Search & List Section */}
        <section className="py-12 lg:py-20 bg-white">
          <div className="container mx-auto px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">

              {/* Search */}
              <div className="relative mb-10">
                <div className="absolute inset-y-0 left-4 flex items-center pointer-events-none">
                  <Search className="text-muted-foreground/50" size={18} />
                </div>
                <Input
                  placeholder="Search for your insurance provider..."
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  className="pl-12 h-14 text-lg bg-secondary/30 border-transparent focus:bg-white focus:border-primary/50 transition-all rounded-xl"
                />
              </div>

              {/* Insurance List */}
              <div className="space-y-2">
                {filtered.map((ins, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.03 }}
                    className="flex flex-col sm:flex-row sm:items-center justify-between p-5 rounded-lg border border-transparent hover:border-primary/20 hover:bg-secondary/20 transition-all duration-300 group"
                  >
                    <div className="flex items-start gap-4 mb-3 sm:mb-0">
                      <ShieldCheck className="text-primary/40 group-hover:text-primary transition-colors" size={20} />
                      <div>
                        <h3 className="text-lg font-medium text-foreground group-hover:text-primary transition-colors">
                          {ins.name}
                        </h3>
                        {ins.note && (
                          <div className="mt-2 inline-flex items-center px-2.5 py-0.5 rounded text-xs font-medium bg-red-100 text-red-800">
                            Note: {ins.note}
                          </div>
                        )}
                      </div>
                    </div>

                    <a
                      href={`tel:${ins.phone.replace(/[^0-9]/g, "")}`}
                      className="flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-foreground bg-white border border-border px-4 py-2 rounded-full shadow-sm hover:shadow transition-all sm:ml-4 w-fit"
                    >
                      <Phone size={14} />
                      {ins.phone}
                    </a>
                  </motion.div>
                ))}
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
