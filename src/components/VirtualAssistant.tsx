/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  MessageSquare, 
  X, 
  Phone, 
  MessageCircle, 
  Shield, 
  ChevronRight, 
  Sparkles,
  Award,
  Clock,
  ExternalLink
} from 'lucide-react';
import { Page } from '../types';

interface AssistantStep {
  id: string;
  text: string;
  speaker: 'agent' | 'user';
  options?: { label: string; nextId: string; whatsappTrigger?: string }[];
}

export const VirtualAssistant: React.FC<{ onNavigate: (page: Page) => void }> = ({ onNavigate }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [currentStepId, setCurrentStepId] = useState('welcome');
  const [chatHistory, setChatHistory] = useState<AssistantStep[]>([
    {
      id: 'welcome',
      text: 'Hallo! Ich bin Ihr digitaler Erst-Assistent für RheinWertGutachten. Wie kann ich Ihnen bei Ihrem Kfz-Schaden oder Wertgutachten jetzt helfen?',
      speaker: 'agent',
      options: [
        { label: 'Unfall mit Fremdschuld (Haftpflicht)', nextId: 'fremdschuld' },
        { label: 'Unfall selbst verschuldet (Kasko)', nextId: 'eigenunfall' },
        { label: 'Fahrzeugwert ermitteln', nextId: 'fahrzeugwert' },
        { label: 'Generelle Frage zu Kosten', nextId: 'kosten_allgemein' }
      ]
    }
  ]);

  const handleOptionClick = (option: { label: string; nextId: string; whatsappTrigger?: string }) => {
    // Add user reply to chat
    const userReply: AssistantStep = {
      id: `user_${Date.now()}`,
      text: option.label,
      speaker: 'user'
    };

    let agentResponseText = '';
    let agentOptions: { label: string; nextId: string; whatsappTrigger?: string }[] = [];

    // Simple state machine for automated interactive guide
    switch (option.nextId) {
      case 'fremdschuld':
        agentResponseText = 'Sehr wichtige Info: Bei Fremdschuld haben Sie das gesetzliche Recht auf einen freien, unabhängigen Kfz-Gutachter. Die gegnerische Versicherung muss die kompletten Gutachterkosten zu 100% übernehmen. Für Sie ist unser Service also komplett kostenlos! Sollen wir einen schnellen Vor-Ort-Termin vereinbaren?';
        agentOptions = [
          { label: 'Ja, Termin buchen', nextId: 'book_appointment' },
          { label: 'Fotos direkt per WhatsApp schicken', nextId: 'whatsapp_send', whatsappTrigger: 'Unfallschaden Fremdschuld' },
          { label: 'Zurück zum Start', nextId: 'welcome' }
        ];
        break;
      case 'eigenunfall':
        agentResponseText = 'Bei einem selbst verschuldeten Unfall oder reinen Kaskofall regelt das meist die eigene Kasko-Versicherung. Wir können den Schaden trotzdem unabhängig aufnehmen, um Beweise zu sichern oder Sie bei Schadenskürzungen zu beraten. Was möchten Sie tun?';
        agentOptions = [
          { label: 'WhatsApp-Kontakt aufnehmen', nextId: 'whatsapp_send', whatsappTrigger: 'Kaskoschaden Beratung' },
          { label: 'Telefonische Erstberatung', nextId: 'call_now' },
          { label: 'Zurück zum Start', nextId: 'welcome' }
        ];
        break;
      case 'fahrzeugwert':
        agentResponseText = 'Gerne! Wir schätzen den exakten Marktwert Ihres Fahrzeugs für den Verkauf, Versicherungseinstufungen, Leasingrückgaben oder Oldtimerbewertungen. Wann benötigen Sie die Bewertung?';
        agentOptions = [
          { label: 'Kurzfristig (Termin vereinbaren)', nextId: 'book_appointment' },
          { label: 'Angebot einholen per WhatsApp', nextId: 'whatsapp_send', whatsappTrigger: 'Fahrzeugbewertung Angebot' },
          { label: 'Zurück zum Start', nextId: 'welcome' }
        ];
        break;
      case 'kosten_allgemein':
        agentResponseText = 'Gutachterkosten richten sich generell nach der Schadenhöhe. Aber Achtung: Liegt ein Fremdverschulden vor, zahlen Sie absolut 0 € – das übernimmt die Versicherung des Verursachers. Möchten Sie wissen, ob Ihr Schaden über der Freigrenze liegt?';
        agentOptions = [
          { label: 'Ja, Schaden schätzen lassen', nextId: 'whatsapp_send', whatsappTrigger: 'Kostenanfrage' },
          { label: 'Direkt anrufen', nextId: 'call_now' },
          { label: 'Zurück zum Start', nextId: 'welcome' }
        ];
        break;
      case 'book_appointment':
        agentResponseText = 'Ausgezeichnet! Ich leite Sie direkt zu unserem Kontaktformular weiter. Oder rufen Sie uns direkt an f. Express-Terminierung.';
        agentOptions = [
          { label: 'Zum Kontaktformular', nextId: 'page_kontakt' },
          { label: '0174 3169807 anrufen', nextId: 'call_now' },
          { label: 'Hauptmenü', nextId: 'welcome' }
        ];
        break;
      case 'whatsapp_send':
        agentResponseText = 'WhatsApp öffnet sich jetzt. Schicken Sie Can Linker einfach eine private Nachricht oder direkt Fotos des Schadens für die Express-Einschätzung!';
        agentOptions = [
          { label: 'Zurück zum Start', nextId: 'welcome' }
        ];
        // Trigger window open in appropriate environment safely
        setTimeout(() => {
          const trigger = option.whatsappTrigger || 'Schadensfall';
          window.open(`https://wa.me/491743169807?text=Hallo%20RheinWertGutachten!%20Ich%20habe%20eine%20Anfrage%20zu:%20${encodeURIComponent(trigger)}`, '_blank');
        }, 1200);
        break;
      case 'call_now':
        agentResponseText = 'Telefonnummer wird vorbereitet. Sie sprechen direkt mit Inhaber Can Linker – 24/7 unkompliziert erreichbar!';
        agentOptions = [
          { label: 'Zurück zum Start', nextId: 'welcome' }
        ];
        setTimeout(() => {
          window.location.href = 'tel:01743169807';
        }, 1200);
        break;
      case 'page_kontakt':
        agentResponseText = 'Ich navigiere Sie jetzt zum Formular.';
        agentOptions = [
          { label: 'Zurück zum Start', nextId: 'welcome' }
        ];
        setTimeout(() => {
          onNavigate(Page.KONTAKT);
        }, 1200);
        break;
      case 'welcome':
      default:
        agentResponseText = 'Willkommen zurück! Wie kann ich Ihnen heute helfen? Can Linker steht Ihnen gerne zur Seite.';
        agentOptions = [
          { label: 'Unfall mit Fremdschuld (Haftpflicht)', nextId: 'fremdschuld' },
          { label: 'Unfall selbst verschuldet (Kasko)', nextId: 'eigenunfall' },
          { label: 'Fahrzeugwert ermitteln', nextId: 'fahrzeugwert' },
          { label: 'Generelle Frage zu Kosten', nextId: 'kosten_allgemein' }
        ];
        break;
    }

    const agentReply: AssistantStep = {
      id: `agent_${Date.now()}`,
      text: agentResponseText,
      speaker: 'agent',
      options: agentOptions
    };

    setChatHistory([...chatHistory, userReply, agentReply]);
    setCurrentStepId(option.nextId);
  };

  const restartAssistant = () => {
    setChatHistory([
      {
        id: 'welcome',
        text: 'Hallo! Ich bin Ihr digitaler Erst-Assistent für RheinWertGutachten. Wie kann ich Ihnen bei Ihrem Kfz-Schaden oder Wertgutachten jetzt helfen?',
        speaker: 'agent',
        options: [
          { label: 'Unfall mit Fremdschuld (Haftpflicht)', nextId: 'fremdschuld' },
          { label: 'Unfall selbst verschuldet (Kasko)', nextId: 'eigenunfall' },
          { label: 'Fahrzeugwert ermitteln', nextId: 'fahrzeugwert' },
          { label: 'Generelle Frage zu Kosten', nextId: 'kosten_allgemein' }
        ]
      }
    ]);
    setCurrentStepId('welcome');
  };

  return (
    <div className="fixed bottom-[76px] right-3 z-50 font-display select-none md:bottom-8 md:right-8">
      <AnimatePresence>
        {!isOpen ? (
          // Hoverable Glowing Assistant Badge
          <motion.button
            key="badge"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            whileHover={{ scale: 1.08 }}
            onClick={() => setIsOpen(true)}
            className="flex items-center gap-2.5 bg-black text-white hover:text-gold-400 p-3 sm:px-5 sm:py-3.5 rounded-full shadow-2xl border border-gold-500/30 cursor-pointer group focus:outline-hidden relative overflow-hidden"
          >
            {/* Pulsing light rings */}
            <span className="absolute inset-0 bg-gradient-to-r from-gold-500/10 to-navy-500/10 pointer-events-none"></span>
            
            <div className="relative">
              <span className="absolute -top-1 -right-1 h-2.5 w-2.5 rounded-full bg-green-500 animate-ping"></span>
              <MessageSquare className="w-5 h-5 group-hover:rotate-6 transition-transform text-gold-400" />
            </div>
            
            <span className="text-xs font-bold tracking-wide uppercase hidden sm:inline-block">
              Express Schaden-Assistent
            </span>
          </motion.button>
        ) : (
          // Dynamic expanded floating screen panel
          <motion.div
            key="panel"
            initial={{ opacity: 0, y: 50, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 50, scale: 0.95 }}
            className="w-[calc(100vw-24px)] sm:w-96 max-h-[calc(100vh-156px)] md:max-h-[calc(100vh-96px)] bg-slate-900/95 backdrop-blur-md rounded-xl shadow-2xl border border-white/10 flex flex-col overflow-hidden"
          >
            {/* Header */}
            <div className="bg-navy-950 p-3 sm:p-4 border-b border-white/5 flex items-center justify-between">
              <div className="flex items-center gap-2.5">
                <div className="w-9 h-9 bg-gold-500/10 rounded-full border border-gold-500/30 flex items-center justify-center">
                  <Shield className="w-4 h-4 text-gold-400" />
                </div>
                <div>
                  <h4 className="font-bold text-xs sm:text-sm text-white flex items-center gap-1">
                    <span>Schaden-Support</span>
                    <Sparkles className="w-3.5 h-3.5 text-gold-400 animate-pulse" />
                  </h4>
                  <span className="text-[10px] text-green-400 font-medium tracking-tight block">
                    ● Can Linker Vor Ort in Essen
                  </span>
                </div>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="p-1 rounded-full text-slate-400 hover:text-white hover:bg-white/5 cursor-pointer"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Simulated Chat Feed with Custom Scroll */}
            <div className="flex-1 overflow-y-auto p-3 sm:p-4 space-y-3 max-h-[32vh] sm:max-h-[280px] custom-feed-scroll font-sans">
              
              {chatHistory.map((step) => {
                const isAgent = step.speaker === 'agent';
                return (
                  <motion.div
                    key={step.id}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className={`flex ${isAgent ? 'justify-start' : 'justify-end'}`}
                  >
                    <div className={`max-w-[85%] rounded-xl px-3.5 py-2.5 text-xs sm:text-sm line-relaxed leading-relaxed ${
                      isAgent 
                        ? 'bg-white/5 text-slate-100 border border-white/5' 
                        : 'bg-gold-500 text-navy-950 font-medium shadow-md shadow-gold-500/10'
                    }`}>
                      {step.text}
                    </div>
                  </motion.div>
                );
              })}

            </div>

            {/* Interactive Answer Selection Choice Boxes */}
            <div className="p-3 border-t border-white/5 bg-navy-950/80 space-y-2">
              
              <div className="text-[9px] text-slate-500 font-mono tracking-widest text-center uppercase">
                Schadens-Konfigurator Auswählen:
              </div>

              <div className="flex flex-col gap-1.5 max-h-[132px] sm:max-h-[140px] overflow-y-auto">
                {chatHistory[chatHistory.length - 1]?.options?.map((option, idx) => (
                  <button
                    key={idx}
                    onClick={() => handleOptionClick(option)}
                    className="w-full text-left px-3 py-2.5 rounded-lg bg-white/5 hover:bg-gold-500/10 hover:text-gold-400 text-slate-300 font-display text-xs font-bold border border-white/5 hover:border-gold-500/20 transition-all cursor-pointer flex justify-between items-center group"
                  >
                    <span>{option.label}</span>
                    <ChevronRight className="w-3.5 h-3.5 opacity-40 group-hover:opacity-100 group-hover:translate-x-0.5 transition-all" />
                  </button>
                ))}
              </div>

              {/* Instant Options */}
              <div className="flex items-center justify-between pt-1 border-t border-white/5 text-[10px]">
                <button
                  onClick={restartAssistant}
                  className="text-slate-500 hover:text-slate-300 transition-colors"
                >
                  Neustarten
                </button>
                <div className="flex gap-2 text-slate-400 font-medium">
                  <a href="tel:01743169807" className="hover:text-gold-400 flex items-center gap-0.5 transition-colors">
                    <Phone className="w-3 h-3" />
                    <span>Anrufen</span>
                  </a>
                  <span>|</span>
                  <a href="https://wa.me/491743169807" target="_blank" rel="noopener noreferrer" className="hover:text-green-400 flex items-center gap-0.5 transition-colors">
                    <MessageCircle className="w-3 h-3" />
                    <span>WhatsApp</span>
                  </a>
                </div>
              </div>

            </div>

          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
