import type { ReactNode } from "react";

/** "What we do" style heading: plain first word(s) + gradient second part. */
export function SectionHeading({ first, second }: { first: ReactNode; second: ReactNode }) {
  return (
    <div className="what-we-do-container">
      <span>{first}</span>
      <span className="we-do">{second}</span>
    </div>
  );
}
