import { useState } from "react";
import RestaurantCard from "@/components/RestaurantCard";
import MenuPopup from "@/components/MenuPopup";
import { menusWithImages, type Menu } from "@/data/menus";
import indiyasImg from "@/assets/restaurant-indiyas.jpg";
import dosaImg from "@/assets/restaurant-dosa.jpg";
import veganImg from "@/assets/restaurant-vegan.jpg";
import bobaImg from "@/assets/restaurant-boba.jpg";
import halalImg from "@/assets/restaurant-halal.jpg";
import lunchImg from "@/assets/restaurant-lunch.jpg";
import wingsImg from "@/assets/restaurant-wings.jpg";

const atlanticCityRestaurants = [
  { name: "Indiyas", menuKey: "Indiyas", tagline: "Authentic Indian Cuisine", image: indiyasImg },
  { name: "Dosa24", menuKey: "Dosa24", tagline: "South Indian Delights 24/7", image: dosaImg },
  { name: "Vegan15", menuKey: "Vegan15", tagline: "Plant-Based Perfection", image: veganImg },
  { name: "Bobakafe", menuKey: "BobaKafe", tagline: "Bubble Tea & More", image: bobaImg },
];

const tomsRiverRestaurants = [
  { name: "Indiyas", menuKey: "Indiyas", tagline: "Authentic Indian Cuisine", image: indiyasImg },
  { name: "Halal Kitch", menuKey: "HalalKitch", tagline: "Halal Middle Eastern Fare", image: halalImg },
  { name: "Vegan15", menuKey: "Vegan15", tagline: "Plant-Based Perfection", image: veganImg },
  { name: "Dosa24", menuKey: "Dosa24", tagline: "South Indian Delights 24/7", image: dosaImg },
  { name: "Lunch Street", menuKey: "LunchStreet", tagline: "Quick Bites & Sandwiches", image: lunchImg },
  { name: "WingsBowl", menuKey: "WingsBowl", tagline: "Wings Done Right", image: wingsImg },
  { name: "Bobakafe", menuKey: "BobaKafe", tagline: "Bubble Tea & More", image: bobaImg },
];

const RestaurantGrid = () => {
  const [selectedMenu, setSelectedMenu] = useState<Menu | null>(null);

  const openPopup = (restaurant) => {
    setSelectedMenu(menusWithImages[restaurant.menuKey]);
  };

  const closePopup = () => {
    setSelectedMenu(null);
  };

  return (
    <section id="locations" className="py-20 bg-accent">
      <div className="container-custom">
        {/* Atlantic City Section */}
        <div className="mb-20">
          <div className="text-center mb-16">
            <p className="text-primary font-body font-semibold uppercase tracking-widest mb-2">Location 1</p>
            <h2 className="font-display text-5xl sm:text-6xl lg:text-7xl text-secondary">
              ATLANTIC CITY, NJ
            </h2>
            <p className="text-muted-foreground mt-4">1100 Pacific Ave</p>
            <p className="text-muted-foreground">Atlantic City, NJ 08401</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {atlanticCityRestaurants.map((restaurant, index) => (
              <div
                key={`ac-${index}`}
                className="animate-fade-up opacity-0 cursor-pointer"
                style={{ animationDelay: `${index * 0.15}s`, animationFillMode: "forwards" }}
                onClick={() => openPopup(restaurant)}
              >
                <RestaurantCard {...restaurant} />
              </div>
            ))}
          </div>
        </div>

        {/* Toms River Section */}
        <div>
          <div className="text-center mb-16">
            <p className="text-primary font-body font-semibold uppercase tracking-widest mb-2">Location 2</p>
            <h2 className="font-display text-5xl sm:text-6xl lg:text-7xl text-secondary">
              TOMS RIVER, NJ
            </h2>
            <p className="text-muted-foreground mt-4">49 Main Street</p>
            <p className="text-muted-foreground">Toms River, NJ 08753</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {tomsRiverRestaurants.map((restaurant, index) => (
              <div
                key={`tr-${index}`}
                className="animate-fade-up opacity-0 cursor-pointer"
                style={{ animationDelay: `${index * 0.15}s`, animationFillMode: "forwards" }}
                onClick={() => openPopup(restaurant)}
              >
                <RestaurantCard {...restaurant} />
              </div>
            ))}
          </div>
        </div>
      </div>
      {selectedMenu && <MenuPopup menu={selectedMenu} onClose={closePopup} />}
    </section>
  );
};

export default RestaurantGrid;
