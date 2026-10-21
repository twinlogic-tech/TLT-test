import type { TranslationKey } from "./en";

// Swedish strings. Typed against the English keys: a missing or extra key is a compile error.

export const sv: Record<TranslationKey, string> = {
  // Navigation
  "nav.about": "OM OSS",
  "nav.services": "TJÄNSTER",
  "nav.projects": "PROJEKT",
  "nav.contact": "KONTAKT",
  "nav.openMenu": "Öppna meny",
  "nav.closeMenu": "Stäng meny",

  // Page metadata
  "meta.homeTitle": "TLT – Technology, Logic & Transformation",
  "meta.homeDescription":
    "TLT – Technology, Logic & Transformation. Vi bygger egna AI-produkter, kundportaler och backend-system, och är konsulter inom integrationer och cybersäkerhet. Baserade i Helsingborg.",
  "meta.servicesTitle": "Tjänster – TLT – Technology, Logic & Transformation",
  "meta.servicesDescription":
    "TLT – Technology, Logic & Transformation. Backend, integrationer, kundportaler, cybersäkerhet, konsulttjänster och webbutveckling för företag i alla storlekar.",

  // Footer
  "footer.copyright": "2026 TLT – Technology, Logic & Transformation. Alla rättigheter förbehållna, UX/UI Elin Bradway",

  // Hero
  "hero.welcome": "Technology, Logic<br>&amp; Transformation",
  "hero.subtext": "Egna produkter, skräddarsydda plattformar och konsulttjänster som tar ditt företag framåt.",
  "hero.cta": "Läs mer",

  // Home — services cards
  "home.backend": "Backend & integrationer",
  "home.backendDesc":
   "API:er, databaser och systemintegrationer som får dina verktyg att prata med varandra, så att data hamnar rätt utan manuellt arbete.",
  "home.backendCta": "Stabil grund, byggd för att växa.",
  "home.frontend": "Frontend-utveckling",
  "home.frontendDesc":
   "Behöver du en snygg, responsiv webbplats? Våra frontend-tjänster säkerställer att din sida ser bra ut och fungerar felfritt på alla enheter.",
  "home.frontendCta": "Låt oss bygga något fantastiskt tillsammans!",
  "home.cyber": "Cybersäkerhet",
  "home.cyberDesc":
   "Säkerhet från dag ett: härdade inloggningar, behörighetsstyrning, säker hantering av data och granskning av befintliga system.",
  "home.cyberCta": "Sov gott, vi har koll.",

  // About section
  "about.what1": "Vad",
  "about.what2": " vi gör",
  "about.text":
   "TLT – Technology, Logic & Transformation – är ett teknikbolag i Helsingborg som både bygger och rådgiver. Vi utvecklar egna produkter, tar fram snygga kundportaler och webbappar och bygger backend, integrationer och säkerhet som håller allt igång. Vi arbetar också som konsulter: hyr in oss för att koppla ihop era system, automatisera era flöden eller stärka er säkerhet. Oavsett om ni är ett litet företag eller en stor organisation gör vi teknik och logik till verklig förändring.",

  // Products section
  "products.title1": "Våra",
  "products.title2": " produkter",
  "products.badge": "Under utveckling",
  "products.invoiceTitle": "AI-fakturaassistent",
  "products.invoiceText":
   "Byggd för småföretagare som hellre driver sitt företag än jagar papper. Vår AI läser era underlag, förbereder fakturorna och lämnar dem till er för en snabb granskning innan något skickas.",
  "products.invoiceF1": "Gör underlag till fakturor redo för granskning",
  "products.invoiceF2": "Använder era egna priser och avtal",
  "products.invoiceF3": "Ni har kontrollen – inget skickas utan ert godkännande",
  "products.invoiceF4": "Kopplas till de bokföringsverktyg ni redan använder",
  "products.note": "Fler produkter är på gång. Vi berättar mer när de är redo.",

  // Projects section
  "projects.title1": "Utvalda",
  "projects.title2": " projekt",
  "projects.intro": "Stort som smått – här är ett smakprov på vad vi har byggt.",
  "projects.p1Type": "Webbplattform",
  "projects.p1Title": "Kundportaler",
  "projects.p1Desc":
   "Säkra portaler där kunder och personal loggar in och följer ordrar, fakturor och arbete på ett ställe, med roller och dashboards.",
  "projects.p2Type": "AI / Maskininlärning",
  "projects.p2Title": "AI för textklassificering",
  "projects.p2Desc":
   "En flerspråkig modell som sorterar inkommande text, från supportärenden till chattmoderering. Körs lokalt så att data stannar internt.",
  "projects.p3Type": "Webbapp",
  "projects.p3Title": "Chattplattform för communities",
  "projects.p3Desc":
   "En chattplattform med användarkonton, profiler och ett eget designsystem, byggd steg för steg för en onlinecommunity.",
  "projects.p4Type": "Automation",
  "projects.p4Title": "Event- och påminnelsebot",
  "projects.p4Desc":
   "En Discord-bot som schemalägger event, kör timers och skickar påminnelser till aktiva communities, med en databas i botten.",
  "projects.p5Type": "Skrivbordsapp",
  "projects.p5Title": "Egen webbläsare",
  "projects.p5Desc":
   "En Chromium-baserad webbläsarprototyp för datorn, anpassad för gamers och streamers och byggd från grunden.",
  "projects.p6Type": "Verktyg & webbplatser",
  "projects.p6Title": "Planerare & landningssidor",
  "projects.p6Desc":
   "Sökbara databaser, smarta planeringsverktyg och snabba, lätta webbplatser för spelcommunities och mindre organisationer.",
  "projects.note":
   "Vissa detaljer håller vi för oss själva, för våra kunders och våra egna produkters skull. Hör av dig så berättar vi gärna mer.",

  // Consulting section
  "consulting.title1": "Hyr",
  "consulting.title2": " in oss",
  "consulting.text":
   "Behöver ni extra händer? Vi arbetar även som konsulter. Ta in oss för att koppla ihop system, bygga API:er, automatisera flöden eller granska er säkerhet, på distans eller på plats, för en kort sprint eller ett längre uppdrag. Integrationer är det vi har gjort mest av allt, så vi vet hur det ska göras.",
  "consulting.a1": "Integrationer & API:er",
  "consulting.a2": "Backend & databaser",
  "consulting.a3": "AI & automation",
  "consulting.a4": "Kundportaler",
  "consulting.a5": "Säkerhetsgranskningar",
  "consulting.cta": "Hör av dig",

  // Team section
  "team.who1": "Vilka",
  "team.who2": " vi är",
  "team.peterRole": "Medgrundare & Utvecklare",
  "team.peterDesc":
   "Jag är Peter Gustafsson, en passionerad teknikentusiast född 1985 och en stolt familjefar. Efter år i traditionella roller följde jag min passion för teknik med fokus på frontend-utveckling och övergick snart till fullstack. Jag har gått samman med en likasinnad partner för att lansera ett dynamiskt IT-företag som erbjuder tjänster som webbutveckling, säkerhet och tekniska installationer. Vi är dedikerade till att leverera lösningar som verkligen gör skillnad och hjälper företag att lyckas i den digitala eran.",
  "team.simonRole": "Medgrundare & Utvecklare",
  "team.simonDesc":
   "Jag är Simon Tunje och min passion för programmering har öppnat ett nytt kapitel i mitt liv. Tidigare arbetade jag som fritidsledare för ungdomar runt om i Sverige och ledde scouter på äventyrliga expeditioner — från 3 400 meters toppar till de djupaste isgrottorna. Dessa erfarenheter lärde mig motståndskraft, problemlösning och lagarbete. Nu tar jag med mig samma drivkraft in i teknikvärlden, ivrig att lära mig, växa och göra verklig skillnad.",

  // Contact section
  "contact.title1": "Låt oss ta",
  "contact.title2": " Kontakt!",
  "contact.question":
   "Har du en fråga eller behöver hjälp?<br>Kontakta oss via e-post eller<br>via vårt kontaktformulär.<br><br>Vi hjälper dig gärna!",
  "contact.fullName": "Fullständigt namn",
  "contact.emailLabel": "E-post",
  "contact.message": "Meddelande",
  "contact.submit": "Kör igång!",

  // Floating button
  "floating.text": "Kontakta oss",

  // Services page — section titles
  "svc.offerTitle": "Det här erbjuder vi",
  "svc.webDevTitle": "Webbutvecklingspaket",
  "svc.additionalTitle": "Ytterligare tjänster",

  // Backend & integrations
  "svc.backendTitle": "Backend & integrationer",
  "svc.backendSubtitle": "Få era system att fungera tillsammans",
  "svc.backendDetailTitle": "Det här ingår:",
  "svc.backend.f1": "API:er och serverlogik",
  "svc.backend.f2": "System- och dataintegrationer",
  "svc.backend.f3": "Databasdesign",
  "svc.backend.f4": "Automatisering av flöden",
  "svc.backend.d1": "API:er & serverlogik: Robusta, väldokumenterade API:er som driver era appar, portaler och interna verktyg.",
  "svc.backend.d2":
   "Systemintegrationer: Vi kopplar ihop era befintliga verktyg, t.ex. bokföring, CRM och e-handel, så att data flödar automatiskt i stället för att skrivas in två gånger.",
  "svc.backend.d3": "Databasdesign: Strukturerad, säker och skalbar datalagring byggd för hur ert företag faktiskt fungerar.",
  "svc.backend.d4": "Automation & AI: Vi automatiserar repetitivt arbete och lägger till AI där det sparar verklig tid, alltid med en människa som har kontrollen.",

  // Customer portals
  "svc.portalTitle": "Kundportaler & webbappar",
  "svc.portalSubtitle": "Snygg och säker självservice för era kunder",
  "svc.portalDetailTitle": "Det här ingår:",
  "svc.portal.f1": "Säker inloggning och användarroller",
  "svc.portal.f2": "Dashboards och orderöversikter",
  "svc.portal.f3": "Dokument och fakturor på ett ställe",
  "svc.portal.f4": "Fungerar på alla enheter",
  "svc.portal.d1": "Säker inloggning & roller: Kunder, personal och administratörer ser precis det de ska, och inget mer.",
  "svc.portal.d2": "Dashboards: Tydliga översikter över ordrar, arbete, fakturor och status, designade för att vara enkla att använda.",
  "svc.portal.d3": "Kopplad till era system: Portalen pratar med er befintliga backend och era verktyg, så informationen alltid är aktuell.",
  "svc.portal.d4": "Responsiv design: Ser bra ut och fungerar smidigt på dator, surfplatta och mobil.",

  // Cyber security
  "svc.cyberTitle": "Cybersäkerhet",
  "svc.cyberSubtitle": "Skydda ert företag och er data",
  "svc.cyberDetailTitle": "Det här ingår:",
  "svc.cyber.f1": "Säkerhetsgranskningar",
  "svc.cyber.f2": "Säker autentisering",
  "svc.cyber.f3": "Behörighetsstyrning",
  "svc.cyber.f4": "Säker datahantering",
  "svc.cyber.d1": "Säkerhetsgranskningar: Vi går igenom er webbplats, era appar och system och pekar ut svagheter innan någon annan hittar dem.",
  "svc.cyber.d2": "Säker autentisering: Härdade inloggningar, sessioner och lösenordshantering.",
  "svc.cyber.d3": "Behörighetsstyrning: Rätt personer får rätt åtkomst, och inget mer.",
  "svc.cyber.d4": "Säkert från grunden: Säkerhet inbyggt i allt vi levererar, från första kodraden.",

  // Consulting
  "svc.consultTitle": "Konsulttjänster",
  "svc.consultSubtitle": "Hyr in oss för ert nästa integrationsjobb",
  "svc.consultDetailTitle": "Så fungerar det:",
  "svc.consult.f1": "Integrationsprojekt",
  "svc.consult.f2": "Backend- och API-utveckling",
  "svc.consult.f3": "På distans eller på plats",
  "svc.consult.f4": "Korta sprintar eller längre uppdrag",
  "svc.consult.d1": "Integrationsspecialister: Att koppla ihop system, migrera data och automatisera flöden är det vi har gjort mest av.",
  "svc.consult.d2": "En del av ert team: Vi går in i ert team och arbetar i era verktyg och processer, på distans eller på plats.",
  "svc.consult.d3": "Flexibla uppdrag: Från en kort sprint för att lösa ett specifikt problem till ett längre uppdrag.",
  "svc.consult.d4": "Tydlig kommunikation: Ni vet alltid vad vi gör, varför och vad som händer härnäst.",

  // Basic package
  "svc.basicTitle": "Baspaket",
  "svc.basicSubtitle": "Perfekt för små företag som tar sina första steg online",
  "svc.basicDetailTitle": "Omfattande funktioner:",
  "svc.basic.f1": "Enkel webbdesign (WordPress)",
  "svc.basic.f2": "Upp till 5 sidor",
  "svc.basic.f3": "Grundläggande SEO-optimering",
  "svc.basic.f4": "Kontaktformulär",
  "svc.basic.f5": "Mobilanpassad design",
  "svc.basic.d1":
   "Enkel webbdesign (WordPress): Vi skapar en ren och professionell webbplats med WordPress. Det ingår val av lämpligt tema och anpassning med er grafisk profil (logotyp, färger etc.). Ingen anpassad kodning ingår i detta paket.",
  "svc.basic.d2":
   "Upp till 5 sidor: Paketet täcker de väsentliga sidorna för en grundläggande online-närvaro, t.ex. Hem, Om oss, Tjänster, Kontakt och en Blogg (om önskat). Ytterligare sidor kan läggas till mot extra kostnad.",
  "svc.basic.d3":
   "Grundläggande SEO-optimering: Vi optimerar webbplatsens innehåll och struktur för att förbättra synligheten i sökmotorer (t.ex. Google). Det inkluderar nyckelordsanalys, optimering av metataggar och alt-texter för bilder.",
  "svc.basic.d4":
   "Kontaktformulär: Ett enkelt kontaktformulär inkluderas så att besökare enkelt kan komma i kontakt med er. Formuläret innehåller vanligtvis fält för namn, e-post, ämne och meddelande. Skräppostskydd (t.ex. reCAPTCHA) ingår.",
  "svc.basic.d5":
   "Mobilanpassad design: Webbplatsen anpassas för olika skärmstorlekar och ger en bra användarupplevelse på datorer, surfplattor och smartphones.",

  // Standard package
  "svc.standardTitle": "Standardpaket",
  "svc.standardSubtitle": "Utökade funktioner för växande företag",
  "svc.standardDetailTitle": "Avancerade funktioner:",
  "svc.standard.f1": "Skräddarsydd webbdesign (HTML, CSS, JS)",
  "svc.standard.f2": "Upp till 10 sidor",
  "svc.standard.f3": "Avancerad SEO-optimering",
  "svc.standard.f4": "Innehållshanteringssystem (CMS)",
  "svc.standard.f5": "Blogg-setup",
  "svc.standard.f6": "Sociala medier-länkar",
  "svc.standard.f7": "Mobilanpassad design",
  "svc.standard.d1":
   "Skräddarsydd webbdesign (HTML, CSS, JS): Vi skapar en unik webbdesign anpassad till era specifika krav med HTML, CSS och JavaScript. Det ger större flexibilitet och anpassningsmöjligheter jämfört med baspaketet.",
  "svc.standard.d2":
   "Upp till 10 sidor: Paketet möjliggör en mer heltäckande webbplats med extra sidor för att visa produkter, tjänster, team, testimonials eller annan relevant information.",
  "svc.standard.d3":
   "Avancerad SEO-optimering: Inkluderar mer djupgående nyckelordsanalys, on-page-optimering och grundläggande off-page-optimering. Kan även inkludera uppsättning av Google Analytics och Google Search Console.",
  "svc.standard.d4":
   "Innehållshanteringssystem (CMS): Vi integrerar ett användarvänligt CMS som låter er enkelt uppdatera och hantera webbplatsinnehållet utan att behöva kunna koda.",
  "svc.standard.d5":
   "Integration med sociala medier: Vi integrerar webbplatsen med era sociala medieprofiler (t.ex. Facebook, X, LinkedIn, Instagram). Det kan inkludera delningsknappar, inbäddade flöden eller länkar till era profiler.",
  "svc.standard.d6":
   "Blogg-setup: Vi sätter upp ett bloggsegment på webbplatsen så att ni kan publicera artiklar, nyheter och uppdateringar. Ett utmärkt sätt att förbättra SEO och engagera er målgrupp.",
  "svc.standard.d7":
   "Mobilanpassad design: Webbplatsen anpassas för olika skärmstorlekar och ger en bra användarupplevelse på datorer, surfplattor och smartphones.",

  // Premium package
  "svc.premiumTitle": "Premiumpaket",
  "svc.premiumSubtitle": "Komplett lösning för etablerade företag",
  "svc.premiumDetailTitle": "Premiumfunktioner:",
  "svc.premium.f1": "Skräddarsydd webbutveckling",
  "svc.premium.f2": "Obegränsat antal sidor",
  "svc.premium.f3": "E-handelsfunktionalitet",
  "svc.premium.f4": "Avancerad SEO & Marknadsföring",
  "svc.premium.f5": "Databasintegration",
  "svc.premium.f6": "Skräddarsydda funktioner & integrationer",
  "svc.premium.f7": "Prioriterad support",
  "svc.premium.f8": "Mobilanpassad design",
  "svc.premium.d1":
   "Skräddarsydd webbutveckling: Det här paketet är för företag som behöver mer än bara en webbplats. Vi bygger en skräddarsydd webbapplikation anpassad till era specifika behov, t.ex. användarkonton, anpassade dashboards, komplex databehandling och mer.",
  "svc.premium.d2": "Obegränsat antal sidor: Det finns ingen begränsning för hur många sidor er webbapplikation kan ha.",
  "svc.premium.d3":
   "E-handelsfunktionalitet: Vi integrerar en komplett e-handelsplattform (t.ex. WooCommerce, Shopify eller en skräddarsydd lösning) så att ni kan sälja produkter eller tjänster online. Inkluderar produktkataloger, kundvagnar, betalningsintegrationer och orderhantering.",
  "svc.premium.d4":
   "Avancerad SEO & Marknadsföring: Inkluderar en heltäckande SEO-strategi, löpande optimering och potentiellt andra digitala marknadsföringstjänster (t.ex. betald annonsering, marknadsföring i sociala medier).",
  "svc.premium.d5":
   "Databasintegration: Vi integrerar er webbapplikation med en databas (t.ex. MySQL, PostgreSQL, MongoDB) för att effektivt och säkert lagra och hantera data.",
  "svc.premium.d6":
   "Skräddarsydda funktioner & integrationer: Vi kan utveckla skräddarsydda funktioner och integrera er webbapplikation med tredjepartstjänster (t.ex. CRM, e-postmarknadsföringsverktyg, bokföringsprogram) för att möta era specifika affärsbehov.",
  "svc.premium.d7":
   "Prioriterad support: Ni får prioriterad support och underhåll för att säkerställa att er webbapplikation fungerar smidigt och effektivt. Det kan inkludera snabbare svarstider, dedikerad supportpersonal och proaktiv övervakning.",
  "svc.premium.d8":
   "Mobilanpassad design: Webbplatsen anpassas för olika skärmstorlekar och ger en bra användarupplevelse på datorer, surfplattor och smartphones.",

  // Hosting
  "svc.hostingTitle": "Värdtjänster",
  "svc.hostingSubtitle": "Pålitlig och säker webbhosting",
  "svc.hostingDetailTitle": "Hostingfunktioner:",
  "svc.hosting.f1": "99,9 % drifttidsgaranti",
  "svc.hosting.f2": "Dagliga säkerhetskopieringar",
  "svc.hosting.f3": "SSL-certifikat inkluderat",
  "svc.hosting.f4": "Dygnet-runt-övervakning",
  "svc.hosting.d1": "Högpresterande servrar",
  "svc.hosting.d2": "99,9 % drifttidsgaranti",
  "svc.hosting.d3": "Automatiska dagliga säkerhetskopieringar",
  "svc.hosting.d4": "Gratis SSL-certifikat",
  "svc.hosting.d5": "Dygnet-runt-serverövervakning",
  "svc.hosting.d6": "DDoS-skydd",
  "svc.hosting.d7": "E-posthosting",
  "svc.hosting.d8": "Obegränsad bandbredd",
  "svc.hosting.d9": "Regelbundna säkerhetsuppdateringar",
  "svc.hosting.d10": "Teknisk support",

  // Maintenance
  "svc.maintenanceTitle": "Underhållspaket",
  "svc.maintenanceSubtitle": "Professionellt webbplatsunderhåll och support",
  "svc.maintenanceDetailTitle": "Underhållsfunktioner:",
  "svc.maintenance.f1": "Regelbundna programuppdateringar",
  "svc.maintenance.f2": "Säkerhetsövervakning och åtgärder",
  "svc.maintenance.f3": "Prestandaoptimering",
  "svc.maintenance.f4": "Innehållsuppdateringar och säkerhetskopieringar",
  "svc.maintenance.f5": "Teknisk support dygnet runt",
  "svc.maintenance.d1": "Regelbundna programuppdateringar",
  "svc.maintenance.d2": "Säkerhetsövervakning och åtgärder",
  "svc.maintenance.d3": "Prestandaoptimering",
  "svc.maintenance.d4": "Innehållsuppdateringar",
  "svc.maintenance.d5": "Teknisk support",
  "svc.maintenance.d6": "Månadsrapporter",
  "svc.maintenance.d7": "Databasoptimering",
  "svc.maintenance.d8": "Hantering av säkerhetskopieringar",
  "svc.maintenance.d9": "SEO-övervakning",
  "svc.maintenance.d10": "Akuthjälp",

  // SEO
  "svc.seoTitle": "SEO-tjänster",
  "svc.seoSubtitle": "Förbättra din synlighet online",
  "svc.seoDetailTitle": "SEO-funktioner:",
  "svc.seo.f1": "Nyckelordsoptimering",
  "svc.seo.f2": "Innehållsstrategi",
  "svc.seo.f3": "Prestandauppföljning",
  "svc.seo.f4": "Månadsrapportering",
  "svc.seo.d1": "Nyckelordsanalys och optimering",
  "svc.seo.d2": "Utveckling av innehållsstrategi",
  "svc.seo.d3": "On-page SEO-optimering",
  "svc.seo.d4": "Teknisk SEO-granskning",
  "svc.seo.d5": "Länkbyggnad",
  "svc.seo.d6": "Lokal SEO-optimering",
  "svc.seo.d7": "Prestandauppföljning",
  "svc.seo.d8": "Konkurrentanalys",
  "svc.seo.d9": "Månadsrapportering",
  "svc.seo.d10": "Strategijusteringar",

  // Shared buttons
  "svc.viewDetails": "Visa detaljer",
  "svc.requestService": "Begär tjänst",

  // Request modal
  "modal.title": "Begär tjänst",
  "modal.serviceLabel": "Tjänst:",
  "modal.nameLabel": "Namn:",
  "modal.emailLabel": "E-post:",
  "modal.messageLabel": "Meddelande (valfritt):",
  "modal.submit": "Skicka förfrågan",
  "modal.thanks": "Tack för din förfrågan! Vi återkommer så snart vi kan.",
};
