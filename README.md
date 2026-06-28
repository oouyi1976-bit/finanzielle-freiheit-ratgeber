# Finanzielle Freiheit Klar

Moderne deutsche Affiliate-Website für das Digistore24-Produkt **„Der Weg zur finanziellen Freiheit“ von Bodo Schäfer**.

Die Website ist mit Astro, TypeScript und Tailwind CSS gebaut, statisch auslieferbar und für Cloudflare Pages vorbereitet.

## Inhalt

- Startseite
- `/bodo-schaefer-finanzielle-freiheit`
- `/finanzielle-freiheit-buch`
- `/bodo-schaefer-erfahrungen`
- `/geld-sparen`
- `/vermoegen-aufbauen`
- `/finanzielle-freiheit`
- `/ratgeber`
- `/impressum`
- `/datenschutz`
- `/affiliate-hinweis`
- 10 Ratgeberartikel unter `/ratgeber/...`

## Promolink ersetzen

Der Digistore24-Promolink ist aktuell als Platzhalter hinterlegt:

```ts
DIGISTORE24_PROMOLINK_HIER_EINFUEGEN
```

Ersetze ihn in:

```txt
src/lib/site.ts
```

## Amazon PartnerNet

Die Amazon-Tracking-ID ist zentral hinterlegt:

```txt
epic05e-21
```

Die 30 Amazon-Empfehlungen liegen in:

```txt
src/lib/amazon.ts
```

Alle Amazon-Links werden dort mit `tag=epic05e-21` erzeugt. Die sichtbaren Empfehlungsboxen werden über die Komponente `src/components/AmazonRecommendations.astro` ausgegeben.

## Lokal starten

```bash
npm install
npm run dev
```

Die lokale Entwicklungsseite läuft danach normalerweise unter:

```txt
http://localhost:4321
```

## Build prüfen

```bash
npm run build
```

Der statische Output wird in `dist/` erzeugt.

Optional kannst du den Build lokal ansehen:

```bash
npm run preview
```

## GitHub Repository erstellen

1. Auf GitHub ein neues Repository erstellen.
2. Kein README auf GitHub hinzufügen, weil dieses Projekt bereits eines enthält.
3. Danach lokal im Projektordner ausführen:

```bash
git init
git add .
git commit -m "Initial affiliate website for Bodo Schaefer financial freedom book"
git branch -M main
git remote add origin https://github.com/DEIN-BENUTZERNAME/DEIN-REPOSITORY.git
git push -u origin main
```

Falls das Repository bereits lokal initialisiert und committed ist, reichen nach dem Erstellen des GitHub-Repositories:

```bash
git remote add origin https://github.com/DEIN-BENUTZERNAME/DEIN-REPOSITORY.git
git push -u origin main
```

## Cloudflare Pages verbinden

1. In Cloudflare einloggen.
2. **Workers & Pages** öffnen.
3. **Create application** wählen.
4. **Pages** auswählen.
5. GitHub verbinden und dieses Repository auswählen.
6. Framework preset: **Astro**.
7. Build Command:

```bash
npm run build
```

8. Output Directory:

```txt
dist
```

9. Deployment starten.

## Wichtige Anpassungen vor Veröffentlichung

- Promolink in `src/lib/site.ts` ersetzen.
- Amazon-Empfehlungen in `src/lib/amazon.ts` vor Veröffentlichung noch einmal auf Verfügbarkeit prüfen.
- Domain in `astro.config.mjs`, `public/robots.txt` und ggf. SEO-Daten von `https://deine-domain.de` auf deine echte Domain ändern.
- Impressum in `src/pages/impressum.astro` rechtlich korrekt ausfüllen.
- Datenschutzerklärung in `src/pages/datenschutz.astro` an deine echte Datenverarbeitung anpassen.
- Prüfen, ob zusätzliche Cookie- oder Tracking-Hinweise nötig sind, falls du später Analytics, Pixel oder externe Skripte einbindest.

## Rechtlicher Hinweis

Die Inhalte sind allgemein und redaktionell. Sie sind keine Finanzberatung, Anlageberatung oder Steuerberatung. Es gibt keine Erfolgsgarantie und keine Garantie auf Vermögen, Rendite oder finanzielle Freiheit.
