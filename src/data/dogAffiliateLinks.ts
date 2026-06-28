export type DigistoreRecommendation = {
  id: string;
  title: string;
  href: string;
  category: string;
  description: string;
  bestFor: string;
  fit: "hund" | "weitere-empfehlung";
  internalNote: string;
};

export const digistoreDogRecommendations: DigistoreRecommendation[] = [
  {
    id: "hundegruppen-im-gleichgewicht",
    title: "Hundegruppen im Gleichgewicht",
    href: "https://www.digistore24.com/redir/566575/Benman8810/",
    category: "Mehrhundehaltung",
    description:
      "Der Link führt zu mehrerehunde-einteam.de und passt inhaltlich zu Hundegruppen, Zusammenleben und Management mit mehreren Hunden.",
    bestFor: "Halter mit zwei oder mehr Hunden, die mehr Ruhe und Struktur in den Alltag bringen möchten.",
    fit: "hund",
    internalNote: "Geprüft: hundebezogener Kurs, passend für Mehrhundehaltung."
  },
  {
    id: "mehrere-hunde-einteam",
    title: "Mehrere Hunde - EinTeam",
    href: "https://www.digistore24.com/redir/564188/Benman8810/",
    category: "Mehrhundehaltung",
    description:
      "Der Link führt zu einem Angebot für Menschen mit mehreren Hunden. Deshalb wird er nur im Hundetraining- und Ratgeberkontext platziert.",
    bestFor: "Mehrhundehaushalte, die Alltag, Ressourcen und Gruppendynamik besser sortieren wollen.",
    fit: "hund",
    internalNote: "Geprüft: hundebezogen, passend für Training und Management."
  },
  {
    id: "welpenzeit",
    title: "WELPENZEIT / HS-Welpen-Training",
    href: "https://www.digistore24.com/redir/252196/Benman8810/",
    category: "Welpen",
    description:
      "Der Link führt zu einer Online-Hundeschule mit Welpen-Training und passt zu Welpeneinzug, Erstausstattung und den ersten Übungen.",
    bestFor: "Neue Welpenhalter, die einen strukturierten Einstieg in die ersten Wochen suchen.",
    fit: "hund",
    internalNote: "Geprüft: hunde- und welpenbezogen, passend für Welpenbereich."
  },
  {
    id: "wecke-den-optimisten",
    title: "Wecke den Optimisten in deinem Hund",
    href: "https://www.digistore24.com/redir/259648/Benman8810/",
    category: "Verhaltenstraining",
    description:
      "Der Link führt zu einer Schulung über auffälliges Verhalten, Erwartungshaltung und Training mit Hunden. Er passt nur mit vorsichtigem Hinweis und ohne Heilversprechen.",
    bestFor: "Halter, die sich mit Stress, Umweltreizen und Verhalten ihres Hundes strukturiert beschäftigen möchten.",
    fit: "hund",
    internalNote: "Geprüft: hundebezogen, sensible Platzierung ohne Erfolgsversprechen."
  }
];

export const otherDigistoreRecommendations: DigistoreRecommendation[] = [
  {
    id: "chi-statt-botox",
    title: "Chi statt Botox Online-Kurs",
    href: "https://chi-statt-botox.com/online-kurs/#aff=Benman8810",
    category: "Weitere Empfehlungen",
    description:
      "Dieser Link ist ein Beauty-/Gesichtsyoga-Angebot und passt inhaltlich nicht zu Hund, Welpen, Hundetraining oder Hundegesundheit.",
    bestFor: "Nicht prominent auf Hundeseiten verwenden; nur als getrennte weitere Empfehlung kennzeichnen.",
    fit: "weitere-empfehlung",
    internalNote: "Geprüft: nicht hundebezogen, daher nicht prominent im Hundebereich einbauen."
  }
];
