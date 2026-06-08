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
  AlertTriangle, 
  HelpCircle, 
  Clock, 
  ArrowRight,
  ChevronRight,
  Scale
} from 'lucide-react';

interface UnfallgutachtenProps {
  onNavigate: (page: Page) => void;
}

export const Unfallgutachten: React.FC<UnfallgutachtenProps> = ({ onNavigate }) => {
  return (
    <div className="space-y-16 pb-20">
      
      {/* 1. Header Hero for Local SEO */}
      <section className="bg-slate-900 text-white py-16 md:py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-slate-900 via-navy-950 to-black pointer-events-none"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          {/* Breadcrumb */}
          <div className="flex items-center gap-1.5 text-xs text-slate-400 mb-4 select-none">
            <span onClick={() => onNavigate(Page.HOME)} className="hover:text-gold-400 cursor-pointer transition-colors">Startseite</span>
            <ChevronRight className="w-3 h-3" />
            <span className="text-slate-300">Leistungen</span>
            <ChevronRight className="w-3 h-3" />
            <span className="text-gold-400 font-semibold">Unfallgutachten Essen</span>
          </div>

          <div className="max-w-3xl space-y-5">
            <span className="px-3.5 py-1.5 bg-gold-500/10 border border-gold-500/20 text-gold-400 text-xs font-bold uppercase tracking-widest rounded-full inline-block">
              Haftpflichtschaden &amp; Hilfe nach dem Unfall
            </span>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-display font-extrabold tracking-tight leading-tight">
              Unfallgutachten in Essen – schnell, unabhängig und professionell
            </h1>
            <p className="text-slate-300 text-base sm:text-lg font-sans max-w-2xl leading-relaxed">
              Sie hatten einen unverschuldeten Unfall im Ruhrgebiet? Wir sichern Ihre Ansprüche rechtlich ab. Das Unfallgutachten ist für Sie als Geschädigten vollkommen <strong className="text-white">kostenlos</strong>.
            </p>
            <div className="pt-2 flex flex-wrap gap-4">
              <a 
                href="tel:01743169807"
                className="flex items-center gap-2 bg-gold-500 hover:bg-gold-600 text-navy-950 font-bold px-6 py-3 rounded-xl shadow-lg transition-all text-sm cursor-pointer"
              >
                <Phone className="w-4 h-4" />
                <span>Direkt anrufen</span>
              </a>
              <a 
                href="https://wa.me/491743169807"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 bg-white/10 hover:bg-white/15 border border-white/20 text-white font-semibold px-6 py-3 rounded-xl transition-all text-sm cursor-pointer"
              >
                <MessageCircle className="w-4 h-4 text-green-400 fill-transparent" />
                <span>WhatsApp-Erstberatung</span>
              </a>
            </div>
          </div>

        </div>
      </section>

      {/* 2. Core Educational Value Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        
        <div className="lg:col-span-7 space-y-6">
          <h2 className="text-2xl sm:text-3xl font-display font-extrabold text-navy-950 tracking-tight">
            Wann benötigen Sie ein professionelles Unfallgutachten?
          </h2>
          
          <div className="space-y-4 text-slate-600 text-sm sm:text-base leading-relaxed font-sans">
            <p>
              Grundsätzlich gilt in Deutschland: Bei einem unverschuldeten Verkehrsunfall (<strong className="text-navy-900 font-semibold">Haftpflichtschaden</strong>) steht Ihnen laut Gesetz das Recht zu, einen freien, unabhängigen Kfz-Sachverständigen Ihrer Wahl zu beauftragen.
            </p>
            <p>
              Die Kosten hierfür müssen von der gegnerischen Kfz-Haftpflichtversicherung getragen werden. Ein Gutachten ist immer dann erforderlich, wenn der Schaden die sogenannte <strong className="text-navy-900 font-semibold">Bagatellgrenze</strong> (liegt derzeit bei etwa 750 bis 1.000 €) übersteigt.
            </p>
          </div>

          <div className="bg-amber-50 border-l-4 border-amber-500 p-4 rounded-r-xl space-y-2">
            <h4 className="flex items-center gap-2 text-amber-950 font-bold text-sm">
              <AlertTriangle className="w-5 h-5 text-amber-600 flex-shrink-0" />
              <span>Vorsicht vor dem Schadenservice der gegnerischen Versicherung!</span>
            </h4>
            <p className="text-xs sm:text-sm text-slate-700 leading-relaxed font-sans">
              Die gegnerische Versicherung versucht oft sofort, ein eigenes Gutachten oder einen hauseigenen „Prüfer“ zu beauftragen. Diese bewerten den Schaden im Zweifel zu Gunsten der Versicherung. Vertrauen Sie daher exklusiv auf Ihren unabhängigen Experten in Essen – RheinWertGutachten!
            </p>
          </div>
        </div>

        {/* Right Info Fact Card */}
        <div className="lg:col-span-5 bg-navy-900 text-slate-100 p-6 sm:p-8 rounded-2xl relative shadow-xl border border-navy-850">
          <h3 className="font-display font-bold text-white text-lg border-b border-navy-800 pb-3 mb-4">
            Ihre Rechte als Unfallgeschädigter
          </h3>
          <ul className="space-y-4 text-xs sm:text-sm font-sans leading-relaxed">
            {[
              "Freie Gutachterwahl: Sie bestimmen, wer Ihren Fahrzeugschaden feststellt.",
              "Kostenübernahme: Bei einem Haftpflichtschaden zahlt die gegnerische Versicherung 100% der Sachverständigenkosten.",
              "Eigene Werkstattwahl: Sie entscheiden, wo Ihr Fahrzeug repariert wird.",
              "Umfassender Anspruch: Wertminderung, Nutzungsausfall und ein Mietwagen stehen Ihnen zu.",
              "Anwaltsrecht: Gerne vermitteln wir spezialisierte Partner-Fachanwälte für Verkehrsrecht (ebenfalls kostenfrei)."
            ].map((text, idx) => (
              <li key={idx} className="flex gap-2.5">
                <Scale className="w-4 h-4 text-gold-400 flex-shrink-0 mt-0.5" />
                <span>{text}</span>
              </li>
            ))}
          </ul>
        </div>

      </section>

      {/* 3. Advantages of Independent Appraiser */}
      <section className="bg-slate-50 border-y border-slate-100 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto space-y-3 mb-12">
            <h2 className="text-2xl sm:text-3xl font-display font-extrabold text-navy-950 tracking-tight">
              Die Vorteile des unabhängigen Gutachtens
            </h2>
            <p className="text-slate-500 text-sm font-sans">
              Mit einem vollwertigen Schadengutachten von Can Linker sichern Sie sich lückenlose, gerichtlich verwertbare Beweise.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Exakte Wertermittlung",
                desc: "Wir kalkulieren detailliert die tatsächlichen Reparaturkosten, ermitteln die Wertminderung sowie den Wiederbeschaffungswert und den Restwert Ihres Kraftfahrzeugs."
              },
              {
                title: "Rechtssichere Beweise",
                desc: "Unsere Unfallgutachten sind lückenlos dokumentiert, mit hochauflösenden Schadensbildern versehen und halten gerichtlichen Überprüfungen im Streitfall stand."
              },
              {
                title: "Zeitersparnis",
                desc: "Wir prüfen Ihr KFZ zeitnah vor Ort in Essen oder Umgebung und übersenden das fertige Gutachten ohne Verzögerung direkt an Sie und auf Wunsch an Ihren Anwalt."
              }
            ].map((adv, idx) => (
              <div key={idx} className="bg-white p-6 sm:p-8 border border-slate-200/55 rounded-2xl shadow-sm relative">
                <div className="w-10 h-10 bg-gold-400/15 text-gold-600 rounded-lg flex items-center justify-center font-bold text-lg mb-4">
                  0{idx + 1}
                </div>
                <h3 className="font-display font-bold text-navy-950 text-lg mb-2">{adv.title}</h3>
                <p className="text-slate-500 text-sm sm:text-base font-sans leading-relaxed">{adv.desc}</p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 4. Mini process & internal linking */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="bg-white border border-slate-100 rounded-3xl p-8 md:p-12 shadow-sm grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          
          <div className="space-y-5">
            <h3 className="text-xl sm:text-2xl font-display font-bold text-navy-950 leading-snug">
              Hilfe direkt nach dem Unfall – so begleiten wir Sie
            </h3>
            <p className="text-slate-600 text-sm font-sans leading-relaxed">
              Vom ersten Anruf über die vollumfängliche Besichtigung bis hin zur Auszahlung der Entschädigungssumme oder der Abrechnung mit der Werkstatt – RheinWertGutachten betreut Sie persönlich. Wir sorgen dafür, dass Sie zu Ihrem Recht kommen.
            </p>
            <div className="space-y-3.5 text-slate-700 text-sm">
              <div className="flex items-center gap-2.5">
                <ShieldCheck className="w-5 h-5 text-green-600 flex-shrink-0" />
                <span>Gutachten-Erstellung meist binnen 24-48 Stunden</span>
              </div>
              <div className="flex items-center gap-2.5">
                <ShieldCheck className="w-5 h-5 text-green-600 flex-shrink-0" />
                <span>Direkte Abrechnung mit der gegnerischen Versicherung</span>
              </div>
              <div className="flex items-center gap-2.5">
                <ShieldCheck className="w-5 h-5 text-green-600 flex-shrink-0" />
                <span>Kostenfreie Besichtigung bei Ihnen vor Ort in Essen</span>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <div className="bg-slate-50 border border-slate-200/60 p-6 rounded-2xl">
              <h4 className="font-display font-bold text-navy-950 text-base mb-3">Unsere weiteren Sachverständigenleistungen:</h4>
              <div className="space-y-3">
                <button 
                  onClick={() => onNavigate(Page.SCHADENGUTACHTEN)}
                  className="flex items-center justify-between w-full p-3 bg-white hover:bg-slate-50 border border-slate-100 rounded-lg text-left text-sm font-semibold text-slate-700 transition-colors group cursor-pointer"
                >
                  <span>Schadengutachten (Kasko &amp; Beweise)</span>
                  <ArrowRight className="w-4 h-4 text-slate-400 group-hover:translate-x-1 transition-transform" />
                </button>
                <button 
                  onClick={() => onNavigate(Page.FAHRZEUGBEWERTUNG)}
                  className="flex items-center justify-between w-full p-3 bg-white hover:bg-slate-50 border border-slate-100 rounded-lg text-left text-sm font-semibold text-slate-700 transition-colors group cursor-pointer"
                >
                  <span>Fahrzeugbewertung &amp; Wertgutachten</span>
                  <ArrowRight className="w-4 h-4 text-slate-400 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>

            <div className="text-center">
              <button 
                onClick={() => onNavigate(Page.KONTAKT)}
                className="w-full py-3.5 bg-navy-950 hover:bg-navy-900 text-white font-display font-bold text-sm rounded-xl shadow-md transition-colors cursor-pointer"
              >
                Kostenfreie Ersteinschätzung anfordern
              </button>
            </div>
          </div>

        </div>

      </section>

      {/* 5. Contact Callout */}
      <section className="bg-navy-950 rounded-2xl mx-4 sm:mx-6 lg:mx-8 py-12 px-6 text-white text-center space-y-6 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[200px] h-[200px] bg-gold-400/5 blur-[50px] rounded-full pointer-events-none"></div>
        
        <h2 className="text-xl sm:text-2xl font-display font-extrabold max-w-xl mx-auto leading-tight">
          Sie Unfallgeschädigter? Bleiben Sie nicht auf Ihrem Schaden sitzen!
        </h2>
        <p className="text-slate-300 text-xs sm:text-sm max-w-lg mx-auto font-sans leading-relaxed">
          Sprechen Sie sofort mit Inhaber Can Linker. Wir agieren schnell, verlässlich und absolut unabhängig von Versicherungen in Essen &amp; Umgebung.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
          <a 
            href="tel:01743169807"
            className="flex items-center justify-center gap-2 bg-gold-500 hover:bg-gold-600 text-navy-950 font-bold px-7 py-3.5 rounded-xl text-sm transition-all shadow-md w-full sm:w-auto cursor-pointer"
          >
            <Phone className="w-4 h-4" />
            <span>0174 3169807 anrufen</span>
          </a>
          <a 
            href="https://wa.me/491743169807"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 bg-green-600 hover:bg-green-700 text-white font-bold px-7 py-3.5 rounded-xl text-sm transition-all shadow-md w-full sm:w-auto cursor-pointer"
          >
            <MessageCircle className="w-4 h-4 fill-transparent" />
            <span>WhatsApp schicken</span>
          </a>
        </div>
      </section>

    </div>
  );
};
