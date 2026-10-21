import { en, type TranslationKey } from "./en";
import { sv } from "./sv";

export type Lang = "en" | "sv";

export const LANGS: Lang[] = ["en", "sv"];
export const DEFAULT_LANG: Lang = "en";
export const LANG_STORAGE_KEY = "tlt-lang";

export const dictionaries: Record<Lang, Record<TranslationKey, string>> = { en, sv };

export type { TranslationKey };

export function isLang(value: unknown): value is Lang {
  return value === "en" || value === "sv";
}
