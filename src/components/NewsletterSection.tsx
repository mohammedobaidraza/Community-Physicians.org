import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";
import { Mail, Loader2 } from "lucide-react"; // Added Loader2 for the spinner

const NewsletterSection = () => {
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false); // Added loading state
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email) return;

    setIsSubmitting(true); // Disable button & show spinner

    try {
      // 1. Send email to Python Backend
      const response = await fetch("http://127.0.0.1:5000/subscribe", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Failed to subscribe");
      }

      // 2. Success
      toast({
        title: "Success!",
        description: "Thank you for subscribing to our newsletter.",
      });
      setEmail(""); // Clear the input
      
    } catch (error) {
      console.error(error);
      toast({
        title: "Error",
        description: "Could not subscribe. Please check your connection.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false); // Re-enable button
    }
  };

  return (
    <section className="py-24 bg-gradient-to-br from-primary/10 via-background to-accent/10">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto">
          <div className="bg-card p-12 rounded-3xl shadow-2xl border border-border text-center">
            <Mail className="mx-auto mb-6 text-primary" size={48} />
            <h2 className="text-4xl md:text-5xl font-heading text-foreground font-bold mb-4">
              Stay Connected
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              Stay connected with insights that matter in post-acute care.
            </p>
            <form onSubmit={handleSubmit} className="space-y-4">
              <Input
                type="email"
                placeholder="Your email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                disabled={isSubmitting} // Disable input while sending
                className="w-full py-6 px-6 text-lg rounded-xl border-2 focus:border-primary"
              />
              <Button 
                type="submit" 
                size="lg"
                disabled={isSubmitting} // Disable button while sending
                className="w-full bg-primary hover:bg-primary/90 text-primary-foreground py-6 text-lg rounded-xl font-medium"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                    Subscribing...
                  </>
                ) : (
                  "Subscribe"
                )}
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewsletterSection;