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
  Award, 
  ShieldCheck, 
  CheckCircle2, 
  Clock,
  MapPin,
  Check
} from 'lucide-react';
import { Logo } from './Logo';

interface UeberMichProps {
  onNavigate: (page: Page) => void;
}

export const UeberMich: React.FC<UeberMichProps> = ({ onNavigate }) => {
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
            <span className="text-gold-400 font-semibold">Über mich</span>
          </div>

          <div className="max-w-3xl space-y-5">
            <span className="px-3.5 py-1.5 bg-gold-500/10 border border-gold-500/20 text-gold-400 text-xs font-bold uppercase tracking-widest rounded-full inline-block">
              Mehr als nur ein Beruf • Echte Leidenschaft
            </span>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-display font-extrabold tracking-tight leading-tight">
              Ihr unabhängiger Kfz Sachverständiger Can Linker
            </h1>
            <p className="text-slate-300 text-base sm:text-lg font-sans max-w-2xl leading-relaxed">
              Erfahren Sie mehr über unsere Philosophie, Unabhängigkeit und unseren Qualitätsanspruch für Autofahrer im Ruhrgebiet.
            </p>
          </div>

        </div>
      </section>

      {/* 2. Brand Values and Bio */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Profile Frame (Visual Placeholder) */}
          <div className="lg:col-span-5 relative group select-none">
            
            <div className="bg-navy-950 border border-slate-800 p-8 rounded-3xl relative z-10 shadow-xl text-center space-y-5 aspect-4/3 flex flex-col justify-center items-center">
              <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#ffffff_1px,transparent_1px)] bg-[size:20px_20px]"></div>
              
              <div className="w-48 max-w-full">
                <Logo variant="light" showSub={true} className="w-full" />
              </div>

              <div className="space-y-1">
                <h3 className="font-display font-extrabold text-white text-lg sm:text-xl">Can Linker</h3>
                <p className="text-gold-400 text-xs font-mono tracking-widest uppercase font-bold">Inhaber &amp; Kfz-Sachverständiger</p>
              </div>

              <span className="w-12 h-[1px] bg-gold-500/30 block"></span>

              <p className="text-xs sm:text-sm text-slate-300 font-sans leading-relaxed max-w-xs">
                "Bei mir stehen Sie als Kunde zu 100% im Vordergrund. Ich kläre Ihre Rechtslage verständlich und ohne Kompromisse."
              </p>

              <div className="pt-2 text-xs text-slate-400 font-mono flex items-center gap-1">
                <Award className="w-4 h-4 text-gold-400" />
                <span>RheinWertGutachten Essen</span>
              </div>
            </div>

            {/* Glowing frame */}
            <div className="absolute -inset-1 bg-gradient-to-r from-gold-500 to-navy-500 blur-md rounded-3xl opacity-20 group-hover:opacity-35 transition-all pointer-events-none"></div>

          </div>

          {/* Right Direct Words */}
          <div className="lg:col-span-7 space-y-6">
            <span className="text-xs font-bold text-navy-500 uppercase tracking-widest">
              Meine Philosophie
            </span>
            <h2 className="text-2xl sm:text-3xl font-display font-extrabold text-navy-950 tracking-tight leading-tight">
              Neutralität, Kompetenz und Schnelligkeit auf Augenhöhe
            </h2>
            
            <div className="space-y-4 text-slate-600 text-sm sm:text-base font-sans leading-relaxed">
              <p>
                Hallo, ich bin <strong className="text-navy-950 font-semibold">Can Linker</strong>. Als unabhängiger Kfz-Gutachter unterstütze ich Fahrzeughalter, Unternehmen und Werkstätten in Essen und der Ruhrregion bei jeglicher Form von Fahrzeugschäden und Wertermittlungen.
              </p>
              <p>
                In der Kfz-Branche habe ich über viele Jahre eine ausgeprägte Leidenschaft für Präzision, Fahrzeugtechnik und Transparenz aufgebaut. Nach einem Autounfall ist es oft schwer, den Überblick zu behalten. Oft wird versucht, die Ansprüche von unverschuldet Geschädigten massiv einzuschränken.
              </p>
              <p>
                Genau hier greife ich ein: Mein Sachverständigenbüro <strong className="text-navy-950 font-semibold">RheinWertGutachten</strong> arbeitet vollkommen unabhängig von großen Versicherungsgesellschaften. Ich sorge dafür, dass der Ihnen entstandene finanzielle Schaden auf Heller und Pfennig dokumentiert wird.
              </p>
            </div>
          </div>

        </div>

        {/* 3. Operational focus areas */}
        <div className="bg-slate-50 border border-slate-100 rounded-3xl p-8 md:p-12 space-y-8">
          <div className="text-left space-y-1.5">
            <h3 className="font-display font-extrabold text-xl sm:text-2xl text-navy-950">
              Umfassendes Qualitäts-Versprechen
            </h3>
            <p className="text-slate-500 text-xs sm:text-sm font-sans max-w-xl">
              Wenn Sie RheinWertGutachten wählen, erhalten Sie erstklassige Unterstützung ohne Kompromisse.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 font-sans text-sm text-slate-700">
            {[
              { title: "Zertifizierte Expertise", desc: "Zertifizierte, anerkannte Gutachtenerstellung für Pkws, Motorräder, Elektrofahrzeuge und Transporter." },
              { title: "Transparente Kommunikation", desc: "Kein Fachchinesisch. Ich erkläre Ihnen jeden Posten in Ihrem Gutachten sowie Ihre rechtlichen Ansprüche auf Deutsch verständlich." },
              { title: "Schnelle Terminierung", desc: "Bei mir müssen Sie nicht wochenlang warten. Nach Ihrem Anruf vergeben wir oft innerhalb weniger Stunden Besichtigungstermine vor Ort." },
              { title: "Direkte Abrechnung", desc: "Ich wickle die Abrechnung des Gutachtens auf Wunsch direkt mit der gegnerischen Versicherung ab, damit Sie nicht in Vorleistung treten müssen." }
            ].map((claim, idx) => (
              <div key={idx} className="bg-white border border-slate-250/20 p-5 rounded-xl space-y-2 flex gap-4">
                <div className="w-8 h-8 bg-gold-400/10 rounded-full flex items-center justify-center flex-shrink-0">
                  <Check className="w-4 h-4 text-gold-600" />
                </div>
                <div>
                  <h4 className="font-display font-bold text-navy-950 text-base">{claim.title}</h4>
                  <p className="text-slate-500 text-xs sm:text-sm leading-relaxed mt-0.5">{claim.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 4. Action CTA */}
        <div className="bg-navy-950 text-white rounded-2xl p-8 text-center space-y-6 relative overflow-hidden">
          <h3 className="font-display font-extrabold text-xl sm:text-2xl">Lassen Sie uns zusammenarbeiten!</h3>
          <p className="text-slate-300 text-xs sm:text-sm max-w-xl mx-auto font-sans leading-relaxed">
            Haben Sie Fragen zur Schadensabwicklung oder benötigen Sie kurzfristig eine verlässliche Fahrzeugprüfung in Essen, Mülheim, Gelsenkirchen oder Duisburg? Ich helfe Ihnen persönlich.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4 pt-2">
            <a 
              href="tel:01743169807"
              className="px-6 py-3.5 bg-gold-500 hover:bg-gold-600 text-navy-950 font-bold rounded-xl text-sm transition-all shadow-md cursor-pointer"
            >
              Can Linker anrufen: 0174 3169807
            </a>
            <button
              onClick={() => onNavigate(Page.KONTAKT)}
              className="px-6 py-3.5 bg-white/10 hover:bg-white/15 border border-white/20 font-semibold rounded-xl text-sm transition-all cursor-pointer"
            >
              Terminanfrage stellen
            </button>
          </div>
        </div>

      </section>

    </div>
  );
};
