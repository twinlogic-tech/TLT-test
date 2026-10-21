"use client";

import type { ServiceSectionData } from "@/content/services";
import type { TranslationKey } from "@/i18n";
import { useT } from "@/i18n/LanguageProvider";
import { ServiceCard } from "./ServiceCard";

interface ServiceSectionProps {
  section: ServiceSectionData;
  expandedId: string | null;
  onToggle: (id: string) => void;
  onRequest: (titleKey: TranslationKey) => void;
  /** The first section carries the page heading. */
  isFirst?: boolean;
}

export function ServiceSection({ section, expandedId, onToggle, onRequest, isFirst }: ServiceSectionProps) {
  const t = useT();
  const Heading = isFirst ? "h1" : "h2";
  const primary = section.variant === "primary";

  return (
    <section className={primary ? "main-packages" : "additional-services"}>
      <Heading className="section-title">{t(section.titleKey)}</Heading>
      <div className={`services-container ${primary ? "primary-services" : "secondary-services"}`}>
        {section.cards.map((card) => (
          <ServiceCard
            key={card.id}
            card={card}
            expanded={expandedId === card.id}
            onToggle={onToggle}
            onRequest={onRequest}
          />
        ))}
      </div>
    </section>
  );
}
