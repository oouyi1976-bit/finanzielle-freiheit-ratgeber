# HundeKompass Klar

Deutsche Affiliate-Ratgeberseite für Hundebesitzer. Die Website ist mit Astro, TypeScript und Tailwind CSS gebaut, statisch auslieferbar und für Cloudflare Pages geeignet.

## Neue Hunde-Bereiche

- `/hunde`
- `/hundetraining`
- `/welpen`
- `/hundezubehoer`
- `/hundegesundheit`
- `/hundefutter`
- `/hund-reisen`
- `/hunde-ratgeber`
- `/beste-hundeprodukte`
- `/affiliate-hinweis`

Die Sitemap wird über `@astrojs/sitemap` automatisch beim Build erzeugt. Der `postbuild`-Schritt kopiert den Sitemap-Index nach `dist/sitemap.xml`.

## Amazon-Affiliate-Links ersetzen

Die 50 Hundeprodukt-Plätze liegen in:

```txt
src/data/dogProducts.ts
```

Aktuell nutzt jedes Produkt den Platzhalter:

```txt
AMAZON_AFFILIATE_LINK_HIER_EINFUEGEN
```

Ersetze je Produkt nur das Feld `affiliateUrl`, zum Beispiel:

```ts
affiliateUrl: "https://www.amazon.de/dp/ASIN?tag=epic05e-21"
```

Vor Veröffentlichung prüfen:

- Link führt zu Amazon.de.
- Tracking-ID ist enthalten.
- Produkt passt wirklich zur Kategorie.
- Keine Amazon-Preise, Sternebewertungen, Rezensionen oder Produktbilder kopieren.
- Produktangaben auf Amazon aktuell prüfen.

## Digistore24-Links

Die Digistore24-Links liegen zentral in:

```txt
src/data/dogAffiliateLinks.ts
```

Vier Links wurden als hundebezogen eingeordnet und werden im Hundebereich verwendet:

- `566575` - Hundegruppen im Gleichgewicht
- `564188` - Mehrere Hunde / EinTeam
- `252196` - WELPENZEIT / HS-Welpen-Training
- `259648` - Wecke den Optimisten in deinem Hund

Der Link `https://chi-statt-botox.com/online-kurs/#aff=Benman8810` ist nicht hundebezogen und steht nur getrennt unter „Weitere Empfehlungen“ im Affiliate-Hinweis.

## Neue Hundeprodukte hinzufügen

Neue Produkte werden im Array `dogProducts` ergänzt:

```ts
{
  id: "eindeutige-produkt-id",
  name: "Produktname",
  category: "Hundeleinen",
  shortDescription: "Kurze, neutrale Beschreibung.",
  benefits: ["Vorteil 1", "Vorteil 2"],
  bestFor: "Für wen das Produkt sinnvoll ist.",
  priceRange: "niedrig bis mittel",
  affiliateUrl: "AMAZON_AFFILIATE_LINK_HIER_EINFUEGEN",
  imageAlt: "Beschreibender Alternativtext",
  ratingText: "Neutraler Hinweis ohne erfundene Sterne."
}
```

Nutze nur Kategorien aus `dogCategories`, damit Filter und Themenseiten sauber funktionieren.

## Neue Hundeartikel hinzufügen

Markdown-Artikel liegen in:

```txt
src/content/blog/
```

Ein neuer Hundeartikel sollte dieses Frontmatter nutzen:

```md
---
title: "Artikel-Titel"
description: "SEO-Meta-Beschreibung"
date: 2026-06-28
category: "Hunde - Training"
readingTime: "6 Min."
---
```

Die URL entsteht aus dem Dateinamen, zum Beispiel:

```txt
/ratgeber/mein-artikel-slug
```

## Lokal starten

Abhängigkeiten nur installieren, wenn `node_modules` fehlt oder sich `package-lock.json` geändert hat:

```bash
npm install
```

Entwicklungsserver:

```bash
npm run dev
```

Build prüfen:

```bash
npm run build
```

## Auf GitHub pushen

Aktuellen Status prüfen:

```bash
git status
git remote -v
```

Änderungen committen:

```bash
git add .
git commit -m "Add dog affiliate section with Amazon and Digistore24 products"
```

Push:

```bash
git push
```

Falls noch kein Upstream gesetzt ist:

```bash
git push -u origin main
```

## Cloudflare Pages deployen

1. Repository zu GitHub pushen.
2. In Cloudflare `Workers & Pages` öffnen.
3. `Create application` und dann `Pages` wählen.
4. GitHub-Repository verbinden.
5. Framework preset: `Astro`.
6. Build command:

```bash
npm run build
```

7. Output directory:

```txt
dist
```

8. Falls Cloudflare eine Node-Version verlangt, `NODE_VERSION=22.12.0` setzen.
9. Deployment starten.

## Rechtliche Hinweise

Die Inhalte sind allgemeine Ratgeberinformationen und ersetzen keine Tierarztberatung, Hundeschule oder individuelle Trainingsanalyse. Bei gesundheitlichen Problemen sollte eine Tierarztpraxis kontaktiert werden. Es gibt keine Erfolgsgarantien für Training, Verhalten, Gesundheit oder Produktergebnisse.
