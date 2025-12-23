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

  // Support lookups with spaces or encoded spaces to keep menu item images reliable.
  const candidates = new Set<string>([
    normalizedKey,
    encodeURI(normalizedKey),
    normalizedKey.replace(/%20/g, " "),
  ]);

  candidates.forEach((candidateKey) => {
    acc[candidateKey] = resolvedValue;
  });

  return acc;
}, {});

export const resolveMenuImage = (imagePath?: string): string | undefined => {
  if (!imagePath) return undefined;
  const normalized = normalizeKey(imagePath);
  const encoded = encodeURI(normalized);
  const decoded = decodeURI(normalized);

  return menuImageMap[normalized] ?? menuImageMap[encoded] ?? menuImageMap[decoded];
};
