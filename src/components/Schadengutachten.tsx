/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { Page } from '../types';
import { 
  Phone, 
  MessageCircle, 
  ShieldCheck, 
  ChevronRight, 
  CheckCircle, 
  FileText, 
  HelpCircle,
  ArrowRight
} from 'lucide-react';

interface SchadengutachtenProps {
  onNavigate: (page: Page) => void;
}

export const Schadengutachten: React.FC<SchadengutachtenProps> = ({ onNavigate }) => {
  return (
    <div className="space-y-16 pb-20">
      
      {/* 1. Hero Header */}
      <section className="bg-slate-900 text-white py-16 md:py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-slate-900 via-navy-950 to-black pointer-events-none"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          {/* Breadcrumb */}
          <div className="flex items-center gap-1.5 text-xs text-slate-400 mb-4 select-none">
            <span onClick={() => onNavigate(Page.HOME)} className="hover:text-gold-400 cursor-pointer transition-colors">Startseite</span>
            <ChevronRight className="w-3 h-3" />
            <span className="text-slate-300">Leistungen</span>
            <ChevronRight className="w-3 h-3" />
            <span className="text-gold-400 font-semibold">Schadengutachten Essen</span>
          </div>

          <div className="max-w-3xl space-y-5">
            <span className="px-3.5 py-1.5 bg-gold-500/10 border border-gold-500/20 text-gold-400 text-xs font-bold uppercase tracking-widest rounded-full inline-block">
              Beweissicherung &amp; Schadensfeststellung
            </span>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-display font-extrabold tracking-tight leading-tight">
              Schadengutachten in Essen und Umgebung
            </h1>
            <p className="text-slate-300 text-base sm:text-lg font-sans max-w-2xl leading-relaxed">
              Professionelle Ermittlung und Dokumentation von Schäden an Ihrem Fahrzeug. Ob Kaskofall, Vandalismus, Unwetter oder Bagatellschaden – wir klären den Sachverhalt unabhängig und präzise.
            </p>
            <div className="pt-2 flex flex-wrap gap-4">
              <a 
                href="tel:01743169807"
                className="flex items-center gap-2 bg-gold-500 hover:bg-gold-600 text-navy-950 font-bold px-6 py-3 rounded-xl shadow-lg transition-all text-sm cursor-pointer"
              >
                <Phone className="w-4 h-4" />
                <span>Anruf zur Erstberatung</span>
              </a>
              <a 
                href="https://wa.me/491743169807"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 bg-white/10 hover:bg-white/15 border border-white/20 text-white font-semibold px-6 py-3 rounded-xl transition-all text-sm cursor-pointer"
              >
                <MessageCircle className="w-4 h-4 text-green-400 fill-transparent" />
                <span>Foto-Zusendung per WhatsApp</span>
              </a>
            </div>
          </div>

        </div>
      </section>

      {/* 2. Content Sections - Detail info */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Row 1: Focus */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7 space-y-5">
            <h2 className="text-2xl sm:text-3xl font-display font-extrabold text-navy-950 tracking-tight">
              Zuverlässige Schadensbewertung für alle Fälle
            </h2>
            <div className="space-y-4 text-slate-600 text-sm sm:text-base font-sans leading-relaxed">
              <p>
                Ein qualifiziertes Schadengutachten dient in erster Linie der detaillierten Beweissicherung und der Ermittlung der voraussichtlichen Reparaturkosten. Im Gegensatz zu einem einfachen Kostenvoranschlag einer Werkstatt ist ein vollwertiges Kfz-Gutachten <strong className="text-navy-950 font-semibold">beweissichernd und prozesstauglich</strong>.
              </p>
              <p>
                Es dokumentiert nicht nur, welche Teile beschädigt wurden, sondern schließt auch Folgeschäden, eine eventuell eingetretene Wertminderung (merkantiler Minderwert) sowie den Nutzungsausfall pro Tag mit ein.
              </p>
            </div>
          </div>

          <div className="lg:col-span-5 bg-slate-50 border border-slate-200 p-6 md:p-8 rounded-2xl space-y-4">
            <h3 className="font-display font-bold text-navy-950 text-lg">
              Für wen ist dieser Service geeignet?
            </h3>
            <ul className="space-y-3 font-sans text-sm text-slate-600">
              {[
                "Privatpersonen bei Unklarheit der Regulierung",
                "Kaskoversicherte (Schadensregulierung mit eigener Versicherung)",
                "Unternehmen mit Fuhrparks &amp; Firmenwagen",
                "Rechtsanwälte &amp; Kanzleien zur Beweissicherung",
                "Leasingnehmer vor der Rückgabe zur Absicherung"
              ].map((item, idx) => (
                <li key={idx} className="flex gap-2.5 items-center">
                  <CheckCircle className="w-4 h-4 text-gold-500 flex-shrink-0" />
                  <span dangerouslySetInnerHTML={{ __html: item }} />
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Row 2: Types of damages covered */}
        <div className="bg-navy-950 text-white rounded-3xl p-8 md:p-12 shadow-md space-y-8">
          <div className="max-w-2xl text-left space-y-2">
            <h3 className="font-display font-extrabold text-xl sm:text-2xl text-white">
              Welche Schäden begutachten wir für Sie?
            </h3>
            <p className="text-slate-400 text-sm font-sans">
              Egal um welchen Schaden es sich handelt – wir prüfen den Fall vor Ort in Essen und dem Ruhrgebiet neutral und professionell.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 font-sans">
            {[
              {
                title: "Kaskoschäden",
                desc: "Selbstverschuldete Unfälle oder Kollisionen mit Tieren (Wildschaden), die Sie über Ihre eigene Teil- oder Vollkaskoversicherung abrechnen möchten."
              },
              {
                title: "Elementarschäden",
                desc: "Verursacht durch Sturm, Hagel, Überschwemmungen oder Blitzschlag. Wir halten die exakte Schadenssumme für Ihre Versicherung fest."
              },
              {
                title: "Vandalismusschäden",
                desc: "Verursacht durch mutwillige Zerstörung Fremder (z.B. Kratzer im Lack, zerstörte Spiegel oder Scheiben). Wichtig für die Anzeige und die Versicherung."
              },
              {
                title: "Bagatellschäden &amp; Vorbeschädigungen",
                desc: "Abgrenzung und Dokumentation kleinerer Blessuren, um im Streitfall unbegründete Ansprüche der Gegenseite sicher abzuweisen."
              }
            ].map((damage, idx) => (
              <div key={idx} className="bg-white/5 border border-white/10 p-5 rounded-xl space-y-2">
                <div className="text-gold-400 font-mono font-bold text-xs">BEREICH 0{idx + 1}</div>
                <h4 className="font-display font-bold text-sm text-white" dangerouslySetInnerHTML={{ __html: damage.title }} />
                <p className="text-slate-400 text-xs sm:text-sm leading-relaxed">{damage.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Dynamic CTA Box to navigate internally */}
        <div className="bg-white border border-slate-100 rounded-3xl p-6 md:p-8 shadow-sm flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-1.5 md:max-w-lg">
            <h4 className="font-display font-bold text-navy-950 text-base sm:text-lg">Nicht sicher, ob Sie ein Schadengutachten benötigen?</h4>
            <p className="text-slate-500 text-xs sm:text-sm font-sans">Schicken Sie uns einfach Fotos des Fahrzeugschadens per WhatsApp. Can Linker gibt Ihnen eine kostenfreie Ersteinschätzung zur Sachlage!</p>
          </div>
          <div className="flex gap-3 flex-shrink-0">
            <a 
              href="https://wa.me/491743169807"
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-3 bg-green-600 hover:bg-green-700 text-white font-bold text-sm rounded-xl flex items-center gap-2 cursor-pointer transition-colors"
            >
              <MessageCircle className="w-4 h-4 fill-transparent" />
              <span>Bilder senden</span>
            </a>
            <button 
              onClick={() => onNavigate(Page.KONTAKT)}
              className="px-5 py-3 bg-navy-950 hover:bg-navy-900 text-white font-bold text-sm rounded-xl flex items-center gap-1.5 cursor-pointer transition-colors"
            >
              <span>Über das Kontaktformular</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>

      </section>

    </div>
  );
};
