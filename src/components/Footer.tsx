"use client";

import Image from "next/image";
import { site } from "@/content/site";
import { useT } from "@/i18n/LanguageProvider";

export function Footer() {
  const t = useT();

  return (
    <footer className="footer">
      <div className="socialmedia-links">
        {site.social.map((item) => (
          <a
            key={item.id}
            href={item.href}
            target="_blank"
            rel="noopener noreferrer"
            className={item.className}
          >
            <Image
              src={item.icon}
              alt="Social Icon"
              className="vector-icon"
              width={30}
              height={30}
            />
          </a>
        ))}
      </div>

      <div className="copyright">
        <Image
          src="/img/Copyright.svg"
          alt="Copyright"
          className="copyright-icon"
          width={20}
          height={20}
        />
        <span className="twin-logic-tech">{t("footer.copyright")}</span>
      </div>
    </footer>
  );
}
