import type { TranslationKey } from "@/i18n";

/** The three cards under the hero on the home page. */
export interface Highlight {
  id: string;
  icon: string;
  iconAlt: string;
  titleKey: TranslationKey;
  descKey: TranslationKey;
  ctaKey: TranslationKey;
}

export const highlights: Highlight[] = [
  {
    id: "backend",
    icon: "/img/TreeStructure.svg",
    iconAlt: "Tree structure Icon",
    titleKey: "home.backend",
    descKey: "home.backendDesc",
    ctaKey: "home.backendCta",
  },
  {
    id: "frontend",
    icon: "/img/GitDiff.svg",
    iconAlt: "Git Diff Icon",
    titleKey: "home.frontend",
    descKey: "home.frontendDesc",
    ctaKey: "home.frontendCta",
  },
  {
    id: "cyber",
    icon: "/img/Biohazard.svg",
    iconAlt: "Biohazard Icon",
    titleKey: "home.cyber",
    descKey: "home.cyberDesc",
    ctaKey: "home.cyberCta",
  },
];
