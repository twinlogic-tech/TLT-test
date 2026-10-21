"use client";

import Link from "next/link";
import type { TranslationKey } from "@/i18n";
import { useT } from "@/i18n/LanguageProvider";
import { SectionHeading } from "./SectionHeading";

const areas: TranslationKey[] = [
  "consulting.a1",
  "consulting.a2",
  "consulting.a3",
  "consulting.a4",
  "consulting.a5",
];

export function Consulting() {
  const t = useT();

  return (
    <section className="consulting" id="consulting">
      <SectionHeading first={t("consulting.title1")} second={t("consulting.title2")} />
      <div className="consulting__card">
        <p className="consulting__text">{t("consulting.text")}</p>
        <ul className="consulting__areas">
          {areas.map((key) => (
            <li key={key}>{t(key)}</li>
          ))}
        </ul>
        <Link href="#contact" prefetch={false} className="consulting__cta">
          {t("consulting.cta")}
        </Link>
      </div>
    </section>
  );
}
