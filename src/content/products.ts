import type { TranslationKey } from "@/i18n";

/** "Our products" cards. Add another object to list another product. */
export interface Product {
  id: string;
  badgeKey: TranslationKey;
  titleKey: TranslationKey;
  textKey: TranslationKey;
  featureKeys: TranslationKey[];
}

export const products: Product[] = [
  {
    id: "ai-invoice-assistant",
    badgeKey: "products.badge",
    titleKey: "products.invoiceTitle",
    textKey: "products.invoiceText",
    featureKeys: [
      "products.invoiceF1",
      "products.invoiceF2",
      "products.invoiceF3",
      "products.invoiceF4",
    ],
  },
];
