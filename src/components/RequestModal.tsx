"use client";

import { useRef, type KeyboardEvent, type MouseEvent } from "react";
import type { TranslationKey } from "@/i18n";
import { useT } from "@/i18n/LanguageProvider";

interface RequestModalProps {
  /** Title key of the card that opened the modal, or null when closed. */
  serviceKey: TranslationKey | null;
  onClose: () => void;
  /** Called after a successful submit (defaults to onClose). */
  onSubmitted?: () => void;
}

/**
 * "Request Service" dialog. As before, the form does not send anything: it
 * shows a thank-you alert and resets. Hook up an API route here later.
 */
export function RequestModal({ serviceKey, onClose, onSubmitted }: RequestModalProps) {
  const t = useT();
  const formRef = useRef<HTMLFormElement>(null);
  const open = serviceKey !== null;

  const onBackdropClick = (e: MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) onClose();
  };

  const onCloseKey = (e: KeyboardEvent<HTMLSpanElement>) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      onClose();
    }
  };

  return (
    <div
      id="requestModal"
      className="modal"
      style={open ? { display: "block" } : undefined}
      onClick={onBackdropClick}
    >
      <div className="modal-content">
        <span
          className="close"
          role="button"
          tabIndex={0}
          aria-label="Close"
          onClick={onClose}
          onKeyDown={onCloseKey}
        >
          &times;
        </span>
        <h2>{t("modal.title")}</h2>
        <form
          id="requestForm"
          className="request-form"
          ref={formRef}
          onSubmit={(e) => {
            e.preventDefault();
            // Here you would typically send the form data to your server.
            alert(t("modal.thanks"));
            (onSubmitted ?? onClose)();
            formRef.current?.reset();
          }}
        >
          <label htmlFor="serviceType">{t("modal.serviceLabel")}</label>
          <input
            type="text"
            id="serviceType"
            name="serviceType"
            readOnly
            value={serviceKey ? t(serviceKey) : ""}
          />

          <label htmlFor="name">{t("modal.nameLabel")}</label>
          <input type="text" id="name" name="name" required />

          <label htmlFor="email">{t("modal.emailLabel")}</label>
          <input type="email" id="email" name="email" required />

          <label htmlFor="message">{t("modal.messageLabel")}</label>
          <textarea id="message" name="message"></textarea>

          <input type="submit" value={t("modal.submit")} />
        </form>
      </div>
    </div>
  );
}
