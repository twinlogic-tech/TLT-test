/** Non-translated site facts used by several components. */
export const site = {
  name: "TLT – Technology, Logic & Transformation",
  tagline: "Technology, Logic & Transformation",
  email: "info@twinlogic-tech.se",
  address: ["Storgatan 54", "67 267 Helsingborg"],
  formEndpoint: "https://formsubmit.co/info@twinlogic-tech.se",
  formNext: "https://twinlogic-tech.se",
  formSubject: "Ny kontakt via hemsidan",
  social: [
    { id: "linkedin", href: "#", icon: "/img/Linkedin.png", className: "social-icons" },
    { id: "instagram", href: "#", icon: "/img/Insta.svg", className: "social-icons1" },
    { id: "x", href: "#", icon: "/img/X.svg", className: "social-icons2" },
    { id: "github", href: "#", icon: "/img/github.svg", className: "social-icons3" },
  ],
} as const;

export interface NavItem {
  href: string;
  labelKey: "nav.about" | "nav.services" | "nav.projects" | "nav.contact";
}

/** Absolute hrefs so the nav works from both / and /services. */
export const navItems: NavItem[] = [
  { href: "/#about", labelKey: "nav.about" },
  { href: "/services", labelKey: "nav.services" },
  { href: "/#projects", labelKey: "nav.projects" },
  { href: "/#contact", labelKey: "nav.contact" },
];
