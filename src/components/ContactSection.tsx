import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Clock, MapPin, Phone } from "lucide-react";
import { toast } from "@/hooks/use-toast";

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message Sent!",
      description: "We'll get back to you as soon as possible.",
    });
    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section id="contact" className="section-padding bg-muted">
      <div className="container-custom px-4">
        <div className="text-center mb-16">
          <p className="text-primary font-semibold uppercase tracking-widest mb-2">Get In Touch</p>
          <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl">
            CONTACT US
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {/* Contact Form */}
          <div className="bg-card rounded-2xl p-8 card-shadow">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <Input
                  name="name"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>
              <div>
                <Input
                  name="email"
                  type="email"
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
              <div>
                <Input
                  name="subject"
                  placeholder="Subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                />
              </div>
              <div>
                <Textarea
                  name="message"
                  placeholder="Your Message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                />
              </div>
              <Button type="submit" variant="hero" size="lg" className="w-full">
                Submit
              </Button>
            </form>
          </div>

          {/* Contact Info */}
          <div className="space-y-8">
            {/* Hours */}
            <div className="flex gap-4">
              <div className="w-14 h-14 bg-primary rounded-xl flex items-center justify-center flex-shrink-0">
                <Clock size={24} className="text-primary-foreground" />
              </div>
              <div>
                <h3 className="font-display text-xl mb-2">WE'RE OPEN</h3>
                <p className="text-muted-foreground">Mon - Sun: 10:00 AM - 10:00 PM</p>
                <p className="text-muted-foreground">Delivery until 9:30 PM</p>
              </div>
            </div>

            {/* Atlantic City Location */}
            <div className="flex gap-4">
              <div className="w-14 h-14 bg-primary rounded-xl flex items-center justify-center flex-shrink-0">
                <MapPin size={24} className="text-primary-foreground" />
              </div>
              <div>
                <h3 className="font-display text-xl mb-2">ATLANTIC CITY, NJ</h3>
                <p className="text-muted-foreground">1100 Pacific Ave</p>
                <p className="text-muted-foreground">Atlantic City, NJ 08401</p>
              </div>
            </div>

            {/* Toms River Location */}
            <div className="flex gap-4">
              <div className="w-14 h-14 bg-primary rounded-xl flex items-center justify-center flex-shrink-0">
                <MapPin size={24} className="text-primary-foreground" />
              </div>
              <div>
                <h3 className="font-display text-xl mb-2">TOMS RIVER, NJ</h3>
                <p className="text-muted-foreground">49 Main Street</p>
                <p className="text-muted-foreground">Toms River, NJ 08753</p>
              </div>
            </div>

            {/* Phone */}
            <div className="flex gap-4">
              <div className="w-14 h-14 bg-primary rounded-xl flex items-center justify-center flex-shrink-0">
                <Phone size={24} className="text-primary-foreground" />
              </div>
              <div>
                <h3 className="font-display text-xl mb-2">CALL US</h3>
                <p className="text-muted-foreground">(555) 123-4567</p>
                <p className="text-muted-foreground">support@kitchenhub.com</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
