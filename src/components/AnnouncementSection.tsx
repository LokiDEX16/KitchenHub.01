import featuredImg from "@/assets/featured-dish.jpg";

const AnnouncementSection = () => {
  return (
    <section className="section-padding bg-secondary">
      <div className="container-custom px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div className="relative order-2 lg:order-1">
            <div className="rounded-2xl overflow-hidden card-shadow">
              <img
                src={featuredImg}
                alt="Featured dish - Chocolate Lava Cake"
                className="w-full h-auto"
              />
            </div>
            {/* Decorative element */}
            <div className="absolute -z-10 top-8 left-8 w-full h-full rounded-2xl bg-primary/30" />
          </div>

          {/* Content */}
          <div className="text-center lg:text-left order-1 lg:order-2">
            <p className="text-primary font-semibold uppercase tracking-widest mb-2">Announcement</p>
            <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl text-secondary-foreground mb-6">
              YOUR NEW<br />
              <span className="text-primary">GUILTY PLEASURE</span>
            </h2>
            <p className="text-lg text-secondary-foreground/80 mb-6 max-w-xl mx-auto lg:mx-0">
              Introducing our brand new dessert menu! Indulge in decadent chocolate lava cakes, 
              artisan pastries, and sweet treats from our partner restaurants. 
              Available for delivery now.
            </p>
            <div className="flex items-center gap-4 justify-center lg:justify-start">
              <div className="h-px flex-1 max-w-24 bg-secondary-foreground/20" />
              <span className="text-secondary-foreground/60 text-sm uppercase tracking-wider">Limited Time</span>
              <div className="h-px flex-1 max-w-24 bg-secondary-foreground/20" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AnnouncementSection;
