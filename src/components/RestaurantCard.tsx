import { Button } from "@/components/ui/button";

interface RestaurantCardProps {
  name: string;
  tagline: string;
  image: string;
}

const RestaurantCard = ({ name, tagline, image }: RestaurantCardProps) => {
  return (
    <div className="group relative bg-neutral-white rounded-xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300 hover:-translate-y-1">
      {/* Image */}
      <div className="aspect-w-1 aspect-h-1 overflow-hidden">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>
      
      {/* Content */}
      <div className="p-5 text-center">
        <h3 className="font-display text-2xl text-secondary mb-2">{name}</h3>
        <p className="font-body text-sm text-foreground/70 mb-4 h-10">{tagline}</p>
        <Button variant="secondary" size="lg" className="w-full">
          View Menu
        </Button>
      </div>

      {/* Hover Overlay */}
      <div className="absolute inset-0 bg-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
    </div>
  );
};

export default RestaurantCard;
