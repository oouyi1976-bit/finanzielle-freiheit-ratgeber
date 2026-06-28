import { defaultDogFaq, dogArticleLinks, dogPageLinks, healthDogFaq, type FaqItem, type RelatedItem } from "./dogContent";

export type DogPageSection = {
  heading: string;
  paragraphs: string[];
};

export type DogComparisonRow = {
  option: string;
  strength: string;
  limit: string;
  bestFor: string;
};

export type DogPage = {
  slug: string;
  title: string;
  description: string;
  eyebrow: string;
  h1: string;
  intro: string;
  sections: DogPageSection[];
  productCategories: string[];
  productLimit: number;
  related: RelatedItem[];
  faq: FaqItem[];
  pros: string[];
  cons: string[];
  comparisonRows?: DogComparisonRow[];
  showDigistore?: boolean;
  showOtherRecommendations?: boolean;
  disclaimerVariant?: "general" | "health" | "affiliate";
};

const equipmentComparison: DogComparisonRow[] = [
  {
    option: "Geschirr",
    strength: "Verteilt Zug besser am Körper und ist für viele Alltagssituationen angenehm.",
    limit: "Muss gut sitzen, sonst kann es scheuern oder die Bewegung einschränken.",
    bestFor: "Welpen, Training, lange Spaziergänge und Hunde, die am Hals empfindlich sind."
  },
  {
    option: "Halsband",
    strength: "Schnell anzulegen und praktisch für Hundemarke oder kurze Wege.",
    limit: "Bei Zug entsteht Druck am Hals; für ziehende Hunde ungeeignet.",
    bestFor: "Leinenführige Hunde und kurze, ruhige Situationen."
  },
  {
    option: "Schleppleine",
    strength: "Gibt Bewegungsradius, ohne Kontrolle komplett abzugeben.",
    limit: "Erfordert Übung, Handschuhe und übersichtliche Umgebung.",
    bestFor: "Rückruftraining, Junghunde und kontrolliertes Erkunden."
  }
];

export const dogPages: DogPage[] = [
  {
    slug: "hunde",
    title: "Hunde-Ratgeber: Training, Zubehör, Welpen und Gesundheit",
    description:
      "Seriöser Hunde-Ratgeber mit Tipps zu Hundetraining, Welpen, Hundezubehör, Reisen, Futter und Gesundheit - freundlich, realistisch und affiliate-transparent.",
    eyebrow: "Hunde-Ratgeber",
    h1: "Hunde verstehen, gut ausstatten und entspannter begleiten",
    intro:
      "Hier findest du einen ruhigen Einstieg in die wichtigsten Themen für Hundebesitzer: Alltag, Welpenzeit, Training, Zubehör, Reisen, Futterplatz und Gesundheit. Der Fokus liegt auf hilfreicher Orientierung statt Verkaufsdruck.",
    sections: [
      {
        heading: "Was Hundebesitzer wirklich brauchen",
        paragraphs: [
          "Ein guter Hundealltag entsteht selten durch besonders viele Produkte. Wichtiger sind passende Grundausstattung, klare Routinen, faire Kommunikation und ein Blick für den einzelnen Hund. Eine Leine muss zur Umgebung passen, ein Geschirr muss sitzen und ein Schlafplatz muss zum Liegeverhalten deines Hundes passen.",
          "Gerade neue Hundebesitzer kaufen oft zu viel auf einmal. Sinnvoller ist eine kleine, belastbare Startausstattung: Leine, Geschirr oder Halsband, Futter- und Wassernapf, Liegeplatz, Kotbeutel, Bürste, ein sicheres Auto-Setup und wenige gut ausgewählte Spielzeuge."
        ]
      },
      {
        heading: "Training ohne Druck",
        paragraphs: [
          "Hundetraining beginnt nicht erst auf dem Hundeplatz. Rückruf, Leinenführigkeit, Ruhe, Alleinbleiben und Orientierung am Menschen entstehen im Alltag durch viele kleine Wiederholungen. Freundliches Training bedeutet nicht, alles laufen zu lassen; es bedeutet, erwünschtes Verhalten verständlich aufzubauen.",
          "Wenn Verhalten stark belastet, aggressiv wirkt oder dein Hund häufig gestresst ist, lohnt sich qualifizierte Unterstützung. Online-Kurse können Struktur geben, ersetzen aber keine individuelle Einschätzung bei komplexen Problemen."
        ]
      },
      {
        heading: "Gesundheit und Verantwortung",
        paragraphs: [
          "Pflege, Futter und Bewegung sollten zum Alter, Körperbau und Gesundheitszustand passen. Ratgebertexte können helfen, typische Fragen zu sortieren, aber sie können keine Diagnose stellen. Bei gesundheitlichen Problemen ist eine Tierarztpraxis der richtige Ansprechpartner.",
          "Auf dieser Seite werden Produkte und Kurse transparent als Affiliate-Empfehlungen gekennzeichnet. Es gibt keine Erfolgsgarantien, keine medizinischen Heilversprechen und keine erfundenen Testsieger."
        ]
      }
    ],
    productCategories: ["Hundeleinen", "Hundegeschirre", "Hundebetten", "Hundepflege", "Sicherheitszubehör"],
    productLimit: 6,
    related: dogPageLinks,
    faq: defaultDogFaq,
    pros: ["Kleine, passende Grundausstattung reicht oft aus", "Training sollte alltagstauglich und freundlich sein", "Gesundheitliche Fragen gehören in die Tierarztpraxis"],
    cons: ["Zu viele Produkte können den Start unübersichtlich machen", "Online-Tipps lösen keine schweren Verhaltensprobleme allein", "Affiliate-Links müssen transparent geprüft werden"],
    comparisonRows: equipmentComparison,
    showDigistore: true
  },
  {
    slug: "hundetraining",
    title: "Hundetraining zuhause: Grundlagen, Übungen und Zubehör",
    description:
      "Hundetraining zuhause realistisch starten: Leinenführigkeit, Rückruf, Alleinbleiben, Ruhetraining, Trainingszubehör und passende Online-Kurse.",
    eyebrow: "Hundetraining",
    h1: "Hundetraining zuhause: freundlich, klar und machbar",
    intro:
      "Gutes Hundetraining ist kein kurzer Trick, sondern ein ruhiger Aufbau aus Wiederholung, Management und fairen Erwartungen. Diese Seite hilft dir, typische Alltagsthemen zu sortieren.",
    sections: [
      {
        heading: "Die wichtigsten Grundlagen",
        paragraphs: [
          "Beginne mit wenigen Signalen, die im Alltag wirklich helfen: Name, Rückruf, Abbruch oder Umorientierung, ruhiges Warten, lockere Leine und ein klarer Ruheplatz. Kurze Einheiten sind oft besser als lange Trainingspläne, die Mensch und Hund überfordern.",
          "Belohnungen müssen zum Hund passen. Manche Hunde arbeiten gern für Futter, andere für Spiel, soziale Bestätigung oder die Erlaubnis, weiterzuschnüffeln. Entscheidend ist, dass dein Hund versteht, welches Verhalten sich lohnt."
        ]
      },
      {
        heading: "Leinenführigkeit und Alltag",
        paragraphs: [
          "Ziehende Hunde brauchen nicht härtere Hilfsmittel, sondern verständliche Alternativen. Starte in leichter Umgebung, markiere lockere Leine, wechsle Tempo und Richtung ruhig und belohne Orientierung. Je reizvoller die Umgebung, desto kleiner sollten die Schritte werden.",
          "Ein passendes Geschirr, eine verstellbare Leine und ein gut erreichbarer Leckerlibeutel können das Training erleichtern. Sie ersetzen aber nicht das eigentliche Lernen."
        ]
      },
      {
        heading: "Wann Unterstützung sinnvoll ist",
        paragraphs: [
          "Wenn dein Hund stark bellt, beißt, Menschen oder Hunde bedroht, Panik zeigt oder im Alltag kaum zur Ruhe kommt, solltest du qualifizierte Hilfe suchen. Online-Angebote können Theorie und Struktur liefern, bei Sicherheitsfragen ist individuelle Begleitung wichtig.",
          "Die Digistore24-Kurse im Hundebereich werden deshalb nicht als Wundermittel dargestellt. Sie können ein Baustein sein, wenn Thema, Anbieter und Erwartungen zu deiner Situation passen."
        ]
      }
    ],
    productCategories: ["Trainingszubehör", "Hundeleinen", "Hundegeschirre", "Hundespielzeug"],
    productLimit: 9,
    related: dogArticleLinks.filter((item) => ["Training", "Alltag", "Welpen"].includes(item.meta ?? "")).slice(0, 6),
    faq: [
      {
        question: "Wie oft sollte ich mit meinem Hund trainieren?",
        answer: "Mehrere kurze Einheiten im Alltag sind meist sinnvoller als eine lange Trainingseinheit. Wichtig sind Pausen, klare Signale und eine Umgebung, in der dein Hund noch lernen kann."
      },
      {
        question: "Brauche ich Trainingszubehör?",
        answer: "Ein Clicker, Leckerlibeutel, Targetstab oder eine Schleppleine können helfen. Entscheidend bleibt aber der faire Trainingsaufbau, nicht das Produkt."
      },
      {
        question: "Wann ist eine Hundeschule sinnvoll?",
        answer: "Bei Unsicherheit, starkem Stress, Aggression, Angst oder Sicherheitsfragen ist qualifizierte Begleitung sinnvoll. Online-Inhalte ersetzen diese Einschätzung nicht."
      }
    ],
    pros: ["Kurze Übungen lassen sich gut in den Alltag integrieren", "Passendes Zubehör kann Timing und Management erleichtern", "Freundliches Training stärkt Orientierung und Vertrauen"],
    cons: ["Zu schnelle Fortschrittserwartungen erzeugen Frust", "Hilfsmittel lösen Ziehen oder Angst nicht allein", "Schwieriges Verhalten braucht oft individuelle Unterstützung"],
    comparisonRows: [
      {
        option: "Clicker",
        strength: "Sehr präzises Markersignal für gewünschtes Verhalten.",
        limit: "Muss sauber aufgebaut und konsequent genutzt werden.",
        bestFor: "Tricktraining, Grundlagen und feines Timing."
      },
      {
        option: "Schleppleine",
        strength: "Ermöglicht Rückruftraining mit Sicherheitsrahmen.",
        limit: "Kann sich verheddern und braucht Übung.",
        bestFor: "Junghunde, Rückruf und kontrolliertes Erkunden."
      },
      {
        option: "Online-Kurs",
        strength: "Strukturierte Theorie und wiederholbare Lektionen.",
        limit: "Keine individuelle Beobachtung deines Hundes vor Ort.",
        bestFor: "Grundlagen, Ergänzung und Halter, die selbstständig arbeiten."
      }
    ],
    showDigistore: true
  },
  {
    slug: "welpen",
    title: "Welpen-Ratgeber: Einzug, Erstausstattung und Training",
    description:
      "Welpen-Ratgeber für die ersten Wochen: Erstausstattung, Stubenreinheit, Schlafplatz, Gassi gehen, Welpentraining und realistische Erwartungen.",
    eyebrow: "Welpen",
    h1: "Welpe zieht ein: ruhig starten statt alles perfekt machen",
    intro:
      "Die Welpenzeit ist schön, aber auch intensiv. Diese Seite hilft dir, den Start praktisch zu planen und typische Fehler zu vermeiden, ohne dich mit unnötiger Ausstattung zu überladen.",
    sections: [
      {
        heading: "Die erste Ausstattung",
        paragraphs: [
          "Für die ersten Tage brauchst du keinen kompletten Hundeladen. Sinnvoll sind ein gut sitzendes Welpengeschirr, eine leichte Leine, ein ruhiger Schlafplatz, Näpfe, geeignetes Futter, Kotbeutel, wenige sichere Kauspielzeuge und eine Transportlösung für Auto oder Tierarzt.",
          "Alles, was mit Größe zu tun hat, sollte mit Wachstumsspielraum geplant werden. Welpen verändern sich schnell; Geschirre, Halsbänder und Liegeplätze müssen regelmäßig geprüft werden."
        ]
      },
      {
        heading: "Stubenreinheit und Alltag",
        paragraphs: [
          "Stubenreinheit entsteht durch Rhythmus, Beobachtung und schnelle Erfolgsmomente draußen. Nach Schlafen, Fressen, Spielen und Aufregung ist die Chance hoch, dass dein Welpe muss. Strafen bei Missgeschicken machen den Start meist schwerer.",
          "Kurze Gassirunden, viel Schlaf und dosierte Reize sind wichtiger als lange Ausflüge. Ein Welpe muss die Welt kennenlernen, aber nicht alles in den ersten Tagen erleben."
        ]
      },
      {
        heading: "Training in kleinen Schritten",
        paragraphs: [
          "Name, Rückruf, Geschirr anziehen, kurze Leinenmomente und ruhiges Warten sind gute erste Übungen. Bleibe freundlich, belohne erwünschtes Verhalten und beende Einheiten, bevor dein Welpe müde oder überdreht wird.",
          "Welpenkurse oder Online-Strukturen können hilfreich sein, wenn sie ohne Druck arbeiten und realistische Entwicklungsschritte vermitteln."
        ]
      }
    ],
    productCategories: ["Welpenzubehör", "Hundegeschirre", "Futter- und Wassernäpfe", "Hundespielzeug"],
    productLimit: 10,
    related: dogArticleLinks.filter((item) => item.meta === "Welpen" || item.meta === "Training").slice(0, 6),
    faq: [
      {
        question: "Was braucht ein Welpe wirklich am ersten Tag?",
        answer: "Leichte Leine, passendes Geschirr, Futter, Wasser, Näpfe, Schlafplatz, Kotbeutel, sichere Transportlösung und ein bis zwei welpentaugliche Kauspielzeuge reichen für den Start meist aus."
      },
      {
        question: "Wie lange dauert Stubenreinheit?",
        answer: "Das ist individuell. Viele Welpen brauchen Wochen bis Monate, bis es zuverlässig klappt. Rhythmus, Beobachtung und ruhiges Loben draußen helfen mehr als Druck."
      },
      {
        question: "Sollte ein Welpe schon trainieren?",
        answer: "Ja, aber spielerisch und kurz. Der Fokus liegt auf Alltag, Vertrauen, Ruhe, Namen, Rückrufanfängen und freundlicher Gewöhnung."
      }
    ],
    pros: ["Eine kleine Erstausstattung reicht für den Anfang", "Rhythmus hilft mehr als Perfektion", "Frühes Training darf leicht und spielerisch sein"],
    cons: ["Zu viele Reize überfordern Welpen schnell", "Größen müssen wegen Wachstum regelmäßig geprüft werden", "Missgeschicke sind normal und kein Grund für Strafen"],
    showDigistore: true
  },
  {
    slug: "hundezubehoer",
    title: "Hundezubehör: Leinen, Geschirre, Betten und Pflege",
    description:
      "Hundezubehör sinnvoll auswählen: Leinen, Geschirre, Halsbänder, Hundebetten, Boxen, Pflege, Spielzeug und Sicherheitszubehör ohne Verkaufsdruck.",
    eyebrow: "Hundezubehör",
    h1: "Hundezubehör sinnvoll auswählen",
    intro:
      "Gutes Zubehör macht den Alltag leichter, wenn es zum Hund, zur Umgebung und zu deinen Routinen passt. Diese Übersicht hilft dir, Prioritäten zu setzen.",
    sections: [
      {
        heading: "Grundausstattung vor Spezialprodukten",
        paragraphs: [
          "Beginne mit den Dingen, die täglich genutzt werden: Leine, Geschirr oder Halsband, Schlafplatz, Näpfe, Kotbeutel, Bürste und eine sichere Transportlösung. Danach kannst du je nach Alltag Spielzeug, Trainingszubehör oder Reiseprodukte ergänzen.",
          "Achte auf Material, Passform, Reinigung und Sicherheit. Ein günstiges Produkt kann völlig ausreichen, wenn es gut sitzt und belastbar ist. Ein teures Produkt ist nicht automatisch besser."
        ]
      },
      {
        heading: "Passform und Sicherheit",
        paragraphs: [
          "Geschirre dürfen nicht in den Achseln scheuern, Halsbänder dürfen nicht würgen und Leinen sollten zur Umgebung passen. Für Autofahrten braucht der Hund eine passende Sicherung; eine normale Leine im Auto reicht nicht.",
          "Bei Kauspielzeug, Bürsten und Pflegeprodukten lohnt sich ein Blick auf Größe, Material und Anwendungshinweise. Beschädigtes Spielzeug sollte entsorgt werden, bevor Teile verschluckt werden."
        ]
      },
      {
        heading: "Kaufentscheidungen ruhig treffen",
        paragraphs: [
          "Viele Probleme entstehen, weil Zubehör aus Unsicherheit gekauft wird. Frage dich vor jedem Kauf: Nutze ich es regelmäßig? Passt es zu meinem Hund? Kann ich es reinigen? Gibt es Sicherheits- oder Größenangaben?",
          "Die Produktplätze auf dieser Website sind bewusst neutral gehalten. Du kannst sie später mit echten Amazon-Affiliate-Links füllen, ohne Preise oder Sternebewertungen zu kopieren."
        ]
      }
    ],
    productCategories: ["Hundeleinen", "Hundegeschirre", "Hundehalsbänder", "Hundebetten", "Hundeboxen", "Hundepflege", "Fellpflege", "Kotbeutel / Gassi-Zubehör", "Sicherheitszubehör"],
    productLimit: 18,
    related: dogArticleLinks.filter((item) => ["Zubehör", "Pflege", "Reisen"].includes(item.meta ?? "")).slice(0, 6),
    faq: [
      {
        question: "Welches Hundezubehör sollte man zuerst kaufen?",
        answer: "Leine, Geschirr oder Halsband, Näpfe, Schlafplatz, Kotbeutel, Bürste, Futter und eine sichere Transportlösung sind meist wichtiger als Spezialprodukte."
      },
      {
        question: "Ist ein Geschirr besser als ein Halsband?",
        answer: "Für viele Alltagssituationen ist ein gut sitzendes Geschirr angenehmer, besonders bei Welpen oder Hunden, die noch ziehen. Ein Halsband kann für leinenführige Hunde trotzdem sinnvoll sein."
      },
      {
        question: "Warum gibt es keine Amazon-Preise auf der Seite?",
        answer: "Preise und Verfügbarkeit ändern sich. Deshalb sollten aktuelle Angaben direkt auf Amazon geprüft werden."
      }
    ],
    pros: ["Gute Grundausstattung erleichtert Alltag und Training", "Pflegeleichte Materialien sparen langfristig Zeit", "Sicheres Zubehör kann Risiken reduzieren"],
    cons: ["Schlechte Passform kann scheuern oder belasten", "Zu viele Produkte führen schnell zu Fehlkäufen", "Amazon-Angaben müssen vor dem Kauf aktuell geprüft werden"],
    comparisonRows: equipmentComparison
  },
  {
    slug: "hundegesundheit",
    title: "Hundegesundheit: Pflege, Vorsorge und Warnzeichen",
    description:
      "Hundegesundheit seriös einordnen: Pflege, Fell, Pfoten, Bewegung, Futter, Warnzeichen und der klare Hinweis, wann eine Tierarztpraxis wichtig ist.",
    eyebrow: "Hundegesundheit",
    h1: "Hundegesundheit beobachten, ohne selbst zu diagnostizieren",
    intro:
      "Gesundheit beginnt mit Aufmerksamkeit: Wie bewegt sich dein Hund, wie frisst er, wie schläft er, wie wirkt Fell und Haut? Diese Seite gibt Orientierung, ersetzt aber keine Tierarztberatung.",
    sections: [
      {
        heading: "Pflege als Beobachtungsroutine",
        paragraphs: [
          "Bürsten, Pfoten kontrollieren, Ohren anschauen und Krallen beobachten sind gute Routinen, weil du Veränderungen früh bemerkst. Je nach Felltyp braucht dein Hund unterschiedliche Pflege; Kurzhaar, Unterwolle und langes Fell stellen andere Anforderungen.",
          "Pflege sollte ruhig aufgebaut werden. Viele Hunde lernen Berührungen besser, wenn kleine Schritte belohnt werden und die Einheit endet, bevor es unangenehm wird."
        ]
      },
      {
        heading: "Warnzeichen ernst nehmen",
        paragraphs: [
          "Lahmheit, starke Müdigkeit, Atemprobleme, wiederholtes Erbrechen, Durchfall, Blut, Krämpfe, starke Schmerzen, Fieberverdacht oder plötzliche Verhaltensänderungen gehören tierärztlich abgeklärt. Warte nicht, bis ein Online-Ratgeber Entwarnung gibt.",
          "Auch Hautprobleme, Juckreiz, Ohrgeruch, Zahnprobleme oder Gewichtsveränderungen sollten nicht dauerhaft selbst behandelt werden. Pflegeprodukte können unterstützen, aber sie heilen keine Erkrankungen."
        ]
      },
      {
        heading: "Futter, Bewegung und Alltag",
        paragraphs: [
          "Futter sollte zu Alter, Aktivität, Gewicht und Verträglichkeit passen. Wenn dein Hund dauerhaft schlecht frisst, stark zunimmt, abnimmt oder Verdauungsprobleme zeigt, ist fachlicher Rat sinnvoll.",
          "Bewegung ist wichtig, aber sie muss zum Hund passen. Welpen, Senioren, kurzschnäuzige Hunde oder Hunde mit Gelenkproblemen brauchen andere Belastung als ein gesunder erwachsener Hund."
        ]
      }
    ],
    productCategories: ["Hundepflege", "Fellpflege", "Futter- und Wassernäpfe", "Sicherheitszubehör"],
    productLimit: 10,
    related: dogArticleLinks.filter((item) => ["Pflege", "Futter", "Ratgeber"].includes(item.meta ?? "")).slice(0, 6),
    faq: healthDogFaq,
    pros: ["Regelmäßige Pflege macht Veränderungen schneller sichtbar", "Gute Routinen können Stress bei Untersuchungen senken", "Frühe tierärztliche Abklärung verhindert oft längeres Rätseln"],
    cons: ["Online-Inhalte können keine Diagnose stellen", "Pflegeprodukte ersetzen keine Behandlung", "Zu spätes Handeln kann Probleme verschlimmern"],
    disclaimerVariant: "health"
  },
  {
    slug: "hundefutter",
    title: "Hundefutter und Futterplatz: Näpfe, Hygiene und Alltag",
    description:
      "Hundefutter und Futterplatz richtig organisieren: Näpfe, Unterlage, Wasser, Anti-Schling-Napf, Hygiene, Routinen und tierärztliche Hinweise.",
    eyebrow: "Hundefutter",
    h1: "Hundefutter und Futterplatz ruhig organisieren",
    intro:
      "Diese Seite gibt keine pauschale Futterempfehlung, sondern hilft dir, den Futterplatz praktisch, hygienisch und hundegerecht einzurichten.",
    sections: [
      {
        heading: "Der passende Futterplatz",
        paragraphs: [
          "Ein guter Futterplatz ist ruhig, gut zu reinigen und für den Hund klar erkennbar. Näpfe sollten stabil stehen, zur Hundegröße passen und regelmäßig gereinigt werden. Eine Unterlage kann helfen, Wasser und Futterreste aufzufangen.",
          "Mehrhundehaushalte brauchen oft getrennte Futterplätze, damit kein Konkurrenzdruck entsteht. Gerade bei Welpen oder neuen Hunden kann Management viel Stress verhindern."
        ]
      },
      {
        heading: "Futter nicht nach Trends auswählen",
        paragraphs: [
          "Trockenfutter, Nassfutter, BARF oder selbst gekochte Rationen können je nach Hund und Umsetzung funktionieren. Wichtig sind Verträglichkeit, Bedarfsdeckung und ein realistischer Alltag. Bei Unsicherheit, Krankheit, Welpen oder Senioren ist fachliche Beratung sinnvoll.",
          "Ein Anti-Schling-Napf kann helfen, wenn dein Hund sehr schnell frisst. Er ersetzt aber keine tierärztliche Abklärung bei Verdauungsproblemen, Erbrechen oder auffälligem Verhalten rund ums Fressen."
        ]
      },
      {
        heading: "Wasser und Hygiene",
        paragraphs: [
          "Frisches Wasser sollte jederzeit verfügbar sein. Reinige Wassernäpfe regelmäßig, besonders im Sommer oder wenn mehrere Tiere daraus trinken. Auf Reisen gehört ein faltbarer Napf oder eine Hundetrinkflasche in die Tasche.",
          "Futterreste, feuchte Unterlagen und schlecht gereinigte Näpfe können Geruch und Keime fördern. Ein einfacher, gut gepflegter Futterplatz ist oft besser als eine komplizierte Lösung."
        ]
      }
    ],
    productCategories: ["Futter- und Wassernäpfe", "Reisen mit Hund", "Welpenzubehör"],
    productLimit: 8,
    related: dogArticleLinks.filter((item) => ["Futter", "Welpen", "Reisen"].includes(item.meta ?? "")).slice(0, 6),
    faq: [
      {
        question: "Welcher Napf ist am hygienischsten?",
        answer: "Edelstahl ist häufig pflegeleicht und robust. Wichtig ist aber vor allem regelmäßiges Reinigen und eine passende Größe."
      },
      {
        question: "Braucht mein Hund einen Anti-Schling-Napf?",
        answer: "Wenn dein Hund sehr schnell frisst, kann ein Anti-Schling-Napf helfen. Bei wiederholtem Erbrechen oder Verdauungsproblemen solltest du tierärztlichen Rat einholen."
      },
      {
        question: "Empfiehlt diese Seite ein bestimmtes Futter?",
        answer: "Nein. Futterfragen hängen stark vom einzelnen Hund ab. Die Seite gibt allgemeine Orientierung und ersetzt keine individuelle Ernährungsberatung."
      }
    ],
    pros: ["Ein ruhiger Futterplatz reduziert Hektik", "Stabile Näpfe und Unterlagen erleichtern Hygiene", "Wasser sollte unterwegs genauso eingeplant werden wie Futter"],
    cons: ["Futtertrends passen nicht automatisch zu jedem Hund", "Mehrhundehaushalte brauchen oft getrennte Fütterung", "Verdauungsprobleme gehören nicht dauerhaft in Selbstbehandlung"],
    disclaimerVariant: "health"
  },
  {
    slug: "hund-reisen",
    title: "Reisen mit Hund: Auto, Hotel, Packliste und Zubehör",
    description:
      "Reisen mit Hund gut vorbereiten: Autofahrt, Hundebox, Pausen, Hotel, Futter, Wasser, Dokumente, Sicherheit und praktische Packliste.",
    eyebrow: "Reisen mit Hund",
    h1: "Reisen mit Hund entspannt vorbereiten",
    intro:
      "Urlaub mit Hund gelingt leichter, wenn Sicherheit, Pausen, Futter, Unterkunft und Ruhe vorher geplant sind. Diese Seite hilft dir, an die wichtigsten Punkte zu denken.",
    sections: [
      {
        heading: "Sicher unterwegs im Auto",
        paragraphs: [
          "Für Autofahrten braucht dein Hund eine sichere Lösung: passende Hundebox, Sicherheitsgurt mit geeignetem Geschirr oder ein anderes geprüftes System. Eine lose Leine oder ein ungesicherter Hund auf dem Rücksitz ist keine gute Idee.",
          "Gewöhne deinen Hund schrittweise an Box, Gurt oder Kofferraum. Kurze positive Fahrten sind besser als die erste lange Urlaubsfahrt ohne Vorbereitung."
        ]
      },
      {
        heading: "Packliste für Anfänger",
        paragraphs: [
          "Zur Grundausstattung gehören Futter, Wasser, Näpfe, Leine, Geschirr, Kotbeutel, Hundedecke, Handtuch, Medikamente falls nötig, Impfausweis oder Dokumente, Maulkorb falls regional erforderlich und Kontaktdaten einer Tierarztpraxis am Zielort.",
          "Für warme Tage sind Wasserpausen, Schatten und ein kühler Liegeplatz wichtiger als besonders viel Aktivität. Plane den Urlaub aus Sicht deines Hundes, nicht nur aus Sicht des Menschen."
        ]
      },
      {
        heading: "Ankommen am Urlaubsort",
        paragraphs: [
          "Viele Hunde brauchen am Ankunftstag weniger Programm und mehr Orientierung. Zeige Futterplatz, Schlafplatz und Gassirouten ruhig. Vermeide direkt am ersten Tag lange Restaurantbesuche oder volle Strandabschnitte, wenn dein Hund schnell gestresst ist.",
          "Eine bekannte Decke, vertrautes Futter und klare Routinen helfen, den neuen Ort schneller einzuordnen."
        ]
      }
    ],
    productCategories: ["Reisen mit Hund", "Hundetransport fürs Auto", "Hundeboxen", "Hundebetten", "Sicherheitszubehör"],
    productLimit: 12,
    related: dogArticleLinks.filter((item) => item.meta === "Reisen" || item.meta === "Zubehör").slice(0, 6),
    faq: [
      {
        question: "Was gehört in eine Reise-Packliste mit Hund?",
        answer: "Futter, Wasser, Näpfe, Leine, Geschirr, Kotbeutel, Schlafdecke, Handtuch, Medikamente, Dokumente und eine sichere Transportlösung sind die wichtigsten Punkte."
      },
      {
        question: "Ist eine Hundebox fürs Auto Pflicht?",
        answer: "Die konkrete Lösung hängt vom Fahrzeug und Hund ab. Wichtig ist, dass der Hund sicher transportiert wird und andere Insassen nicht gefährdet."
      },
      {
        question: "Wie bereite ich meinen Hund auf Hotel oder Ferienwohnung vor?",
        answer: "Übe Ruhe auf einer Decke, kurze Alleinbleibe-Momente nur behutsam und gewöhne den Hund an neue Geräusche. Am Ankunftstag helfen kurze, klare Routinen."
      }
    ],
    pros: ["Gute Vorbereitung reduziert Stress", "Sichere Transportlösungen schützen Hund und Menschen", "Bekannte Routinen helfen am Urlaubsort"],
    cons: ["Lange Fahrten ohne Gewöhnung sind oft belastend", "Nicht jede Unterkunft ist wirklich hundefreundlich", "Hitze und volle Orte können Hunde schnell überfordern"],
    comparisonRows: [
      {
        option: "Hundebox",
        strength: "Klare Begrenzung und oft sehr praktische Autolösung.",
        limit: "Muss zu Auto und Hund passen und positiv aufgebaut werden.",
        bestFor: "Regelmäßige Autofahrten, Kofferraum und Hunde mit Boxengewöhnung."
      },
      {
        option: "Sicherheitsgurt",
        strength: "Einfach nachrüstbar und platzsparend.",
        limit: "Nur mit geeignetem Geschirr und korrekter Befestigung sinnvoll.",
        bestFor: "Kurze bis mittlere Fahrten auf der Rückbank."
      },
      {
        option: "Reisetasche",
        strength: "Ordnet Futter, Näpfe, Dokumente und Zubehör.",
        limit: "Trägt nicht zur Fahrsicherheit bei.",
        bestFor: "Packorganisation für Wochenenden und Urlaub."
      }
    ]
  },
  {
    slug: "hunde-ratgeber",
    title: "Hunde-Ratgeber: Artikel zu Welpen, Training und Zubehör",
    description:
      "Alle neuen Hunde-Ratgeberartikel zu Welpen, Hundetraining, Leinen, Geschirr, Reisen, Pflege, Futterplatz und typischen Anfängerfehlern.",
    eyebrow: "Hunde-Ratgeber",
    h1: "Hunde-Ratgeber für Alltag, Training und Kaufentscheidungen",
    intro:
      "Diese Übersicht bündelt die neuen Artikel für Hundebesitzer. Die Texte sind freundlich, realistisch und so aufgebaut, dass sie über Google und Pinterest auffindbar sind.",
    sections: [
      {
        heading: "Wie du den Ratgeber nutzt",
        paragraphs: [
          "Starte mit dem Thema, das gerade am meisten Druck aus dem Alltag nimmt: Welpeneinzug, Leinenführigkeit, Alleinbleiben, Reisen oder passende Grundausstattung. Jeder Artikel enthält praktische Kriterien und klare Hinweise, wann fachliche Hilfe nötig ist.",
          "Die internen Links verbinden Grundlagen, Produkte und konkrete Alltagssituationen. So können Besucher Schritt für Schritt tiefer in den Hundebereich einsteigen."
        ]
      },
      {
        heading: "Pinterest- und SEO-freundliche Themen",
        paragraphs: [
          "Viele Hundethemen eignen sich gut für Suchmaschinen und Pinterest, weil Menschen konkrete Fragen stellen: Was braucht ein Welpe? Welche Leine ist sinnvoll? Wie wird mein Hund stubenrein? Was gehört in die Reisecheckliste?",
          "Die Artikel vermeiden übertriebene Versprechen. Das stärkt Vertrauen und passt besser zu einer seriösen Affiliate-Seite."
        ]
      }
    ],
    productCategories: ["Hundeleinen", "Hundegeschirre", "Welpenzubehör", "Reisen mit Hund", "Hundepflege"],
    productLimit: 6,
    related: dogArticleLinks,
    faq: defaultDogFaq,
    pros: ["Artikel beantworten konkrete Suchfragen", "Interne Links stärken die Themenstruktur", "Neutraler Ton passt zu seriösem Affiliate-Content"],
    cons: ["Medizinische Fragen bleiben bewusst allgemein", "Produktempfehlungen müssen später mit echten Links gepflegt werden", "Aktualität sollte regelmäßig geprüft werden"]
  },
  {
    slug: "beste-hundeprodukte",
    title: "Beste Hundeprodukte: 50 Produktplätze für Amazon Affiliate",
    description:
      "50 seriöse Hundeprodukt-Plätze für Amazon Affiliate: Leinen, Geschirre, Halsbänder, Betten, Boxen, Reisen, Welpenzubehör, Pflege und Sicherheit.",
    eyebrow: "Beste Hundeprodukte",
    h1: "50 Hundeprodukt-Plätze für Amazon Affiliate",
    intro:
      "Diese Seite sammelt 50 neutrale Produktplätze für Hundeprodukte. Die Links sind bewusst als Platzhalter hinterlegt, damit du später geprüfte Amazon-Affiliate-Links einsetzen kannst.",
    sections: [
      {
        heading: "Warum Produktplätze statt erfundener Testsieger?",
        paragraphs: [
          "Affiliate-Seiten wirken vertrauenswürdiger, wenn sie keine nicht belegten Testsieger, Preise oder Sternebewertungen erfinden. Deshalb beschreibt diese Produktübersicht Einsatzbereiche, Vorteile und Kaufkriterien, ohne aktuelle Amazon-Daten vorzutäuschen.",
          "Sobald du echte Links einfügst, solltest du Produktseite, Verfügbarkeit, Bewertungen, Herstellerangaben und Tracking-ID prüfen. Amazon-Bilder, Rezensionen und Preise sollten nicht kopiert werden."
        ]
      },
      {
        heading: "So kannst du die Liste nutzen",
        paragraphs: [
          "Die Produkte decken Alltag, Training, Welpen, Reisen, Pflege, Futterplatz und Sicherheit ab. Du kannst einzelne Karten auf Themenseiten verlinken oder die gesamte Übersicht als zentrale Affiliate-Seite ausbauen.",
          "Besonders wichtig sind gute interne Links: Von Welpenartikeln zu Welpenzubehör, von Reiseartikeln zu Boxen und Reisenäpfen und von Trainingsartikeln zu Clicker, Schleppleine und Leckerlibeutel."
        ]
      }
    ],
    productCategories: [],
    productLimit: 50,
    related: dogArticleLinks.slice(0, 9),
    faq: [
      {
        question: "Sind die 50 Produkte echte Amazon-Links?",
        answer: "Noch nicht. In der Daten-Datei steht vorerst der Platzhalter AMAZON_AFFILIATE_LINK_HIER_EINFUEGEN. Du kannst ihn später je Produkt ersetzen."
      },
      {
        question: "Warum stehen keine Preise auf der Seite?",
        answer: "Amazon-Preise ändern sich. Aktuelle Preise und Verfügbarkeit sollten direkt auf Amazon.de geprüft werden."
      },
      {
        question: "Darf ich Amazon-Produktbilder einbinden?",
        answer: "Nur wenn du die dafür vorgesehenen Amazon-PartnerNet-Werkzeuge und Regeln nutzt. Diese Seite kopiert keine Amazon-Bilder."
      }
    ],
    pros: ["50 strukturierte Produktplätze sind sofort vorhanden", "Alle Kategorien sind hunderelevant", "Die Texte vermeiden erfundene Bewertungen und aggressive Werbung"],
    cons: ["Echte Amazon-Links müssen noch eingetragen werden", "Produkte sollten vor Veröffentlichung aktuell geprüft werden", "Keine Preise oder Sterne aus Amazon übernehmen"],
    disclaimerVariant: "affiliate"
  }
];

export const getDogPage = (slug: string) => dogPages.find((page) => page.slug === slug);
