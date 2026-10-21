import type { TranslationKey } from "@/i18n";

/*
 * Services page content. Each card references translation keys (src/i18n) so
 * every visible string can be translated. To add a card, add one object to a
 * section below and add its keys to src/i18n/en.ts and sv.ts.
 */
export interface ServiceCardData {
  id: string;
  titleKey: TranslationKey;
  subtitleKey: TranslationKey;
  detailTitleKey: TranslationKey;
  /** Short bullet list shown on the card face. */
  featureKeys: TranslationKey[];
  /** Longer list shown when the card is expanded. */
  detailKeys: TranslationKey[];
}

export interface ServiceSectionData {
  id: string;
  titleKey: TranslationKey;
  /** primary = 4-column grid (.primary-services), secondary = 3-column grid. */
  variant: "primary" | "secondary";
  cards: ServiceCardData[];
}

export const serviceSections: ServiceSectionData[] = [
  {
    id: "offer",
    titleKey: "svc.offerTitle",
    variant: "primary",
    cards: [
      {
        id: "backend",
        titleKey: "svc.backendTitle",
        subtitleKey: "svc.backendSubtitle",
        detailTitleKey: "svc.backendDetailTitle",
        featureKeys: ["svc.backend.f1", "svc.backend.f2", "svc.backend.f3", "svc.backend.f4"],
        detailKeys: ["svc.backend.d1", "svc.backend.d2", "svc.backend.d3", "svc.backend.d4"],
      },
      {
        id: "portal",
        titleKey: "svc.portalTitle",
        subtitleKey: "svc.portalSubtitle",
        detailTitleKey: "svc.portalDetailTitle",
        featureKeys: ["svc.portal.f1", "svc.portal.f2", "svc.portal.f3", "svc.portal.f4"],
        detailKeys: ["svc.portal.d1", "svc.portal.d2", "svc.portal.d3", "svc.portal.d4"],
      },
      {
        id: "cyber",
        titleKey: "svc.cyberTitle",
        subtitleKey: "svc.cyberSubtitle",
        detailTitleKey: "svc.cyberDetailTitle",
        featureKeys: ["svc.cyber.f1", "svc.cyber.f2", "svc.cyber.f3", "svc.cyber.f4"],
        detailKeys: ["svc.cyber.d1", "svc.cyber.d2", "svc.cyber.d3", "svc.cyber.d4"],
      },
      {
        id: "consult",
        titleKey: "svc.consultTitle",
        subtitleKey: "svc.consultSubtitle",
        detailTitleKey: "svc.consultDetailTitle",
        featureKeys: ["svc.consult.f1", "svc.consult.f2", "svc.consult.f3", "svc.consult.f4"],
        detailKeys: ["svc.consult.d1", "svc.consult.d2", "svc.consult.d3", "svc.consult.d4"],
      },
    ],
  },
  {
    id: "web-dev",
    titleKey: "svc.webDevTitle",
    variant: "primary",
    cards: [
      {
        id: "basic",
        titleKey: "svc.basicTitle",
        subtitleKey: "svc.basicSubtitle",
        detailTitleKey: "svc.basicDetailTitle",
        featureKeys: ["svc.basic.f1", "svc.basic.f2", "svc.basic.f3", "svc.basic.f4", "svc.basic.f5"],
        detailKeys: ["svc.basic.d1", "svc.basic.d2", "svc.basic.d3", "svc.basic.d4", "svc.basic.d5"],
      },
      {
        id: "standard",
        titleKey: "svc.standardTitle",
        subtitleKey: "svc.standardSubtitle",
        detailTitleKey: "svc.standardDetailTitle",
        featureKeys: ["svc.standard.f1", "svc.standard.f2", "svc.standard.f3", "svc.standard.f4", "svc.standard.f5", "svc.standard.f6", "svc.standard.f7"],
        detailKeys: ["svc.standard.d1", "svc.standard.d2", "svc.standard.d3", "svc.standard.d4", "svc.standard.d5", "svc.standard.d6", "svc.standard.d7"],
      },
      {
        id: "premium",
        titleKey: "svc.premiumTitle",
        subtitleKey: "svc.premiumSubtitle",
        detailTitleKey: "svc.premiumDetailTitle",
        featureKeys: ["svc.premium.f1", "svc.premium.f2", "svc.premium.f3", "svc.premium.f4", "svc.premium.f5", "svc.premium.f6", "svc.premium.f7", "svc.premium.f8"],
        detailKeys: ["svc.premium.d1", "svc.premium.d2", "svc.premium.d3", "svc.premium.d4", "svc.premium.d5", "svc.premium.d6", "svc.premium.d7", "svc.premium.d8"],
      },
    ],
  },
  {
    id: "additional",
    titleKey: "svc.additionalTitle",
    variant: "secondary",
    cards: [
      {
        id: "hosting",
        titleKey: "svc.hostingTitle",
        subtitleKey: "svc.hostingSubtitle",
        detailTitleKey: "svc.hostingDetailTitle",
        featureKeys: ["svc.hosting.f1", "svc.hosting.f2", "svc.hosting.f3", "svc.hosting.f4"],
        detailKeys: ["svc.hosting.d1", "svc.hosting.d2", "svc.hosting.d3", "svc.hosting.d4", "svc.hosting.d5", "svc.hosting.d6", "svc.hosting.d7", "svc.hosting.d8", "svc.hosting.d9", "svc.hosting.d10"],
      },
      {
        id: "maintenance",
        titleKey: "svc.maintenanceTitle",
        subtitleKey: "svc.maintenanceSubtitle",
        detailTitleKey: "svc.maintenanceDetailTitle",
        featureKeys: ["svc.maintenance.f1", "svc.maintenance.f2", "svc.maintenance.f3", "svc.maintenance.f4", "svc.maintenance.f5"],
        detailKeys: ["svc.maintenance.d1", "svc.maintenance.d2", "svc.maintenance.d3", "svc.maintenance.d4", "svc.maintenance.d5", "svc.maintenance.d6", "svc.maintenance.d7", "svc.maintenance.d8", "svc.maintenance.d9", "svc.maintenance.d10"],
      },
      {
        id: "seo",
        titleKey: "svc.seoTitle",
        subtitleKey: "svc.seoSubtitle",
        detailTitleKey: "svc.seoDetailTitle",
        featureKeys: ["svc.seo.f1", "svc.seo.f2", "svc.seo.f3", "svc.seo.f4"],
        detailKeys: ["svc.seo.d1", "svc.seo.d2", "svc.seo.d3", "svc.seo.d4", "svc.seo.d5", "svc.seo.d6", "svc.seo.d7", "svc.seo.d8", "svc.seo.d9", "svc.seo.d10"],
      },
    ],
  },
];
