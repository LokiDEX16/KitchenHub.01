import RestaurantCard from "@/components/RestaurantCard";
import indiyasImg from "@/assets/restaurant-indiyas.jpg";
import dosaImg from "@/assets/restaurant-dosa.jpg";
import veganImg from "@/assets/restaurant-vegan.jpg";
import bobaImg from "@/assets/restaurant-boba.jpg";
import halalImg from "@/assets/restaurant-halal.jpg";
import lunchImg from "@/assets/restaurant-lunch.jpg";
import wingsImg from "@/assets/restaurant-wings.jpg";

const atlanticCityRestaurants = [
  { name: "Indiyas", tagline: "Authentic Indian Cuisine", image: indiyasImg },
  { name: "Dosa24", tagline: "South Indian Delights 24/7", image: dosaImg },
  { name: "Vegan15", tagline: "Plant-Based Perfection", image: veganImg },
  { name: "Bobakafe", tagline: "Bubble Tea & More", image: bobaImg },
];

const tomsRiverRestaurants = [
  { name: "Indiyas", tagline: "Authentic Indian Cuisine", image: indiyasImg },
  { name: "Halal Kitch", tagline: "Halal Middle Eastern Fare", image: halalImg },
  { name: "Vegan15", tagline: "Plant-Based Perfection", image: veganImg },
  { name: "Dosa24", tagline: "South Indian Delights 24/7", image: dosaImg },
  { name: "Lunch Street", tagline: "Quick Bites & Sandwiches", image: lunchImg },
  { name: "WingsBowl", tagline: "Wings Done Right", image: wingsImg },
  { name: "Bobakafe", tagline: "Bubble Tea & More", image: bobaImg },
];

const RestaurantGrid = () => {
  return (
    <section id="locations" className="section-padding bg-muted">
      <div className="container-custom">
        {/* Atlantic City Section */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <p className="text-primary font-semibold uppercase tracking-widest mb-2">Location 1</p>
            <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl">
              ATLANTIC CITY, NJ
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {atlanticCityRestaurants.map((restaurant, index) => (
              <div
                key={`ac-${index}`}
                className="animate-fade-up opacity-0"
                style={{ animationDelay: `${index * 0.1}s`, animationFillMode: "forwards" }}
              >
                <RestaurantCard {...restaurant} />
              </div>
            ))}
          </div>
        </div>

        {/* Toms River Section */}
        <div>
          <div className="text-center mb-12">
            <p className="text-primary font-semibold uppercase tracking-widest mb-2">Location 2</p>
            <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl">
              TOMS RIVER, NJ
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {tomsRiverRestaurants.map((restaurant, index) => (
              <div
                key={`tr-${index}`}
                className="animate-fade-up opacity-0"
                style={{ animationDelay: `${index * 0.1}s`, animationFillMode: "forwards" }}
              >
                <RestaurantCard {...restaurant} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default RestaurantGrid;
