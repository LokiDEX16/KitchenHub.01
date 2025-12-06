import { Button } from "@/components/ui/button";
import vegan15Logo from "@/assets/restaurant-vegan.jpg";
import indiyasLogo from "@/assets/restaurant-indiyas.jpg";
import dosa24Logo from "@/assets/restaurant-dosa.jpg";
import bobaKafeLogo from "@/assets/restaurant-boba.jpg";
import halalLogo from "@/assets/restaurant-halal.jpg";

const partnerRestaurants = [
  {
    name: "Vegan 15",
    logo: vegan15Logo,
    website: "https://www.vegan15.com", // Replace with actual URL
  },
  {
    name: "Indiyas - Curry It Your Way",
    logo: indiyasLogo,
    website: "https://www.indiyas.com", // Replace with actual URL
  },
  {
    name: "Dosa24",
    logo: dosa24Logo,
    website: "https://www.dosa24.com", // Replace with actual URL
  },
  {
    name: "Boba Kafe",
    logo: bobaKafeLogo,
    website: "https://www.bobakafe.com", // Replace with actual URL
  },
  {
    name: "Halal Grill",
    logo: halalLogo,
    website: "https://www.halalgrill.com", // Replace with actual URL
  },
];

const PartnerRestaurants = () => {
  return (
    <section id="restaurants" className="py-20 bg-accent">
      <div className="container-custom">
        <h2 className="text-5xl font-display text-center mb-16 text-secondary">
          Our Partner Restaurants
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8">
          {partnerRestaurants.map((restaurant) => (
            <div
              key={restaurant.name}
              className="bg-neutral-white rounded-xl shadow-lg p-6 flex flex-col items-center text-center transition-transform duration-300 hover:scale-105 hover:shadow-2xl"
            >
              <div className="w-40 h-40 mb-6 rounded-full overflow-hidden shadow-inner">
                <img
                  src={restaurant.logo}
                  alt={`${restaurant.name} Logo`}
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-2xl font-body font-bold text-secondary mb-4 h-16 flex items-center justify-center">
                {restaurant.name}
              </h3>
              <a href={restaurant.website} target="_blank" rel="noopener noreferrer">
                <Button variant="hero" size="lg">Order Now</Button>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PartnerRestaurants;
