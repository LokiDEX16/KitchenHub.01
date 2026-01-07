import { Button } from "@/components/ui/button";

interface RestaurantCardProps {
  name: string;
  tagline: string;
  image: string;
}

const RestaurantCard = ({ name, tagline, image }: RestaurantCardProps) => {
  return (
    <div className="group relative flex overflow-hidden rounded-xl bg-neutral-white shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl sm:flex-col">
      {/* Image */}
      <div className="relative h-24 w-24 shrink-0 overflow-hidden sm:h-auto sm:w-full sm:aspect-w-1 sm:aspect-h-1">
        <img
          src={image}
          alt={name}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>
      
      {/* Content */}
      <div className="flex flex-1 flex-col p-4 text-left sm:p-5 sm:text-center">
        <h3 className="font-display text-2xl text-secondary mb-2">{name}</h3>
        <p className="font-body text-sm text-foreground/70 mb-4 sm:h-10">{tagline}</p>
        <Button variant="secondary" size="lg" className="mt-auto w-full">
          View Menu
        </Button>
      </div>

      {/* Hover Overlay */}
      <div className="absolute inset-0 bg-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
    </div>
  );
};

export default RestaurantCard;
