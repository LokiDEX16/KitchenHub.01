import { X } from 'lucide-react';
import { menus } from '@/data/menus';
import dosaImg from "@/assets/restaurant-dosa.jpg";
import veganImg from "@/assets/restaurant-vegan.jpg";
import bobaImg from "@/assets/restaurant-boba.jpg";
import halalImg from "@/assets/restaurant-halal.jpg";
import lunchImg from "@/assets/restaurant-lunch.jpg";
import wingsImg from "@/assets/restaurant-wings.jpg";
import indiyasImg from "@/assets/restaurant-indiyas.jpg";

const restaurantImages = {
  Indiyas: indiyasImg,
  Dosa24: dosaImg,
  Vegan15: veganImg,
  BobaKafe: bobaImg,
  HalalKitch: halalImg,
  LunchStreet: lunchImg,
  WingsBowl: wingsImg,
};

const OrderNowPopup = ({ onClose }) => {
  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  const allMenus = Object.entries(menus);

  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 animate-fade-in"
      onClick={handleOverlayClick}
    >
      <div className="bg-[#F6E7CE] rounded-lg shadow-lg max-w-5xl w-full max-h-[90vh] overflow-y-auto m-4 animate-slide-up">
        <div className="sticky top-0 bg-[#F6E7CE] p-4 border-b border-gray-300 flex justify-between items-center">
          <h2 className="text-2xl font-bold font-display text-secondary">Our Full Menu</h2>
          <button onClick={onClose} className="text-secondary hover:text-primary">
            <X size={24} />
          </button>
        </div>
        <div className="p-6">
          {allMenus.map(([key, menu]) => (
            <div key={key} className="mb-12">
               <div className="flex items-center mb-6">
                <img src={restaurantImages[key]} alt={menu.restaurantName} className="w-20 h-20 rounded-full mr-6" />
                <h2 className="text-4xl font-bold font-display text-primary">{menu.restaurantName}</h2>
              </div>
              {menu.categories.map((category, categoryIndex) => (
                <div key={categoryIndex} className="mb-8">
                  <h3 className="text-2xl font-bold text-primary mb-4 font-display border-b-2 border-primary pb-2">{category.name}</h3>
                  {category.description && <p className="text-md text-secondary mb-4">{category.description}</p>}
                  <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                    {category.items.map((item, itemIndex) => (
                      <div key={itemIndex} className="bg-white rounded-lg shadow-md overflow-hidden transform hover:scale-105 transition-transform duration-300">
                        {item.image && <img src={item.image} alt={item.name} className="w-full h-40 object-cover" />}
                        <div className="p-4">
                            <h4 className="font-semibold text-lg text-secondary">{item.name}</h4>
                            <p className="text-primary font-bold text-lg">{item.price}</p>
                            {item.description && <p className="text-sm text-secondary mt-2">{item.description}</p>}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default OrderNowPopup;
