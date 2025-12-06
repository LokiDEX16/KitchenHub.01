import { Smartphone, Truck, MapPin } from "lucide-react";

const features = [
  {
    icon: Smartphone,
    title: "Order From Anywhere",
    description: "Pick and mix from multiple restaurants with our easy-to-use app and website.",
  },
  {
    icon: Truck,
    title: "Doorstep Delivery",
    description: "One order. One delivery fee. Get all your favorites delivered together.",
  },
  {
    icon: MapPin,
    title: "Curbside Pickup",
    description: "Prefer to pick up? Curbside pickup options available at all locations.",
  },
];

const FeaturesSection = () => {
  return (
    <section className="section-padding bg-background">
      <div className="container-custom px-4">
        <div className="text-center mb-16">
          <p className="text-primary font-semibold uppercase tracking-widest mb-2">How It Works</p>
          <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl">
            ALL YOUR CRAVINGS<br />
            <span className="text-primary">IN ONE DELIVERY</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="text-center p-8 rounded-2xl bg-muted hover:bg-muted/80 transition-all duration-300 hover:-translate-y-2 group"
            >
              <div className="w-20 h-20 mx-auto mb-6 bg-primary rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <feature.icon size={36} className="text-primary-foreground" />
              </div>
              <h3 className="font-display text-2xl mb-3">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
