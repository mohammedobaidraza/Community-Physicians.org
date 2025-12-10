import "react-phone-input-2/lib/style.css";
import { useState } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";
import { Mail, Phone, MapPin, Loader2 } from "lucide-react";

import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";

const Contact = () => {
  const { toast } = useToast();

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [phoneError, setPhoneError] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    facility: "",
    message: "",
  });

  // Validate phone number
  const validatePhone = (value: string) => {
    const digits = value.replace(/\D/g, "");

    // Basic: require at least 10 digits (typical international minimum)
    if (digits.length < 10) {
      setPhoneError(true);
      return;
    }

    // US-only validation: must be exactly 11 digits with country code 1
    if (value.startsWith("1") && digits.length !== 11) {
      setPhoneError(true);
      return;
    }

    setPhoneError(false);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (phoneError) {
      toast({
        title: "Invalid Phone Number",
        description: "Please enter a valid phone number.",
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await fetch("http://127.0.0.1:5000/submit-contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (!response.ok) throw new Error(result.error || "Failed to send message");

      toast({
        title: "Message Sent!",
        description: "Thank you for contacting us. We'll get back to you soon.",
      });

      setFormData({
        name: "",
        email: "",
        phone: "",
        facility: "",
        message: "",
      });
    } catch (error) {
      toast({
        title: "Error",
        description: "Could not send message. Please try again later.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <div className="min-h-screen">
      <Navigation />

      <main>
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-br from-primary/5 to-secondary/5">
          <div className="container mx-auto px-4 text-center max-w-3xl">
            <h1 className="text-5xl font-heading text-primary mb-6">Get In Touch</h1>
            <p className="text-xl text-muted-foreground">
              Reach out to Community Physicians today and elevate your facility’s care.
            </p>
          </div>
        </section>

        <section className="py-20">
          <div className="container mx-auto px-4 max-w-7xl">

            <div className="grid lg:grid-cols-3 gap-12">
              
              {/* Contact Information */}
              <div className="space-y-6">
                <h2 className="text-3xl font-heading text-primary mb-6">
                  Contact Information
                </h2>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-secondary/10 rounded-full flex items-center justify-center">
                    <Phone size={20} className="text-secondary" />
                  </div>
                  <div>
                    <h3 className="font-semibold">Phone</h3>
                    <a className="text-muted-foreground" href="tel:6303206871">
                      630.320.6871
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-secondary/10 rounded-full flex items-center justify-center">
                    <Mail size={20} className="text-secondary" />
                  </div>
                  <div>
                    <h3 className="font-semibold">Email</h3>
                    <a className="text-muted-foreground" href="mailto:info@cphysicians.org">
                      info@cphysicians.org
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-secondary/10 rounded-full flex items-center justify-center">
                    <MapPin size={20} className="text-secondary" />
                  </div>
                  <div>
                    <h3 className="font-semibold">Location</h3>
                    <p className="text-muted-foreground">
                      18W140 Butterfield Rd<br />
                      Oakbrook Terrace, Suite 1020<br />
                      IL 60181
                    </p>
                  </div>
                </div>
              </div>

              {/* Contact Form */}
              <div className="lg:col-span-2">
                <Card>
                  <CardHeader>
                    <CardTitle className="text-2xl">Send us a message</CardTitle>
                    <CardDescription>
                      Fill out the form and we’ll respond shortly.
                    </CardDescription>
                  </CardHeader>

                  <CardContent>
                    <form onSubmit={handleSubmit} className="space-y-6">

                      {/* Name + Email */}
                      <div className="grid md:grid-cols-2 gap-4">
                        <div>
                          <Label>Full Name *</Label>
                          <Input
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            required
                            disabled={isSubmitting}
                            placeholder="John Doe"
                          />
                        </div>

                        <div>
                          <Label>Email *</Label>
                          <Input
                            name="email"
                            type="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                            disabled={isSubmitting}
                            placeholder="john@example.com"
                          />
                        </div>
                      </div>

                      {/* Phone + Facility */}
                      <div className="grid md:grid-cols-2 gap-4">

                        <div>
                          <Label>Phone Number</Label>

                          <PhoneInput
                            country={"us"}
                            value={formData.phone}
                            onChange={(value) => {
                              setFormData((prev) => ({ ...prev, phone: value || "" }));
                              validatePhone(value || "");
                            }}
                            inputClass={
                              "w-full h-11 !text-sm !rounded-md " +
                              (phoneError ? "!border-red-500" : "!border-input")
                            }
                            buttonClass="!rounded-l-md"
                            dropdownClass="!bg-white"
                            placeholder="Enter phone number"
                            disabled={isSubmitting}
                          />

                          {phoneError && (
                            <p className="text-red-500 text-sm mt-1">
                              Invalid phone number
                            </p>
                          )}
                        </div>

                        <div>
                          <Label>Facility Name</Label>
                          <Input
                            name="facility"
                            value={formData.facility}
                            onChange={handleChange}
                            disabled={isSubmitting}
                            placeholder="Your Facility"
                          />
                        </div>
                      </div>

                      {/* Message */}
                      <div>
                        <Label>Message *</Label>
                        <Textarea
                          name="message"
                          rows={6}
                          value={formData.message}
                          onChange={handleChange}
                          required
                          disabled={isSubmitting}
                          placeholder="Tell us how we can help your facility..."
                        />
                      </div>

                      {/* Submit */}
                      <Button
                        type="submit"
                        size="lg"
                        disabled={isSubmitting || phoneError}
                        className="bg-accent hover:bg-accent/90"
                      >
                        {isSubmitting ? (
                          <>
                            <Loader2 className="h-4 w-4 animate-spin mr-2" />
                            Sending...
                          </>
                        ) : (
                          "Send Message"
                        )}
                      </Button>
                    </form>
                  </CardContent>
                </Card>
              </div>

            </div>

            {/* MAP */}
            <div className="max-w-7xl mx-auto mt-16">
              <Card>
                <CardHeader>
                  <CardTitle>Visit Our Office</CardTitle>
                  <CardDescription>
                    18W140 Butterfield Rd, Oakbrook Terrace, IL
                  </CardDescription>
                </CardHeader>
                <CardContent className="p-0">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2969.9!2d-87.98!3d41.85!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x880e4d8b6d3b41df%3A0x4a2c034d292743ff!2s18W140%20Butterfield%20Rd%2C%20Oakbrook%20Terrace%2C%20IL%2060181!5e0!3m2!1sen!2sus!4v1703200112345"
                    width="100%"
                    height="400"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                  />
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 bg-gradient-to-br from-primary to-primary/80">
          <div className="container mx-auto px-4 text-center max-w-3xl">
            <h2 className="text-4xl font-heading text-primary-foreground mb-6">
              Start Your Facility’s Success Journey Today
            </h2>
            <p className="text-xl text-primary-foreground/90">
              Join the growing network of facilities trusted by Community Physicians.
            </p>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Contact;
