import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />

      <main className="flex-1">
        <section className="py-24 bg-gradient-to-br from-primary/5 to-secondary/5">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl md:text-5xl font-heading text-primary mb-4">
              Privacy Policy
            </h1>
            <p className="text-muted-foreground text-lg max-w-3xl">
              Last updated: January 2025
            </p>
          </div>
        </section>

        <section className="py-16 bg-background">
          <div className="container mx-auto px-4 max-w-4xl space-y-10 text-muted-foreground leading-relaxed">

            <div>
              <h2 className="text-2xl font-heading text-primary mb-3">Introduction</h2>
              <p>
                Community Physicians (“we”, “our”, “us”) is committed to protecting your privacy.
                This Privacy Policy explains how we collect, use, store, and safeguard your
                information when you use our website or contact our organization.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-heading text-primary mb-3">Information We Collect</h2>
              <p>
                We may collect information that you voluntarily submit through our contact
                forms, including your name, email address, phone number, facility information,
                and any messages you provide.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-heading text-primary mb-3">How We Use Your Information</h2>
              <ul className="list-disc list-inside space-y-2">
                <li>Respond to inquiries submitted through our contact form.</li>
                <li>Improve our communication and website experience.</li>
                <li>Maintain internal records and operational needs.</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-heading text-primary mb-3">Data Protection</h2>
              <p>
                We implement industry-standard safeguards to protect your information.
                However, no method of transmission over the internet is 100% secure.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-heading text-primary mb-3">Third-Party Services</h2>
              <p>
                We do not sell or share your personal information with third parties for
                marketing purposes. Any integrations used on this website (e.g., analytics,
                contact submission services) are used solely to support website functionality.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-heading text-primary mb-3">Your Rights</h2>
              <p>
                You may request to update or delete your submitted information at any time by
                contacting us at:
              </p>
              <p className="mt-2 font-medium">
                info@cphysicians.org  
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-heading text-primary mb-3">Emergency Disclaimer</h2>
              <p className="italic">
                Community Physicians does not provide emergency medical services.  
                If this is an emergency, please call 911.
              </p>
            </div>

          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default PrivacyPolicy;
