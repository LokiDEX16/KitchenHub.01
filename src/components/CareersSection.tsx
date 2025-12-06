import { Button } from "@/components/ui/button";
import { Briefcase, Heart, TrendingUp } from "lucide-react";

const benefits = [
  {
    icon: Heart,
    title: "Health Benefits",
    description: "Full medical, dental, and vision coverage for you and your family.",
  },
  {
    icon: TrendingUp,
    title: "Growth Opportunities",
    description: "Career advancement paths and professional development programs.",
  },
  {
    icon: Briefcase,
    title: "Flexible Schedule",
    description: "Work-life balance with flexible hours and remote options.",
  },
];

const CareersSection = () => {
  return (
    <section id="careers" className="section-padding bg-background">
      <div className="container-custom px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div>
            <p className="text-primary font-semibold uppercase tracking-widest mb-2">Join Our Team</p>
            <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl mb-6">
              CAREERS AT<br />
              <span className="text-primary">KITCHEN HUB</span>
            </h2>
            <p className="text-muted-foreground text-lg mb-8">
              Be part of New Jersey's fastest-growing food delivery platform. 
              We're always looking for passionate people to join our team.
            </p>
            <Button variant="hero" size="lg">
              View Open Positions
            </Button>
          </div>

          {/* Benefits Grid */}
          <div className="space-y-6">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="flex gap-4 p-6 bg-muted rounded-xl hover:bg-muted/80 transition-colors group"
              >
                <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                  <benefit.icon size={24} className="text-primary-foreground" />
                </div>
                <div>
                  <h3 className="font-display text-xl mb-1">{benefit.title}</h3>
                  <p className="text-muted-foreground text-sm">{benefit.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CareersSection;
