export type DogProduct = {
  id: string;
  name: string;
  category: string;
  shortDescription: string;
  benefits: string[];
  bestFor: string;
  priceRange: string;
  affiliateUrl: string;
  imageAlt: string;
  ratingText: string;
};

export const AMAZON_DOG_PLACEHOLDER = "AMAZON_AFFILIATE_LINK_HIER_EINFUEGEN";

export const dogCategories = [
  "Hundeleinen",
  "Hundegeschirre",
  "Hundehalsbänder",
  "Hundebetten",
  "Hundeboxen",
  "Hundetransport fürs Auto",
  "Reisen mit Hund",
  "Welpenzubehör",
  "Hundespielzeug",
  "Futter- und Wassernäpfe",
  "Hundepflege",
  "Fellpflege",
  "Kotbeutel / Gassi-Zubehör",
  "Trainingszubehör",
  "Sicherheitszubehör"
];

export const dogProducts: DogProduct[] = [
  {
    id: "alltagsleine-gepolstert",
    name: "Gepolsterte Alltagsleine",
    category: "Hundeleinen",
    shortDescription: "Robuste Führleine für tägliche Spaziergänge in Stadt, Park und Wohngebiet.",
    benefits: ["Angenehmer Griff", "Gut für kurze und mittlere Gassirunden", "Einfach zu reinigen"],
    bestFor: "Hundebesitzer, die eine zuverlässige Standardleine suchen.",
    priceRange: "niedrig bis mittel",
    affiliateUrl: AMAZON_DOG_PLACEHOLDER,
    imageAlt: "Gepolsterte Hundeleine für den Alltag",
    ratingText: "Produktplatz für eine solide Alltagsleine - Bewertungen auf Amazon prüfen."
  },
  {
    id: "verstellbare-fuehrleine",
    name: "Verstellbare Führleine",
    category: "Hundeleinen",
    shortDescription: "Mehrfach verstellbare Leine für Alltag, Training und kurze Freilauf-Alternativen.",
    benefits: ["Mehrere Längen möglich", "Praktisch beim Training", "Flexibel in belebten Umgebungen"],
    bestFor: "Menschen, die mit einer Leine mehrere Situationen abdecken möchten.",
    priceRange: "mittel",
    affiliateUrl: AMAZON_DOG_PLACEHOLDER,
    imageAlt: "Verstellbare Führleine mit mehreren Ringen",
    ratingText: "Geeignet als Vergleichsplatz für verstellbare Führleinen."
  },
  {
    id: "schleppleine-10m",
    name: "Schleppleine 10 Meter",
    category: "Hundeleinen",
    shortDescription: "Lange Leine für Rückruftraining, kontrolliertes Erkunden und junge Hunde.",
    benefits: ["Mehr Bewegungsradius", "Hilft beim Rückrufaufbau", "Sinnvoll auf übersichtlichen Flächen"],
    bestFor: "Training mit Junghunden und Hunden, die noch nicht frei laufen sollten.",
    priceRange: "niedrig bis mittel",
    affiliateUrl: AMAZON_DOG_PLACEHOLDER,
    imageAlt: "Lange Schleppleine für Hundetraining",
    ratingText: "Redaktioneller Platz für Schleppleinen ohne Testurteil."
  },
  {
    id: "joggingleine-bauchgurt",
    name: "Joggingleine mit Bauchgurt",
    category: "Hundeleinen",
    shortDescription: "Freihändige Leinenlösung für sportliche Spaziergänge, Canicross-Einstieg und Jogging.",
    benefits: ["Hände bleiben frei", "Elastische Elemente können Zug abfedern", "Sichtbare Reflektoren oft verfügbar"],
    bestFor: "Aktive Halter mit gut trainierten, leinenführigen Hunden.",
    priceRange: "mittel",
    affiliateUrl: AMAZON_DOG_PLACEHOLDER,
    imageAlt: "Joggingleine mit Bauchgurt für Hunde",
    ratingText: "Vor Kauf Passform, Gewichtslimit und Herstellerhinweise prüfen."
  },
  {
    id: "y-geschirr-alltag",
    name: "Y-Geschirr für den Alltag",
    category: "Hundegeschirre",
    shortDescription: "Alltagstaugliches Brustgeschirr mit guter Schulterfreiheit und verstellbaren Gurten.",
    benefits: ["Druck verteilt sich besser als am Hals", "Viele Einstellmöglichkeiten", "Gut für Spaziergänge"],
    bestFor: "Hunde, die ein bequemes Geschirr für tägliche Wege brauchen.",
    priceRange: "mittel",
    affiliateUrl: AMAZON_DOG_PLACEHOLDER,
    imageAlt: "Y-Geschirr für mittelgroßen Hund",
    ratingText: "Passform am Hund immer individuell kontrollieren."
  },
  {
    id: "welpengeschirr-leicht",
    name: "Leichtes Welpengeschirr",
    category: "Hundegeschirre",
    shortDescription: "Weiches Geschirr für die ersten Spaziergänge und behutsame Gewöhnung an Leine und Alltag.",
    benefits: ["Leichtes Material", "Sanfter Einstieg für Welpen", "Oft schnell anzulegen"],
    bestFor: "Welpen und kleine Hunde in der Eingewöhnungsphase.",
    priceRange: "niedrig bis mittel",
    affiliateUrl: AMAZON_DOG_PLACEHOLDER,
    imageAlt: "Leichtes Welpengeschirr",
    ratingText: "Größe regelmäßig prüfen, weil Welpen schnell wachsen."
  },
  {
    id: "anti-zug-geschirr",
    name: "Anti-Zug-Geschirr mit Frontring",
    category: "Hundegeschirre",
    shortDescription: "Trainingsgeschirr mit zusätzlichem Befestigungspunkt vorn für kontrollierteres Gehen.",
    benefits: ["Kann Training unterstützen", "Mehr Kontrolle in schwierigen Momenten", "Alternative zum Halsbandzug"],
    bestFor: "Hunde, die mit positiver Anleitung leinenführiger werden sollen.",
    priceRange: "mittel",
    affiliateUrl: AMAZON_DOG_PLACEHOLDER,
    imageAlt: "Anti-Zug-Geschirr mit Frontring",
    ratingText: "Kein Ersatz für Training, aber ein möglicher Baustein."
  },
  {
    id: "outdoor-geschirr-reflektierend",
    name: "Reflektierendes Outdoor-Geschirr",
    category: "Hundegeschirre",
    shortDescription: "Stabileres Geschirr für längere Runden, Dämmerung und wechselnde Wetterlagen.",
    benefits: ["Reflektierende Details", "Meist belastbarer verarbeitet", "Praktisch für Naturwege"],
    bestFor: "Aktive Hunde, Pendler und Spaziergänge bei wenig Licht.",
    priceRange: "mittel bis hoch",
    affiliateUrl: AMAZON_DOG_PLACEHOLDER,
    imageAlt: "Reflektierendes Outdoor-Hundegeschirr",
    ratingText: "Material, Nähte und Größenangaben vor Bestellung vergleichen."
  },
  {
    id: "halsband-nylon-gepolstert",
    name: "Gepolstertes Nylon-Halsband",
    category: "Hundehalsbänder",
    shortDescription: "Leichtes Halsband für Hundemarke, kurze Wege und Hunde mit guter Leinenführigkeit.",
    benefits: ["Unkompliziert anzulegen", "Viele Größen verfügbar", "Gut für Hundemarke und Adresse"],
    bestFor: "Leinenführige Hunde und kurze Alltagssituationen.",
    priceRange: "niedrig",
    affiliateUrl: AMAZON_DOG_PLACEHOLDER,
    imageAlt: "Gepolstertes Hundehalsband aus Nylon",
    ratingText: "Halsumfang sorgfältig messen und Zugbelastung vermeiden."
  },
  {
    id: "lederhalsband-klassisch",
    name: "Klassisches Lederhalsband",
    category: "Hundehalsbänder",
    shortDescription: "Zeitloses Halsband für erwachsene Hunde, wenn Materialpflege und Passform stimmen.",
    benefits: ["Langlebig bei guter Pflege", "Schlichte Optik", "Robustes Alltagsmaterial"],
    bestFor: "Halter, die ein langlebiges, dezentes Halsband bevorzugen.",
    priceRange: "mittel bis hoch",
    affiliateUrl: AMAZON_DOG_PLACEHOLDER,
    imageAlt: "Klassisches Lederhalsband für Hunde",
    ratingText: "Lederpflege und genaue Größenangaben beachten."
  },
  {
    id: "reflektor-halsband",
    name: "Reflektierendes Halsband",
    category: "Hundehalsbänder",
    shortDescription: "Halsband mit reflektierenden Elementen für bessere Sichtbarkeit in Dämmerung und Dunkelheit.",
    benefits: ["Mehr Sichtbarkeit", "Gut als Ergänzung zu Geschirr oder Leine", "Leicht und alltagstauglich"],
    bestFor: "Spaziergänge am frühen Morgen, Abend und in der dunklen Jahreszeit.",
    priceRange: "niedrig bis mittel",
    affiliateUrl: AMAZON_DOG_PLACEHOLDER,
    imageAlt: "Reflektierendes Hundehalsband",
    ratingText: "Sichtbarkeit ersetzt keine sichere Leinenführung."
  },
  {
    id: "orthopaedisches-hundebett",
    name: "Orthopädisches Hundebett",
    category: "Hundebetten",
    shortDescription: "Stützendes Bett mit formstabilem Kern für erwachsene, schwere oder ältere Hunde.",
    benefits: ["Gute Druckentlastung möglich", "Abnehmbarer Bezug oft verfügbar", "Ruhiger fester Liegeplatz"],
    bestFor: "Große, ältere oder ruhebedürftige Hunde.",
    priceRange: "mittel bis hoch",
    affiliateUrl: AMAZON_DOG_PLACEHOLDER,
    imageAlt: "Orthopädisches Hundebett mit Rand",
    ratingText: "Bei Schmerzen oder Lahmheit tierärztlich abklären lassen."
  },
  {
    id: "waschbares-hundekissen",
    name: "Waschbares Hundekissen",
    category: "Hundebetten",
    shortDescription: "Pflegeleichter Liegeplatz für Wohnzimmer, Büro oder Reiseunterkunft.",
    benefits: ["Bezug waschbar", "Flexibel platzierbar", "Gut als zweiter Ruheplatz"],
    bestFor: "Haushalte, die einen unkomplizierten, hygienischen Liegeplatz suchen.",
    priceRange: "niedrig bis mittel",
    affiliateUrl: AMAZON_DOG_PLACEHOLDER,
    imageAlt: "Waschbares Hundekissen",
    ratingText: "Waschtemperatur und Bezugsmaterial prüfen."
  },
  {
    id: "kuschelbett-kleine-hunde",
    name: "Kuschelbett für kleine Hunde",
    category: "Hundebetten",
    shortDescription: "Weicher, randbetonter Schlafplatz für kleine Hunde und Hunde mit hohem Nähebedürfnis.",
    benefits: ["Geborgene Liegeform", "Weicher Rand", "Leicht in kleinen Wohnungen unterzubringen"],
    bestFor: "Kleine Hunde, Senioren und ruhige Rückzugsorte.",
    priceRange: "niedrig bis mittel",
    affiliateUrl: AMAZON_DOG_PLACEHOLDER,
    imageAlt: "Kuschelbett für kleine Hunde",
    ratingText: "Nicht jeder Hund mag sehr weiche Betten - Rückgabebedingungen prüfen."
  },
  {
    id: "outdoor-hundematte",
    name: "Outdoor-Hundematte",
    category: "Hundebetten",
    shortDescription: "Robuste Matte für Terrasse, Camping, Training und Pausen unterwegs.",
    benefits: ["Schnell ausgebreitet", "Oft wasserabweisend", "Gut für Deckentraining"],
    bestFor: "Reisen, Garten, Restaurantbesuche und Outdoor-Pausen.",
    priceRange: "mittel",
    affiliateUrl: AMAZON_DOG_PLACEHOLDER,
    imageAlt: "Outdoor-Hundematte für unterwegs",
    ratingText: "Packmaß und Rutschfestigkeit vergleichen."
  },
  {
    id: "faltbare-hundebox",
    name: "Faltbare Hundebox",
    category: "Hundeboxen",
    shortDescription: "Transport- und Ruhebox für Zuhause, Hotel oder kurze Wege, wenn der Hund daran gewöhnt ist.",
    benefits: ["Platzsparend verstaubar", "Ruhiger Rückzugsort möglich", "Praktisch auf Reisen"],
    bestFor: "Hunde, die Boxentraining positiv kennengelernt haben.",
    priceRange: "mittel",
    affiliateUrl: AMAZON_DOG_PLACEHOLDER,
    imageAlt: "Faltbare Hundebox aus Stoff",
    ratingText: "Nur nach positiver Gewöhnung verwenden und Sicherheitsgrenzen prüfen."
  },
  {
    id: "aluminium-hundebox-auto",
    name: "Aluminium-Hundebox fürs Auto",
    category: "Hundeboxen",
    shortDescription: "Stabile Kofferraumlösung für sicheren Transport je nach Fahrzeug und Hundegröße.",
    benefits: ["Robuste Bauweise", "Für regelmäßige Autofahrten interessant", "Klare Begrenzung im Kofferraum"],
    bestFor: "Halter, die häufig mit Hund im Auto unterwegs sind.",
    priceRange: "hoch",
    affiliateUrl: AMAZON_DOG_PLACEHOLDER,
    imageAlt: "Aluminium-Hundebox im Auto",
    ratingText: "Fahrzeugmaße, Crashtest-Angaben und Herstellerhinweise prüfen."
  },
  {
    id: "transportbox-kleine-hunde",
    name: "Transportbox für kleine Hunde",
    category: "Hundeboxen",
    shortDescription: "Kompakte Box für kleine Hunde, Tierarztwege und kurze Transporte.",
    benefits: ["Leicht zu tragen", "Gut für kleine Hunde", "Auch für Tierarztbesuche praktisch"],
    bestFor: "Kleine Hunde, Welpen und kurze, kontrollierte Wege.",
    priceRange: "niedrig bis mittel",
    affiliateUrl: AMAZON_DOG_PLACEHOLDER,
    imageAlt: "Transportbox für kleine Hunde",
    ratingText: "Belastbarkeit, Belüftung und Größe sorgfältig prüfen."
  },
  {
    id: "hundesicherheitsgurt",
    name: "Hundesicherheitsgurt",
    category: "Hundetransport fürs Auto",
    shortDescription: "Gurtlösung zur Sicherung am passenden Geschirr auf kurzen und mittleren Autofahrten.",
    benefits: ["Einfach nachzurüsten", "Begrenzt Bewegung im Auto", "Kombinierbar mit Autoschutzdecke"],
    bestFor: "Autofahrten, wenn keine Box genutzt wird und ein geeignetes Geschirr vorhanden ist.",
    priceRange: "niedrig",
    affiliateUrl: AMAZON_DOG_PLACEHOLDER,
    imageAlt: "Hundesicherheitsgurt fürs Auto",
    ratingText: "Nur mit geeignetem Geschirr verwenden, nie am Halsband befestigen."
  },
  {
    id: "autoschondecke-ruecksitz",
    name: "Autoschondecke für den Rücksitz",
    category: "Hundetransport fürs Auto",
    shortDescription: "Schutzdecke für Rückbank und Türen, wenn Hunde regelmäßig mitfahren.",
    benefits: ["Schützt vor Haaren und Schmutz", "Oft wasserabweisend", "Schnell herausnehmbar"],
    bestFor: "Alltagsfahrten, Ausflüge und nasse Spaziergänge.",
    priceRange: "mittel",
    affiliateUrl: AMAZON_DOG_PLACEHOLDER,
    imageAlt: "Autoschondecke auf der Rückbank",
    ratingText: "Sicherung des Hundes zusätzlich separat planen."
  },
  {
    id: "kofferraum-schutzmatte",
    name: "Kofferraum-Schutzmatte",
    category: "Hundetransport fürs Auto",
    shortDescription: "Robuste Matte für Hundehaare, Schmutz und Kratzer im Kofferraum.",
    benefits: ["Leichter zu reinigen", "Schützt Ladekante", "Hilfreich nach Wald- und Regentouren"],
    bestFor: "Hunde, die in einer gesicherten Box oder im Kofferraum mitfahren.",
    priceRange: "mittel",
    affiliateUrl: AMAZON_DOG_PLACEHOLDER,
    imageAlt: "Kofferraum-Schutzmatte für Hunde",
    ratingText: "Passt nicht in jedes Fahrzeug - Maße vergleichen."
  },
  {
    id: "faltbarer-reisenapf",
    name: "Faltbarer Reisenapf",
    category: "Reisen mit Hund",
    shortDescription: "Leichter Napf für Wasserpausen beim Wandern, im Auto oder im Urlaub.",
    benefits: ["Kleines Packmaß", "Schnell auswaschbar", "Gut für unterwegs"],
    bestFor: "Tagesausflüge, Camping, Hotel und lange Spaziergänge.",
    priceRange: "niedrig",
    affiliateUrl: AMAZON_DOG_PLACEHOLDER,
    imageAlt: "Faltbarer Reisenapf für Hunde",
    ratingText: "Material und Standfestigkeit prüfen."
  },
  {
    id: "hundereisetasche",
    name: "Hundereisetasche",
    category: "Reisen mit Hund",
    shortDescription: "Tasche für Futter, Näpfe, Dokumente, Spielzeug und Pflegezubehör auf Reisen.",
    benefits: ["Alles an einem Ort", "Praktisch für Wochenenden", "Erleichtert Packlisten"],
    bestFor: "Urlaub mit Hund, Besuche bei Familie und längere Autofahrten.",
    priceRange: "mittel",
    affiliateUrl: AMAZON_DOG_PLACEHOLDER,
    imageAlt: "Hundereisetasche mit Zubehör",
    ratingText: "Innenaufteilung und Reinigungsmöglichkeit beachten."
  },
  {
    id: "mobile-trinkflasche-hund",
    name: "Mobile Hundetrinkflasche",
    category: "Reisen mit Hund",
    shortDescription: "Kombinierte Flasche mit Trinkmulde für schnelle Wasserpausen unterwegs.",
    benefits: ["Wasser direkt anbieten", "Gut bei warmem Wetter", "Praktisch für Stadt und Reise"],
    bestFor: "Sommer, lange Spaziergänge und Fahrpausen.",
    priceRange: "niedrig bis mittel",
    affiliateUrl: AMAZON_DOG_PLACEHOLDER,
    imageAlt: "Mobile Hundetrinkflasche",
    ratingText: "Fassungsvermögen passend zur Hundegröße wählen."
  },
  {
    id: "welpen-starterset",
    name: "Welpen-Starterset",
    category: "Welpenzubehör",
    shortDescription: "Grundausstattung mit ausgewählten Kleinteilen für die ersten Tage mit Welpe.",
    benefits: ["Schneller Einstieg", "Kann Einzelkäufe reduzieren", "Gut als Checklisten-Basis"],
    bestFor: "Neue Welpenhalter, die eine erste Orientierung suchen.",
    priceRange: "mittel",
    affiliateUrl: AMAZON_DOG_PLACEHOLDER,
    imageAlt: "Welpen-Starterset mit Zubehör",
    ratingText: "Inhalt kritisch prüfen, weil nicht jedes Set wirklich vollständig ist."
  },
  {
    id: "welpenunterlagen",
    name: "Welpenunterlagen",
    category: "Welpenzubehör",
    shortDescription: "Saugfähige Unterlagen als Notlösung in der Stubenreinheitsphase oder für Transportboxen.",
    benefits: ["Hilft bei kleinen Missgeschicken", "Einfach zu entsorgen", "Kann Böden schützen"],
    bestFor: "Sehr junge Welpen, Krankheitssituationen oder kurze Übergangsphasen.",
    priceRange: "niedrig",
    affiliateUrl: AMAZON_DOG_PLACEHOLDER,
    imageAlt: "Saugfähige Welpenunterlagen",
    ratingText: "Nicht als Dauerlösung für Stubenreinheitstraining verstehen."
  },
  {
    id: "kauspielzeug-welpen",
    name: "Kauspielzeug für Welpen",
    category: "Welpenzubehör",
    shortDescription: "Weiches, welpentaugliches Kauspielzeug für Zahnwechsel und Beschäftigung.",
    benefits: ["Kann Kauen umlenken", "Beschäftigung ohne Überforderung", "Welpengerechte Größen verfügbar"],
    bestFor: "Welpen im Zahnwechsel und junge Hunde mit Kaubedürfnis.",
    priceRange: "niedrig bis mittel",
    affiliateUrl: AMAZON_DOG_PLACEHOLDER,
    imageAlt: "Kauspielzeug für Welpen",
    ratingText: "Nur unter Aufsicht geben und beschädigte Teile entfernen."
  },
  {
    id: "welpenlaufstall",
    name: "Welpenlaufstall",
    category: "Welpenzubehör",
    shortDescription: "Begrenzter Bereich für kurze Ruhephasen, Management und sichere Übergänge im Alltag.",
    benefits: ["Hilft beim Management", "Kann Ruhe fördern", "Praktisch in offenen Wohnbereichen"],
    bestFor: "Welpenhaushalte, in denen sichere Bereiche wichtig sind.",
    priceRange: "mittel",
    affiliateUrl: AMAZON_DOG_PLACEHOLDER,
    imageAlt: "Welpenlaufstall im Wohnzimmer",
    ratingText: "Kein Ersatz für Betreuung, Training und ausreichend Pausen."
  },
  {
    id: "intelligenzspielzeug-hund",
    name: "Intelligenzspielzeug",
    category: "Hundespielzeug",
    shortDescription: "Denkspiel für ruhige Beschäftigung, Nasenarbeit und kleine Erfolgserlebnisse.",
    benefits: ["Fördert ruhige Auslastung", "Gut für Regentage", "Schwierigkeitsgrad oft steigerbar"],
    bestFor: "Hunde, die gern suchen, schieben und kleine Aufgaben lösen.",
    priceRange: "niedrig bis mittel",
    affiliateUrl: AMAZON_DOG_PLACEHOLDER,
    imageAlt: "Intelligenzspielzeug für Hunde",
    ratingText: "Unter Aufsicht nutzen und Frust vermeiden."
  },
  {
    id: "zerrspielzeug-robust",
    name: "Robustes Zerrspielzeug",
    category: "Hundespielzeug",
    shortDescription: "Spielzeug für gemeinsames Ziehen, kontrolliertes Spielen und kurze Trainingsbelohnungen.",
    benefits: ["Gemeinsame Aktivität", "Kann als Belohnung dienen", "Stärkt Orientierung am Menschen"],
    bestFor: "Hunde, die gerne interaktiv spielen.",
    priceRange: "niedrig bis mittel",
    affiliateUrl: AMAZON_DOG_PLACEHOLDER,
    imageAlt: "Robustes Zerrspielzeug für Hunde",
    ratingText: "Spielregeln ruhig aufbauen und Material regelmäßig prüfen."
  },
  {
    id: "futterball",
    name: "Futterball",
    category: "Hundespielzeug",
    shortDescription: "Beschäftigungsball, der Trockenfutter oder kleine Snacks langsam freigibt.",
    benefits: ["Kann Schlingen reduzieren", "Ruhige Beschäftigung", "Futterbelohnung wird dosiert"],
    bestFor: "Hunde, die ihr Futter gerne suchen und bewegen.",
    priceRange: "niedrig",
    affiliateUrl: AMAZON_DOG_PLACEHOLDER,
    imageAlt: "Futterball für Hunde",
    ratingText: "Snackmenge in die Tagesration einrechnen."
  },
  {
    id: "schnueffelteppich",
    name: "Schnüffelteppich",
    category: "Hundespielzeug",
    shortDescription: "Textiles Suchspiel für Nasenarbeit, ruhige Auslastung und langsameres Fressen.",
    benefits: ["Fördert Schnüffeln", "Gut für drinnen", "Kann entspannend wirken"],
    bestFor: "Hunde jeder Größe, besonders für ruhige Beschäftigung.",
    priceRange: "mittel",
    affiliateUrl: AMAZON_DOG_PLACEHOLDER,
    imageAlt: "Schnüffelteppich für Hunde",
    ratingText: "Nach Nutzung wegräumen, damit der Teppich kein Kauspielzeug wird."
  },
  {
    id: "edelstahl-naepfe-set",
    name: "Edelstahl-Napfset",
    category: "Futter- und Wassernäpfe",
    shortDescription: "Hygienisches Napfset für Wasser und Futter mit rutschfester Unterseite.",
    benefits: ["Leicht zu reinigen", "Geschmacksneutral", "Robust im Alltag"],
    bestFor: "Die meisten Haushalte, die eine einfache Napflösung suchen.",
    priceRange: "niedrig bis mittel",
    affiliateUrl: AMAZON_DOG_PLACEHOLDER,
    imageAlt: "Edelstahl-Napfset für Hunde",
    ratingText: "Größe und Standfestigkeit passend zum Hund wählen."
  },
  {
    id: "anti-schling-napf",
    name: "Anti-Schling-Napf",
    category: "Futter- und Wassernäpfe",
    shortDescription: "Napfstruktur, die sehr schnelles Fressen verlangsamen kann.",
    benefits: ["Kann Fressgeschwindigkeit senken", "Einfache Alltagshilfe", "Viele Größen erhältlich"],
    bestFor: "Hunde, die Trockenfutter sehr schnell aufnehmen.",
    priceRange: "niedrig bis mittel",
    affiliateUrl: AMAZON_DOG_PLACEHOLDER,
    imageAlt: "Anti-Schling-Napf für Hunde",
    ratingText: "Bei Verdauungsproblemen bitte tierärztlich beraten lassen."
  },
  {
    id: "napfunterlage-silikon",
    name: "Silikon-Napfunterlage",
    category: "Futter- und Wassernäpfe",
    shortDescription: "Rutschfeste Unterlage gegen Wasserflecken, Futterreste und verrutschende Näpfe.",
    benefits: ["Schützt den Boden", "Leicht abwaschbar", "Ordnet den Futterplatz"],
    bestFor: "Küchen, Flure und Futterplätze mit glatten Böden.",
    priceRange: "niedrig",
    affiliateUrl: AMAZON_DOG_PLACEHOLDER,
    imageAlt: "Silikon-Unterlage unter Hundenäpfen",
    ratingText: "Materialgeruch und Reinigungshinweise beachten."
  },
  {
    id: "hundeshampoo-mild",
    name: "Mildes Hundeshampoo",
    category: "Hundepflege",
    shortDescription: "Sanftes Shampoo für gelegentliche Reinigung nach Schmutz, Matsch oder Geruch.",
    benefits: ["Für Hundehaut formuliert", "Hilfreich nach starkem Schmutz", "Ergänzt Bürsten und Trocknen"],
    bestFor: "Gelegentliche Pflege, wenn klares Wasser nicht ausreicht.",
    priceRange: "niedrig bis mittel",
    affiliateUrl: AMAZON_DOG_PLACEHOLDER,
    imageAlt: "Mildes Hundeshampoo",
    ratingText: "Bei Hautproblemen vorher Tierarzt oder Tierärztin kontaktieren."
  },
  {
    id: "krallenschere-hund",
    name: "Krallenschere für Hunde",
    category: "Hundepflege",
    shortDescription: "Werkzeug für vorsichtige Krallenpflege, wenn der Hund ruhig daran gewöhnt wurde.",
    benefits: ["Für regelmäßige Kontrolle", "Kann Tierarztbesuche ergänzen", "Gut bei langsamem Aufbau"],
    bestFor: "Halter, die Krallenpflege sicher lernen und behutsam üben.",
    priceRange: "niedrig",
    affiliateUrl: AMAZON_DOG_PLACEHOLDER,
    imageAlt: "Krallenschere für Hunde",
    ratingText: "Unsicherheit, dunkle Krallen oder Blutung immer fachlich abklären."
  },
  {
    id: "pflegetuecher-hund",
    name: "Hundepflegetücher",
    category: "Hundepflege",
    shortDescription: "Feuchte Tücher für Pfoten, Fell und kleine Verschmutzungen nach dem Spaziergang.",
    benefits: ["Schnell griffbereit", "Praktisch für unterwegs", "Gut für Pfoten und Bauch nach Regen"],
    bestFor: "Wohnungen, Reisen und kurze Reinigung ohne Baden.",
    priceRange: "niedrig",
    affiliateUrl: AMAZON_DOG_PLACEHOLDER,
    imageAlt: "Pflegetücher für Hunde",
    ratingText: "Inhaltsstoffe prüfen, besonders bei sensibler Haut."
  },
  {
    id: "unterwollbuerste",
    name: "Unterwollbürste",
    category: "Fellpflege",
    shortDescription: "Bürste für Hunde mit Unterwolle, Fellwechsel und regelmäßige Pflegeeinheiten.",
    benefits: ["Hilft beim Fellwechsel", "Reduziert lose Haare", "Kann Verfilzungen vorbeugen"],
    bestFor: "Hunde mit dichter Unterwolle und saisonalem Fellwechsel.",
    priceRange: "mittel",
    affiliateUrl: AMAZON_DOG_PLACEHOLDER,
    imageAlt: "Unterwollbürste für Hunde",
    ratingText: "Sanft einsetzen und Felltyp beachten."
  },
  {
    id: "slicker-buerste",
    name: "Slicker-Bürste",
    category: "Fellpflege",
    shortDescription: "Feine Bürste für längeres Fell, leichte Knoten und regelmäßige Fellpflege.",
    benefits: ["Gut bei längerem Fell", "Hilft gegen kleine Knoten", "Fördert Pflege-Routine"],
    bestFor: "Langhaarige Hunde und Hunde mit pflegeintensiverem Fell.",
    priceRange: "niedrig bis mittel",
    affiliateUrl: AMAZON_DOG_PLACEHOLDER,
    imageAlt: "Slicker-Bürste für langes Hundefell",
    ratingText: "Nicht zu stark drücken, um Hautreizungen zu vermeiden."
  },
  {
    id: "fellpflegehandschuh",
    name: "Fellpflegehandschuh",
    category: "Fellpflege",
    shortDescription: "Weicher Handschuh zum Entfernen loser Haare und für sanfte Gewöhnung an Pflege.",
    benefits: ["Niedrige Einstiegshürde", "Kann wie Streicheln wirken", "Gut für kurze Felltypen"],
    bestFor: "Pflege-Einsteiger, sensible Hunde und Kurzhaarhunde.",
    priceRange: "niedrig",
    affiliateUrl: AMAZON_DOG_PLACEHOLDER,
    imageAlt: "Fellpflegehandschuh für Hunde",
    ratingText: "Für starke Unterwolle oft nur ergänzend geeignet."
  },
  {
    id: "kotbeutel-kompostierbar",
    name: "Kotbeutel auf Rolle",
    category: "Kotbeutel / Gassi-Zubehör",
    shortDescription: "Alltagsvorrat an Kotbeuteln für verantwortungsvolle Spaziergänge.",
    benefits: ["Passt in viele Spender", "Schnell griffbereit", "Unverzichtbar im Alltag"],
    bestFor: "Jeden Hundehaushalt und jede Gassitasche.",
    priceRange: "niedrig",
    affiliateUrl: AMAZON_DOG_PLACEHOLDER,
    imageAlt: "Kotbeutelrollen für Hunde",
    ratingText: "Entsorgung immer nach lokalen Regeln."
  },
  {
    id: "gassitasche",
    name: "Gassitasche",
    category: "Kotbeutel / Gassi-Zubehör",
    shortDescription: "Kleine Tasche für Leckerli, Kotbeutel, Schlüssel und Smartphone.",
    benefits: ["Alles schnell erreichbar", "Praktisch beim Training", "Ordnet den Spaziergang"],
    bestFor: "Alltag, Training und Welpenrunden.",
    priceRange: "niedrig bis mittel",
    affiliateUrl: AMAZON_DOG_PLACEHOLDER,
    imageAlt: "Gassitasche mit Leckerlibeutel",
    ratingText: "Verschlüsse, Waschbarkeit und Tragekomfort vergleichen."
  },
  {
    id: "kotbeutelspender",
    name: "Kotbeutelspender",
    category: "Kotbeutel / Gassi-Zubehör",
    shortDescription: "Kompakter Spender für Leine, Tasche oder Gürtel.",
    benefits: ["Beutel immer dabei", "Klein und leicht", "Schnell nachfüllbar"],
    bestFor: "Menschen, die Kotbeutel nicht jedes Mal neu suchen möchten.",
    priceRange: "niedrig",
    affiliateUrl: AMAZON_DOG_PLACEHOLDER,
    imageAlt: "Kotbeutelspender an Hundeleine",
    ratingText: "Befestigung und Rollengröße prüfen."
  },
  {
    id: "clicker-training",
    name: "Clicker für Hundetraining",
    category: "Trainingszubehör",
    shortDescription: "Kleines Markersignal-Werkzeug für präzises, belohnungsbasiertes Training.",
    benefits: ["Klares Timing möglich", "Leicht mitzunehmen", "Gut für Tricks und Grundlagen"],
    bestFor: "Halter, die positiv und kleinschrittig trainieren möchten.",
    priceRange: "niedrig",
    affiliateUrl: AMAZON_DOG_PLACEHOLDER,
    imageAlt: "Clicker für Hundetraining",
    ratingText: "Clicker ersetzt kein Trainingskonzept, erleichtert aber Timing."
  },
  {
    id: "trainingsdummy",
    name: "Trainingsdummy",
    category: "Trainingszubehör",
    shortDescription: "Dummy für Apportiertraining, Nasenarbeit und kontrollierte Suchspiele.",
    benefits: ["Gemeinsame Aufgabe", "Fördert Ruhe und Konzentration", "Gut für Outdoor-Training"],
    bestFor: "Hunde, die gerne suchen oder apportieren.",
    priceRange: "niedrig bis mittel",
    affiliateUrl: AMAZON_DOG_PLACEHOLDER,
    imageAlt: "Trainingsdummy für Hunde",
    ratingText: "Schrittweise aufbauen und nicht als wildes Hetzspiel nutzen."
  },
  {
    id: "targetstab",
    name: "Targetstab",
    category: "Trainingszubehör",
    shortDescription: "Hilfsmittel für Tricktraining, Positionen, Körpersprache und ruhige Führübungen.",
    benefits: ["Klare Orientierung", "Gut für Tricks", "Unterstützt feines Training"],
    bestFor: "Menschen, die strukturiert und freundlich üben möchten.",
    priceRange: "niedrig",
    affiliateUrl: AMAZON_DOG_PLACEHOLDER,
    imageAlt: "Targetstab für Hundetraining",
    ratingText: "Für Anfänger geeignet, wenn Übungen kleinschrittig bleiben."
  },
  {
    id: "led-hundelicht",
    name: "LED-Hundelicht",
    category: "Sicherheitszubehör",
    shortDescription: "Kleines Licht für Halsband, Geschirr oder Leine bei Dunkelheit.",
    benefits: ["Bessere Sichtbarkeit", "Leicht zu befestigen", "Praktisch in der dunklen Jahreszeit"],
    bestFor: "Abendspaziergänge, Waldwege und unbeleuchtete Strecken.",
    priceRange: "niedrig",
    affiliateUrl: AMAZON_DOG_PLACEHOLDER,
    imageAlt: "LED-Licht am Hundegeschirr",
    ratingText: "Batterielaufzeit und Wasserschutz beachten."
  },
  {
    id: "gps-tracker-hund",
    name: "GPS-Tracker für Hunde",
    category: "Sicherheitszubehör",
    shortDescription: "Tracker zur Ortung, wenn ein Hund entläuft oder im Gelände gesucht werden muss.",
    benefits: ["Kann Suche erleichtern", "Hilfreich bei unsicheren Hunden", "Oft mit App-Anbindung"],
    bestFor: "Jagdlich motivierte, ängstliche oder reisende Hunde.",
    priceRange: "mittel bis hoch",
    affiliateUrl: AMAZON_DOG_PLACEHOLDER,
    imageAlt: "GPS-Tracker am Hundehalsband",
    ratingText: "Abo-Kosten, Netzabdeckung und Gewicht prüfen."
  },
  {
    id: "erste-hilfe-set-hund",
    name: "Erste-Hilfe-Set für Hunde",
    category: "Sicherheitszubehör",
    shortDescription: "Kompaktes Set für kleine Notfälle, Reisen und die Gassitasche.",
    benefits: ["Grundausstattung griffbereit", "Praktisch im Auto", "Sinnvoll auf Reisen"],
    bestFor: "Urlaub, Wanderungen und Haushalte, die vorbereitet sein möchten.",
    priceRange: "niedrig bis mittel",
    affiliateUrl: AMAZON_DOG_PLACEHOLDER,
    imageAlt: "Erste-Hilfe-Set für Hunde",
    ratingText: "Erste Hilfe ersetzt keine tierärztliche Versorgung."
  }
];

export const featuredDogProductIds = [
  "y-geschirr-alltag",
  "verstellbare-fuehrleine",
  "orthopaedisches-hundebett",
  "faltbarer-reisenapf",
  "clicker-training",
  "erste-hilfe-set-hund"
];

export const getDogProductsByIds = (ids: string[]) =>
  ids.map((id) => dogProducts.find((product) => product.id === id)).filter((product): product is DogProduct => Boolean(product));

export const getDogProductsByCategory = (category: string) =>
  dogProducts.filter((product) => product.category === category);

export const getDogProductsByCategories = (categories: string[]) =>
  dogProducts.filter((product) => categories.includes(product.category));
