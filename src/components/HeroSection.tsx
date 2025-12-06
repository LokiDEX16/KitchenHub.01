import { Button } from "@/components/ui/button";
import heroBg from "@/assets/hero-bg.jpg";
import logo from "@/assets/kitchen-hub-logo.png";

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
        {/* Warm yellow/orange overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-primary/80 via-primary/60 to-secondary/90" />
      </div>

      {/* Watermark Logo */}
      <div className="absolute inset-0 flex items-center justify-center opacity-10 pointer-events-none">
        <img src={logo} alt="" className="w-[600px] h-auto" aria-hidden="true" />
      </div>

      {/* Content */}
      <div className="relative z-10 container-custom px-4 text-center">
        <div className="max-w-4xl mx-auto">
          <p className="text-secondary font-semibold uppercase tracking-widest mb-4 animate-fade-up opacity-0" style={{ animationDelay: "0.2s", animationFillMode: "forwards" }}>
            Multi-Cuisine Takeout & Delivery
          </p>
          <h1 className="font-display text-4xl sm:text-5xl lg:text-7xl text-secondary mb-6 leading-tight animate-fade-up opacity-0" style={{ animationDelay: "0.4s", animationFillMode: "forwards" }}>
            Multi-Cuisine Delivery<br />
            <span className="text-secondary-foreground drop-shadow-lg">From the Best Local Restaurants</span>
          </h1>
          <p className="text-lg sm:text-xl text-secondary/90 mb-8 max-w-2xl mx-auto animate-fade-up opacity-0" style={{ animationDelay: "0.6s", animationFillMode: "forwards" }}>
            Order from multiple restaurants in one delivery. Kitchen Hub brings your favorite foods together.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-up opacity-0" style={{ animationDelay: "0.8s", animationFillMode: "forwards" }}>
            <Button variant="dark" size="xl">
              Order Now
            </Button>
            <Button variant="outline" size="xl" className="border-secondary bg-card/20 text-secondary hover:bg-card hover:text-foreground">
              View Menu
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce-subtle">
        <div className="w-6 h-10 border-2 border-secondary/50 rounded-full flex justify-center pt-2">
          <div className="w-1.5 h-1.5 bg-secondary rounded-full animate-bounce" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;