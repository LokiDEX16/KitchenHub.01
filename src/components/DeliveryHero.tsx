import { Button } from "@/components/ui/button";
import driverImg from "@/assets/delivery-driver.jpg";

const DeliveryHero = () => {
  return (
    <section className="relative py-24 lg:py-32 overflow-hidden bg-card">
      <div className="container-custom px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="text-center lg:text-left">
            <p className="text-primary font-semibold uppercase tracking-widest mb-2">Convenience First</p>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl text-foreground mb-6 leading-tight">
              Multiple Restaurants.<br />
              <span className="text-primary">One Order.</span>
            </h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-xl mx-auto lg:mx-0">
              Kitchen Hub brings your favorite foods together in one delivery. 
              Mix and match from any of our partner restaurants and enjoy everything 
              in a single order.
            </p>
            <Button variant="hero" size="xl">
              Order Online
            </Button>
          </div>

          {/* Image */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden card-shadow">
              <img
                src={driverImg}
                alt="Kitchen Hub delivery driver"
                className="w-full h-auto"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-secondary/30 to-transparent" />
            </div>
            
            {/* Floating Badge */}
            <div className="absolute -bottom-4 -left-4 lg:-left-8 bg-primary rounded-xl p-4 card-shadow animate-bounce-subtle">
              <p className="font-display text-2xl text-primary-foreground">$0</p>
              <p className="text-xs text-primary-foreground/80 uppercase tracking-wide">Extra Fees</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DeliveryHero;