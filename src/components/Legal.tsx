/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { Page } from '../types';
import { ChevronRight } from 'lucide-react';

interface LegalProps {
  type: 'impressum' | 'datenschutz';
  onNavigate: (page: Page) => void;
}

export const Legal: React.FC<LegalProps> = ({ type, onNavigate }) => {
  const isImpressum = type === 'impressum';

  return (
    <div className="space-y-12 pb-20">
      
      {/* Header */}
      <section className="bg-slate-900 text-white py-12 md:py-16 relative overflow-hidden select-none">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-slate-900 via-navy-950 to-black pointer-events-none"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          <div className="flex items-center gap-1.5 text-xs text-slate-400 mb-4">
            <span onClick={() => onNavigate(Page.HOME)} className="hover:text-gold-400 cursor-pointer transition-colors">Startseite</span>
            <ChevronRight className="w-3 h-3" />
            <span className="text-gold-400 font-semibold">{isImpressum ? 'Impressum' : 'Datenschutz'}</span>
          </div>

          <h1 className="text-3xl sm:text-4xl font-display font-extrabold tracking-tight">
            {isImpressum ? 'Legal Notice / Impressum' : 'Privacy Policy / Datenschutzerklärung'}
          </h1>
          <p className="text-slate-400 text-xs sm:text-sm max-w-xl font-sans mt-1">
            Rechtliche Pflichtangaben für RheinWertGutachten. Bitte vor Veröffentlichung rechtlich prüfen und anpassen.
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 font-sans text-slate-700 text-sm leading-relaxed space-y-8">
        
        {isImpressum ? (
          <div className="space-y-6">
            <div className="bg-yellow-50 border-l-4 border-yellow-500 p-4 rounded-r-xl select-none text-slate-800 text-xs sm:text-sm">
              <strong>Wichtiger Hinweis:</strong> Dieses Impressum ist ein Entwurf für RheinWertGutachten. Gesetzliche Pflichtangaben wie Steuernummer, Handelsregisternummer oder Aufsichtsbehörden müssen vom Inhaber vor Liveschaltung rechtlich geprüft und vervollständigt werden.
            </div>

            <div className="space-y-4">
              <h2 className="text-xl font-display font-bold text-navy-950 border-b border-slate-100 pb-2">Angaben gemäß § 5 TMG</h2>
              <p>
                RheinWertGutachten<br />
                Inhaber: Can Linker<br />
                Essen, Deutschland
              </p>
            </div>

            <div className="space-y-4">
              <h2 className="text-xl font-display font-bold text-navy-950 border-b border-slate-100 pb-2">Kontakt</h2>
              <p>
                Telefon: 0174 3169807<br />
                WhatsApp: 0174 3169807<br />
                E-Mail: info@rheinwert-gutachten.de<br />
                Web: www.rheinwert-gutachten.de
              </p>
            </div>

            <div className="space-y-4">
              <h2 className="text-xl font-display font-bold text-navy-950 border-b border-slate-100 pb-2">Umsatzsteuer-ID / Berufsbezeichnung</h2>
              <p>
                Berufsbezeichnung: Unabhängiger Kfz-Sachverständiger / Schadensgutachter<br />
                Umsatzsteuer-Identifikationsnummer gemäß § 27 a Umsatzsteuergesetz: [Noch eintragen - schwebendes Verfahren]<br />
                Zuständige Kammer/Behörde: Essen, Deutschland
              </p>
            </div>

            <div className="space-y-4">
              <h2 className="text-xl font-display font-bold text-navy-950 border-b border-slate-100 pb-2">Berufshaftpflichtversicherung</h2>
              <p>
                Name der Versicherung: [Berufshaftpflicht eintragen]<br />
                Geltungsraum der Versicherung: Deutschland, Europäische Union
              </p>
            </div>

            <div className="space-y-4">
              <h2 className="text-xl font-display font-bold text-navy-950 border-b border-slate-100 pb-2">Redaktionell verantwortlich</h2>
              <p>
                Can Linker<br />
                Essen, Deutschland
              </p>
            </div>

            <div className="space-y-4">
              <h2 className="text-xl font-display font-bold text-navy-950 border-b border-slate-100 pb-2">Verbraucherstreitbeilegung</h2>
              <p>
                Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit: <a href="https://ec.europa.eu/consumers/odr" target="_blank" rel="noopener noreferrer" className="text-navy-500 hover:underline">https://ec.europa.eu/consumers/odr</a>.<br />
                Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle teilzunehmen.
              </p>
            </div>
          </div>
        ) : (
          <div className="space-y-6">
            <div className="bg-yellow-50 border-l-4 border-yellow-500 p-4 rounded-r-xl select-none text-slate-800 text-xs sm:text-sm">
              <strong>Wichtiger Hinweis:</strong> Nachfolgend finden Sie eine standardkonforme DSGVO-Datenschutzerklärung für ein lokales Kontaktformular, Telefon- und WhatsApp-Support. Bitte vor Liveschaltung an die genutzten Trackingdienste anpassen.
            </div>

            <div className="space-y-4">
              <h2 className="text-xl font-display font-bold text-navy-950 border-b border-slate-100 pb-2">1. Datenschutz auf einen Blick</h2>
              <h3 className="font-bold text-navy-900 mt-2">Allgemeine Hinweise</h3>
              <p>
                Die folgenden Hinweise geben einen einfachen Überblick darüber, was mit Ihren personenbezogenen Daten passiert, wenn Sie diese Website besuchen. Personenbezogene Daten sind alle Daten, mit denen Sie persönlich identifiziert werden können.
              </p>
              <h3 className="font-bold text-navy-900 mt-2">Datenerfassung auf dieser Website</h3>
              <p>
                Die Datenverarbeitung auf dieser Website erfolgt durch den Websitebetreiber: Can Linker. Ihre Daten werden zum einen dadurch erhoben, dass Sie uns diese mitteilen (z.B. durch Eingabe im Kontaktformular). Andere Daten werden automatisch beim Besuch der Website durch das IT-System erfasst (z.B. Browsertyp oder Betriebssystem).
              </p>
            </div>

            <div className="space-y-4">
              <h2 className="text-xl font-display font-bold text-navy-950 border-b border-slate-100 pb-2">2. Allgemeine Hinweise und Pflichtinformationen</h2>
              <p>
                Wir behandeln Ihre personenbezogenen Daten vertraulich und entsprechend den gesetzlichen Datenschutzvorschriften sowie dieser Datenschutzerklärung.
              </p>
              <p>
                Sie haben das Recht auf Auskunft über Herkunft, Empfänger und Zweck Ihrer gespeicherten personenbezogenen Daten. Zudem haben Sie das Recht, die Berichtigung oder Löschung dieser Daten zu verlangen.
              </p>
            </div>

            <div className="space-y-4">
              <h2 className="text-xl font-display font-bold text-navy-950 border-b border-slate-100 pb-2">3. Datenerfassung auf dieser Website</h2>
              <h3 className="font-bold text-navy-900 mt-2">Kontaktformular / Anfragen</h3>
              <p>
                Wenn Sie uns per Kontaktformular, Telefon, E-Mail oder WhatsApp Kontaktanfragen zukommen lassen, werden Ihre Angaben inklusive der von Ihnen dort angegebenen Kontaktdaten zwecks Bearbeitung der Anfrage und für den Fall von Anschlussfragen bei uns gespeichert. Diese Daten geben wir nicht ohne Ihre Einwilligung weiter.
              </p>
              <p>
                Die Verarbeitung dieser Daten erfolgt auf Grundlage von Art. 6 Abs. 1 lit. b DSGVO, sofern Ihre Anfrage mit der Erfüllung eines Vertrags zusammenhängt oder zur Durchführung vorvertraglicher Maßnahmen erforderlich ist.
              </p>
              <h3 className="font-bold text-navy-900 mt-2">WhatsApp-Kommunikation</h3>
              <p>
                Für den schnellen Support nutzen wir WhatsApp. Bitte beachten Sie, dass die Kommunikation über WhatsApp einer Ende-zu-Ende-Verschlüsselung unterliegt, WhatsApp Inc. jedoch Metadaten erfasst. Wenn Sie uns per WhatsApp kontaktieren, stimmen Sie dieser Übermittlung zu.
              </p>
            </div>

            <div className="space-y-4">
              <h2 className="text-xl font-display font-bold text-navy-950 border-b border-slate-100 pb-2">4. Hosting</h2>
              <p>
                Die Inhalte unserer Website werden bei unserem Cloud-Hosting-Dienstleister betrieben (Vite / Google Cloud). Dabei werden Verbindungsdaten wie IP-Adressen zur technischen Bereitstellung der Webseite verarbeitet.
              </p>
            </div>
          </div>
        )}

      </section>

    </div>
  );
};
