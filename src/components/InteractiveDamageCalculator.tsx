/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Car, 
  HelpCircle, 
  Zap, 
  AlertTriangle, 
  Phone, 
  MessageCircle, 
  CheckCircle2, 
  RefreshCw, 
  ArrowRight,
  ShieldCheck,
  Calculator
} from 'lucide-react';
import { Page } from '../types';

interface Hotspot {
  id: string;
  name: string;
  label: string;
  // Percentage coordinates for SVG hover point
  x: number;
  y: number;
  baseCost: number;
}

const VEHICLE_HOTSPOTS: Hotspot[] = [
  { id: 'front', name: 'Front-Stoßstange & Scheinwerfer', label: 'Front', x: 18, y: 55, baseCost: 1200 },
  { id: 'hood', name: 'Motorhaube & Windschutzscheibe', label: 'Motorhaube', x: 32, y: 35, baseCost: 1500 },
  { id: 'side_front', name: 'Kotflügel & Vordertür', label: 'Flanke Vorne', x: 48, y: 50, baseCost: 1800 },
  { id: 'side_rear', name: 'Hintertür & Seitenteil', label: 'Flanke Hinten', x: 68, y: 50, baseCost: 1600 },
  { id: 'rear', name: 'Heck-Stoßstange & Rückleuchten', label: 'Heck', x: 84, y: 48, baseCost: 1400 },
  { id: 'roof', name: 'Dach & Säulen', label: 'Dach', x: 50, y: 22, baseCost: 2200 },
  { id: 'wheels', name: 'Felgen, Reifen & Aufhängung', label: 'Fahrwerk', x: 28, y: 72, baseCost: 950 },
];

interface SelectedDamage {
  hotspotId: string;
  severity: 'scratch' | 'dent' | 'replace'; // Scratch, Dent, Severe
}

export const InteractiveDamageCalculator: React.FC<{ onNavigate: (page: Page) => void }> = ({ onNavigate }) => {
  const [selectedDamages, setSelectedDamages] = useState<Record<string, SelectedDamage>>({});
  const [activeHotspot, setActiveHotspot] = useState<string | null>(null);
  const [isSelfFault, setIsSelfFault] = useState<boolean | null>(null);
  const [carType, setCarType] = useState<'compact' | 'limousine' | 'suv'>('limousine');

  // Multiplier based on car type
  const typeMultiplier = {
    compact: 0.85,
    limousine: 1.0,
    suv: 1.25,
  }[carType];

  // Severity multipliers and label
  const severityConfig = {
    scratch: { label: 'Kratzer / Lackschaden', mult: 0.35 },
    dent: { label: 'Delle / Beule (Ausbeulen nötig)', mult: 0.70 },
    replace: { label: 'Riss / Verformung (Austausch nötig)', mult: 1.50 },
  };

  const handleSelectSeverity = (hotspotId: string, severity: 'scratch' | 'dent' | 'replace' | null) => {
    if (!severity) {
      const updated = { ...selectedDamages };
      delete updated[hotspotId];
      setSelectedDamages(updated);
    } else {
      setSelectedDamages({
        ...selectedDamages,
        [hotspotId]: { hotspotId, severity }
      });
    }
  };

  const clearAll = () => {
    setSelectedDamages({});
    setActiveHotspot(null);
    setIsSelfFault(null);
  };

  // Calculations
  const damagesArray = Object.values(selectedDamages) as SelectedDamage[];
  const calculatedSum = damagesArray.reduce((sum, dmg) => {
    const spot = VEHICLE_HOTSPOTS.find(h => h.id === dmg.hotspotId);
    if (!spot) return sum;
    const base = spot.baseCost;
    const sevMult = severityConfig[dmg.severity].mult;
    return sum + (base * sevMult * typeMultiplier);
  }, 0);

  const roundedSum = Math.round(calculatedSum);

  // Generate WhatsApp message based on selections
  const getWhatsAppMessage = () => {
    const list = damagesArray
      .map(dmg => {
        const name = VEHICLE_HOTSPOTS.find(h => h.id === dmg.hotspotId)?.name;
        const sev = severityConfig[dmg.severity].label;
        return `- ${name} (${sev})`;
      })
      .join('%0A');

    const faultText = isSelfFault === false 
      ? 'Unverschuldeter Unfall (Haftpflicht)' 
      : isSelfFault === true 
        ? 'Eigenschaden / Kaskofall' 
        : 'Schadensfall';

    const msg = `Hallo RheinWertGutachten, ich habe mein Fahrzeug online analysiert.%0AFahrzeugtyp: ${carType.toUpperCase()}%0ASchadenstyp: ${faultText}%0ABetroffene Bereiche:%00A${list}%0AGeschätzte Kosten: ca. ${roundedSum} €.%0ABitte kontaktieren Sie mich zwecks Terminvereinbarung!`;
    return `https://wa.me/491743169807?text=${msg}`;
  };

  return (
    <section className="bg-navy-950 text-white rounded-xl md:rounded-2xl border border-navy-800 p-4 sm:p-6 md:p-10 shadow-xl relative overflow-hidden select-none">
      
      {/* Visual Ambient Lights */}
      <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(255,255,255,0.035),transparent_45%)] pointer-events-none"></div>

      <div className="relative z-10 space-y-8">
        
        {/* Header Block */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-5 pb-5 md:pb-6 border-b border-navy-800">
          <div className="space-y-2">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-gold-500/10 border border-gold-500/20 text-gold-400 rounded-full text-xs font-semibold tracking-wider uppercase">
              <Zap className="w-3.5 h-3.5" />
              <span>Smartes Interaktives Tool</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-display font-extrabold tracking-tight">
              Direkt-Schadenschätzer &amp; Rechner
            </h2>
            <p className="text-sm text-slate-400 font-sans max-w-xl">
              Klicken Sie auf die betroffenen Fahrzeugteile im Chassis, um eine unmittelbare Aufwandskalkulation und gesetzliche Beratung zu erhalten.
            </p>
          </div>
          
          {/* Controls Bar */}
          <div className="flex flex-col sm:flex-row gap-3 sm:items-center">
            
            {/* Vehicle Type Selector */}
            <div className="grid grid-cols-3 bg-navy-900 border border-navy-800 rounded-lg p-1">
              {(['compact', 'limousine', 'suv'] as const).map(type => (
                <button
                  key={type}
                  onClick={() => setCarType(type)}
                  className={`px-2.5 py-2 rounded-md text-xs font-semibold uppercase transition-colors cursor-pointer ${
                    carType === type 
                      ? 'bg-gold-500 text-navy-950 shadow-md' 
                      : 'text-slate-400 hover:text-white'
                  }`}
                >
                  {type === 'compact' ? 'Kompakt' : type === 'limousine' ? 'Limousine' : 'SUV'}
                </button>
              ))}
            </div>

            {Object.keys(selectedDamages).length > 0 && (
              <button
                onClick={clearAll}
                className="flex items-center justify-center gap-1.5 px-3 py-2 bg-navy-900 hover:bg-navy-800 border border-navy-800 rounded-lg text-xs text-slate-300 hover:text-white transition-colors cursor-pointer"
              >
                <RefreshCw className="w-3.5 h-3.5" />
                <span>Zurücksetzen</span>
              </button>
            )}
          </div>
        </div>

        {/* Inner Grid Area */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch">
          
          {/* 1. Left visual Car Hotspot Mapping Column */}
          <div className="lg:col-span-7 flex flex-col justify-between space-y-5 bg-navy-900/40 rounded-lg border border-navy-900 p-4 md:p-6 relative min-h-[300px] sm:min-h-[380px]">
            <span className="absolute top-4 left-4 text-[10px] font-mono text-slate-500 tracking-wider">
              [ SCHEMA: SEITENANSICHT PKW ]
            </span>

            {/* Simulated Chassis Image/Vector */}
            <div className="relative w-full aspect-21/9 my-auto flex items-center justify-center">
              
              {/* Sleek SVG Car outline */}
              <svg 
                viewBox="0 0 1000 380" 
                className="w-full h-auto text-slate-700 select-none pointer-events-none drop-shadow-[0_10px_35px_rgba(37,99,235,0.06)]"
                fill="none" 
                stroke="currentColor" 
                strokeWidth="2.5"
              >
                {/* Wheels */}
                <circle cx="280" cy="275" r="55" className="text-slate-800" fill="#0c111d" strokeWidth="4" />
                <circle cx="280" cy="275" r="30" className="text-slate-600" />
                <circle cx="780" cy="275" r="55" className="text-slate-800" fill="#0c111d" strokeWidth="4" />
                <circle cx="780" cy="275" r="30" className="text-slate-600" strokeWidth="3" />
                
                {/* Under/Ground glow */}
                <path d="M 120 330 Q 500 350 880 330" stroke="rgba(223,186,115,0.15)" strokeWidth="6" />

                {/* Car frame */}
                <path 
                  d="M 110 275 
                     L 100 240 
                     Q 105 200 130 185 
                     Q 150 180 200 178
                     L 310 120 
                     Q 340 100 395 100 
                     L 610 100 
                     Q 680 102 720 128 
                     L 820 170
                     Q 870 175 885 195
                     Q 900 215 895 245
                     L 888 275
                     L 835 275
                     Q 835 210 780 210
                     Q 725 210 725 275
                     L 335 275
                     Q 335 210 280 210
                     Q 225 210 225 275
                     Z" 
                  className="transition-colors duration-300"
                  fill="rgba(15, 23, 42, 0.45)" 
                  stroke={Object.keys(selectedDamages).length > 0 ? 'var(--color-gold-400)' : 'var(--color-navy-800)'} 
                />

                {/* Windshield & Windows */}
                <path d="M 330 135 L 430 115 L 430 175 L 315 175 Z" stroke="var(--color-navy-800)" strokeWidth="1.5" fill="rgba(37,99,235,0.05)" />
                <path d="M 445 115 L 545 115 L 535 175 L 445 175 Z" stroke="var(--color-navy-800)" strokeWidth="1.5" fill="rgba(37,99,235,0.05)" />
                <path d="M 560 115 L 640 123 L 620 175 L 570 175 Z" stroke="var(--color-navy-800)" strokeWidth="1.5" fill="rgba(37,99,235,0.05)" />
                
                {/* Character line & details */}
                <path d="M 150 190 Q 500 185 860 200" stroke="var(--color-navy-800)" strokeWidth="1.5" />
                <path d="M 430 115 L 430 270" stroke="var(--color-navy-800)" strokeWidth="1.5" />
                <path d="M 550 115 L 550 270" stroke="var(--color-navy-800)" strokeWidth="1.5" />
                <path d="M 100 240 L 225 245" stroke="var(--color-navy-800)" strokeWidth="1" />
                <path d="M 850 210 L 888 230" stroke="var(--color-navy-800)" strokeWidth="1" />

              </svg>

              {/* Dynamic Coordinate Hotspot Knobs */}
              {VEHICLE_HOTSPOTS.map((hotspot) => {
                const isSelected = !!selectedDamages[hotspot.id];
                const isActive = activeHotspot === hotspot.id;
                
                return (
                  <button
                    key={hotspot.id}
                    onClick={() => setActiveHotspot(hotspot.id)}
                    onMouseEnter={() => setActiveHotspot(hotspot.id)}
                    style={{ left: `${hotspot.x}%`, top: `${hotspot.y}%` }}
                    className="absolute -translate-x-1/2 -translate-y-1/2 group/knob cursor-pointer z-20 focus:outline-hidden"
                  >
                    {/* Ripple Glow circle */}
                    <span className={`absolute inset-full w-10 h-10 -translate-x-1/2 -translate-y-1/2 rounded-full pointer-events-none transition-all duration-300 ${
                      isSelected 
                        ? 'bg-gold-500/20 scale-125 animate-ping' 
                        : isActive 
                          ? 'bg-blue-500/20 scale-110' 
                          : 'bg-white/5 group-hover/knob:scale-110'
                    }`}></span>

                    {/* Inner Knob Point */}
                    <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center transition-all ${
                      isSelected 
                        ? 'bg-gold-400 border-white shadow-lg shadow-gold-500/50 scale-125' 
                        : isActive 
                          ? 'bg-blue-500 border-white scale-125' 
                          : 'bg-navy-950 border-slate-500 group-hover/knob:border-white'
                    }`}>
                      {isSelected ? (
                        <span className="w-1.5 h-1.5 bg-navy-950 rounded-full"></span>
                      ) : (
                        <span className="w-1 h-1 bg-slate-400 group-hover/knob:bg-white rounded-full"></span>
                      )}
                    </div>

                    {/* Desktop Tooltip Layer labels */}
                    <span className={`absolute top-full mt-2 left-1/2 -translate-x-1/2 whitespace-nowrap text-[10px] tracking-wide font-display font-medium px-2 py-0.5 rounded-md transition-all border ${
                      isSelected 
                        ? 'bg-gold-500/10 text-gold-400 border-gold-500/30' 
                        : isActive 
                          ? 'bg-blue-500/10 text-blue-400 border-blue-500/30' 
                          : 'opacity-0 scale-95 group-hover/knob:opacity-100 group-hover/knob:scale-100 bg-navy-900 text-slate-300 border-navy-800'
                    }`}>
                      {hotspot.label}
                    </span>
                  </button>
                );
              })}
            </div>

            {/* Mobile Hotspot Select Grid helper */}
            <div className="space-y-2 select-none">
              <span className="text-[10px] font-bold text-slate-500 uppercase tracking-widest block">Schnellauswahl für Kleingeräte:</span>
              <div className="flex flex-wrap gap-1.5">
                {VEHICLE_HOTSPOTS.map((hotspot) => {
                  const isSelected = !!selectedDamages[hotspot.id];
                  const isActive = activeHotspot === hotspot.id;
                  return (
                    <button
                      key={hotspot.id}
                      onClick={() => setActiveHotspot(hotspot.id)}
                      className={`text-[11px] px-2.5 py-1.5 rounded-lg border font-medium transition-colors cursor-pointer ${
                        isSelected
                          ? 'bg-gold-500/10 text-gold-400 border-gold-400/40'
                          : isActive 
                            ? 'bg-blue-500/10 text-blue-400 border-blue-400/40'
                            : 'bg-navy-900 text-slate-400 border-navy-850 hover:bg-navy-850'
                      }`}
                    >
                      {hotspot.label}
                    </button>
                  );
                })}
              </div>
            </div>
          </div>

          {/* 2. Right Interactive Control Panel and Logic */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-6">
            
            {/* Active Area configuration options card */}
            <div className="bg-navy-900 border border-navy-800 p-4 sm:p-5 rounded-lg relative">
              <AnimatePresence mode="wait">
                {activeHotspot ? (
                  <motion.div
                    key={activeHotspot}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="space-y-4"
                  >
                    {/* Hotspot Title */}
                    <div className="flex items-center justify-between border-b border-navy-800 pb-3">
                      <div>
                        <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block">Ausgewählter Bereich</span>
                        <h4 className="font-display font-bold text-base text-white">
                          {VEHICLE_HOTSPOTS.find(h => h.id === activeHotspot)?.name}
                        </h4>
                      </div>
                      <button 
                        onClick={() => setActiveHotspot(null)}
                        className="text-xs text-slate-500 hover:text-white"
                      >
                        Schließen
                      </button>
                    </div>

                    {/* Damage Severity selector list */}
                    <div className="space-y-2.5">
                      <span className="text-xs font-semibold text-slate-400 block">Art der Beschädigung auswählen:</span>
                      
                      {([
                        { id: 'scratch', label: 'Kratzer / Lackkratzer', desc: 'Nur oberflächliche Kratzer, Lackierung oder Polieren reicht.' },
                        { id: 'dent', label: 'Delle / Karosseriebeule', desc: 'Eindrückung ohne Lackplatzer, Ausbeultechnik einsetzbar.' },
                        { id: 'replace', label: 'Riss / Tiefschaden', desc: 'Karosseriebruch oder Verzug, Bauteilaustausch & Lack nötig.' }
                      ] as const).map((sev) => {
                        const isChosen = selectedDamages[activeHotspot]?.severity === sev.id;
                        return (
                          <button
                            key={sev.id}
                            type="button"
                            onClick={() => handleSelectSeverity(activeHotspot, isChosen ? null : sev.id)}
                            className={`w-full text-left p-3 rounded-xl border transition-all text-xs flex flex-col gap-1 cursor-pointer ${
                              isChosen
                                ? 'bg-gold-500 text-navy-950 border-white'
                                : 'bg-navy-950 border-navy-800 hover:border-slate-700 text-slate-300'
                            }`}
                          >
                            <span className="font-bold flex items-center justify-between">
                              <span>{sev.label}</span>
                              {isChosen && <CheckCircle2 className="w-3.5 h-3.5 text-navy-950 flex-shrink-0" />}
                            </span>
                            <span className={`text-[10px] ${isChosen ? 'text-navy-950/80 font-medium' : 'text-slate-500'}`}>
                              {sev.desc}
                            </span>
                          </button>
                        );
                      })}
                    </div>
                  </motion.div>
                ) : (
                  <motion.div
                    key="selector-prompt"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="py-12 text-center text-slate-400 space-y-3"
                  >
                    <Car className="w-10 h-10 text-gold-500 mx-auto opacity-50 animate-subtle-pulse" />
                    <div>
                      <h4 className="font-display font-medium text-sm text-slate-200">Kein Bauteil ausgewählt</h4>
                      <p className="text-xs text-slate-500 max-w-xs mx-auto mt-1">
                        Klicken Sie auf ein Bauteil der interaktiven PKW-Grafik links, um den Schaden zu definieren.
                      </p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Questions to evaluate if it is Liability (Haftpflicht) */}
            <div className="bg-navy-905 border border-navy-800 p-4 sm:p-5 rounded-lg space-y-4">
              <span className="text-xs font-bold text-slate-400 block pb-1 border-b border-navy-800/60">
                100% Kostenfreie Abwicklung prüfen?
              </span>
              
              <div className="space-y-2">
                <span className="text-xs text-slate-300 block leading-relaxed">
                  Sind Sie unverschuldet in den Unfall geraten (Fremdverschulden)?
                </span>
                <div className="grid grid-cols-2 gap-3">
                  <button 
                    onClick={() => setIsSelfFault(false)}
                    className={`py-2 px-3 border rounded-xl text-xs font-bold transition-all cursor-pointer ${
                      isSelfFault === false
                        ? 'bg-green-500 text-navy-950 border-white shadow-md'
                        : 'bg-navy-950 text-slate-400 border-navy-800 hover:text-white'
                    }`}
                  >
                    Nein, Fremdverschulden!
                  </button>
                  <button 
                    onClick={() => setIsSelfFault(true)}
                    className={`py-2 px-3 border rounded-xl text-xs font-bold transition-all cursor-pointer ${
                      isSelfFault === true
                        ? 'bg-red-500/20 text-red-200 border-red-500/40 shadow-sm'
                        : 'bg-navy-950 text-slate-400 border-navy-800 hover:text-white'
                    }`}
                  >
                    Ja, Eigenschaden
                  </button>
                </div>
              </div>
            </div>

            {/* Live Calculated Output Result Display */}
            <div className="bg-gradient-to-br from-navy-900 to-black border border-gold-500/20 p-4 sm:p-5 rounded-lg flex flex-col justify-between space-y-4 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-24 h-24 bg-gold-500/5 rounded-full blur-2xl pointer-events-none"></div>
              
              <div className="flex justify-between items-start">
                <div className="space-y-0.5">
                  <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest block">Geschätzter Reparaturaufwand *</span>
                  <span className="text-xs font-serif text-gold-400 italic font-medium">Beweissicherung empfohlen</span>
                </div>
                <Calculator className="w-5 h-5 text-gold-400" />
              </div>

              {/* Dynamic Number animation */}
              <div className="space-y-1">
                <div className="text-4xl sm:text-5xl font-display font-extrabold tracking-tight text-white flex items-baseline gap-1">
                  {Object.keys(selectedDamages).length > 0 ? (
                    <motion.span
                      initial={{ scale: 0.95 }}
                      animate={{ scale: [0.95, 1.05, 1] }}
                      transition={{ duration: 0.3 }}
                      className="text-gold-500"
                    >
                      ~ {roundedSum.toLocaleString('de-DE')}
                    </motion.span>
                  ) : (
                    <span className="text-slate-600">0</span>
                  )}
                  <span className="text-2xl text-slate-300 font-bold">€</span>
                </div>
                <span className="text-[10px] text-slate-500 font-sans block leading-none">
                  *Unverbindlicher Schätzwert inkl. NRW-Marktdurchschnitt f. Lackierung.
                </span>
              </div>

              {/* Legal Warning or Good News Box */}
              {Object.keys(selectedDamages).length > 0 && (
                <div className="text-xs leading-relaxed font-sans mt-3 pt-3 border-t border-navy-800/60 transition-all">
                  {isSelfFault === false ? (
                    <div className="text-green-400 flex gap-2">
                      <ShieldCheck className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                      <div>
                        <strong>Kostenlos für Sie!</strong> Da kein Eigenverschulden vorliegt, muss die gegnerische Versicherung unser vollumfängliches Gutachten zu 100% bezahlen. Beanspruchen Sie Ihr freies Recht!
                      </div>
                    </div>
                  ) : isSelfFault === true ? (
                    <div className="text-orange-400 flex gap-2">
                      <AlertTriangle className="w-5 h-5 text-orange-400 flex-shrink-0 mt-0.5" />
                      <div>
                        <strong>Kaskoschaden:</strong> Reichen Sie den Schaden bei Ihrer Kaskoversicherung ein. Wir beraten Sie gern unabhängig zur optimalen Begutachtungsoption.
                      </div>
                    </div>
                  ) : (
                    <div className="text-slate-300 flex gap-1.5 items-start">
                      <HelpCircle className="w-4 h-4 text-gold-500 flex-shrink-0 mt-0.5" />
                      <span>Haben Sie einen Unfallgegner? Falls ja, erstellen wir Ihr Gutachten völlig kostenfrei für Sie (Abrechnung direkt mit der Versicherung).</span>
                    </div>
                  )}
                </div>
              )}

              {/* Calls To Action inside calculator */}
              {Object.keys(selectedDamages).length > 0 && (
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                  <a
                    href={getWhatsAppMessage()}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex justify-center items-center gap-2 py-3 px-4 bg-green-500 hover:bg-green-600 text-navy-950 font-bold rounded-xl text-xs transition-colors"
                  >
                    <MessageCircle className="w-4 h-4 fill-transparent text-navy-950" />
                    <span>Per WhatsApp senden</span>
                  </a>
                  <button
                    onClick={() => onNavigate(Page.KONTAKT)}
                    className="flex justify-center items-center gap-2 py-3 px-4 bg-navy-800 hover:bg-navy-700 border border-navy-700 text-white font-bold rounded-xl text-xs transition-colors cursor-pointer"
                  >
                    <span>Termin buchen</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              )}

            </div>

          </div>

        </div>

      </div>

    </section>
  );
};
