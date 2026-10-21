import type { Metadata } from "next";
import { PageMeta } from "@/components/PageMeta";
import { en } from "@/i18n/en";
import { About } from "@/components/About";
import { Consulting } from "@/components/Consulting";
import { Contact } from "@/components/Contact";
import { FloatingButton } from "@/components/FloatingButton";
import { Hero } from "@/components/Hero";
import { Products } from "@/components/Products";
import { Projects } from "@/components/Projects";
import { ServicesHighlights } from "@/components/ServicesHighlights";
import { Team } from "@/components/Team";

const title = en["meta.homeTitle"];

export const metadata: Metadata = {
  title: { absolute: title },
  description: en["meta.homeDescription"],
  openGraph: {
    title,
    description: "Own products, customer portals, backend, integrations and cyber security.",
    type: "website",
    locale: "sv_SE",
  },
};

export default function HomePage() {
  return (
    <>
      <PageMeta titleKey="meta.homeTitle" descriptionKey="meta.homeDescription" />
      <main>
        <Hero />
        <ServicesHighlights />
        <About />
        <Products />
        <Projects />
        <Consulting />
        <Team />
        <Contact />
      </main>
      <FloatingButton />
    </>
  );
}
