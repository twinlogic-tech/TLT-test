"use client";

import Image from "next/image";
import { site } from "@/content/site";
import { useT } from "@/i18n/LanguageProvider";
import { TextLines } from "@/i18n/TextLines";

export function Contact() {
  const t = useT();

  return (
    <section className="contact-section" id="contact">
      <div className="contact-title-container">
        <span>{t("contact.title1")}</span>
        <span className="touch">{t("contact.title2")}</span>
      </div>
      <div className="contact-section__content">
        {/* Left side */}
        <div className="contact-section-text">
          <div className="contact-info-wrapper">
            <p className="got-a-question-container">
              <TextLines text={t("contact.question")} />
            </p>
            <div className="group-child"></div>

            <div className="contact-info">
              <div className="contact-item">
                <Image
                  src="/img/ic_baseline-email.svg"
                  alt=""
                  className="icbaseline-email-icon"
                  width={25}
                  height={25}
                />
                <a href={`mailto:${site.email}`} className="infotwinlogic-techse">
                  {site.email}
                </a>
              </div>
              <div className="contact-item">
                <Image
                  src="/img/mdi_address-marker.svg"
                  alt=""
                  className="mdiaddress-marker-icon"
                  width={25}
                  height={25}
                />
                <div className="storgatan-54-67-container">
                  {site.address.map((line) => (
                    <p className="helsingborg" key={line}>
                      {line}
                    </p>
                  ))}
                </div>
              </div>
            </div>

            <Image
              className="tinted-logo-icon"
              src="/img/Tinted-Logo.svg"
              alt=""
              width={100}
              height={100}
            />
          </div>
        </div>

        {/* Right side: the form posts to formsubmit.co exactly as the old site did */}
        <div className="contact-form">
          <form className="form-wrapper" action={site.formEndpoint} method="POST">
            <input type="hidden" name="_subject" value={site.formSubject} />
            <input type="hidden" name="_next" value={site.formNext} />
            <input type="hidden" name="_captcha" value="false" />

            <div className="form-group">
              <label className="full-name" htmlFor="contact-name">
                {t("contact.fullName")}
              </label>
              <input
                id="contact-name"
                type="text"
                name="name"
                className="contact-form-child"
                required
              />
            </div>

            <div className="form-group">
              <label className="email" htmlFor="contact-email">
                {t("contact.emailLabel")}
              </label>
              <input
                id="contact-email"
                type="email"
                name="email"
                className="contact-form-item"
                required
              />
            </div>

            <div className="form-group">
              <label className="message" htmlFor="contact-message">
                {t("contact.message")}
              </label>
              <textarea
                id="contact-message"
                name="message"
                className="contact-form-inner"
                required
              ></textarea>
            </div>

            <button type="submit" className="lets-go-wrapper">
              <span className="lets-go">{t("contact.submit")}</span>
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
