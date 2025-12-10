import { CheckCircle2, Users, FileText, TrendingUp, Stethoscope, Award } from "lucide-react";

const features = [
  {
    icon: Users,
    title: "Team Approach",
    description:
      "Medicare meetings • QAPI support • Annual quality reviews • Advanced communication tools",
  },
  {
    icon: Stethoscope,
    title: "Physician-Driven",
    description:
      "True physician involvement and leadership • Maximize staff/facility strengths • Alleviate pain points",
  },
  {
    icon: CheckCircle2,
    title: "Patient-Centered",
    description:
      "Compassionate, excellent concierge resident care as a CORE VALUE • Care planning that involves resident wishes and goals",
  },
  {
    icon: FileText,
    title: "Hospital-Level Documentation",
    description:
      "Comprehensive documentation entered directly into facility EMR • Physiatry/cardiology/psychiatry input ICD-10 diagnosis codes",
  },
  {
    icon: TrendingUp,
    title: "Results-Focused",
    description:
      "Increased reimbursements if the patient falls into a higher reimbursement category",
  },
  {
    icon: Award,
    title: "Top-notch Data Analytics",
    description:
      "In-house clinical data analytics team • Support with Five Star, QMs, RTH, CASPER, PDPM when you need it",
  },
];

const WhyChooseUs = () => {
  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-heading text-primary mb-4">
            Why Community Physicians?
          </h2>
          <p className="text-xl text-muted-foreground">
            Patient-Centered. Physician-Driven. Results-Focused.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className="bg-card p-6 rounded-lg border border-border hover:shadow-lg transition-shadow"
              >
                <div className="w-12 h-12 rounded-full bg-secondary/10 flex items-center justify-center mb-4">
                  <Icon className="w-6 h-6 text-secondary" strokeWidth={1.5} />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-primary">{feature.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
