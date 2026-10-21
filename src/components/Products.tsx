"use client";

import { products } from "@/content/products";
import { useT } from "@/i18n/LanguageProvider";
import { SectionHeading } from "./SectionHeading";

export function Products() {
  const t = useT();

  return (
    <section className="products" id="products">
      <SectionHeading first={t("products.title1")} second={t("products.title2")} />
      {products.map((product) => (
        <div className="product-card" key={product.id}>
          <div className="product-card__content">
            <span className="product-card__badge">{t(product.badgeKey)}</span>
            <h3 className="product-card__title">{t(product.titleKey)}</h3>
            <p className="product-card__text">{t(product.textKey)}</p>
          </div>
          <ul className="product-card__features">
            {product.featureKeys.map((key) => (
              <li key={key}>{t(key)}</li>
            ))}
          </ul>
        </div>
      ))}
      <p className="products__note">{t("products.note")}</p>
    </section>
  );
}
