import type { TranslationKey } from "@/i18n";

/*
 * "Selected work" cards on the home page. Adding a project is one object:
 * add the three text keys to src/i18n/en.ts + sv.ts and list the tech tags
 * (tags are not translated).
 */
export interface Project {
  id: string;
  typeKey: TranslationKey;
  titleKey: TranslationKey;
  descKey: TranslationKey;
  tags: string[];
}

export const projects: Project[] = [
  {
    id: "customer-portals",
    typeKey: "projects.p1Type",
    titleKey: "projects.p1Title",
    descKey: "projects.p1Desc",
    tags: ["Next.js", "PostgreSQL", "Auth"],
  },
  {
    id: "text-classification",
    typeKey: "projects.p2Type",
    titleKey: "projects.p2Title",
    descKey: "projects.p2Desc",
    tags: ["Python", "ML", "API"],
  },
  {
    id: "community-chat",
    typeKey: "projects.p3Type",
    titleKey: "projects.p3Title",
    descKey: "projects.p3Desc",
    tags: ["Next.js", "Prisma", "Auth"],
  },
  {
    id: "event-bot",
    typeKey: "projects.p4Type",
    titleKey: "projects.p4Title",
    descKey: "projects.p4Desc",
    tags: ["TypeScript", "Prisma", "Scheduling"],
  },
  {
    id: "custom-browser",
    typeKey: "projects.p5Type",
    titleKey: "projects.p5Title",
    descKey: "projects.p5Desc",
    tags: ["Electron", "React", "TypeScript"],
  },
  {
    id: "planners-landing-pages",
    typeKey: "projects.p6Type",
    titleKey: "projects.p6Title",
    descKey: "projects.p6Desc",
    tags: ["JavaScript", "Data", "Static sites"],
  },
];
