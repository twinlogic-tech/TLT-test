"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useSyncExternalStore,
  type ReactNode,
} from "react";
import {
  DEFAULT_LANG,
  LANG_STORAGE_KEY,
  dictionaries,
  isLang,
  type Lang,
  type TranslationKey,
} from "./index";

/*
 * The chosen language lives in localStorage ("tlt-lang"). It is read through
 * useSyncExternalStore: during server rendering and hydration React uses the
 * server snapshot ("en"), then switches to the stored language right after
 * hydration. That keeps the static HTML English (good for SEO) without any
 * hydration mismatch.
 */
const listeners = new Set<() => void>();

function subscribe(listener: () => void) {
  listeners.add(listener);
  window.addEventListener("storage", listener);
  return () => {
    listeners.delete(listener);
    window.removeEventListener("storage", listener);
  };
}

function getSnapshot(): Lang {
  try {
    const saved = window.localStorage.getItem(LANG_STORAGE_KEY);
    return isLang(saved) ? saved : DEFAULT_LANG;
  } catch {
    return DEFAULT_LANG;
  }
}

function getServerSnapshot(): Lang {
  return DEFAULT_LANG;
}

interface LanguageContextValue {
  lang: Lang;
  setLang: (lang: Lang) => void;
}

const LanguageContext = createContext<LanguageContextValue | null>(null);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const lang = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);

  const setLang = useCallback((next: Lang) => {
    try {
      window.localStorage.setItem(LANG_STORAGE_KEY, next);
    } catch {
      // storage unavailable (private mode): the switch simply is not persisted
    }
    listeners.forEach((listener) => listener());
  }, []);

  // Keep <html lang> in sync (the static HTML ships with lang="en").
  // Skip while hydration still renders the server snapshot ("en") for a stored "sv":
  // the next render has the right language, and only then is the content revealed
  // (the inline script in layout.tsx adds `i18n-pending` to hide it until now).
  useEffect(() => {
    if (lang !== getSnapshot()) return;
    document.documentElement.lang = lang;
    document.documentElement.classList.remove("i18n-pending");
  }, [lang]);

  const value = useMemo(() => ({ lang, setLang }), [lang, setLang]);

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}

export function useLanguage(): LanguageContextValue {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error("useLanguage must be used inside <LanguageProvider>");
  return ctx;
}

/** Returns a typed translate function: t("nav.about"). Unknown keys are a type error. */
export function useT(): (key: TranslationKey) => string {
  const { lang } = useLanguage();
  return useCallback((key: TranslationKey) => dictionaries[lang][key], [lang]);
}
