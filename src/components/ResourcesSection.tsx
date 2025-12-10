import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import { FileText, TrendingUp, Stethoscope, BookOpen } from "lucide-react";
import { useState } from "react";

const resources = [
  {
    icon: TrendingUp,
    title: "Digital Transformation in Post-Acute Care",
    description: "Exploring technology integration and digital solutions advancing care delivery in post-acute settings through innovation and data-driven approaches.",
    category: "Digital Innovation",
    readTime: "8 min read",
    link: "https://academic.oup.com/innovateage/article/6/4/igac021/6564369",
    points: [
      "Technology adoption strategies for post-acute care facilities",
      "Digital tools improving patient outcomes and operational efficiency",
      "Innovation pathways for aging care services"
    ]
  },
  {
    icon: FileText,
    title: "Post-Acute Care Payment Models & Policy",
    description: "Understanding Medicare's Patient Driven Payment Model (PDPM) and Home Health Patient Driven Groupings Model (PDGM) impacting therapy practice and reimbursement.",
    category: "Payment Policy",
    readTime: "10 min read",
    link: "https://www.aota.org/advocacy/issues/post-acute-care-advocacy",
    points: [
      "PDPM and PDGM implementation impact on therapy services",
      "Value-based purchasing and bundled payment reforms",
      "Site-neutral payment and future policy changes"
    ]
  },
  {
    icon: Stethoscope,
    title: "Enhancing Patient Engagement in SNFs",
    description: "Clinicians' perspectives on barriers and facilitators of patient engagement in skilled nursing facilities using a social ecological approach.",
    category: "Clinical Research",
    readTime: "12 min read",
    link: "https://pmc.ncbi.nlm.nih.gov/articles/PMC5963714/",
    points: [
      "Multi-level barriers to patient engagement: policy, organizational, interpersonal",
      "Rehabilitation provider strategies for fostering patient participation",
      "Evidence-based approaches to optimize healthcare decisions"
    ]
  },
  {
    icon: BookOpen,
    title: "7 Key Trends Shaping Post-Acute Care in 2025",
    description: "Essential trends transforming the post-acute care landscape including telemedicine expansion, AI integration, and value-based care evolution.",
    category: "Industry Trends",
    readTime: "9 min read",
    link: "https://therapystrong.com/blog-1/f/7-key-trends-shaping-post-acute-care-in-2025",
    points: [
      "Telemedicine and virtual care platform integration",
      "Artificial intelligence applications in care coordination",
      "Workforce development and specialized care solutions"
    ]
  },
];

const ResourcesSection = () => {
  const [loading] = useState(false);

  return (
    <section id="resources" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-heading text-foreground font-bold mb-6">
              Knowledge Center
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Insights and resources to advance post-acute care excellence
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {resources.map((resource, index) => (
              <div key={index}>
                {loading ? (
                  <div className="space-y-4">
                    <Skeleton className="h-64 w-full rounded-2xl" />
                    <Skeleton className="h-8 w-3/4" />
                    <Skeleton className="h-4 w-full" />
                  </div>
                ) : (
                  <div className="bg-card p-8 rounded-2xl shadow-lg border border-border hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 group h-full flex flex-col">
                    <div className="flex items-start gap-4 mb-6">
                      <div className="p-4 bg-primary/10 rounded-xl group-hover:bg-primary/20 transition-colors">
                        <resource.icon className="text-primary" size={32} strokeWidth={1.5} />
                      </div>
                      <div className="flex-1">
                        <span className="text-sm font-medium text-accent uppercase tracking-wide">
                          {resource.category}
                        </span>
                        <a 
                          href={resource.link} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="block hover:text-primary transition-colors"
                        >
                          <h3 className="text-2xl font-heading font-bold text-foreground mt-2 mb-3">
                            {resource.title}
                          </h3>
                        </a>
                      </div>
                    </div>
                    
                    <p className="text-muted-foreground leading-relaxed mb-4">
                      {resource.description}
                    </p>
                    
                    <ul className="space-y-2 mb-6 flex-1">
                      {resource.points.map((point, idx) => (
                        <li key={idx} className="text-sm text-muted-foreground flex items-start gap-2">
                          <span className="text-primary mt-1">•</span>
                          <span>{point}</span>
                        </li>
                      ))}
                    </ul>
                    
                    <div className="border-t border-border pt-6">
                      <span className="text-sm text-muted-foreground">
                        {resource.readTime}
                      </span>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ResourcesSection;