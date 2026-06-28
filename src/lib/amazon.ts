export const AMAZON_TRACKING_ID = "epic05e-21";

const withAmazonTag = (url: string) => {
  const separator = url.includes("?") ? "&" : "?";
  return `${url}${separator}tag=${AMAZON_TRACKING_ID}`;
};

const withAmazonSearch = (query: string) =>
  withAmazonTag(`https://www.amazon.de/s?k=${encodeURIComponent(query)}`);

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
  },
  {
    title: "Madame Moneypenny",
    author: "Natascha Wegelin",
    category: "Finanzen für Frauen",
    groups: ["starter", "familie", "vermoegen", "all"],
    description:
      "Passend für Leserinnen, die ihre Finanzen selbstbestimmter angehen und Grundlagen zu Sparen, Vorsorge und Geldanlage verstehen möchten.",
    href: withAmazonSearch("Madame Moneypenny Finanzen Natascha Wegelin")
  },
  {
    title: "Der Finanzwesir",
    author: "Albert Warnecke",
    category: "Vermögen aufbauen",
    groups: ["vermoegen", "starter", "all"],
    description:
      "Ein bodenständiger Einstieg in langfristigen Vermögensaufbau, Indexfonds und die Frage, wie viel Finanzkomplexität wirklich nötig ist.",
    href: withAmazonSearch("Der Finanzwesir Albert Warnecke Vermögensaufbau")
  },
  {
    title: "Börse für Dummies",
    author: "Christine Bortenlänger und Ulrich Kirstein",
    category: "Börse verstehen",
    groups: ["vermoegen", "starter", "all"],
    description:
      "Geeignet für Einsteiger, die Aktienmärkte, Börsenbegriffe und grundlegende Zusammenhänge erst einmal verständlich sortieren möchten.",
    href: withAmazonSearch("Börse für Dummies Bortenlänger Kirstein")
  },
  {
    title: "ETF für Dummies",
    author: "Russell Wild",
    category: "ETF-Grundlagen",
    groups: ["vermoegen", "starter", "all"],
    description:
      "Ein ergänzender Einstieg für Leser, die ETFs, Indexfonds, Kosten und langfristige Geldanlage ohne zu viel Fachsprache verstehen wollen.",
    href: withAmazonSearch("ETF für Dummies Russell Wild")
  },
  {
    title: "Aktien für Dummies",
    author: "Paul Mladjenovic",
    category: "Aktien-Grundlagen",
    groups: ["vermoegen", "starter", "all"],
    description:
      "Hilfreich für Leser, die einzelne Aktien, Unternehmensanteile, Kennzahlen und Börsenrisiken grundlegend einordnen möchten.",
    href: withAmazonSearch("Aktien für Dummies Paul Mladjenovic")
  },
  {
    title: "Investieren für Dummies",
    author: "Eric Tyson",
    category: "Investieren lernen",
    groups: ["vermoegen", "starter", "all"],
    description:
      "Breiter Einstieg für Menschen, die Geldanlage, Risiko, Anlageklassen und langfristige Planung grundsätzlich verstehen möchten.",
    href: withAmazonSearch("Investieren für Dummies Eric Tyson")
  },
  {
    title: "Rich Dad Poor Dad",
    author: "Robert T. Kiyosaki",
    category: "Geld-Mindset",
    groups: ["mindset", "starter", "all"],
    description:
      "Bekanntes Mindset-Buch über Geld, Vermögenswerte und finanzielles Denken. Eher als Denkanstoß lesen, nicht als konkrete Finanzberatung.",
    href: withAmazonSearch("Rich Dad Poor Dad deutsch Robert Kiyosaki")
  },
  {
    title: "Die Kunst, über Geld nachzudenken",
    author: "André Kostolany",
    category: "Börsen-Klassiker",
    groups: ["mindset", "vermoegen", "all"],
    description:
      "Klassische Gedanken zu Börse, Geduld, Psychologie und Spekulation. Gut für Leser, die Finanzmärkte historisch und mental verstehen möchten.",
    href: withAmazonSearch("Die Kunst über Geld nachzudenken André Kostolany")
  },
  {
    title: "Der entspannte Weg zum Reichtum",
    author: "Susan Levermann",
    category: "Aktien und Strategie",
    groups: ["vermoegen", "all"],
    description:
      "Für fortgeschrittene Einsteiger interessant, die systematischer über Aktienauswahl, Kennzahlen und ruhige Regeln nachdenken möchten.",
    href: withAmazonSearch("Der entspannte Weg zum Reichtum Susan Levermann")
  },
  {
    title: "Rente mit 40",
    author: "Florian Wagner",
    category: "Finanzielle Freiheit",
    groups: ["mindset", "vermoegen", "all"],
    description:
      "Passt zur FIRE-Idee und zu finanzieller Freiheit als Lebensentwurf. Sinnvoll als Inspiration, aber ohne Garantieversprechen einordnen.",
    href: withAmazonSearch("Rente mit 40 Florian Wagner")
  },
  {
    title: "Young Money Guide",
    author: "Henning Jauernig",
    category: "Junge Erwachsene",
    groups: ["starter", "all"],
    description:
      "Einsteigerfreundlich für junge Menschen, die Konto, Versicherungen, Sparen, Investieren und Finanzentscheidungen zum ersten Mal ordnen wollen.",
    href: withAmazonSearch("Young Money Guide Henning Jauernig")
  },
  {
    title: "Intelligent Investieren",
    author: "Benjamin Graham",
    category: "Investment-Klassiker",
    groups: ["vermoegen", "all"],
    description:
      "Ein Klassiker für Value-Investing und langfristige Aktienanlage. Eher anspruchsvoll, daher gut als weiterführende Empfehlung.",
    href: withAmazonSearch("Intelligent Investieren Benjamin Graham deutsch")
  },
  {
    title: "Geldanlage für Faule",
    author: "Finanztest / Stiftung Warentest",
    category: "Einfach investieren",
    groups: ["starter", "vermoegen", "all"],
    description:
      "Passend für Leser, die eine möglichst einfache, ruhige und verbrauchernahe Einführung in Geldanlage suchen.",
    href: withAmazonSearch("Geldanlage für Faule Stiftung Warentest Finanztest")
  },
  {
    title: "Meine Finanzen im Griff",
    author: "Verbraucherzentrale",
    category: "Finanzen ordnen",
    groups: ["budget", "starter", "familie", "all"],
    description:
      "Geeignet für Menschen, die Haushaltsbudget, Verträge, Rücklagen und finanzielle Entscheidungen praktisch strukturieren möchten.",
    href: withAmazonSearch("Meine Finanzen im Griff Verbraucherzentrale")
  },
  {
    title: "Schuldenfrei",
    author: "Ratgeber und Arbeitsbücher",
    category: "Schulden abbauen",
    groups: ["budget", "starter", "all"],
    description:
      "Suchlink zu passenden Ratgebern und Arbeitsbüchern für Menschen, die Schulden sortieren und Tilgung planvoll angehen möchten.",
    href: withAmazonSearch("Schuldenfrei Buch Schulden abbauen Ratgeber")
  },
  {
    title: "Finanzplaner 2026",
    author: "Budget- und Haushaltsplaner",
    category: "Budget-Tool",
    groups: ["budget", "familie", "all"],
    description:
      "Praktischer Suchlink für aktuelle Finanzplaner, Monatsbudgets und Jahresübersichten zur Planung von Einnahmen und Ausgaben.",
    href: withAmazonSearch("Finanzplaner 2026 Haushaltsbuch Budgetplaner")
  },
  {
    title: "Kakebo Haushaltsbuch",
    author: "Japanische Budgetmethode",
    category: "Geld sparen",
    groups: ["budget", "starter", "familie", "all"],
    description:
      "Kakebo-Bücher passen gut zu achtsamem Konsum, bewusster Ausgabenprüfung und einfachen monatlichen Sparzielen.",
    href: withAmazonSearch("Kakebo Haushaltsbuch deutsch Geld sparen")
  },
  {
    title: "52 Wochen Sparchallenge",
    author: "Sparchallenge-Planer",
    category: "Sparroutine",
    groups: ["budget", "familie", "all"],
    description:
      "Ein motivierender Zusatz für Leser, die Sparen spielerischer angehen und kleine Beträge regelmäßig zurücklegen möchten.",
    href: withAmazonSearch("52 Wochen Sparchallenge Buch deutsch")
  }
];
