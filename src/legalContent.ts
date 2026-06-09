export type LegalContent = {
  impressum: string;
  datenschutz: string;
  updatedAt?: string;
};

export const LEGAL_STORAGE_KEY = 'rheinwert-legal-content-v1';

export const DEFAULT_IMPRESSUM = `Angaben gemaess § 5 TMG

RheinWertGutachten
Inhaber: Can Linker
Essen, Deutschland

Kontakt
Telefon: 0174 3169807
WhatsApp: 0174 3169807
E-Mail: info@rheinwert-gutachten.de
Web: www.rheinwert-gutachten.de

Berufsbezeichnung
Unabhaengiger Kfz-Sachverstaendiger / Schadensgutachter

Umsatzsteuer-ID
Umsatzsteuer-Identifikationsnummer gemaess § 27 a Umsatzsteuergesetz:
[Bitte eintragen]

Berufshaftpflichtversicherung
Name der Versicherung: [Bitte eintragen]
Geltungsraum der Versicherung: Deutschland, Europaeische Union

Redaktionell verantwortlich
Can Linker
Essen, Deutschland

Verbraucherstreitbeilegung
Die Europaeische Kommission stellt eine Plattform zur Online-Streitbeilegung bereit:
https://ec.europa.eu/consumers/odr

Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle teilzunehmen.`;

export const DEFAULT_DATENSCHUTZ = `Datenschutzerklaerung

1. Datenschutz auf einen Blick
Die folgenden Hinweise geben einen einfachen Ueberblick darueber, was mit Ihren personenbezogenen Daten passiert, wenn Sie diese Website besuchen. Personenbezogene Daten sind alle Daten, mit denen Sie persoenlich identifiziert werden koennen.

2. Verantwortliche Stelle
RheinWertGutachten
Inhaber: Can Linker
Essen, Deutschland
E-Mail: info@rheinwert-gutachten.de
Telefon: 0174 3169807

3. Datenerfassung auf dieser Website
Wenn Sie uns per Kontaktformular, Telefon, E-Mail oder WhatsApp kontaktieren, werden Ihre Angaben inklusive der von Ihnen dort angegebenen Kontaktdaten zwecks Bearbeitung der Anfrage und fuer den Fall von Anschlussfragen verarbeitet.

4. Rechtsgrundlage
Die Verarbeitung erfolgt auf Grundlage von Art. 6 Abs. 1 lit. b DSGVO, sofern Ihre Anfrage mit der Erfuellung eines Vertrags zusammenhaengt oder zur Durchfuehrung vorvertraglicher Massnahmen erforderlich ist. In allen uebrigen Faellen erfolgt die Verarbeitung auf Grundlage unseres berechtigten Interesses an der effektiven Bearbeitung der an uns gerichteten Anfragen.

5. Kontaktformular ueber FormSubmit
Fuer die technische Uebermittlung von Kontaktformular-Anfragen nutzen wir FormSubmit (Devro LABS). Die im Formular eingegebenen Daten werden an FormSubmit uebermittelt und von dort per E-Mail an uns weitergeleitet. Weitere Informationen zur Verarbeitung durch FormSubmit finden Sie in den Datenschutzinformationen des Anbieters.

6. WhatsApp-Kommunikation
Fuer den schnellen Support nutzen wir WhatsApp. Bitte beachten Sie, dass bei der Nutzung von WhatsApp personenbezogene Daten an WhatsApp bzw. Meta uebermittelt werden koennen.

7. Cookies und lokale Speicherung
Diese Website nutzt technisch notwendige lokale Speicherungen, um die Cookie-Auswahl zu merken und den Betrieb einzelner Funktionen sicherzustellen. Optionale Tracking- oder Marketing-Cookies werden nicht geladen.

8. Hosting
Diese Website wird ueber GitHub Pages bereitgestellt. Beim Aufruf der Website koennen technische Zugriffsdaten wie IP-Adresse, Browsertyp, Betriebssystem und Zeitpunkt des Seitenaufrufs verarbeitet werden.

9. Ihre Rechte
Sie haben jederzeit das Recht auf Auskunft, Berichtigung, Loeschung, Einschraenkung der Verarbeitung, Datenuebertragbarkeit sowie Widerspruch gegen die Verarbeitung Ihrer personenbezogenen Daten.

10. Beschwerderecht
Sie haben das Recht, sich bei einer Datenschutzaufsichtsbehoerde ueber die Verarbeitung Ihrer personenbezogenen Daten zu beschweren.`;

export const getDefaultLegalContent = (): LegalContent => ({
  impressum: DEFAULT_IMPRESSUM,
  datenschutz: DEFAULT_DATENSCHUTZ,
});

export const loadLegalContent = (): LegalContent => {
  if (typeof window === 'undefined') {
    return getDefaultLegalContent();
  }

  try {
    const stored = window.localStorage.getItem(LEGAL_STORAGE_KEY);
    if (!stored) {
      return getDefaultLegalContent();
    }

    const parsed = JSON.parse(stored) as Partial<LegalContent>;
    return {
      ...getDefaultLegalContent(),
      ...parsed,
    };
  } catch {
    return getDefaultLegalContent();
  }
};

export const saveLegalContent = (content: LegalContent) => {
  window.localStorage.setItem(
    LEGAL_STORAGE_KEY,
    JSON.stringify({
      ...content,
      updatedAt: new Date().toISOString(),
    }),
  );
};
