import featuredImg from "@/assets/featured-dish.jpg";

const AnnouncementSection = () => {
  return (
    <section className="section-padding bg-gradient-to-br from-primary via-primary to-primary/80">
      <div className="container-custom px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div className="relative order-2 lg:order-1">
            <div className="rounded-2xl overflow-hidden card-shadow bg-card">
              <img
                src={featuredImg}
                alt="Featured dish - Chocolate Lava Cake"
                className="w-full h-auto"
              />
            </div>
            {/* Decorative element */}
            <div className="absolute -z-10 top-8 left-8 w-full h-full rounded-2xl bg-secondary/20" />
          </div>

          {/* Content */}
          <div className="text-center lg:text-left order-1 lg:order-2">
            <p className="text-secondary font-semibold uppercase tracking-widest mb-2">Announcement</p>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl text-secondary mb-6">
              Your New<br />
              <span className="text-secondary-foreground drop-shadow-lg">Guilty Pleasure</span>
            </h2>
            <p className="text-lg text-secondary/90 mb-6 max-w-xl mx-auto lg:mx-0">
              Introducing our brand new dessert menu! Indulge in decadent chocolate lava cakes, 
              artisan pastries, and sweet treats from our partner restaurants. 
              Available for delivery now.
            </p>
            <div className="flex items-center gap-4 justify-center lg:justify-start">
              <div className="h-px flex-1 max-w-24 bg-secondary/30" />
              <span className="text-secondary/80 text-sm uppercase tracking-wider">Limited Time</span>
              <div className="h-px flex-1 max-w-24 bg-secondary/30" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AnnouncementSection;