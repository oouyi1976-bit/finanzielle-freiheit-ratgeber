export type FaqItem = {
  question: string;
  answer: string;
};

export type RelatedItem = {
  title: string;
  description: string;
  href: string;
  meta?: string;
};

export const dogArticleLinks: RelatedItem[] = [
  {
    title: "Welpe zieht ein: Was braucht man wirklich?",
    description: "Eine realistische Erstausstattung ohne unnötige Käufe.",
    href: "/ratgeber/welpe-zieht-ein-was-braucht-man-wirklich",
    meta: "Welpen"
  },
  {
    title: "Die besten Hundeleinen für den Alltag",
    description: "Welche Leinenarten im Alltag sinnvoll sind und worauf du achten solltest.",
    href: "/ratgeber/die-besten-hundeleinen-fuer-den-alltag",
    meta: "Zubehör"
  },
  {
    title: "Hundegeschirr oder Halsband: Was ist besser?",
    description: "Eine sachliche Entscheidungshilfe für Alltag, Training und Sicherheit.",
    href: "/ratgeber/hundegeschirr-oder-halsband-was-ist-besser",
    meta: "Zubehör"
  },
  {
    title: "Hundebox fürs Auto: Worauf achten?",
    description: "Sicherheit, Größe, Gewöhnung und praktische Kaufkriterien.",
    href: "/ratgeber/hundebox-fuers-auto-worauf-achten",
    meta: "Reisen"
  },
  {
    title: "Reisen mit Hund: Checkliste für Anfänger",
    description: "Vorbereitung, Dokumente, Pausen, Futter und Ruhe am Urlaubsort.",
    href: "/ratgeber/reisen-mit-hund-checkliste-fuer-anfaenger",
    meta: "Reisen"
  },
  {
    title: "Hundetraining zuhause: einfache Übungen",
    description: "Grundlagen, die du freundlich und kleinschrittig im Alltag üben kannst.",
    href: "/ratgeber/hundetraining-zuhause-einfache-uebungen",
    meta: "Training"
  },
  {
    title: "Leinenführigkeit verbessern: einfache Tipps",
    description: "Wie du Ziehen an der Leine fairer und strukturierter angehst.",
    href: "/ratgeber/leinenfuehrigkeit-verbessern-einfache-tipps",
    meta: "Training"
  },
  {
    title: "Welpen stubenrein bekommen: realistische Tipps",
    description: "Warum Geduld, Rhythmus und Management wichtiger sind als Druck.",
    href: "/ratgeber/welpen-stubenrein-bekommen-realistische-tipps",
    meta: "Welpen"
  },
  {
    title: "Hund alleine lassen: Schritt für Schritt üben",
    description: "Ein ruhiger Aufbau für kurze Abwesenheiten und mehr Sicherheit.",
    href: "/ratgeber/hund-alleine-lassen-schritt-fuer-schritt-ueben",
    meta: "Alltag"
  },
  {
    title: "Hundespielzeug: Was ist sinnvoll?",
    description: "Spielzeug auswählen, Überforderung vermeiden und gemeinsam spielen.",
    href: "/ratgeber/hundespielzeug-was-ist-sinnvoll",
    meta: "Zubehör"
  },
  {
    title: "Hundebett kaufen: Darauf solltest du achten",
    description: "Größe, Material, Liegeverhalten und Reinigung richtig einschätzen.",
    href: "/ratgeber/hundebett-kaufen-darauf-solltest-du-achten",
    meta: "Zubehör"
  },
  {
    title: "Gassi gehen mit Welpen: Was ist wichtig?",
    description: "Kurze Runden, Reize, Sicherheit und Pausen für junge Hunde.",
    href: "/ratgeber/gassi-gehen-mit-welpen-was-ist-wichtig",
    meta: "Welpen"
  },
  {
    title: "Hundepflege zuhause: Grundausstattung",
    description: "Bürste, Krallen, Pfoten und Shampoo ohne übertriebene Versprechen.",
    href: "/ratgeber/hundepflege-zuhause-grundausstattung",
    meta: "Pflege"
  },
  {
    title: "Futterplatz für Hunde richtig einrichten",
    description: "Näpfe, Unterlage, Ruhe und Hygiene am Futterplatz.",
    href: "/ratgeber/futterplatz-fuer-hunde-richtig-einrichten",
    meta: "Futter"
  },
  {
    title: "Die häufigsten Fehler neuer Hundebesitzer",
    description: "Typische Stolpersteine und wie du sie freundlich vermeidest.",
    href: "/ratgeber/die-haeufigsten-fehler-neuer-hundebesitzer",
    meta: "Ratgeber"
  }
];

export const dogPageLinks: RelatedItem[] = [
  {
    title: "Hundetraining",
    description: "Grundlagen, Leinenführigkeit, Alleinbleiben und freundliche Übungen.",
    href: "/hundetraining",
    meta: "Training"
  },
  {
    title: "Welpen",
    description: "Erstausstattung, Stubenreinheit, Gassi gehen und Eingewöhnung.",
    href: "/welpen",
    meta: "Welpen"
  },
  {
    title: "Hundezubehör",
    description: "Leinen, Geschirre, Betten, Boxen, Pflege und Sicherheitszubehör.",
    href: "/hundezubehoer",
    meta: "Produkte"
  },
  {
    title: "Reisen mit Hund",
    description: "Autofahrt, Unterkunft, Packliste und ruhige Vorbereitung.",
    href: "/hund-reisen",
    meta: "Reisen"
  },
  {
    title: "Beste Hundeprodukte",
    description: "50 neutrale Produktplätze mit Amazon-Platzhalterlinks.",
    href: "/beste-hundeprodukte",
    meta: "Amazon"
  }
];

export const defaultDogFaq: FaqItem[] = [
  {
    question: "Sind die Empfehlungen echte Testsieger?",
    answer:
      "Nein. Die Inhalte sind redaktionelle Orientierung und Produktplätze. Preise, Bewertungen, Materialangaben und Verfügbarkeit solltest du vor dem Kauf direkt beim Anbieter prüfen."
  },
  {
    question: "Ersetzt diese Website eine Hundeschule oder Tierarztberatung?",
    answer:
      "Nein. Die Ratgeber können dir beim Sortieren helfen, ersetzen aber keine individuelle Einschätzung durch Hundeschule, Trainer, Tierarzt oder Tierärztin."
  },
  {
    question: "Warum sind manche Links als Affiliate-Link gekennzeichnet?",
    answer:
      "Bei einem Kauf über Affiliate-Links kann der Betreiber eine Provision erhalten. Für dich entstehen dadurch in der Regel keine zusätzlichen Kosten."
  }
];

export const healthDogFaq: FaqItem[] = [
  {
    question: "Darf ich Gesundheitsprobleme beim Hund selbst behandeln?",
    answer:
      "Bei Schmerzen, Lahmheit, Erbrechen, Durchfall, Atemproblemen, starkem Juckreiz oder verändertem Verhalten solltest du tierärztlichen Rat einholen. Online-Inhalte können keine Diagnose stellen."
  },
  {
    question: "Welche Pflegeprodukte braucht man wirklich?",
    answer:
      "Das hängt von Felltyp, Haut, Alter und Alltag ab. Meist reichen passende Bürste, Pfotenpflege, mildes Hundeshampoo für Ausnahmefälle und eine ruhige Routine."
  },
  {
    question: "Sind Nahrungsergänzungen sinnvoll?",
    answer:
      "Das sollte individuell mit Tierarzt oder Tierärztin besprochen werden, besonders bei Welpen, Senioren, Erkrankungen oder spezieller Fütterung."
  }
];
