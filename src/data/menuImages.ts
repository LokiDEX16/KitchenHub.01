const rawMenuImages = import.meta.glob("@/assets/menu/**/*", {
  eager: true,
  import: "default",
});

const normalizeKey = (value: string): string => {
  const match = value.match(/assets\/menu\/(.+)$/);
  return match ? match[1] : value;
};

const menuImageMap: Record<string, string> = Object.entries(rawMenuImages).reduce((acc, [key, value]) => {
  const normalizedKey = normalizeKey(key);
  const resolvedValue = value as string;
  acc[normalizedKey] = resolvedValue;
  return acc;
}, {});

export const resolveMenuImage = (imagePath?: string): string | undefined => {
  if (!imagePath) return undefined;
  const normalized = normalizeKey(imagePath);
  return menuImageMap[normalized];
};
