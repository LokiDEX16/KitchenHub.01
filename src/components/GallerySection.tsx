import { Button } from "@/components/ui/button";
import snack1 from "@/assets/menu/snacks/Nut_and_seed_crackers_everything_bagel.jpg";
import snack2 from "@/assets/menu/snacks/Nut_and_seed_crackers_tomato_italian_herbs.jpg";
import snack3 from "@/assets/menu/snacks/Nut_and_seed_medley_cheese.jpg";
import snack4 from "@/assets/menu/snacks/Nut_and_seed_medley_everything_bagel.jpg";
import snack5 from "@/assets/menu/snacks/Nut_and_seed_medley_tomato_italian_herbs.jpg";
import snack6 from "@/assets/menu/snacks/Organic_flax_crackers_italian_herbs.jpg";
import snack7 from "@/assets/menu/snacks/Sprouted_Cashews_coffee.jpg";
import snack8 from "@/assets/menu/snacks/Sprouted_pumpkin_seeds_salted.jpg";

const galleryImages = [
  { src: snack1, alt: "Nut and Seed Crackers - Everything Bagel" },
  { src: snack2, alt: "Nut and Seed Crackers - Tomato Italian Herbs" },
  { src: snack3, alt: "Nut and Seed Medley - Cheese" },
  { src: snack4, alt: "Nut and Seed Medley - Everything Bagel" },
  { src: snack5, alt: "Nut and Seed Medley - Tomato Italian Herbs" },
  { src: snack6, alt: "Organic Flax Crackers - Italian Herbs" },
  { src: snack7, alt: "Sprouted Cashews - Coffee" },
  { src: snack8, alt: "Sprouted Pumpkin Seeds - Salted" },
];

const GallerySection = () => {
  return (
    <section className="section-padding bg-background overflow-hidden">
      <div className="container-custom px-4 mb-12">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6">
          <div>
            <p className="text-primary font-semibold uppercase tracking-widest mb-2">Snack Gallery</p>
            <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl">
              HEALTHY SNACKS
            </h2>
            <p className="text-muted-foreground mt-2 max-w-md">
              Discover our selection of organic, nutritious snacks perfect for any time of day.
            </p>
          </div>
          <Button variant="hero" size="lg">
            Order Online
          </Button>
        </div>
      </div>

      {/* Horizontal Scrolling Gallery */}
      <div className="relative">
        <div className="flex gap-6 overflow-x-auto scrollbar-hide pb-4 px-4 lg:px-8">
          {galleryImages.map((image, index) => (
            <div
              key={index}
              className="flex-shrink-0 w-72 sm:w-80 lg:w-96 aspect-square rounded-2xl overflow-hidden card-shadow group"
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
            </div>
          ))}
        </div>

        {/* Gradient Overlays */}
        <div className="absolute top-0 left-0 bottom-4 w-8 bg-gradient-to-r from-background to-transparent pointer-events-none" />
        <div className="absolute top-0 right-0 bottom-4 w-8 bg-gradient-to-l from-background to-transparent pointer-events-none" />
      </div>
    </section>
  );
};

export default GallerySection;
