import { useEffect, useMemo, useState } from "react";
import { Search, UtensilsCrossed, X } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

type MenuItem = {
  name: string;
  price: string;
  description?: string;
  image?: string;
};

type MenuCategory = {
  name: string;
  description?: string;
  items: MenuItem[];
};

type Menu = {
  restaurantName: string;
  categories: MenuCategory[];
};

type MenuPopupProps = {
  menu: Menu | null;
  onClose: () => void;
};

const MenuPopup = ({ menu, onClose }: MenuPopupProps) => {
  const [activeCategory, setActiveCategory] = useState("All");
  const [query, setQuery] = useState("");

  useEffect(() => {
    setActiveCategory("All");
    setQuery("");
  }, [menu]);

  useEffect(() => {
    if (!menu) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    document.body.classList.add("overflow-hidden");
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.classList.remove("overflow-hidden");
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [menu, onClose]);

  const categories = useMemo(() => menu?.categories ?? [], [menu]);
  const normalizedQuery = query.trim().toLowerCase();

  const categoryOptions = useMemo(() => ["All", ...categories.map((category) => category.name)], [categories]);

  const filteredCategories = useMemo(() => {
    return categories
      .filter((category) => activeCategory === "All" || category.name === activeCategory)
      .map((category) => {
        const items = category.items.filter((item) => {
          if (!normalizedQuery) return true;
          const haystack = `${item.name} ${item.description ?? ""}`.toLowerCase();
          return haystack.includes(normalizedQuery);
        });
        return { ...category, items };
      })
      .filter((category) => category.items.length > 0);
  }, [categories, activeCategory, normalizedQuery]);

  const totalResults = filteredCategories.reduce((count, category) => count + category.items.length, 0);

  const handleOverlayClick = (event: React.MouseEvent<HTMLDivElement>) => {
    if (event.target === event.currentTarget) {
      onClose();
    }
  };

  if (!menu) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center px-4 py-6 sm:px-6" onClick={handleOverlayClick}>
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" />

      <div
        role="dialog"
        aria-modal="true"
        aria-label={`${menu.restaurantName} menu`}
        className="relative z-10 flex h-full w-full max-w-4xl flex-col overflow-hidden rounded-3xl bg-[#F6E7CE] shadow-2xl animate-slide-up sm:h-[90vh]"
      >
        <div className="flex flex-col gap-4 border-b border-border bg-[#F6E7CE]/95 px-5 py-4 sm:px-8">
          <div className="flex items-start justify-between gap-3">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">Menu</p>
              <h2 className="font-display text-3xl text-secondary">{menu.restaurantName}</h2>
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-muted-foreground">
                {totalResults} {totalResults === 1 ? "item" : "items"} available
              </p>
            </div>
            <Button
              variant="ghost"
              size="icon"
              aria-label="Close menu"
              onClick={onClose}
              className="shrink-0 rounded-full border border-transparent hover:border-primary"
            >
              <X className="h-5 w-5" />
            </Button>
          </div>

          <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
            <div className="relative flex-1">
              <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
              <input
                value={query}
                onChange={(event) => setQuery(event.target.value)}
                placeholder="Search dishes or ingredients"
                className="w-full rounded-full border border-border bg-white/80 py-2 pl-10 pr-16 text-sm font-medium text-secondary placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/40"
              />
              {query && (
                <button
                  type="button"
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-xs font-semibold uppercase text-primary"
                  onClick={() => setQuery("")}
                >
                  Clear
                </button>
              )}
            </div>
            <span className="text-xs font-semibold uppercase tracking-[0.3em] text-muted-foreground">
              {activeCategory === "All" ? "All categories" : activeCategory}
            </span>
          </div>

          <div className="flex gap-2 overflow-x-auto pb-1" role="tablist" aria-label="Menu categories">
            {categoryOptions.map((categoryName) => (
              <button
                key={categoryName}
                type="button"
                role="tab"
                aria-selected={activeCategory === categoryName}
                onClick={() => setActiveCategory(categoryName)}
                className={cn(
                  "whitespace-nowrap rounded-full border px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/50",
                  activeCategory === categoryName
                    ? "border-primary bg-primary text-neutral-white shadow-sm"
                    : "border-border/80 bg-white text-secondary hover:border-primary/50",
                )}
              >
                {categoryName}
              </button>
            ))}
          </div>
        </div>

        <div className="flex-1 overflow-y-auto px-5 py-6 sm:px-8">
          {filteredCategories.length === 0 ? (
            <div className="flex h-full flex-col items-center justify-center gap-3 text-center text-secondary">
              <UtensilsCrossed className="h-10 w-10 text-primary" />
              <p className="text-lg font-semibold">No dishes found</p>
              <p className="text-sm text-muted-foreground">Try another search term or select a different category.</p>
            </div>
          ) : (
            filteredCategories.map((category) => (
              <div key={category.name} className="mb-10 last:mb-0">
                <div className="mb-4 flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
                  <div>
                    <h3 className="font-display text-2xl text-secondary">{category.name}</h3>
                    {category.description && <p className="text-sm text-muted-foreground">{category.description}</p>}
                  </div>
                  <Badge variant="secondary" className="self-start bg-primary/10 text-primary">
                    {category.items.length} {category.items.length === 1 ? "dish" : "dishes"}
                  </Badge>
                </div>

                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  {category.items.map((item) => (
                    <div
                      key={`${category.name}-${item.name}`}
                      className="flex flex-row rounded-2xl border border-border/60 bg-white/90 shadow-sm transition hover:-translate-y-1 hover:shadow-lg sm:flex-col"
                    >
                      {item.image && (
                        <div className="flex h-24 w-24 shrink-0 items-center justify-center rounded-l-2xl bg-white ring-1 ring-border/60 sm:h-40 sm:w-full sm:rounded-l-none sm:rounded-t-2xl">
                          <img src={item.image} alt={item.name} className="max-h-full max-w-full object-contain" />
                        </div>
                      )}
                      <div className="flex flex-1 flex-col gap-3 p-4">
                        <div className="flex items-start justify-between gap-2">
                          <div>
                            <h4 className="font-semibold text-secondary">{item.name}</h4>
                            {item.description && <p className="text-sm text-muted-foreground">{item.description}</p>}
                          </div>
                          <span className="text-sm font-semibold text-primary">{item.price}</span>
                        </div>
                        <Button
                          variant="outline"
                          size="sm"
                          className="mt-auto w-full border-dashed text-primary hover:bg-primary/10"
                          onClick={() => {
                            setActiveCategory(category.name);
                            setQuery("");
                          }}
                        >
                          View full category
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))
          )}
        </div>

        <div className="border-t border-border bg-[#F6E7CE]/95 px-5 py-4 sm:px-8">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <p className="text-sm text-secondary">
              Ready to order? Jump to our contact section and one of our chefs will confirm the details with you.
            </p>
            <Button
              asChild
              variant="hero"
              size="lg"
              className="w-full sm:w-auto"
              onClick={() => {
                onClose();
              }}
            >
              <a href="#contact">Plan Your Order</a>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MenuPopup;
