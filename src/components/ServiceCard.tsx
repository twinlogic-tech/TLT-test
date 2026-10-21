"use client";

import type { ServiceCardData } from "@/content/services";
import type { TranslationKey } from "@/i18n";
import { useT } from "@/i18n/LanguageProvider";

interface ServiceCardProps {
  card: ServiceCardData;
  expanded: boolean;
  onToggle: (id: string) => void;
  onRequest: (titleKey: TranslationKey) => void;
}

/**
 * One service card. The "brief" face and the "detailed" face are both in the
 * DOM; the `.expanded` class (see styles/service-cards.css) swaps them and
 * turns the card into a centered dialog.
 */
export function ServiceCard({ card, expanded, onToggle, onRequest }: ServiceCardProps) {
  const t = useT();

  return (
    <div className={`service-card${expanded ? " expanded" : ""}`}>
      <div className="brief-content">
        <h2>{t(card.titleKey)}</h2>
        <h3>{t(card.subtitleKey)}</h3>
        <ul className="brief-features">
          {card.featureKeys.map((key) => (
            <li key={key}>{t(key)}</li>
          ))}
        </ul>
        <div className="card-actions">
          <button type="button" className="view-details" onClick={() => onToggle(card.id)}>
            {t("svc.viewDetails")}
          </button>
          <button type="button" className="request-button" onClick={() => onRequest(card.titleKey)}>
            {t("svc.requestService")}
          </button>
        </div>
      </div>
      <div className="detailed-content">
        <h2>{t(card.titleKey)}</h2>
        <h4>{t(card.detailTitleKey)}</h4>
        <ul>
          {card.detailKeys.map((key) => (
            <li key={key}>{t(key)}</li>
          ))}
        </ul>
        <div className="card-actions">
          <button type="button" className="request-button" onClick={() => onRequest(card.titleKey)}>
            {t("svc.requestService")}
          </button>
        </div>
      </div>
    </div>
  );
}
