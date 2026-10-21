"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Fragment, useState } from "react";
import { navItems, site } from "@/content/site";
import { LANGS } from "@/i18n";
import { useLanguage, useT } from "@/i18n/LanguageProvider";

export function Header() {
  const t = useT();
  const { lang, setLang } = useLanguage();
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  const isServices = pathname.startsWith("/services");

  return (
    <header className="header">
      <section className="header__navbar">
        <div className="header__logo">
          <Image
            className="header__logo-image"
            alt="TLT Logo"
            src="/img/Group-11.svg"
            width={54}
            height={57}
            priority
          />
          <div className="header__logo-text">
            <p>TLT</p>
            <span className="header__logo-tagline">{site.tagline}</span>
          </div>
        </div>
        <nav className={`header__navigation${open ? " open" : ""}`}>
          <ul>
            {navItems.map((item) => {
              const active = isServices && item.href === "/services";
              return (
                <li key={item.href} className={active ? "active" : undefined}>
                  <Link
                    prefetch={false}
                    href={item.href}
                    className="header__nav-item"
                    onClick={() => setOpen(false)}
                  >
                    {t(item.labelKey)}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
        <div className="lang-switcher">
          {LANGS.map((code, i) => (
            <Fragment key={code}>
              {i > 0 && <span className="lang-divider">|</span>}
              <button
                type="button"
                className={`lang-btn${lang === code ? " active" : ""}`}
                onClick={() => setLang(code)}
              >
                {code.toUpperCase()}
              </button>
            </Fragment>
          ))}
        </div>
        <button
          type="button"
          className={`hamburger${open ? " active" : ""}`}
          aria-label={t(open ? "nav.closeMenu" : "nav.openMenu")}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </section>
    </header>
  );
}
