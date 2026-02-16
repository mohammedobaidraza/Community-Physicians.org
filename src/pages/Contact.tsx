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
import {
  Mail,
  Phone,
  MapPin,
  Loader2,
  BadgeDollarSign,
  Users,
  Info,
  Sparkles,
} from "lucide-react";

import PhoneInput from "react-phone-input-2";
import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 18 },
  show: { opacity: 1, y: 0 },
};

const softHover = {
  whileHover: { y: -3, transition: { duration: 0.2 } },
};

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

  const validatePhone = (value: string) => {
    const digits = value.replace(/\D/g, "");

    if (digits.length < 10) {
      setPhoneError(true);
      return;
    }

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
    } catch {
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
        {/* HERO (more premium) */}
        <section className="relative overflow-hidden py-20">
          {/* soft premium background */}
          <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-secondary/10" />
          <div className="absolute inset-0">
            <div className="absolute -top-24 -left-24 h-80 w-80 rounded-full bg-primary/10 blur-3xl" />
            <div className="absolute top-10 -right-24 h-96 w-96 rounded-full bg-accent/10 blur-3xl" />
            <div className="absolute -bottom-24 left-1/3 h-96 w-96 rounded-full bg-secondary/10 blur-3xl" />
          </div>

          {/* animated sheen */}
          <motion.div
            aria-hidden="true"
            initial={{ x: "-30%", opacity: 0.25 }}
            animate={{ x: "130%", opacity: 0.25 }}
            transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
            className="pointer-events-none absolute top-0 h-full w-[40%] rotate-6 bg-gradient-to-r from-transparent via-white/25 to-transparent blur-xl"
          />

          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="show"
            transition={{ duration: 0.65, ease: "easeOut" }}
            className="relative container mx-auto px-4 text-center max-w-3xl"
          >
            <div className="inline-flex items-center gap-2 rounded-full border border-primary/10 bg-white/70 backdrop-blur px-4 py-2 text-xs font-semibold text-primary shadow-sm mb-6">
              <Sparkles className="h-4 w-4" />
              Contact Community Physicians
            </div>

            <h1 className="text-5xl md:text-6xl font-heading text-primary mb-5 leading-tight">
              Get In Touch
            </h1>
            <p className="text-xl text-muted-foreground">
              Reach out today and elevate your facility’s care with physician-driven excellence.
            </p>
          </motion.div>
        </section>

        {/* MAIN */}
        <section className="py-20">
          <div className="container mx-auto px-4 max-w-7xl">
            <div className="grid lg:grid-cols-3 gap-12">
              {/* LEFT CONTACT INFO (premium cyan card) */}
              <motion.div
                variants={fadeUp}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.25 }}
                transition={{ duration: 0.65, ease: "easeOut" }}
                className="space-y-8"
              >
                <h2 className="text-3xl font-heading text-primary">
                  Contact Information
                </h2>

                <motion.div
                  {...softHover}
                  className="relative rounded-3xl overflow-hidden"
                >
                  {/* cyan gradient border glow */}
                  <div className="absolute inset-0 bg-gradient-to-br from-cyan-300/40 via-cyan-200/10 to-primary/10" />
                  <div className="absolute inset-[1px] rounded-3xl bg-white/70 backdrop-blur-xl" />
                  <div className="relative p-8 shadow-[0_20px_60px_-30px_rgba(0,0,0,0.35)] space-y-6 border border-white/40 rounded-3xl">
                    {/* premium list rows */}
                    {[
                      {
                        icon: Phone,
                        title: "Main Office",
                        value: (
                          <a
                            href="tel:6303206871"
                            className="text-muted-foreground hover:text-primary transition-colors"
                          >
                            630.320.6871
                          </a>
                        ),
                        sub: null,
                      },
                      {
                        icon: BadgeDollarSign,
                        title: "Billing",
                        value: <span className="text-muted-foreground">630.320.6871</span>,
                        sub: "Insurance, statements & payments",
                      },
                      {
                        icon: Users,
                        title: "HR",
                        value: (
                          <a
                            href="mailto:hr@cphysicians.org"
                            className="text-muted-foreground hover:text-primary transition-colors"
                          >
                            hr@cphysicians.org
                          </a>
                        ),
                        sub: "Careers & onboarding",
                      },
                      {
                        icon: Mail,
                        title: "General Inquiries",
                        value: (
                          <a
                            href="mailto:info@cphysicians.org"
                            className="text-muted-foreground hover:text-primary transition-colors"
                          >
                            info@cphysicians.org
                          </a>
                        ),
                        sub: null,
                      },
                      {
                        icon: MapPin,
                        title: "Location",
                        value: (
                          <p className="text-muted-foreground">
                            18W140 Butterfield Rd <br />
                            Oakbrook Terrace, Suite 1020 <br />
                            IL 60181
                          </p>
                        ),
                        sub: null,
                      },
                    ].map((row, idx) => (
                      <motion.div
                        key={idx}
                        whileHover={{
                          y: -2,
                          boxShadow: "0 0 0 8px rgba(34,211,238,0.10)",
                        }}
                        transition={{ duration: 0.2 }}
                        className="flex gap-4 rounded-2xl p-3 border border-transparent hover:border-cyan-200/50 bg-white/40 hover:bg-white/65 backdrop-blur"
                      >
                        <div className="h-11 w-11 rounded-2xl bg-cyan-50 border border-cyan-100 flex items-center justify-center shadow-sm">
                          <row.icon className="h-5 w-5 text-cyan-600" />
                        </div>
                        <div className="min-w-0">
                          <p className="font-semibold">{row.title}</p>
                          <div className="min-w-0">{row.value}</div>
                          {row.sub ? (
                            <p className="text-xs text-muted-foreground mt-1">
                              {row.sub}
                            </p>
                          ) : null}
                        </div>
                      </motion.div>
                    ))}

                    {/* small note */}
                    <motion.div
                      initial={{ opacity: 0, y: 8 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.55, delay: 0.1 }}
                      className="flex gap-3 rounded-2xl border border-cyan-100 bg-white/55 backdrop-blur p-4 text-sm text-muted-foreground"
                    >
                      <div className="h-9 w-9 rounded-xl bg-cyan-50 border border-cyan-100 flex items-center justify-center">
                        <Info className="h-4 w-4 text-cyan-700" />
                      </div>
                      <p className="leading-relaxed">
                        For the fastest response, include your facility name and best callback number.
                      </p>
                    </motion.div>
                  </div>
                </motion.div>
              </motion.div>

              {/* RIGHT FORM (premium lavender card) */}
              <motion.div
                variants={fadeUp}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.25 }}
                transition={{ duration: 0.7, ease: "easeOut", delay: 0.1 }}
                className="lg:col-span-2"
              >
                <motion.div {...softHover} className="relative rounded-3xl">
                  {/* gradient border */}
                  <div className="absolute -inset-[1px] rounded-3xl bg-gradient-to-br from-purple-300/50 via-white/10 to-accent/20 blur-[0px]" />
                  <Card className="relative bg-[#F5F3FF]/75 backdrop-blur-xl border border-white/50 shadow-[0_26px_80px_-40px_rgba(0,0,0,0.35)] rounded-3xl overflow-hidden">
                    {/* subtle animated light sweep */}
                    <motion.div
                      aria-hidden="true"
                      initial={{ x: "-35%", opacity: 0.18 }}
                      animate={{ x: "135%", opacity: 0.18 }}
                      transition={{ duration: 9, repeat: Infinity, ease: "linear" }}
                      className="pointer-events-none absolute top-0 h-full w-[40%] rotate-6 bg-gradient-to-r from-transparent via-white/30 to-transparent blur-xl"
                    />

                    <CardHeader className="relative">
                      <CardTitle className="text-2xl text-purple-950 font-semibold">
                        Send us a message
                      </CardTitle>
                      <CardDescription className="text-purple-800/75">
                        Fill out the form and we’ll respond shortly.
                      </CardDescription>
                    </CardHeader>

                    <CardContent className="relative">
                      <form onSubmit={handleSubmit} className="space-y-6">
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
                              className="bg-white/70 focus-visible:ring-2 focus-visible:ring-purple-300"
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
                              className="bg-white/70 focus-visible:ring-2 focus-visible:ring-purple-300"
                            />
                          </div>
                        </div>

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
                                "w-full h-11 !rounded-md !bg-white/70 " +
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
                              className="bg-white/70 focus-visible:ring-2 focus-visible:ring-purple-300"
                            />
                          </div>
                        </div>

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
                            className="bg-white/70 focus-visible:ring-2 focus-visible:ring-purple-300"
                          />
                        </div>

                        <motion.div
                          whileHover={{ y: -2 }}
                          transition={{ duration: 0.2 }}
                          className="inline-block"
                        >
                          <Button
                            type="submit"
                            size="lg"
                            disabled={isSubmitting || phoneError}
                            className="bg-accent hover:bg-accent/90 shadow-lg hover:shadow-xl transition-shadow"
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
                        </motion.div>
                      </form>
                    </CardContent>
                  </Card>
                </motion.div>
              </motion.div>
            </div>

            {/* MAP (keep old feature) */}
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.65, ease: "easeOut" }}
              className="max-w-7xl mx-auto mt-16"
            >
              <Card className="shadow-lg">
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
            </motion.div>
          </div>
        </section>

        {/* CTA (keep old feature) */}
        <section className="py-20 bg-gradient-to-br from-primary to-primary/80">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.65, ease: "easeOut" }}
            className="container mx-auto px-4 text-center max-w-3xl"
          >
            <h2 className="text-4xl font-heading text-primary-foreground mb-6">
              Start Your Facility’s Success Journey Today
            </h2>
            <p className="text-xl text-primary-foreground/90">
              Join the growing network of facilities trusted by Community Physicians.
            </p>
          </motion.div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Contact;
