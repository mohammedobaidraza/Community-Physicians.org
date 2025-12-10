import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";

import physiciansTeam from "@/assets/physicians-team.jpg";
import founder1 from "@/assets/Founder1.jpg";
import founder2 from "@/assets/Founder2.jpg";

import kamranImg from "@/assets/kamran.jpg";
import ahmedImg from "@/assets/Ahmed.jpg";
import brianImg from "@/assets/Brain.jpg";
import nomanImg from "@/assets/Noman.jpg";

// Updated leadership team array WITH IMAGES
const leadershipTeam = [
  {
    name: "Kamran Khan",
    title: "Vice President of Business Development",
    linkedin: "https://www.linkedin.com/in/kkhan3/",
    image: kamranImg,
    bio: "Seasoned healthcare growth leader with extensive experience scaling physician-led care models, building strategic partnerships, and driving market expansion across multi-facility networks. Kamran oversees business development, relationship management, and operational alignment for all Community Physicians markets."
  },
  {
    name: "Noman Razvi",
    title: "Vice President of Finance & Transformation",
    linkedin: "https://www.linkedin.com/in/noman-r-42241666/",
    image: nomanImg,
    bio: "Finance executive with deep expertise in healthcare finance, organizational transformation, and performance optimization. Noman leads financial strategy, budgeting, data-driven decision making, and transformation initiatives to support long-term growth and operational excellence."
  },
  {
    name: "Ahmed Sikander",
    title: "Chief of Staff",
    linkedin: "https://www.linkedin.com/in/syedsikander/",
    image: ahmedImg,
    bio: "Operational strategist with a strong background in healthcare systems, workforce leadership, and organizational performance. Ahmed supports executive operations, cross-departmental coordination, physician onboarding, and performance management across the care continuum."
  },
  {
    name: "Brian Guimon",
    title: "Market President",
    linkedin: "https://www.linkedin.com/in/brian-guimon-a86533175/",
    image: brianImg,
    bio: "Experienced healthcare operations leader managing large-scale clinical networks and post-acute markets. Brian specializes in facility partnerships, care integration, compliance oversight, and ensuring consistent delivery of high-quality physician services across all assigned regions."
  }
];

const About = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main>

        {/* Hero Section */}
        <section
          className="relative py-32 bg-cover bg-center"
          style={{
            backgroundImage: `linear-gradient(135deg, rgba(61, 56, 86, 0.9), rgba(61, 56, 86, 0.8)), url(${physiciansTeam})`,
          }}
        >
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-3xl">
              <h1 className="text-5xl md:text-6xl font-heading text-primary-foreground mb-6">
                Meet Our Physicians
              </h1>
              <p className="text-xl text-primary-foreground/90">
                A team of dedicated healthcare professionals committed to excellence in post-acute care
              </p>
            </div>
          </div>
        </section>

        {/* Mission Section */}
        <section className="py-20 bg-gradient-to-b from-background to-muted">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center mb-16">
              <h2 className="text-4xl font-heading text-primary mb-6">Our Mission</h2>
              <p className="text-xl text-muted-foreground leading-relaxed">
                At Community Physicians, we believe in transforming post-acute care through physician-driven, patient-centered excellence.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              <Card className="text-center">
                <CardContent className="pt-8">
                  <div className="text-5xl font-bold text-secondary mb-2">15+</div>
                  <p className="text-muted-foreground">Years of Excellence</p>
                </CardContent>
              </Card>
              <Card className="text-center">
                <CardContent className="pt-8">
                  <div className="text-5xl font-bold text-secondary mb-2">50+</div>
                  <p className="text-muted-foreground">Healthcare Professionals</p>
                </CardContent>
              </Card>
              <Card className="text-center">
                <CardContent className="pt-8">
                  <div className="text-5xl font-bold text-secondary mb-2">100+</div>
                  <p className="text-muted-foreground">Partner Facilities</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Founders Section */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto">
              <h2 className="text-4xl font-heading text-primary mb-4 text-center">Our Founders</h2>
              <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
                Visionary leaders who established Community Physicians with a commitment to innovation and compassionate care.
              </p>

              <div className="grid md:grid-cols-2 gap-8">

                {/* Founder 1 */}
                <Card className="hover:shadow-lg transition-all duration-300">
                  <CardContent className="p-8">
                    <div className="flex flex-col items-center text-center">
                      <img src={founder1} alt="Dr. Bader Almoshelli" className="w-32 h-32 rounded-full mb-6 shadow-md border object-contain" />
                      <h3 className="text-2xl font-heading text-primary mb-2">Dr. Bader Almoshelli</h3>
                      <p className="text-secondary font-medium mb-4">Co-Founder & CEO</p>

                      <p className="text-muted-foreground leading-relaxed text-justify" style={{ minHeight: "140px" }}>
                        Physician-executive with over two decades of experience in post-acute and transitional care. He leads clinical strategy, market expansion, and system partnerships to strengthen physician-driven care networks across skilled nursing and rehabilitation settings.
                      </p>
                    </div>
                  </CardContent>
                </Card>

                {/* Founder 2 */}
                <Card className="hover:shadow-lg transition-all duration-300">
                  <CardContent className="p-8">
                    <div className="flex flex-col items-center text-center">
                      <img src={founder2} alt="Muhammad B. Nafees" className="w-32 h-32 rounded-full mb-6 shadow-md border object-contain" />
                      <h3 className="text-2xl font-heading text-primary mb-2">Muhammad B. Nafees</h3>
                      <p className="text-secondary font-medium mb-4">Co-Founder & COO</p>

                      <p className="text-muted-foreground leading-relaxed text-justify" style={{ minHeight: "140px" }}>
                        Co-founder and 0→1 operator focused on building scalable, physician-led care frameworks. Nafees specializes in operational execution, early-stage growth, and developing foundational systems that enable healthcare networks to expand efficiently.
                      </p>
                    </div>
                  </CardContent>
                </Card>

              </div>
            </div>
          </div>
        </section>

        {/* Leadership Team */}
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-heading text-primary mb-12 text-center">Our Leadership Team</h2>

            <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
              {leadershipTeam.map((leader, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardContent className="p-8">
                    <div className="flex flex-col items-center text-center">

                      <img
                        src={leader.image}
                        alt={leader.name}
                        className="w-28 h-28 rounded-full object-contain shadow-md border mb-4"
                      />

                      <h3 className="text-2xl font-heading text-primary mb-1">{leader.name}</h3>
                      <p className="text-secondary font-medium mb-1">{leader.title}</p>

                      <p className="text-sm text-muted-foreground mb-4">
                        <a href={leader.linkedin} target="_blank" rel="noopener noreferrer" className="underline hover:text-primary">
                          View LinkedIn Profile
                        </a>
                      </p>

                      <p className="text-muted-foreground leading-relaxed text-justify">
                        {leader.bio}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-20 bg-gradient-to-b from-muted/30 to-background">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-4xl font-heading text-primary mb-12 text-center">Our Core Values</h2>
              <p className="text-lg text-muted-foreground leading-relaxed text-justify">
                COMMUNITY. CONTINUUM. CARE. These three principles define our mission. We build strong care communities, ensure seamless continuity across healthcare settings, and place compassionate care at the center of everything we do.
              </p>
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </div>
  );
};

export default About;
