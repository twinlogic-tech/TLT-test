import { Fragment } from "react";

const ENTITIES: Record<string, string> = {
  "&amp;": "&",
  "&lt;": "<",
  "&gt;": ">",
  "&quot;": '"',
  "&#39;": "'",
};

function decode(text: string): string {
  return text.replace(/&(?:amp|lt|gt|quot|#39);/g, (m) => ENTITIES[m]);
}

/**
 * Renders a translation that uses `<br>` for line breaks and `&amp;` style
 * entities (hero.welcome, contact.question) as real React nodes. No HTML is
 * ever injected: the string is split on `<br>` and every part is plain text.
 */
export function TextLines({ text }: { text: string }) {
  const lines = text.split(/<br\s*\/?>/i);
  return (
    <>
      {lines.map((line, i) => (
        <Fragment key={i}>
          {i > 0 && <br />}
          {decode(line)}
        </Fragment>
      ))}
    </>
  );
}
