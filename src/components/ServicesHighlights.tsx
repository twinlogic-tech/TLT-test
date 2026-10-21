"use client";

import Image from "next/image";
import { highlights } from "@/content/highlights";
import { useT } from "@/i18n/LanguageProvider";

export function ServicesHighlights() {
  const t = useT();

  return (
    <section className="services">
      {highlights.map((item) => (
        <div className="services__card" key={item.id}>
          <Image
            className="services__card-icon"
            alt={item.iconAlt}
            src={item.icon}
            width={40}
            height={40}
          />
          <p className="services__card-title">{t(item.titleKey)}</p>
          <p className="services__card-description">{t(item.descKey)}</p>
          <p>
            <b>{t(item.ctaKey)}</b>
          </p>
        </div>
      ))}
    </section>
  );
}
