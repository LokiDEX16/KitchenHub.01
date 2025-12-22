import { useEffect, useMemo, useState } from "react";
import { MapPin, Search, UtensilsCrossed, X } from "lucide-react";

import { menusWithImages, type Menu } from "@/data/menus";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import dosaImg from "@/assets/restaurant-dosa.jpg";
import veganImg from "@/assets/restaurant-vegan.jpg";
import bobaImg from "@/assets/restaurant-boba.jpg";
import halalImg from "@/assets/restaurant-halal.jpg";
import lunchImg from "@/assets/restaurant-lunch.jpg";
import wingsImg from "@/assets/restaurant-wings.jpg";
import indiyasImg from "@/assets/restaurant-indiyas.jpg";
import kitchenHubLogo from "@/assets/kitchen-hub-logo.png";

type RestaurantMeta = {
  location: string;
  hours: string;
  highlight: string;
};

const restaurantImages: Record<string, string> = {
  Indiyas: indiyasImg,
  Dosa24: dosaImg,
  Vegan15: veganImg,
  BobaKafe: bobaImg,
  HalalKitch: halalImg,
  LunchStreet: lunchImg,
  WingsBowl: wingsImg,
};

const restaurantMeta: Record<string, RestaurantMeta> = {
  Indiyas: {
    location: "Atlantic City",
    hours: "Daily · 10am – 10pm",
    highlight: "Spiced curries and sizzling tandoor favorites",
  },
  Dosa24: {
    location: "Toms River",
    hours: "Daily · 8am – 11pm",
    highlight: "Crispy dosas and hearty South Indian staples",
  },
  Vegan15: {
    location: "Atlantic City",
    hours: "Wed–Mon · 11am – 9pm",
    highlight: "Plant-based comfort food with local produce",
  },
  BobaKafe: {
    location: "Toms River",
    hours: "Daily · 11am – 11pm",
    highlight: "Artisan bubble tea and sweet bites",
  },
  HalalKitch: {
    location: "Toms River",
    hours: "Daily · 11am – 10pm",
    highlight: "Char-grilled halal classics and mezze",
  },
  LunchStreet: {
    location: "Toms River",
    hours: "Weekdays · 10am – 6pm",
    highlight: "Stacked sandwiches and smart lunch combos",
  },
  WingsBowl: {
    location: "Toms River",
    hours: "Thu–Sun · 2pm – Midnight",
    highlight: "Loaded wings and gameday snacks",
  },
};

type RestaurantEntry = {
  key: string;
  menu: Menu;
  meta: RestaurantMeta;
  image: string;
};

const buildRestaurantEntries = (): RestaurantEntry[] => {
  return Object.entries(menusWithImages).map(([key, menu]) => {
    const meta = restaurantMeta[key] ?? {
      location: "New Jersey",
      hours: "Daily · 10am – 10pm",
      highlight: "Chef specials crafted for any occasion",
    };

    return {
      key,
      menu: menu as RestaurantMenu,
      meta,
      image: restaurantImages[key] ?? kitchenHubLogo,
    };
  });
};

type OrderNowPopupProps = {
  onClose: () => void;
};

const OrderNowPopup = ({ onClose }: OrderNowPopupProps) => {
  const [activeRestaurant, setActiveRestaurant] = useState<string>("All");
  const [query, setQuery] = useState("");

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
    };
    document.body.classList.add("overflow-hidden");
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.classList.remove("overflow-hidden");
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [onClose]);

  const restaurantEntries = useMemo(() => buildRestaurantEntries(), []);

  const restaurantTabs = useMemo(
    () => ["All", ...restaurantEntries.map((entry) => entry.key)],
    [restaurantEntries],
  );

  const normalizedQuery = query.trim().toLowerCase();

  const filteredRestaurants = useMemo(() => {
    return restaurantEntries
      .filter((entry) => activeRestaurant === "All" || entry.key === activeRestaurant)
      .map((entry) => {
        const categories = entry.menu.categories
          .map((category) => {
            const items = category.items.filter((item) => {
              if (!normalizedQuery) return true;
              const haystack = `${item.name} ${item.description ?? ""}`.toLowerCase();
              return haystack.includes(normalizedQuery);
            });
            return { ...category, items };
          })
          .filter((category) => category.items.length > 0);

        return { ...entry, categories };
      })
      .filter((entry) => entry.categories.length > 0);
  }, [restaurantEntries, activeRestaurant, normalizedQuery]);

  const totalItems = filteredRestaurants.reduce(
    (count, entry) => count + entry.categories.reduce((c, category) => c + category.items.length, 0),
    0,
  );

  const handleOverlayClick = (event: React.MouseEvent<HTMLDivElement>) => {
    if (event.target === event.currentTarget) {
      onClose();
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center px-4 py-6 sm:px-6" onClick={handleOverlayClick}>
      <div className="absolute inset-0 bg-black/60 backdrop-blur" />

      <div
        role="dialog"
        aria-modal="true"
        aria-label="Kitchen Hub full menu"
        className="relative z-10 flex h-full w-full max-w-6xl flex-col overflow-hidden rounded-3xl bg-[#F6E7CE] shadow-2xl animate-slide-up sm:h-[94vh]"
      >
        <div className="border-b border-border bg-[#F6E7CE]/95 px-5 py-4 sm:px-10">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-muted-foreground">Curated by chefs</p>
              <h2 className="font-display text-4xl text-secondary">Our Full Menu</h2>
              <p className="text-sm text-secondary">
                Browse every restaurant in the Kitchen Hub family. Tap a category, search dishes, and plan your order.
              </p>
            </div>
            <Button
              variant="ghost"
              size="icon"
              aria-label="Close menu"
              onClick={onClose}
              className="self-start rounded-full border border-transparent transition hover:border-primary"
            >
              <X className="h-5 w-5" />
            </Button>
          </div>

          <div className="mt-6 flex flex-col gap-3 lg:flex-row lg:items-center">
            <div className="relative flex-1">
              <Search className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
              <input
                className="w-full rounded-full border border-border bg-white/80 py-2.5 pl-11 pr-16 text-sm font-medium text-secondary placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/30"
                placeholder="Search dishes, categories, or ingredients"
                value={query}
                onChange={(event) => setQuery(event.target.value)}
              />
              {query && (
                <button
                  type="button"
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-xs font-semibold uppercase text-primary"
                  onClick={() => setQuery("")}
                >
                  Clear
                </button>
              )}
            </div>
            <Badge variant="secondary" className="w-full justify-center rounded-full bg-primary/10 text-primary lg:w-auto">
              {totalItems} {totalItems === 1 ? "item" : "items"} ready to order
            </Badge>
          </div>

          <div className="mt-4 flex snap-x gap-2 overflow-x-auto pb-2" role="tablist" aria-label="Restaurants">
            {restaurantTabs.map((tabKey) => {
              const entry = restaurantEntries.find((r) => r.key === tabKey);
              const label = tabKey === "All" ? "All Restaurants" : entry?.menu.restaurantName ?? tabKey;

              return (
                <button
                  key={tabKey}
                  type="button"
                  role="tab"
                  aria-selected={activeRestaurant === tabKey}
                  className={cn(
                    "whitespace-nowrap rounded-full border px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/50",
                    activeRestaurant === tabKey
                      ? "border-primary bg-primary text-neutral-white shadow"
                      : "border-border/80 bg-white text-secondary hover:border-primary/50",
                  )}
                  onClick={() => setActiveRestaurant(tabKey)}
                >
                  {label}
                </button>
              );
            })}
          </div>
        </div>

        <div className="flex-1 overflow-y-auto px-5 py-6 sm:px-10">
          {filteredRestaurants.length === 0 ? (
            <div className="flex h-full flex-col items-center justify-center gap-3 text-center text-secondary">
              <UtensilsCrossed className="h-12 w-12 text-primary" />
              <p className="text-lg font-semibold">No dishes match your search</p>
              <p className="text-sm text-muted-foreground">Reset your filters or try a different keyword.</p>
            </div>
          ) : (
            filteredRestaurants.map((entry) => (
              <div key={entry.key} className="mb-12 last:mb-0">
                <div className="flex flex-col gap-4 rounded-2xl border border-border/70 bg-white/80 p-5 shadow-sm sm:flex-row sm:items-center">
                  <img
                    src={entry.image}
                    alt={entry.menu.restaurantName}
                    className="h-20 w-20 rounded-2xl object-cover shadow-inner ring-2 ring-primary/30"
                  />
                  <div className="flex-1">
                    <p className="text-xs font-semibold uppercase tracking-[0.3em] text-muted-foreground">Restaurant</p>
                    <h3 className="font-display text-3xl text-secondary">{entry.menu.restaurantName}</h3>
                    <p className="text-sm text-muted-foreground">{entry.meta.highlight}</p>
                    <div className="mt-3 flex flex-wrap gap-3 text-xs font-semibold uppercase tracking-[0.2em] text-secondary">
                      <span className="inline-flex items-center gap-1 rounded-full bg-accent px-3 py-1">
                        <MapPin className="h-3 w-3" />
                        {entry.meta.location}
                      </span>
                      <span className="rounded-full bg-accent px-3 py-1">{entry.meta.hours}</span>
                    </div>
                  </div>
                  <Button
                    variant="hero"
                    size="lg"
                    className="w-full sm:w-auto"
                    onClick={() => {
                      setActiveRestaurant(entry.key);
                      setQuery("");
                    }}
                  >
                    View {entry.menu.restaurantName}
                  </Button>
                </div>

                <div className="mt-8 space-y-10">
                  {entry.categories.map((category) => (
                    <div key={`${entry.key}-${category.name}`}>
                      <div className="mb-4 flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
                        <div>
                          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-muted-foreground">Category</p>
                          <h4 className="font-display text-2xl text-secondary">{category.name}</h4>
                          {category.description && <p className="text-sm text-muted-foreground">{category.description}</p>}
                        </div>
                        <Badge variant="secondary" className="self-start bg-secondary text-neutral-white">
                          {category.items.length} {category.items.length === 1 ? "item" : "items"}
                        </Badge>
                      </div>

                      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-3">
                        {category.items.map((item) => (
                          <article
                            key={`${entry.key}-${category.name}-${item.name}`}
                            className="flex flex-col rounded-2xl border border-border/60 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
                          >
                            <div className="flex flex-1 flex-col gap-3 p-4">
                              <div className="flex items-start justify-between gap-3">
                                <div>
                                  <h5 className="text-lg font-semibold text-secondary">{item.name}</h5>
                                  {item.description && <p className="text-sm text-muted-foreground">{item.description}</p>}
                                </div>
                                <span className="text-sm font-bold text-primary">{item.price}</span>
                              </div>
                              <Button
                                variant="outline"
                                size="sm"
                                className="mt-4 w-full border-dashed text-primary hover:bg-primary/10"
                                onClick={() => {
                                  setActiveRestaurant(entry.key);
                                  setQuery(item.name);
                                }}
                              >
                                Highlight dish
                              </Button>
                            </div>
                          </article>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))
          )}
        </div>

        <div className="border-t border-border bg-[#F6E7CE]/95 px-5 py-4 sm:px-10">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <p className="text-sm text-secondary">
              Ready to reserve your order? Share your selections and we&apos;ll coordinate the pickup or delivery window.
            </p>
            <Button asChild variant="hero" size="lg" className="w-full sm:w-auto" onClick={onClose}>
              <a href="#contact">Contact Kitchen Hub</a>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderNowPopup;
