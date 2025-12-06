import { Button } from "@/components/ui/button";
import gallery1 from "@/assets/gallery-1.jpg";
import gallery2 from "@/assets/gallery-2.jpg";
import gallery3 from "@/assets/gallery-3.jpg";
import gallery4 from "@/assets/gallery-4.jpg";
import gallery5 from "@/assets/gallery-5.jpg";

const galleryImages = [
  { src: gallery1, alt: "Loaded nachos" },
  { src: gallery2, alt: "Fresh sushi platter" },
  { src: gallery3, alt: "Gourmet burger" },
  { src: gallery4, alt: "Acai bowl" },
  { src: gallery5, alt: "Pasta carbonara" },
];

const GallerySection = () => {
  return (
    <section className="section-padding bg-muted overflow-hidden">
      <div className="container-custom px-4 mb-12">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6">
          <div>
            <p className="text-primary font-semibold uppercase tracking-widest mb-2">Food Gallery</p>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl text-foreground">
              We Deliver <span className="text-primary">Happiness</span>
            </h2>
            <p className="text-muted-foreground mt-2 max-w-md">
              Satisfying your cravings just got easier. Browse our mouthwatering selection.
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
              className="flex-shrink-0 w-72 sm:w-80 lg:w-96 aspect-square rounded-2xl overflow-hidden card-shadow group border border-border"
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
        <div className="absolute top-0 left-0 bottom-4 w-8 bg-gradient-to-r from-muted to-transparent pointer-events-none" />
        <div className="absolute top-0 right-0 bottom-4 w-8 bg-gradient-to-l from-muted to-transparent pointer-events-none" />
      </div>
    </section>
  );
};

export default GallerySection;