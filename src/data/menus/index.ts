import { vegan15Menu } from "./vegan15";
import { bobaKafeMenu } from "./bobaKafe";
import { indiyasVegMenu } from "./indiyasVeg";
import { dosa24Menu } from "./dosa24";
import { resolveMenuImage } from "../menuImages";

export type MenuItem = {
  name: string;
  price: string;
  description?: string;
  image?: string;
};

export type MenuCategory = {
  name: string;
  description?: string;
  items: MenuItem[];
};

export type Menu = {
  restaurantName: string;
  categories: MenuCategory[];
};

export type MenuMap = Record<string, Menu>;

export const menus: MenuMap = {
  Indiyas: indiyasVegMenu,
  Vegan15: vegan15Menu,
  Dosa24: dosa24Menu,
  BobaKafe: bobaKafeMenu,
};

const resolveMenuAssets = (menu: Menu): Menu => ({
  ...menu,
  categories: menu.categories.map((category) => ({
    ...category,
    items: category.items.map((item) => ({
      ...item,
      image: resolveMenuImage(item.image),
    })),
  })),
});

export const menusWithImages: MenuMap = Object.entries(menus).reduce<MenuMap>((acc, [key, menu]) => {
  acc[key] = resolveMenuAssets(menu);
  return acc;
}, {});
