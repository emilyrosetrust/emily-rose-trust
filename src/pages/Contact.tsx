import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import FaqSection from "@/components/FaqSection";
import useFadeInOnScroll from "@/hooks/useFadeInOnScroll";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  useFadeInOnScroll();
  const { toast } = useToast();
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitting(true);
    // Placeholder - would submit to real endpoint
    setTimeout(() => {
      setSubmitting(false);
      toast({
        title: "Message sent",
        description: "Thank you for reaching out. We will respond as soon as possible.",
      });
      (e.target as HTMLFormElement).reset();
    }, 1000);
  };

  return (
    <>
      <section className="section-padding">
        <div className="section-container">
          <div className="max-w-2xl mx-auto fade-in-on-scroll">
            <h1 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-4 text-center">
              Contact Us
            </h1>
            <p className="text-center text-muted-foreground text-lg mb-10">
              We will respond as soon as possible.
            </p>

            <div className="text-center mb-10">
              <a
                href="mailto:info@emilyrosetrust.com"
                className="text-primary hover:text-primary/80 transition-colors font-medium"
              >
                info@emilyrosetrust.com
              </a>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="name">Your Name</Label>
                  <Input id="name" name="name" required maxLength={100} placeholder="Full name" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Your Email</Label>
                  <Input id="email" name="email" type="email" required maxLength={255} placeholder="you@example.com" />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="reason">Reason for Getting in Touch</Label>
                <Select name="reason" required>
                  <SelectTrigger>
                    <SelectValue placeholder="Select a reason" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="support">I'd like to support Emily Rose</SelectItem>
                    <SelectItem value="corporate">Corporate or partnership enquiry</SelectItem>
                    <SelectItem value="media">Media enquiry</SelectItem>
                    <SelectItem value="general">General message of support</SelectItem>
                    <SelectItem value="other">Other</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="message">Your Message</Label>
                <Textarea
                  id="message"
                  name="message"
                  required
                  maxLength={1000}
                  rows={5}
                  placeholder="How can we help, or what would you like to share?"
                />
              </div>

              <Button type="submit" variant="donate" size="lg" className="w-full" disabled={submitting}>
                {submitting ? "Sending..." : "Send Message"}
              </Button>
            </form>
          </div>
        </div>
      </section>

      <div className="section-alt">
        <FaqSection />
      </div>
    </>
  );
};

export default Contact;
