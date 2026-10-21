"use client";

import Image from "next/image";
import { team } from "@/content/team";
import { useT } from "@/i18n/LanguageProvider";
import { SectionHeading } from "./SectionHeading";

export function Team() {
  const t = useT();

  return (
    <section className="team" id="team">
      <SectionHeading first={t("team.who1")} second={t("team.who2")} />
      {team.map((member) => (
        <div
          className={`about-card-1${member.reversed ? " about-card-1--reversed" : ""}`}
          key={member.id}
        >
          <div className="about-card-1__text">
            <h3 className="about-card-1__name">{member.name}</h3>
            <p className="about-card-1__role">{t(member.roleKey)}</p>
            <p className="about-card-1__description">{t(member.descKey)}</p>
          </div>
          <Image
            src={member.image}
            alt={member.imageAlt}
            className="about-card-1__logo"
            width={150}
            height={150}
          />
        </div>
      ))}
    </section>
  );
}
