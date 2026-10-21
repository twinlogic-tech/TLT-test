"use client";

import { useEffect, useState } from "react";
import { serviceSections } from "@/content/services";
import type { TranslationKey } from "@/i18n";
import { RequestModal } from "./RequestModal";
import { ServiceSection } from "./ServiceSection";

/**
 * Client-side state for the services page: which card is expanded, and which
 * service the request modal was opened for. The dimmed overlay is shown while
 * either is active; clicking it (or pressing Esc) closes them, and the page
 * behind does not scroll.
 */
export function ServicesPage() {
  const [expandedId, setExpandedId] = useState<string | null>(null);
  const [requestKey, setRequestKey] = useState<TranslationKey | null>(null);

  const toggleCard = (id: string) => setExpandedId((current) => (current === id ? null : id));
  const closeModal = () => setRequestKey(null);
  const closeAll = () => {
    setExpandedId(null);
    setRequestKey(null);
  };

  const active = expandedId !== null || requestKey !== null;

  // Esc closes the topmost layer: the request modal first, then the expanded card.
  useEffect(() => {
    if (!active) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key !== "Escape") return;
      if (requestKey !== null) setRequestKey(null);
      else setExpandedId(null);
    };
    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [active, requestKey]);

  // Scroll lock while an overlay is open; restores the previous values on close.
  useEffect(() => {
    if (!active) return;
    const html = document.documentElement;
    const prevOverflow = html.style.overflow;
    const prevPadding = html.style.paddingRight;
    const scrollbar = window.innerWidth - html.clientWidth;
    html.style.overflow = "hidden";
    if (scrollbar > 0) html.style.paddingRight = `${scrollbar}px`;
    return () => {
      html.style.overflow = prevOverflow;
      html.style.paddingRight = prevPadding;
    };
  }, [active]);

  return (
    <>
      <main>
        {serviceSections.map((section, i) => (
          <ServiceSection
            key={section.id}
            section={section}
            isFirst={i === 0}
            expandedId={expandedId}
            onToggle={toggleCard}
            onRequest={setRequestKey}
          />
        ))}
      </main>

      {active && <div className="modal-overlay" onClick={closeAll} />}
      <RequestModal serviceKey={requestKey} onClose={closeModal} onSubmitted={closeAll} />
    </>
  );
}
