import { Smartphone, Truck, MapPin } from "lucide-react";

const features = [
  {
    icon: Smartphone,
    title: "Order Anywhere",
    description: "Pick and mix from multiple restaurants with our easy-to-use app and website.",
  },
  {
    icon: Truck,
    title: "Fast Delivery",
    description: "One order. One delivery fee. Get all your favorites delivered together.",
  },
  {
    icon: MapPin,
    title: "Pickup Options",
    description: "Prefer to pick up? Curbside pickup options available at all locations.",
  },
];

const FeaturesSection = () => {
  return (
    <section className="section-padding bg-card">
      <div className="container-custom px-4">
        <div className="text-center mb-16">
          <p className="text-primary font-semibold uppercase tracking-widest mb-2">How It Works</p>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl text-foreground">
            All Your Cravings<br />
            <span className="text-primary">In One Delivery</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="text-center p-8 rounded-2xl bg-accent/50 hover:bg-accent transition-all duration-300 hover:-translate-y-2 group border border-border"
            >
              <div className="w-20 h-20 mx-auto mb-6 bg-primary rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <feature.icon size={36} className="text-primary-foreground" />
              </div>
              <h3 className="font-display text-2xl mb-3 text-foreground">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;