const AboutSection = () => {
  return (
    <section id="about" className="py-24 bg-gradient-to-br from-muted/30 to-background">
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Text Content */}
            <div className="space-y-8">
              <h2 className="text-5xl md:text-6xl font-heading text-foreground font-bold">
                Redefining Post-Acute Care
              </h2>
              <p className="text-xl text-muted-foreground leading-relaxed">
                Community Physicians leads innovation in post-acute and long-term care. 
                Our model unites specialized providers to deliver compassionate, data-driven patient care.
              </p>
              <div className="space-y-4 pt-4">
                <p className="text-lg text-foreground/80">
                  We bridge the gap between hospital discharge and full recovery, ensuring continuity 
                  of care that improves outcomes and enhances quality of life.
                </p>
              </div>
            </div>

            {/* Stats Cards */}
            <div className="grid grid-cols-1 gap-6">
              <div className="bg-card p-8 rounded-2xl shadow-lg border border-border hover:shadow-xl transition-all duration-300 hover:scale-105">
                <div className="text-5xl font-bold text-primary mb-2">100+</div>
                <div className="text-lg text-foreground font-medium">Partner Facilities</div>
                <p className="text-muted-foreground mt-2">Across the post-acute care continuum</p>
              </div>
              
              <div className="bg-card p-8 rounded-2xl shadow-lg border border-border hover:shadow-xl transition-all duration-300 hover:scale-105">
                <div className="text-5xl font-bold text-accent mb-2">50+</div>
                <div className="text-lg text-foreground font-medium">Specialized Physicians</div>
                <p className="text-muted-foreground mt-2">Expert care teams dedicated to excellence</p>
              </div>
              
              <div className="bg-card p-8 rounded-2xl shadow-lg border border-border hover:shadow-xl transition-all duration-300 hover:scale-105">
                <div className="text-5xl font-bold text-secondary mb-2">3</div>
                <div className="text-lg text-foreground font-medium">Subsidiary Networks</div>
                <p className="text-muted-foreground mt-2">Integrated healthcare solutions</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
