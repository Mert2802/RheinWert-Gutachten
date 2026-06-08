/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { Page } from '../types';
import { InteractiveDamageCalculator } from './InteractiveDamageCalculator';
import { 
  Phone, 
  MessageCircle, 
  ShieldCheck, 
  Clock, 
  MapPin, 
  CornerDownRight, 
  ArrowRight,
  Sparkles,
  CheckCircle2,
  Calendar,
  Layers,
  Award,
  Mail
} from 'lucide-react';

interface HomeProps {
  onNavigate: (page: Page) => void;
}

export const Home: React.FC<HomeProps> = ({ onNavigate }) => {
  return (
    <div className="space-y-14 md:space-y-20 pb-20">
      
      {/* 1. Hero Section - Trustworthy First Impression */}
      <section className="relative overflow-hidden bg-navy-950 text-white flex items-center px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
        
        {/* Decorative Grid and Ambient Lights */}
        <div className="absolute inset-0 bg-[linear-gradient(135deg,#0b1329_0%,#111827_52%,#0f172a_100%)] pointer-events-none"></div>
        
        {/* Subtle grid pattern for precision feel */}
        <div className="absolute inset-0 opacity-[0.035] bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none"></div>

        <div className="max-w-7xl mx-auto w-full relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Left Hero Core Content */}
          <div className="lg:col-span-7 space-y-5 md:space-y-7">
            
            {/* Trust Badge */}
            <div className="inline-flex max-w-full items-center gap-2 px-3 py-1.5 rounded-lg bg-gold-500/10 border border-gold-500/20 text-gold-400 text-[11px] sm:text-xs font-display font-semibold uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5 animate-pulse" />
              <span>Unabhängig • Qualifiziert • Vor Ort in Essen</span>
            </div>

            <div className="space-y-3 sm:space-y-4">
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-display font-extrabold tracking-tight leading-tight max-w-3xl">
                RheinWertGutachten – Ihr unabhängiger Kfz-Gutachter in Essen
              </h1>
              <p className="text-base sm:text-lg text-slate-300 font-sans max-w-xl leading-relaxed">
                Schnelle und professionelle Unfallgutachten, Schadengutachten und Fahrzeugbewertungen in Essen, Bochum, Duisburg und ganz NRW.
              </p>
            </div>

            {/* Crucial CTA Box */}
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 max-w-md sm:max-w-none">
              <a 
                href="tel:01743169807"
                className="flex items-center justify-center gap-3 bg-gold-500 hover:bg-gold-600 text-navy-950 font-display font-bold text-sm sm:text-base px-5 sm:px-7 py-3.5 sm:py-4 rounded-lg shadow-lg ring-4 ring-gold-400/15 transition-all text-center group cursor-pointer"
              >
                <Phone className="w-5 h-5 flex-shrink-0" />
                <span>Jetzt anrufen</span>
                <ArrowRight className="w-4 h-4 opacity-50 group-hover:translate-x-1 transition-transform" />
              </a>
              <a 
                href="https://wa.me/491743169807"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-3 bg-slate-900 border border-slate-700 hover:border-green-500 hover:bg-green-950/20 text-white font-display font-semibold text-sm sm:text-base px-5 sm:px-7 py-3.5 sm:py-4 rounded-lg shadow-md transition-all text-center cursor-pointer"
              >
                <MessageCircle className="w-5 h-5 text-green-500 fill-transparent" />
                <span>Per WhatsApp schreiben</span>
              </a>
            </div>

            {/* Quick Contact & Personal Highlight */}
            <div className="pt-2 border-t border-navy-800 flex flex-wrap gap-x-4 gap-y-2 text-xs sm:text-sm text-slate-400">
              <span className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-green-500 animate-ping"></span>
                <span>Inhaber Can Linker: <strong className="text-white">0174 3169807</strong></span>
              </span>
              <span className="hidden sm:inline text-navy-800">|</span>
              <span>Unabhängig. Schnell. Persönlich. Vor Ort in Essen &amp; Umgebung.</span>
            </div>

          </div>

          {/* Right Hero Interactive/Visual Trust Card */}
          <div className="lg:col-span-5 bg-white/5 border border-white/10 p-5 md:p-7 rounded-lg backdrop-blur-md space-y-5 shadow-xl relative">
            <h3 className="font-display font-bold text-lg text-white border-b border-white/10 pb-3 flex items-center gap-2">
              <ShieldCheck className="w-5 h-5 text-gold-400" />
              <span>Vorteile bei RheinWertGutachten</span>
            </h3>

            <ul className="space-y-3.5 font-sans text-sm md:text-base">
              {[
                { title: "Schnelle Terminvergabe", desc: "Besichtigung meist am selben Werktag direkt bei Ihnen." },
                { title: "Mobiler Vor-Ort-Service", desc: "Kostenfreie Anfahrt in Essen, Duisburg und Umgebung." },
                { title: "Unabhängig von Versicherungen", desc: "Wir bewerten neutral. Keine Kürzung Ihres Schadens." },
                { title: "Direkte persönliche Betreuung", desc: "Keine anonyme Hotline - persönlicher Kontakt mit Can Linker." },
                { title: "Telefonisch & WhatsApp erreichbar", desc: "Nach dem Unfall zählt jede Minute. Wir sind für Sie da." }
              ].map((benefit, idx) => (
                <li key={idx} className="flex gap-3">
                  <CheckCircle2 className="w-5 h-5 text-gold-400 flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-semibold text-slate-100">{benefit.title}</h4>
                    <p className="hidden sm:block text-xs text-slate-400">{benefit.desc}</p>
                  </div>
                </li>
              ))}
            </ul>

            <div className="pt-2">
              <button
                onClick={() => onNavigate(Page.KONTAKT)}
                className="w-full py-3 bg-navy-800 hover:bg-navy-700 text-slate-200 text-xs font-bold uppercase tracking-widest rounded-lg transition-colors border border-navy-700 cursor-pointer"
              >
                Termin online vereinbaren
              </button>
            </div>
          </div>

        </div>
      </section>

      {/* 2. Services Overview Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-12 select-none">
          <span className="text-xs font-bold text-navy-500 uppercase tracking-widest bg-navy-50 px-3.5 py-1.5 rounded-full inline-block">
            Unsere Leistungen
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-display font-extrabold text-navy-950 tracking-tight">
            Maßgeschneiderte Gutachten &amp; Wertermittlungen
          </h2>
          <p className="text-slate-500 text-sm sm:text-base font-sans">
            Als freies Gutachterbüro decken wir sämtliche automobilen Sachverständigenleistungen für Sie ab – neutral, präzise und fachgerecht.
          </p>
        </div>

        {/* The 3 Main Service Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              title: "Unfallgutachten",
              desc: "Nach einem unverschuldeten Verkehrsunfall (Haftpflichtschaden) dokumentieren wir den Schaden unabhängig. Die gegnerische Versicherung muss die Kosten für Ihr Gutachten vollständig übernehmen.",
              bulletLabel: "Wichtig bei Fremdverschulden",
              actionPage: Page.UNFALLGUTACHTEN,
              accent: "border-t-4 border-t-navy-500"
            },
            {
              title: "Schadengutachten",
              desc: "Fachgerechte, detailgenaue Bewertung aller Arten von Fahrzeugschäden zur Beweissicherung – sei es für Kaskoschäden, eigene Bagatellschäden oder gewerbliche Fahrzeugflotten im Ruhrgebiet.",
              bulletLabel: "Beweis- & Kaskosicherung",
              actionPage: Page.SCHADENGUTACHTEN,
              accent: "border-t-4 border-t-gold-500"
            },
            {
              title: "Fahrzeugbewertung",
              desc: "Transparente Wertermittlung für Kauf, Verkauf, Versicherungseinstufung, Leasingrückgaben oder private Übersicht. Bestimmen Sie den tatsächlichen Wert Ihres Autos unabhängig vom Händler.",
              bulletLabel: "Exakte Marktermittlung",
              actionPage: Page.FAHRZEUGBEWERTUNG,
              accent: "border-t-4 border-t-slate-800"
            }
          ].map((service, idx) => (
            <div 
              key={idx} 
              className={`bg-white rounded-lg shadow-sm border border-slate-100 p-5 sm:p-7 flex flex-col justify-between hover:shadow-md hover:-translate-y-0.5 transition-all duration-300 ${service.accent}`}
            >
              <div className="space-y-4">
                <span className="text-xs font-semibold px-2.5 py-1 bg-slate-100 rounded-md text-navy-900 border border-slate-200">
                  {service.bulletLabel}
                </span>
                <h3 className="text-xl font-display font-bold text-navy-950">
                  {service.title}
                </h3>
                <p className="text-slate-500 text-sm leading-relaxed font-sans">
                  {service.desc}
                </p>
              </div>
              <div className="pt-6 border-t border-slate-50 mt-6 md:mt-8">
                <button
                  onClick={() => onNavigate(service.actionPage)}
                  className="inline-flex items-center gap-1.5 text-sm font-bold text-navy-500 hover:text-navy-900 transition-colors group cursor-pointer"
                >
                  <span>Details ansehen</span>
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 3. Why Choose us Section - High Trust Factors */}
      <section className="bg-slate-50 border-y border-slate-100 py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Texts */}
            <div className="lg:col-span-5 space-y-5">
              <span className="text-xs font-bold text-gold-600 uppercase tracking-widest">
                Ihre Sicherheit
              </span>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-display font-extrabold text-navy-950 tracking-tight leading-tight">
                Warum RheinWertGutachten?
              </h2>
              <p className="text-slate-600 text-sm sm:text-base leading-relaxed font-sans">
                Nach einem Autounfall steht man oft unter Schock und weiß nicht, wie man reagieren soll. Die gegnerische Versicherung versucht meist sofort, den Schaden geringzurechnen oder eigene Gutachter zu schicken.
              </p>
              <p className="text-slate-600 text-sm font-sans">
                Als <strong className="text-navy-950 font-semibold">unabhängiger Kfz-Sachverständiger</strong> steht Can Linker voll auf Ihrer Seite. Wir sichern Beweise unabhängig, objektiv und termintreu – für eine 100% faire Regulierung.
              </p>
              
              <div className="pt-4 flex flex-wrap gap-4">
                <a 
                  href="tel:01743169807"
                  className="inline-flex items-center gap-2 text-white bg-navy-950 hover:bg-navy-900 font-bold px-5 py-3 rounded-xl shadow-md transition-all text-sm cursor-pointer"
                >
                  <Phone className="w-4 h-4" />
                  <span>Jetzt anrufen</span>
                </a>
                <button
                  onClick={() => onNavigate(Page.UEBER_MICH)}
                  className="inline-flex items-center gap-2 text-slate-700 bg-white border border-slate-200 hover:bg-slate-50 font-semibold px-5 py-3 rounded-xl transition-all text-sm cursor-pointer"
                >
                  <span>Mehr über Can Linker</span>
                </button>
              </div>
            </div>

            {/* Right Interactive/Visual Bento Grid of Benefits */}
            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6">
              
              {[
                {
                  title: "Schnelle Terminierung",
                  desc: "Nach einem Unfall zählt Flexibilität. Wir vereinbaren oft noch am selben Tag Vor-Ort-Besichtigungen.",
                  icon: <Clock className="w-5 h-5 text-gold-500" />
                },
                {
                  title: "Mobiler Vor-Ort-Service",
                  desc: "Keine Anfahrtskosten. Wir begutachten Ihr Fahrzeug direkt bei Ihnen zu Hause, im Betrieb oder in Ihrer Werkstatt.",
                  icon: <MapPin className="w-5 h-5 text-gold-500" />
                },
                {
                  title: "100% Unabhängig",
                  desc: "Keine Verträge mit Versicherungen. Unsere neutrale Bewertung schützt Sie vor Verlusten bei der Schadenregulierung.",
                  icon: <ShieldCheck className="w-5 h-5 text-gold-500" />
                },
                {
                  title: "Persönliche Betreuung",
                  desc: "Sie sprechen direkt mit dem Inhaber Can Linker – kein Callcenter, keine Warteschleife.",
                  icon: <Award className="w-5 h-5 text-gold-500" />
                },
                {
                  title: "Direkter WhatsApp-Kanal",
                  desc: "Schicken Sie Bilder des Schadens einfach per WhatsApp – wir geben Ihnen eine erste kostenfreie Einschätzung.",
                  icon: <MessageCircle className="w-5 h-5 text-gold-500" />
                },
                {
                  title: "Transparente Abwicklung",
                  desc: "Klare Erläuterungen zu Wertminderung, Nutzungsausfall und Bagatellgrenzen ohne Fachchinesisch.",
                  icon: <Layers className="w-5 h-5 text-gold-500" />
                }
              ].map((benefit, idx) => (
                <div key={idx} className="bg-white border border-slate-200/60 p-5 rounded-xl hover:border-gold-400 transition-colors space-y-2.5">
                  <div className="w-10 h-10 bg-navy-50 rounded-lg flex items-center justify-center">
                    {benefit.icon}
                  </div>
                  <h3 className="font-display font-bold text-navy-950 text-base">{benefit.title}</h3>
                  <p className="text-slate-500 text-xs sm:text-sm font-sans leading-relaxed">{benefit.desc}</p>
                </div>
              ))}

            </div>

          </div>

        </div>
      </section>

      {/* Interactive Damage Cost Calculator Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <InteractiveDamageCalculator onNavigate={onNavigate} />
      </section>

      {/* 4. Process Section (So einfach läuft es ab) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16 select-none">
          <span className="text-xs font-bold text-navy-500 uppercase tracking-widest bg-navy-50 px-3.5 py-1.5 rounded-full inline-block">
            Der Ablauf
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-display font-extrabold text-navy-950 tracking-tight">
            In 4 einfachen Schritten zum Gutachten
          </h2>
          <p className="text-slate-500 text-sm sm:text-base font-sans font-medium">
            So verläuft der Begutachtungsprozess bei uns – schnell, hürdenfrei und komplett transparent.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 lg:gap-7 relative">
          
          {/* Visual line spanning steps on wide desktops */}
          <div className="absolute top-1/4 left-[12%] right-[12%] h-[1px] bg-slate-200 hidden lg:block z-0"></div>

          {[
            {
              step: "01",
              title: "Kontakt aufnehmen",
              desc: "Rufen Sie uns an oder schreiben Sie uns ganz unkompliziert eine WhatsApp-Nachricht mit ersten Angaben.",
              buttonLabel: "Direkter WhatsApp-Zulauf"
            },
            {
              step: "02",
              title: "Termin vereinbaren",
              desc: "Wir vereinbaren extrem kurzfristig einen passenden Termin für die Besichtigung des Unfallfahrzeugs vor Ort bei Ihnen.",
              buttonLabel: "Terminierung meist binnen 24h"
            },
            {
              step: "03",
              title: "Fahrzeug begutachten",
              desc: "Can Linker prüft und dokumentiert den Schaden am Auto detailgenau mit modernsten Mitteln.",
              buttonLabel: "Genauste Schadensevaluierung"
            },
            {
              step: "04",
              title: "Gutachten erhalten",
              desc: "Sie erhalten Ihr verständliches, gerichtsfestes Dokument ausgearbeitet und einsatzbereit übersandt.",
              buttonLabel: "Zusammenstellung & Beratung"
            }
          ].map((item, idx) => (
            <div key={idx} className="bg-white border border-slate-100 p-5 md:p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow relative z-10 space-y-4 flex flex-col justify-between">
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="font-mono text-4xl font-extrabold text-gold-400 opacity-60">{item.step}</span>
                  <span className="dot h-2.5 w-2.5 rounded-full bg-gold-400"></span>
                </div>
                <h3 className="font-display font-bold text-navy-950 text-base sm:text-lg">{item.title}</h3>
                <p className="text-slate-500 text-xs sm:text-sm font-sans leading-relaxed">{item.desc}</p>
              </div>
              <div className="mt-4 pt-3 border-t border-slate-50 text-[10px] font-mono text-slate-400 font-bold tracking-wider uppercase">
                {item.buttonLabel}
              </div>
            </div>
          ))}

        </div>
      </section>

      {/* 5. Service Area Section */}
      <section className="bg-navy-950 rounded-xl md:rounded-2xl mx-4 sm:mx-6 lg:mx-8 px-5 sm:px-6 py-10 md:p-14 text-white relative overflow-hidden">
        
        {/* Lights */}
        <div className="absolute inset-0 bg-[linear-gradient(135deg,#0b1329,#111827)] pointer-events-none"></div>

        <div className="relative z-10 max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          <div className="lg:col-span-6 space-y-5">
            <span className="text-xs font-bold text-gold-400 uppercase tracking-widest">
              Immer in Ihrer Nähe
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-display font-extrabold tracking-tight">
              Ihr Kfz-Gutachter für Essen und Umgebung
            </h2>
            <p className="text-slate-300 text-sm sm:text-base font-sans leading-relaxed">
              RheinWertGutachten ist mobil für Sie im Einsatz. Wir kommen ohne Anfahrtskosten direkt zu Ihnen, um Ihr Kraftfahrzeug professionell zu begutachten – egal ob zu Hause, an Ihrem Arbeitsplatz oder in einer Werkstatt Ihrer Wahl.
            </p>
            <p className="text-slate-400 text-xs sm:text-sm">
              Wir decken alle umliegenden Ballungsräume des Ruhrgebiets umfassend für Sie ab.
            </p>
            <div className="pt-4">
              <button
                onClick={() => onNavigate(Page.EINSATZGEBIET)}
                className="inline-flex items-center gap-2 bg-white text-navy-950 font-bold px-6 py-3 rounded-lg text-sm hover:bg-slate-100 transition-colors cursor-pointer"
              >
                <span>Alle Einsatzgebiete einsehen</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          <div className="lg:col-span-6 grid grid-cols-2 md:grid-cols-3 gap-4">
            {[
              { city: "Essen", path: "Unser Hauptsitz" },
              { city: "Bochum", path: "Nachbarstadt" },
              { city: "Duisburg", path: "Westliches Ruhrgebiet" },
              { city: "Gelsenkirchen", path: "Mittleres Ruhrgebiet" },
              { city: "Oberhausen", path: "Nördliches Ruhrgebiet" },
              { city: "Umgebung", path: "Komplettes Umland" }
            ].map((loc, idx) => (
              <div 
                key={idx} 
                onClick={() => onNavigate(Page.EINSATZGEBIET)}
                className="bg-white/5 border border-white/15 p-4 rounded-xl text-center hover:bg-white/10 hover:border-gold-400 transition-all cursor-pointer group"
              >
                <div className="w-8 h-8 bg-gold-500/10 rounded-full flex items-center justify-center mx-auto mb-2 group-hover:scale-110 transition-transform">
                  <MapPin className="w-4 h-4 text-gold-400" />
                </div>
                <h4 className="font-display font-bold text-sm text-white">{loc.city}</h4>
                <span className="text-[10px] text-slate-400 block mt-0.5 font-sans">{loc.path}</span>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 6. About Section (Short introduction on home page) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Illustration / Profile Frame */}
          <div className="lg:col-span-5 relative group">
            
            {/* Visual Frame styled like a premium car inspection dashboard shadow */}
            <div className="relative z-10 bg-slate-900 aspect-4/3 rounded-xl overflow-hidden shadow-xl border border-slate-800 flex items-center justify-center p-6 sm:p-8 select-none">
              
              {/* Premium abstract schematic layout resembling car inspection lines */}
              <div className="absolute inset-0 opacity-10 bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] bg-[size:25px_25px]"></div>
              
              <div className="relative text-center space-y-4">
                <div className="w-16 h-16 bg-gold-500/20 rounded-full flex items-center justify-center mx-auto border border-gold-500/30">
                  <Award className="w-8 h-8 text-gold-400" />
                </div>
                <div className="space-y-1">
                  <h4 className="text-white font-display font-bold text-lg">Can Linker</h4>
                  <p className="text-gold-400 text-xs font-mono font-bold uppercase tracking-widest">Kfz-Gutachter RheinWert</p>
                </div>
                <div className="inline-block py-1 px-3 bg-navy-500/20 text-blue-300 rounded-full text-[11px] font-mono border border-navy-500/20">
                  Zertifiziert &amp; Unabhängig
                </div>
                <p className="text-slate-400 text-xs max-w-xs font-sans">
                  "Ihre absolute Kundenzufriedenheit und eine rechtssichere Gutachtenerstellung sind meine obersten Leitlinien."
                </p>
              </div>

            </div>

            {/* Glowing borders */}
            <div className="absolute -inset-1 bg-gradient-to-r from-gold-500 to-navy-500 rounded-xl blur-md opacity-20 group-hover:opacity-30 transition-opacity pointer-events-none"></div>

          </div>

          {/* Right Personal Details */}
          <div className="lg:col-span-7 space-y-6">
            <span className="text-xs font-bold text-navy-500 uppercase tracking-widest">
              Ihr Ansprechpartner
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-display font-extrabold text-navy-950 tracking-tight">
              Über RheinWertGutachten
            </h2>
            
            <div className="space-y-4 text-slate-600 text-sm sm:text-base font-sans leading-relaxed">
              <p>
                Als inhabergeführtes Gutachterbüro legt <strong className="text-navy-950 font-semibold">Can Linker</strong> größten Wert auf eine schnelle, transparente und rundum zuverlässige Abwicklung von Fahrzeugschäden. 
              </p>
              <p>
                Der Fokus liegt auf einer persönlichen und verständlichen Begleitung nach einem Verkehrsunfall. Wir erklären Ihnen genau Ihre Rechte, kümmern uns um die unkomplizierte Kommunikation und nehmen Ihnen den lästigen Papierkram im Schadensfall ab.
              </p>
              <p className="font-semibold text-navy-900">
                Unabhängig von großen Versicherungen – wir bewerten immer real und neutral, damit Ihnen kein Geld verloren geht!
              </p>
            </div>

            <div className="pt-2">
              <button
                onClick={() => onNavigate(Page.UEBER_MICH)}
                className="inline-flex items-center gap-2 text-navy-500 hover:text-navy-950 font-bold transition-all group cursor-pointer"
              >
                <span>Ausführlichen Werdegang ansehen</span>
                <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
              </button>
            </div>

          </div>

        </div>
      </section>

      {/* 7. Bottom Contact CTA Section */}
      <section className="bg-slate-50 border-t border-b border-slate-200/50 py-16 md:py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-display font-extrabold text-navy-950 tracking-tight">
            Sie benötigen ein hochwertiges Gutachten?
          </h2>
          <p className="text-slate-600 text-sm sm:text-base font-sans max-w-2xl mx-auto leading-relaxed">
            Kontaktieren Sie RheinWertGutachten direkt telefonisch oder per WhatsApp. Wir begutachten Ihr Kraftfahrzeug schnellstmöglich und stehen Ihnen mit Expertenrat zur Seite.
          </p>

          <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
            <a 
              href="tel:01743169807"
              className="flex items-center justify-center gap-3 w-full sm:w-auto bg-navy-950 hover:bg-navy-900 text-white font-display font-bold text-base px-8 py-4 rounded-xl shadow-md transition-all cursor-pointer"
            >
              <Phone className="w-5 h-5" />
              <span>Jetzt anrufen: 0174 3169807</span>
            </a>
            <a 
              href="https://wa.me/491743169807"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-3 w-full sm:w-auto bg-green-600 hover:bg-green-700 text-white font-display font-bold text-base px-8 py-4 rounded-xl shadow-md transition-all cursor-pointer"
            >
              <MessageCircle className="w-5 h-5 fill-transparent" />
              <span>WhatsApp schreiben</span>
            </a>
            <a 
              href="mailto:info@rheinwert-gutachten.de"
              className="flex items-center justify-center gap-3 w-full sm:w-auto bg-white border border-slate-300 hover:bg-slate-50 text-slate-700 font-display font-semibold text-base px-8 py-4 rounded-xl transition-all cursor-pointer"
            >
              <Mail className="w-5 h-5 text-gold-500" />
              <span>E-Mail senden</span>
            </a>
          </div>

          <p className="text-xs text-slate-400 font-sans mt-3">
            Kostenfreie Beratung bei unverschuldetem Unfall – Wir sind direkt für Sie im Einsatz.
          </p>
        </div>
      </section>

    </div>
  );
};
