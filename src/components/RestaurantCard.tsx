import { Button } from "@/components/ui/button";

interface RestaurantCardProps {
  name: string;
  tagline: string;
  image: string;
}

const RestaurantCard = ({ name, tagline, image }: RestaurantCardProps) => {
  return (
    <div className="group relative bg-card rounded-2xl overflow-hidden card-shadow hover:card-shadow-hover transition-all duration-300 hover:-translate-y-2">
      {/* Image */}
      <div className="aspect-square overflow-hidden">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
      </div>
      
      {/* Content */}
      <div className="p-5">
        <h3 className="font-display text-xl mb-1">{name}</h3>
        <p className="text-sm text-muted-foreground mb-4">{tagline}</p>
        <Button variant="default" size="sm" className="w-full">
          Order Now
        </Button>
      </div>

      {/* Hover Overlay */}
      <div className="absolute inset-0 bg-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
    </div>
  );
};

export default RestaurantCard;
