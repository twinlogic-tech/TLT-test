import type { TranslationKey } from "@/i18n";

/** "Who we are" cards. Names are not translated; role and bio are. */
export interface TeamMember {
  id: string;
  name: string;
  roleKey: TranslationKey;
  descKey: TranslationKey;
  image: string;
  imageAlt: string;
  /** Photo on the left instead of the right (desktop). */
  reversed?: boolean;
}

export const team: TeamMember[] = [
  {
    id: "peter",
    name: "Peter Gustafsson",
    roleKey: "team.peterRole",
    descKey: "team.peterDesc",
    image: "/img/peter.png",
    imageAlt: "Peter",
  },
  {
    id: "simon",
    name: "Simon Tunje",
    roleKey: "team.simonRole",
    descKey: "team.simonDesc",
    image: "/img/simon.png",
    imageAlt: "Simon",
    reversed: true,
  },
];
