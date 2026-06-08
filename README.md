# RheinWertGutachten Website

Statische React/Vite-Website für RheinWertGutachten.

## Lokal starten

```bash
npm install
npm run dev
```

## Statische Dateien bauen

```bash
npm run build
```

Die fertige Website liegt danach in `dist/`. Diese Dateien können ohne eigenen Node-Server auf GitHub Pages, Netlify, Vercel, IONOS, Strato oder jedem normalen Webspace gehostet werden.

## GitHub Pages

Dieses Projekt enthält bereits einen GitHub-Actions-Workflow unter `.github/workflows/deploy.yml`.

1. Repository zu GitHub pushen.
2. In GitHub unter `Settings` -> `Pages` als Quelle `GitHub Actions` auswählen.
3. Auf den Branch `main` pushen.
4. GitHub baut automatisch `dist/` und veröffentlicht die Seite.

## Eigene Domain verbinden

In GitHub unter `Settings` -> `Pages` die Domain eintragen, zum Beispiel:

```text
www.rheinwert-gutachten.de
```

Beim Domain-Anbieter danach DNS setzen:

- Für `www`: `CNAME` auf `<github-benutzername>.github.io`
- Für die Hauptdomain ohne `www`: `A`-Records auf die GitHub-Pages-IP-Adressen aus der GitHub-Dokumentation

Nach der DNS-Umstellung in GitHub Pages `Enforce HTTPS` aktivieren, sobald GitHub das Zertifikat bereitgestellt hat.
