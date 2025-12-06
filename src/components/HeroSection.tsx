import { Button } from "@/components/ui/button";
import heroBg from "@/assets/hero-bg.jpg";
import kitchenHubLogo from "@/assets/kitchen-hub-logo.png";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-24 bg-gray-900 text-white">
      {/* Background Image with Ken Burns Effect */}
      <div className="absolute inset-0">
        <img
          src={heroBg}
          alt="Delicious food spread"
          className="w-full h-full object-cover animate-ken-burns"
        />
        <div className="absolute inset-0 bg-black/60" />
        <img
          src={kitchenHubLogo}
          alt="Kitchen Hub Logo Watermark"
          className="absolute inset-0 w-full h-full object-contain opacity-5"
        />
      </div>

      {/* Content */}
      <div className="relative z-10 container-custom px-4 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="font-display text-5xl sm:text-6xl lg:text-8xl text-white mb-6 leading-tight animate-slide-in-bottom">
            Your Culinary World, <span className="text-primary">Delivered</span>
          </h1>
          <p className="font-body text-lg sm:text-xl text-gray-300 mb-8 max-w-2xl mx-auto animate-slide-in-bottom-delay-1">
            Experience the convenience of ordering from multiple local restaurants in a single delivery. Hot, fresh, and fast.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-slide-in-bottom-delay-2">
            <Button variant="hero" size="xl" className="transform hover:scale-105 transition-transform duration-300 ease-in-out">
              Explore Restaurants
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 opacity-75 animate-fade-in-delay">
        <div className="w-8 h-12 border-2 border-white/50 rounded-full flex justify-center pt-2">
          <div className="w-2 h-2 bg-primary rounded-full animate-bounce-slow" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;