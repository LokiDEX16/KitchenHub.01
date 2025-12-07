
import { X } from 'lucide-react';

const MenuPopup = ({ menu, onClose }) => {
  if (!menu) return null;

  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 animate-fade-in"
      onClick={handleOverlayClick}
    >
      <div className="bg-[#F6E7CE] rounded-lg shadow-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto m-4 animate-slide-up">
        <div className="sticky top-0 bg-[#F6E7CE] p-4 border-b border-gray-300 flex justify-between items-center">
          <h2 className="text-2xl font-bold font-display text-secondary">{menu.restaurantName}</h2>
          <button onClick={onClose} className="text-secondary hover:text-primary">
            <X size={24} />
          </button>
        </div>
        <div className="p-6">
          {menu.categories.map((category, index) => (
            <div key={index} className="mb-6">
              <h3 className="text-xl font-bold text-primary mb-2 font-display">{category.name}</h3>
              {category.description && <p className="text-sm text-secondary mb-4">{category.description}</p>}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {category.items.map((item, itemIndex) => (
                  <div key={itemIndex} className="border border-gray-300 rounded-lg p-4">
                    <h4 className="font-semibold text-secondary">{item.name}</h4>
                    <p className="text-primary font-bold">{item.price}</p>
                    {item.description && <p className="text-sm text-secondary mt-1">{item.description}</p>}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MenuPopup;
