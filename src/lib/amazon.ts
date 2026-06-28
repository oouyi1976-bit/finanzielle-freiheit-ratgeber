export const AMAZON_TRACKING_ID = "epic05e-21";

const withAmazonTag = (url: string) => {
  const separator = url.includes("?") ? "&" : "?";
  return `${url}${separator}tag=${AMAZON_TRACKING_ID}`;
};

export const amazonRecommendations = [
  {
    title: "Der Weg zur finanziellen Freiheit",
    author: "Bodo Schäfer",
    category: "Bodo Schäfer",
    groups: ["bodo", "starter", "all"],
    description:
      "Die passende Amazon-Alternative zum Hauptprodukt. Gut als Zusatzlink für Besucher, die lieber direkt bei Amazon kaufen.",
    href: withAmazonTag("https://www.amazon.de/Weg-zur-finanziellen-Freiheit-Million/dp/3423340002")
  },
  {
    title: "Ein Hund namens Money",
    author: "Bodo Schäfer",
    category: "Familie und Einsteiger",
    groups: ["bodo", "familie", "starter", "all"],
    description:
      "Leicht zugänglicher Einstieg in Geldthemen, besonders passend für Familien, junge Leser und Menschen, die Finanzbildung einfach starten möchten.",
    href: withAmazonTag("https://www.amazon.de/Ein-Hund-namens-Money-Spielerisch/dp/3423349654")
  },
  {
    title: "Money oder das 1x1 des Geldes",
    author: "Bodo Schäfer",
    category: "Grundlagen",
    groups: ["bodo", "starter", "all"],
    description:
      "Ergänzendes Bodo-Schäfer-Buch für Leser, die Geldgrundlagen, Sparen und Wohlstandsdenken spielerisch vertiefen möchten.",
    href: withAmazonTag("https://www.amazon.de/Money-oder-das-1x1-Geldes/dp/3426775581")
  },
  {
    title: "Die Gesetze der Gewinner",
    author: "Bodo Schäfer",
    category: "Mindset",
    groups: ["bodo", "mindset", "all"],
    description:
      "Passend für die Verbindung aus persönlichen Zielen, Disziplin und Umsetzungsstärke. Kein reines Finanzbuch, aber thematisch anschlussfähig.",
    href: withAmazonTag("https://www.amazon.de/Die-Gesetze-Gewinner-Erfolg-erf%C3%BClltes/dp/3423340487")
  },
  {
    title: "Das einzige Buch, das Du über Finanzen lesen solltest",
    author: "Thomas Kehl und Mona Linke",
    category: "Finanzbuch für Anfänger",
    groups: ["starter", "vermoegen", "all"],
    description:
      "Ein moderner Einstieg in persönliche Finanzen, ETFs und Vermögensaufbau. Gut als sachliche Ergänzung zu motivierenden Finanzbüchern.",
    href: withAmazonTag("https://www.amazon.de/einzige-Buch-Finanzen-lesen-solltest/dp/3548065848")
  },
  {
    title: "Finanzen ganz einfach",
    author: "Saidi Sulilatu",
    category: "Finanzen ordnen",
    groups: ["starter", "vermoegen", "all"],
    description:
      "Hilfreich für Menschen, die Verträge, Rücklagen, Altersvorsorge und Geldanlage unkompliziert strukturieren möchten.",
    href: withAmazonTag("https://www.amazon.de/Finanzen-ganz-einfach-Finanztip-Prinzip-Altersvorsorge/dp/3426563010")
  },
  {
    title: "Souverän investieren für Einsteiger",
    author: "Gerd Kommer",
    category: "Vermögen aufbauen",
    groups: ["vermoegen", "all"],
    description:
      "Geeignet für Leser, die nach den Grundlagen zu ETFs, Kosten, Risiko und langfristigem Vermögensaufbau suchen.",
    href: withAmazonTag("https://www.amazon.de/Souver%C3%A4n-investieren-f%C3%BCr-Einsteiger-Verm%C3%B6gen/dp/3593518686")
  },
  {
    title: "Über die Psychologie des Geldes",
    author: "Morgan Housel",
    category: "Geld-Mindset",
    groups: ["mindset", "starter", "all"],
    description:
      "Stark für langfristiges Denken, Verhalten, Risiko und die psychologische Seite von Geldentscheidungen.",
    href: withAmazonTag("https://www.amazon.de/%C3%9Cber-die-Psychologie-Geldes-Lektionen/dp/3959724438")
  },
  {
    title: "Der reichste Mann von Babylon",
    author: "George S. Clason",
    category: "Klassiker",
    groups: ["starter", "mindset", "all"],
    description:
      "Ein klassischer Einstieg in einfache Prinzipien wie Sparen, Rücklagen, Schuldenabbau und bewusstes Geldverhalten.",
    href: withAmazonTag("https://www.amazon.de/reichste-Mann-von-Babylon-Erfolgsgeheimnisse/dp/3442163838")
  },
  {
    title: "Easy Money",
    author: "Margarethe Honisch",
    category: "Finanzbuch für Anfänger",
    groups: ["starter", "familie", "vermoegen", "all"],
    description:
      "Lockerer Einstieg für Menschen, die Finanzen, Vorsorge und Investieren ohne unnötige Fachsprache verstehen möchten.",
    href: withAmazonTag("https://www.amazon.de/Easy-Money-Finanzen-vorsorgst-trotzdem/dp/3492314961")
  },
  {
    title: "Das Haushaltsbuch",
    author: "Verbraucherzentrale NRW",
    category: "Geld sparen",
    groups: ["budget", "starter", "familie", "all"],
    description:
      "Praktisch für alle, die Einnahmen und Ausgaben über 12 Monate schriftlich erfassen und Gewohnheiten sichtbar machen möchten.",
    href: withAmazonTag("https://www.amazon.de/Das-Haushaltsbuch-Finanzen-Ausgaben-Einnahmen/dp/3863361253")
  },
  {
    title: "Budget Planner Deutsch A6 Binder",
    author: "FUHOMI",
    category: "Budget-Tool",
    groups: ["budget", "familie", "all"],
    description:
      "Ein physischer Budgetplaner für Umschlagmethode, Sparchallenges und Haushaltsbudget. Gut passend zu Geld-sparen-Inhalten.",
    href: withAmazonTag("https://www.amazon.de/FUHOMI-Sparchallenges-Finanzplaner-Haushaltsbuch-Umschlagmethode/dp/B0CR3XHJT3")
  }
];
