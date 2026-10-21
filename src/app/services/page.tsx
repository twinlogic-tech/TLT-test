import type { Metadata } from "next";
import { PageMeta } from "@/components/PageMeta";
import { en } from "@/i18n/en";
import { ServicesPage } from "@/components/ServicesPage";

const title = en["meta.servicesTitle"];

export const metadata: Metadata = {
  title: { absolute: title },
  description: en["meta.servicesDescription"],
  openGraph: {
    title,
    description:
      "Backend, integrations, customer portals, cyber security, consulting and web development.",
    type: "website",
    locale: "sv_SE",
  },
};

export default function Page() {
  return (
    <>
      <PageMeta titleKey="meta.servicesTitle" descriptionKey="meta.servicesDescription" />
      <ServicesPage />
    </>
  );
}
