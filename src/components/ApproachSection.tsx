import { Brain, Users, LineChart, Heart } from "lucide-react";

const approaches = [
  {
    icon: Brain,
    title: "Physician-Driven",
    description: "Our care model is led by experienced physicians who understand the complexities of post-acute care.",
    color: "text-primary",
  },
  {
    icon: Heart,
    title: "Patient-Centered",
    description: "Every decision is made with patient well-being and recovery as our top priority.",
    color: "text-accent",
  },
  {
    icon: Users,
    title: "Team Collaboration",
    description: "Interdisciplinary teams work seamlessly to provide comprehensive, coordinated care.",
    color: "text-secondary",
  },
  {
    icon: LineChart,
    title: "Data Analytics",
    description: "Advanced analytics drive clinical decisions and continuously improve patient outcomes.",
    color: "text-primary",
  },
];

const ApproachSection = () => {
  return (
    <section id="approach" className="py-24 bg-gradient-to-br from-primary/5 via-background to-accent/5">
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-heading text-foreground font-bold mb-6">
              Our Approach
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              A comprehensive methodology that combines clinical excellence with compassionate care
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {approaches.map((approach, index) => (
              <div
                key={approach.title}
                className="bg-card p-8 rounded-2xl shadow-lg border border-border hover:shadow-2xl transition-all duration-300 hover:scale-105 hover:-translate-y-2 group"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className={`${approach.color} mb-6 transform group-hover:scale-110 transition-transform duration-300`}>
                  <approach.icon size={48} strokeWidth={1.5} />
                </div>
                <h3 className="text-2xl font-heading font-bold text-foreground mb-4">
                  {approach.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {approach.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ApproachSection;
