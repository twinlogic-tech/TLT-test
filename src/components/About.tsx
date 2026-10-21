"use client";

import Image from "next/image";
import { useT } from "@/i18n/LanguageProvider";
import { SectionHeading } from "./SectionHeading";

export function About() {
  const t = useT();

  return (
    <section className="about" id="about">
      <SectionHeading first={t("about.what1")} second={t("about.what2")} />
      <div className="about-card-1">
        <p className="about-card-1__text">{t("about.text")}</p>
        <Image
          className="about-card-1__logo"
          alt="Logo"
          src="/img/Logo.svg"
          width={180}
          height={153}
        />
      </div>
    </section>
  );
}
