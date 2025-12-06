import { Button } from "@/components/ui/button";
import driverImg from "@/assets/delivery-driver.jpg";

const DeliveryHero = () => {
  return (
    <section className="relative py-24 lg:py-32 overflow-hidden bg-secondary">
      <div className="container-custom px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="text-center lg:text-left">
            <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl text-secondary-foreground mb-6 leading-tight">
              MULTIPLE RESTAURANTS.<br />
              <span className="text-primary">ONE ORDER.</span>
            </h2>
            <p className="text-lg text-secondary-foreground/80 mb-8 max-w-xl mx-auto lg:mx-0">
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
              <div className="absolute inset-0 bg-gradient-to-t from-secondary/50 to-transparent" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DeliveryHero;
