"use client";

import { useT } from "@/i18n/LanguageProvider";
import { TextLines } from "@/i18n/TextLines";

export function Hero() {
  const t = useT();

  return (
    <section className="hero">
      <div className="hero__video">
        <video autoPlay loop muted playsInline>
          <source src="/videos/hero.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
      <div className="hero__content-wrapper">
        <h1 className="hero__welcome">
          <TextLines text={t("hero.welcome")} />
        </h1>
        <p className="hero__subtext">{t("hero.subtext")}</p>
        <button
          type="button"
          className="hero__cta"
          onClick={() =>
            document.getElementById("about")?.scrollIntoView({ behavior: "smooth" })
          }
        >
          <span className="hero__cta-text">{t("hero.cta")}</span>
        </button>
      </div>
    </section>
  );
}
