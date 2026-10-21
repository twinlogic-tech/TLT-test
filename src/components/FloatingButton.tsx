"use client";

import Image from "next/image";
import { useT } from "@/i18n/LanguageProvider";

export function FloatingButton() {
  const t = useT();

  return (
    <a className="floating-button" href="#contact">
      <p className="floating-button__text">{t("floating.text")}</p>
      <Image
        className="floating-button__icon"
        alt="Caret Right Icon"
        src="/img/CaretRight.svg"
        width={33}
        height={33}
      />
    </a>
  );
}
