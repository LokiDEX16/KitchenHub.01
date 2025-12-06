import { Button } from "@/components/ui/button";

interface RestaurantCardProps {
  name: string;
  tagline: string;
  image: string;
  isLogo?: boolean;
}

const RestaurantCard = ({ name, tagline, image, isLogo = false }: RestaurantCardProps) => {
  return (
    <div className="group relative bg-card rounded-2xl overflow-hidden card-shadow hover:card-shadow-hover transition-all duration-300 hover:-translate-y-2 border border-border">
      {/* Image/Logo Container */}
      <div className={`aspect-square overflow-hidden flex items-center justify-center ${isLogo ? 'bg-card p-6' : 'bg-muted'}`}>
        <img
          src={image}
          alt={name}
          className={`transition-transform duration-500 group-hover:scale-105 ${isLogo ? 'w-full h-full object-contain' : 'w-full h-full object-cover'}`}
        />
      </div>
      
      {/* Content */}
      <div className="p-5 bg-accent/30">
        <h3 className="font-display text-xl mb-1 text-foreground">{name}</h3>
        <p className="text-sm text-muted-foreground mb-4">{tagline}</p>
        <Button variant="hero" size="sm" className="w-full">
          Order Now
        </Button>
      </div>

      {/* Hover Overlay */}
      <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
    </div>
  );
};

export default RestaurantCard;