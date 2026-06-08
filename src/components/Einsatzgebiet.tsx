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
  MapPin, 
  ShieldCheck, 
  Car,
  AlertTriangle,
  ArrowRight
} from 'lucide-react';

interface EinsatzgebietProps {
  onNavigate: (page: Page) => void;
}

export const Einsatzgebiet: React.FC<EinsatzgebietProps> = ({ onNavigate }) => {
  const cities = [
    {
      id: "essen",
      name: "Essen",
      desc: "Als Ihr primärer Kfz Gutachter in Essen sind wir direkt vor Ort verwurzelt. Wir sind in sämtlichen Stadtteilen wie Rüttenscheid, Altenessen, Steele, Borbeck oder Werden blitzschnell verfügbar. Ob Unfallschaden auf der A40, A52 oder direkt im Stadtbereich – Can Linker ist Ihr greifbarer Partner für Unfallgutachten direkt vor Ihrer Haustür."
    },
    {
      id: "bochum",
      name: "Bochum",
      desc: "Auch in der Nachbarstadt Bochum (Wattenscheid, Werne, Dahlhausen, Querenburg) sind wir regelmäßig für Sie im Einsatz. Wir begutachten Ihren Pkw, Lkw oder Ihr Kraftrad direkt vor Ort bei Ihnen zu Hause, an Ihrer Arbeitsstelle oder in Ihrer Kfz-Werkstatt – absolut kostenfrei in puncto Anfahrt."
    },
    {
      id: "duisburg",
      name: "Duisburg",
      desc: "Unsere Sachverständigen-Dienstleistungen erstrecken sich selbstverständlich auch nach Duisburg. Wir erfassen Unfallschäden kompetent im gesamten Stadtgebiet – von Hamborn im Norden bis Buchholz im Süden. Erstklassige Schadengutachten und professionelle Beweissicherung direkt vor Ort."
    },
    {
      id: "gelsenkirchen",
      name: "Gelsenkirchen",
      desc: "Wir unterstützen Kunden in Gelsenkirchen (Buer, Erle, Feldmark) zuverlässig bei der Ermittlung von Schadensersatzansprüchen nach Verkehrsunfällen. Unabhängig von gegnerischen Versicherungen kämpfen wir für die vollständige Dokumentation Ihrer Schadenshöhe."
    },
    {
      id: "oberhausen",
      name: "Oberhausen",
      desc: "In Oberhausen (Sterkrade, Osterfeld, Alt-Oberhausen) steht Ihnen unser Vor-Ort-Dienst ebenfalls zur freien Verfügung. Wir begutachten Ihr Fahrzeug fachgerecht auf Schäden jeglicher Art – schnell, gewissenhaft und absolut rechtssicher."
    },
    {
      id: "umgebung",
      name: "Weitere Umgebung",
      desc: "Über die fünf Kerngebiete hinaus betreuen wir auch angrenzende Städte im Ruhrgebiet und am Niederrhein wie Mülheim an der Ruhr, Bottrop, Gladbeck, Herne, Velbert und Hattingen. Kontaktieren Sie uns einfach – wir finden garantiert eine schnelle Lösung ohne Anfahrtsaufwand!"
    }
  ];

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
            <span className="text-gold-400 font-semibold">Einsatzgebiete</span>
          </div>

          <div className="max-w-3xl space-y-5">
            <span className="px-3.5 py-1.5 bg-gold-500/10 border border-gold-500/20 text-gold-400 text-xs font-bold uppercase tracking-widest rounded-full inline-block">
              Mobiler Vor-Ort-Service • Keine Anfahrtsgebühren
            </span>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-display font-extrabold tracking-tight leading-tight">
              Ihr mobiler Kfz Gutachter in Essen &amp; Umgebung
            </h1>
            <p className="text-slate-300 text-base sm:text-lg font-sans max-w-2xl leading-relaxed">
              Wir sind im gesamten Ruhrgebiet für Sie unterwegs. Für Besichtigungen berechnen wir keinerlei Anfahrtskosten. Wir kommen dorthin, wo Ihr Fahrzeug gerade steht.
            </p>
          </div>

        </div>
      </section>

      {/* 2. Map Intro and Core Info */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        <div className="bg-white border border-slate-100 p-6 sm:p-8 rounded-3xl shadow-xs grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="space-y-4">
            <h2 className="text-2xl font-display font-extrabold text-navy-950">
              Kostenlose Besichtigung direkt bei Ihnen
            </h2>
            <div className="text-slate-600 text-sm sm:text-base font-sans leading-relaxed space-y-3">
              <p>
                Nach einem Verkehrsunfall ist Ihr Auto oft nicht mehr fahrbereit oder verkehrssicher. Ein Transport in eine weit entfernte Werkstatt verursacht zusätzliche Kopfschmerzen.
              </p>
              <p>
                <strong className="text-navy-950">RheinWertGutachten löst dieses Problem:</strong> Wir sind vollkommen mobil. Can Linker kommt direkt zu Ihrem Wohnort, Ihrem Arbeitsplatz oder in Ihre Wunschwerkstatt in Essen und allen Ruhrgebietsstädten.
              </p>
            </div>
            
            <div className="flex gap-4 pt-2">
              <a 
                href="tel:01743169807"
                className="inline-flex items-center gap-2 text-white bg-navy-950 hover:bg-navy-900 font-bold px-5 py-3 rounded-lg text-sm transition-all cursor-pointer"
              >
                <span>Jetzt anrufen: 0174 3169807</span>
              </a>
            </div>
          </div>

          <div className="bg-slate-50 border border-slate-200 p-6 rounded-2xl space-y-4 flex flex-col justify-center select-none">
            <h3 className="font-display font-bold text-navy-950 text-base flex items-center gap-2">
              <ShieldCheck className="w-5 h-5 text-gold-500" />
              <span>Garantierter Vor-Ort-Vorteil</span>
            </h3>
            <ul className="space-y-2.5 font-sans text-xs sm:text-sm text-slate-600">
              <li>✓ Keine Anfahrtskosten im gesamten Ruhrgebiet</li>
              <li>✓ Flexibler Termin nach Absprache (auch Abends/Wochenende)</li>
              <li>✓ Schadensbesichtigung in nur ca. 20-30 Minuten</li>
              <li>✓ Unabhängige &amp; neutrale Beurteilung auf Augenhöhe</li>
            </ul>
          </div>
        </div>

        {/* Tailored City Layout */}
        <div className="space-y-8 select-none">
          <div className="text-center max-w-xl mx-auto">
            <h3 className="font-display font-extrabold text-xl sm:text-2xl text-navy-950">
              Unsere Kern-Einsatzorte im Ruhrgebiet
            </h3>
            <p className="text-slate-500 text-xs sm:text-sm font-sans mt-1">
              Finden Sie Ihr Einsatzgebiet und kontaktieren Sie uns direkt für schnellste Erreichbarkeit.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {cities.map((city) => (
              <div 
                key={city.id} 
                className="bg-white border border-slate-200/75 p-6 rounded-2xl shadow-2xs hover:shadow-md transition-shadow flex flex-col justify-between"
              >
                <div className="space-y-4">
                  <div className="flex items-center gap-2 pb-2 border-b border-slate-100">
                    <MapPin className="w-5 h-5 text-gold-500" />
                    <h4 className="font-display font-extrabold text-navy-950 text-lg">{city.name}</h4>
                  </div>
                  <p className="text-slate-600 text-xs sm:text-sm font-sans leading-relaxed">
                    {city.desc}
                  </p>
                </div>
                
                <div className="pt-6 mt-4 border-t border-slate-50 flex flex-wrap items-center justify-between gap-4">
                  <a 
                    href="tel:01743169807"
                    className="text-xs font-bold text-navy-900 hover:text-gold-600 inline-flex items-center gap-1 cursor-pointer"
                  >
                    <Phone className="w-3.5 h-3.5" />
                    <span>0174 3169807</span>
                  </a>
                  <a 
                    href="https://wa.me/491743169807"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs font-semibold text-green-600 hover:text-green-700 inline-flex items-center gap-1 cursor-pointer"
                  >
                    <MessageCircle className="w-3.5 h-3.5 fill-transparent" />
                    <span>WhatsApp</span>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>

      </section>

      {/* 3. Bottom call out */}
      <section className="bg-navy-950 rounded-2xl mx-4 sm:mx-6 lg:mx-8 py-12 px-6 text-white text-center space-y-5 relative overflow-hidden">
        <h3 className="font-display font-extrabold text-lg sm:text-xl md:text-2xl">Sie sind sich unsicher, ob wir in Ihre Stadt kommen?</h3>
        <p className="text-slate-300 text-xs sm:text-sm max-w-lg mx-auto font-sans leading-relaxed">
          Rufen Sie uns unkompliziert an oder schreiben Sie eine Nachricht. Wir decken nahezu das gesamte Ruhrgebiet sowie die angrenzenden Kreise kostenfrei ab.
        </p>
        <div className="pt-2">
          <a 
            href="tel:01743169807"
            className="inline-flex items-center gap-2 bg-gold-400 hover:bg-gold-500 text-navy-950 font-bold px-6 py-3.5 rounded-xl text-sm transition-all shadow-md cursor-pointer"
          >
            <Phone className="w-4 h-4" />
            <span>Jetzt Verfügbarkeit prüfen: 0174 3169807</span>
          </a>
        </div>
      </section>

    </div>
  );
};
