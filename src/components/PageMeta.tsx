"use client";

import { useEffect } from "react";
import type { TranslationKey } from "@/i18n";
import { useT } from "@/i18n/LanguageProvider";

/**
 * Keeps document.title and the meta description in the active language.
 * The static HTML keeps the English values (set via `metadata` in the page file).
 */
export function PageMeta({
  titleKey,
  descriptionKey,
}: {
  titleKey: TranslationKey;
  descriptionKey: TranslationKey;
}) {
  const t = useT();

  useEffect(() => {
    const title = t(titleKey);
    const description = t(descriptionKey);
    const apply = () => {
      if (document.title !== title) document.title = title;
      const meta = document.querySelector('meta[name="description"]');
      if (meta && meta.getAttribute("content") !== description) {
        meta.setAttribute("content", description);
      }
    };
    apply();
    // On client-side navigation Next.js writes the (English) page metadata after
    // this effect has run, so re-apply whenever <head> changes.
    const observer = new MutationObserver(apply);
    observer.observe(document.head, { childList: true, subtree: true, characterData: true, attributes: true });
    return () => observer.disconnect();
  }, [t, titleKey, descriptionKey]);

  return null;
}
