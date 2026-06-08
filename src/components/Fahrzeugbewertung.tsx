/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { Page } from '../types';
import { 
  Phone, 
  MessageCircle, 
  ChevronRight, 
  CheckCircle, 
  Coins, 
  LineChart, 
  ShieldCheck, 
  Eye,
  FileText
} from 'lucide-react';

interface FahrzeugbewertungProps {
  onNavigate: (page: Page) => void;
}

export const Fahrzeugbewertung: React.FC<FahrzeugbewertungProps> = ({ onNavigate }) => {
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
            <span className="text-gold-400 font-semibold">Fahrzeugbewertung Essen</span>
          </div>

          <div className="max-w-3xl space-y-5">
            <span className="px-3.5 py-1.5 bg-gold-500/10 border border-gold-500/20 text-gold-400 text-xs font-bold uppercase tracking-widest rounded-full inline-block">
              Wert- und Marktermittlung • Zertifiziert &amp; Unabhängig
            </span>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-display font-extrabold tracking-tight leading-tight">
              Fahrzeugbewertung in Essen – transparent und nachvollziehbar
            </h1>
            <p className="text-slate-300 text-base sm:text-lg font-sans max-w-2xl leading-relaxed">
              Was ist Ihr Auto wirklich wert? Vermeiden Sie finanzielle Einbußen beim Kauf, Verkauf, Leasing oder im Versicherungsfall. Can Linker ermittelt den exakten Marktwert unabhängig und ehrlich.
            </p>
            <div className="pt-2 flex flex-wrap gap-4">
              <a 
                href="tel:01743169807"
                className="flex items-center gap-2 bg-gold-500 hover:bg-gold-600 text-navy-950 font-bold px-6 py-3 rounded-xl shadow-lg transition-all text-sm cursor-pointer"
              >
                <Phone className="w-4 h-4" />
                <span>Termin zur Bewertung</span>
              </a>
              <a 
                href="https://wa.me/491743169807"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 bg-white/10 hover:bg-white/15 border border-white/20 text-white font-semibold px-6 py-3 rounded-xl transition-all text-sm cursor-pointer"
              >
                <MessageCircle className="w-4 h-4 text-green-400 fill-transparent" />
                <span>WhatsApp Rückfrage</span>
              </a>
            </div>
          </div>

        </div>
      </section>

      {/* 2. Structured reasons */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          <div className="lg:col-span-7 space-y-6">
            <h2 className="text-2xl sm:text-3xl font-display font-extrabold text-navy-950 tracking-tight">
              Warum ein professionelles Wertgutachten unverzichtbar ist
            </h2>
            <div className="space-y-4 text-slate-600 text-sm sm:text-base font-sans leading-relaxed">
              <p>
                Viele Autobesitzer verlassen sich beim Verkauf ihres Fahrzeugs auf automatisierte Online-Rechner. Diese berücksichtigen jedoch weder die tatsächliche Pflegehistorie, noch die Sonderausstattung oder wertsteigernde Instandhaltungen.
              </p>
              <p>
                Mit einer <strong className="text-navy-950 font-semibold">unabhängigen Fahrzeugbewertung</strong> erhalten Sie ein schriftliches, detailliert begründetes Wertgutachten. Dieses Dokument dient Ihnen als unumstößliches Argument bei Preisverhandlungen, bei der Einstufung durch Ihre Kaskoversicherung oder bei der Leasingrückgabe.
              </p>
            </div>
          </div>

          <div className="lg:col-span-5 bg-white border border-slate-200/80 p-6 md:p-8 rounded-2xl shadow-sm space-y-6">
            <h3 className="font-display font-bold text-navy-950 text-lg">Ein Wertgutachten schützt Sie bei:</h3>
            <div className="space-y-4">
              {[
                { title: "Gebrauchtwagenkauf &amp; -verkauf", desc: "Verhindert Verluste durch Unter- oder Überbewertung." },
                { title: "Versicherungs-Einstufung", desc: "Wichtig bei Oldtimern, Tuning-Fahrzeugen &amp; Umbauten." },
                { title: "Leasing-Rückgabe", desc: "Schutz vor unberechtigten Mängelforderungen der Leasinggesellschaft." },
                { title: "Betriebliche Entnahme", desc: "Nachweisbare Dokumentation für das Finanzamt." }
              ].map((reason, idx) => (
                <div key={idx} className="flex gap-3 text-sm">
                  <CheckCircle className="w-5 h-5 text-gold-500 flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-bold text-navy-950" dangerouslySetInnerHTML={{ __html: reason.title }} />
                    <p className="text-slate-500 text-xs sm:text-sm">{reason.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>

        {/* 3. Valuation Elements - Displaying the metrics transparently */}
        <div className="bg-slate-50 border border-slate-100 rounded-3xl p-8 md:p-12 space-y-8">
          <div className="text-left space-y-2">
            <h3 className="font-display font-extrabold text-xl sm:text-2xl text-navy-950">
              Welche Faktoren fließen in unsere Fahrzeugbewertung ein?
            </h3>
            <p className="text-slate-500 text-xs sm:text-sm font-sans max-w-xl">
              Im Gegensatz zu herkömmlichen Werkstätten prüft RheinWertGutachten Ihr Auto nach einem strukturierten, lückenlosen Qualitätsverfahren.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 font-sans">
            {[
              {
                title: "Optischer &amp; technischer Zustand",
                desc: "Bewertung von Lack, Karosserie, Innenraum, Motor, Getriebe und Bremsen sowie die Überprüfung von unfallfreien Originalteilen.",
                icon: <Eye className="w-5 h-5 text-gold-500" />
              },
              {
                title: "Ausstattung &amp; Details",
                desc: "Berücksichtigung sämtlicher Sonderausstattungen, Assistenzsysteme, Felgensätze sowie eventueller exklusiver Tuning- und Umbauarbeiten.",
                icon: <ShieldCheck className="w-5 h-5 text-gold-400" />
              },
              {
                title: "Historie &amp; Marktlage",
                desc: "Analyse des Serviceheftes, der Vorbesitzeranzahl sowie aktueller Markttrends für Ihr spezifisches Fahrzeugmodell im gesamten Bundesgebiet.",
                icon: <LineChart className="w-5 h-5 text-gold-500" />
              }
            ].map((metric, idx) => (
              <div key={idx} className="bg-white border border-slate-200/60 p-5 rounded-xl space-y-3 shadow-2xs">
                <div className="w-10 h-10 bg-navy-50 rounded-lg flex items-center justify-center">
                  {metric.icon}
                </div>
                <h4 className="font-display font-bold text-navy-950 text-sm sm:text-base" dangerouslySetInnerHTML={{ __html: metric.title }} />
                <p className="text-slate-500 text-xs sm:text-sm leading-relaxed">{metric.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Call to action for free consultation */}
        <div className="bg-navy-950 text-white rounded-2xl p-8 text-center space-y-5 relative overflow-hidden">
          <h3 className="font-display font-extrabold text-xl sm:text-2xl">Lassen Sie Ihr Fahrzeug jetzt professionell schätzen!</h3>
          <p className="text-slate-300 text-xs sm:text-sm max-w-xl mx-auto font-sans leading-relaxed">
            Kontaktieren Sie Can Linker für ein zuverlässiges und unabhängiges Wertgutachten Ihres Autos oder Motorrads. Schnelle Terminabsprache vor Ort in Essen.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4 pt-2">
            <a 
              href="tel:01743169807"
              className="px-6 py-3 bg-gold-500 hover:bg-gold-600 text-navy-950 font-bold rounded-lg text-sm transition-all text-center cursor-pointer"
            >
              0174 3169807 anrufen
            </a>
            <button
              onClick={() => onNavigate(Page.KONTAKT)}
              className="px-6 py-3 bg-white/10 hover:bg-white/15 border border-white/20 font-semibold rounded-lg text-sm transition-all text-center cursor-pointer"
            >
              Termin online anfragen
            </button>
          </div>
        </div>

      </section>

    </div>
  );
};
