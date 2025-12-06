import { Button } from "@/components/ui/button";
import heroBg from "@/assets/hero-bg.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={heroBg}
          alt="Delicious food spread"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-secondary/90 via-secondary/70 to-secondary/90" />
      </div>

      {/* Content */}
      <div className="relative z-10 container-custom px-4 text-center">
        <div className="max-w-4xl mx-auto">
          <p className="text-primary font-semibold uppercase tracking-widest mb-4 animate-fade-up opacity-0" style={{ animationDelay: "0.2s", animationFillMode: "forwards" }}>
            Multi-Restaurant Delivery
          </p>
          <h1 className="font-display text-5xl sm:text-6xl lg:text-8xl text-secondary-foreground mb-6 leading-tight animate-fade-up opacity-0" style={{ animationDelay: "0.4s", animationFillMode: "forwards" }}>
            UNITED TASTES OF<br />
            <span className="text-primary">NEW JERSEY</span>
          </h1>
          <p className="text-lg sm:text-xl text-secondary-foreground/80 mb-8 max-w-2xl mx-auto animate-fade-up opacity-0" style={{ animationDelay: "0.6s", animationFillMode: "forwards" }}>
            Your favorite multi-restaurant delivery platform. Order from multiple restaurants in one delivery.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-up opacity-0" style={{ animationDelay: "0.8s", animationFillMode: "forwards" }}>
            <Button variant="hero" size="xl">
              Order Now
            </Button>
            <Button variant="outline" size="xl" className="border-secondary-foreground text-secondary-foreground hover:bg-secondary-foreground hover:text-secondary">
              View Menu
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce-subtle">
        <div className="w-6 h-10 border-2 border-secondary-foreground/50 rounded-full flex justify-center pt-2">
          <div className="w-1.5 h-1.5 bg-primary rounded-full animate-bounce" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
