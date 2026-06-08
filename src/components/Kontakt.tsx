/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Page, ContactFormInput } from '../types';
import { 
  Phone, 
  MessageCircle, 
  Mail, 
  MapPin, 
  ChevronDown, 
  Send, 
  CheckCircle, 
  Clock, 
  ChevronRight,
  HelpCircle
} from 'lucide-react';

interface KontaktProps {
  onNavigate: (page: Page) => void;
}

export const Kontakt: React.FC<KontaktProps> = ({ onNavigate }) => {
  const [form, setForm] = useState<ContactFormInput>({
    name: '',
    phone: '',
    email: '',
    reason: 'unfallgutachten',
    message: '',
    preferredContact: 'phone'
  });

  const [submitted, setSubmitted] = useState(false);
  const [activeFaq, setActiveFaq] = useState<string | null>(null);

  const faqs = [
    {
      id: "unfallgutachten_wann",
      question: "Wann brauche ich ein Unfallgutachten?",
      answer: "Ein vollwertiges Unfallgutachten benötigen Sie bei einem unverschuldeten Unfall, wenn der Schaden über der Bagatellgrenze (ca. 750 - 1.000 €) liegt. Darunter reicht ein Kostenvoranschlag aus. Als Laie lässt sich die Schadenhöhe jedoch schwer einschätzen - rufen Sie uns am besten für eine kostenlose Ersteinschätzung an."
    },
    {
      id: "vor_ort",
      question: "Kommen Sie auch vor Ort?",
      answer: "Ja, absolut. Wir begutachten Ihr Fahrzeug direkt an Ihrem Wunschort in Essen, Bochum, Duisburg, Gelsenkirchen, Oberhausen und Umgebung. Das kann bei Ihnen zu Hause, am Arbeitsplatz oder in einer Werkstatt sein. Für Sie fallen keinerlei Anfahrtskosten an."
    },
    {
      id: "wie_schnell_termin",
      question: "Wie schnell bekomme ich einen Termin?",
      answer: "In der Regel vereinbaren wir sehr flexibel Termine innerhalb von 24 Stunden, bei akuten Unfallfällen oft noch am selben Werktag. Kontaktieren Sie uns am besten telefonisch oder per WhatsApp für eine direkte Terminierung."
    },
    {
      id: "whatsapp_kontakt",
      question: "Kann ich Sie per WhatsApp kontaktieren?",
      answer: "Ja, sehr gerne sogar! WhatsApp ist der schnellste und unkomplizierteste Weg. Sie können uns direkt Fotos Ihres Schadens senden, und wir melden uns zeitnah mit einer ersten professionellen Einschätzung bei Ihnen."
    },
    {
      id: "staedte_unterwegs",
      question: "In welchen Städten sind Sie unterwegs?",
      answer: "Unser primärer Einsatzbereich umfasst Essen, Bochum, Duisburg, Gelsenkirchen und Oberhausen. Zudem fahren wir auch angrenzende Städte im Ruhrgebiet ohne Aufpreis an (z. B. Mülheim, Bottrop, Gladbeck, Herne, Hattingen)."
    },
    {
      id: "fahrzeugbewertung_angebot",
      question: "Bieten Sie auch Fahrzeugbewertungen an?",
      answer: "Ja, wir erstellen transparente Fahrzeugbewertungen für Gebrauchtwagen, Leasingrückläufer oder Oldtimer. Damit sichern Sie sich den exakten Marktwert Ihres Autos oder Motorrads ab, sei es für Versicherungen, das Finanzamt oder den Verkauf."
    }
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate real submission
    setSubmitted(true);
    // Reset form after submission
    setForm({
      name: '',
      phone: '',
      email: '',
      reason: 'unfallgutachten',
      message: '',
      preferredContact: 'phone'
    });
  };

  const handleToggleFaq = (id: string) => {
    setActiveFaq(activeFaq === id ? null : id);
  };

  return (
    <div className="space-y-16 pb-20">
      
      {/* 1. Hero Header */}
      <section className="bg-slate-900 text-white py-12 md:py-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-slate-900 via-navy-950 to-black pointer-events-none"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          {/* Breadcrumb */}
          <div className="flex items-center gap-1.5 text-xs text-slate-400 mb-4 select-none">
            <span onClick={() => onNavigate(Page.HOME)} className="hover:text-gold-400 cursor-pointer transition-colors">Startseite</span>
            <ChevronRight className="w-3 h-3" />
            <span className="text-gold-400 font-semibold">Kontakt</span>
          </div>

          <div className="max-w-3xl space-y-4">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-display font-extrabold tracking-tight">
              Kontaktieren Sie RheinWertGutachten
            </h1>
            <p className="text-slate-300 text-base sm:text-lg font-sans max-w-2xl leading-relaxed">
              Haben Sie Fragen oder benötigen Sie direkt einen Termin? Wir helfen Ihnen schnell, unbürokratisch und persönlich.
            </p>
          </div>

        </div>
      </section>

      {/* 2. Main Grid: Contact details & Form */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-12 gap-12">
        
        {/* Left Column: Direct Coordinates */}
        <div className="lg:col-span-5 space-y-8">
          <div className="space-y-3">
            <span className="text-xs font-bold text-navy-500 uppercase tracking-widest block">
              Erreichbarkeit
            </span>
            <h2 className="text-2xl font-display font-extrabold text-navy-950">
              Direkter Draht zu Can Linker
            </h2>
            <p className="text-slate-500 text-sm font-sans leading-relaxed">
              Nach einem Unfall zählt jede Minute. Kontaktieren Sie uns ohne Zögern. Gerne können Sie uns auch direkt Fotos des Schadens via WhatsApp schicken.
            </p>
          </div>

          <div className="space-y-6 font-sans">
            
            {/* Phone */}
            <a 
              href="tel:01743169807"
              className="flex items-start gap-4 p-4 bg-white hover:bg-slate-50 border border-slate-100 rounded-2xl shadow-2xs group transition-colors cursor-pointer"
            >
              <div className="w-12 h-12 bg-gold-400/10 text-gold-600 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-105 transition-transform">
                <Phone className="w-5 h-5" />
              </div>
              <div className="space-y-1">
                <span className="text-xs text-slate-400 font-semibold uppercase tracking-wider block">Telefonische Beratung</span>
                <span className="text-base sm:text-lg font-bold text-navy-950 group-hover:text-gold-600 transition-colors">0174 3169807</span>
                <span className="text-xs text-slate-400 block">Montag - Sonntag, 24/7 Notruf-Support</span>
              </div>
            </a>

            {/* WhatsApp */}
            <a 
              href="https://wa.me/491743169807"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-start gap-4 p-4 bg-green-50/40 hover:bg-green-50/80 border border-green-100 rounded-2xl shadow-2xs group transition-colors cursor-pointer"
            >
              <div className="w-12 h-12 bg-green-100 text-green-700 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-105 transition-transform">
                <MessageCircle className="w-5 h-5 fill-current" />
              </div>
              <div className="space-y-1">
                <span className="text-xs text-green-700 font-bold uppercase tracking-wider block">WhatsApp Kanal</span>
                <span className="text-base sm:text-lg font-bold text-green-800">Jetzt WhatsApp-Chat starten</span>
                <span className="text-xs text-green-600 block">Fotos schicken &amp; schnelle Einschätzung erhalten</span>
              </div>
            </a>

            {/* Email */}
            <a 
              href="mailto:info@rheinwert-gutachten.de"
              className="flex items-start gap-4 p-4 bg-white hover:bg-slate-50 border border-slate-100 rounded-2xl shadow-2xs group transition-colors cursor-pointer"
            >
              <div className="w-12 h-12 bg-navy-50 text-navy-600 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-105 transition-transform">
                <Mail className="w-5 h-5" />
              </div>
              <div className="space-y-1">
                <span className="text-xs text-slate-400 font-semibold uppercase tracking-wider block">Direkte Mail-Adresse</span>
                <span className="text-base sm:text-lg font-bold text-navy-950 group-hover:text-navy-500 transition-colors">info@rheinwert-gutachten.de</span>
                <span className="text-xs text-slate-400 block">Anfragen werden innerhalb weniger Stunden beantwortet</span>
              </div>
            </a>

            {/* Location info */}
            <div className="flex items-start gap-4 p-4 bg-slate-50 border border-slate-200/60 rounded-2xl select-none">
              <div className="w-12 h-12 bg-slate-200 text-slate-600 rounded-xl flex items-center justify-center flex-shrink-0">
                <MapPin className="w-5 h-5" />
              </div>
              <div className="space-y-1">
                <span className="text-xs text-slate-400 font-semibold uppercase tracking-wider block">Gutachterbühne / Vor Ort</span>
                <span className="text-sm font-bold text-navy-950">Essen, Ruhrgebiet &amp; Umland</span>
                <span className="text-xs text-slate-500 block">Inhabergeführtes mobiles Sachverständigenbüro</span>
              </div>
            </div>

          </div>
        </div>

        {/* Right Column: Dynamic Form */}
        <div id="contact-form-section" className="lg:col-span-7 bg-white p-6 sm:p-8 rounded-3xl border border-slate-200/80 shadow-md">
          
          {submitted ? (
            <div className="py-12 text-center space-y-4">
              <div className="w-16 h-16 bg-green-50 text-green-600 rounded-full flex items-center justify-center mx-auto border border-green-200 animate-subtle-pulse">
                <CheckCircle className="w-8 h-8 font-bold" />
              </div>
              <h3 className="font-display font-extrabold text-2xl text-navy-950">Vielen Dank für Ihre Anfrage!</h3>
              <p className="text-slate-500 text-sm font-sans max-w-sm mx-auto">
                Ihre Nachricht wurde erfolgreich übermittelt. Can Linker wird sich schnellstmöglich persönlich per von Ihnen gewähltem Kontaktweg bei Ihnen melden.
              </p>
              <div className="pt-4">
                <button 
                  onClick={() => setSubmitted(false)}
                  className="px-6 py-2.5 bg-navy-950 hover:bg-navy-900 text-white font-semibold rounded-xl text-sm transition-all cursor-pointer"
                >
                  Neues Formular senden
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <h3 className="font-display font-bold text-xl text-navy-950 border-b border-slate-100 pb-3">
                Unverbindliche Terminanfrage &amp; Beratung
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                
                {/* Name */}
                <div className="space-y-1.5">
                  <label htmlFor="name-field" className="text-xs font-bold text-slate-500 uppercase tracking-wider">Ihr Name *</label>
                  <input 
                    id="name-field"
                    type="text" 
                    required
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    placeholder="z.B. Max Mustermann" 
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm focus:border-navy-500 focus:outline-hidden transition-all bg-slate-50/50"
                  />
                </div>

                {/* Telephone */}
                <div className="space-y-1.5">
                  <label htmlFor="phone-field" className="text-xs font-bold text-slate-500 uppercase tracking-wider">Telefonnummer *</label>
                  <input 
                    id="phone-field"
                    type="tel" 
                    required
                    value={form.phone}
                    onChange={(e) => setForm({ ...form, phone: e.target.value })}
                    placeholder="z.B. 0174 3169807" 
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm focus:border-navy-500 focus:outline-hidden transition-all bg-slate-50/50"
                  />
                </div>

              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">

                {/* Email */}
                <div className="space-y-1.5">
                  <label htmlFor="email-field" className="text-xs font-bold text-slate-500 uppercase tracking-wider">E-Mail Adresse</label>
                  <input 
                    id="email-field"
                    type="email" 
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    placeholder="z.B. name@beispiel.de" 
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm focus:border-navy-500 focus:outline-hidden transition-all bg-slate-50/50"
                  />
                </div>

                {/* Purpose Selection */}
                <div className="space-y-1.5">
                  <label htmlFor="reason-field" className="text-xs font-bold text-slate-500 uppercase tracking-wider">Ihr Anliegen *</label>
                  <select 
                    id="reason-field"
                    value={form.reason}
                    onChange={(e) => setForm({ ...form, reason: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm focus:border-navy-500 focus:outline-hidden transition-all bg-slate-50/50 text-slate-700 font-medium"
                  >
                    <option value="unfallgutachten">Unfallgutachten (Haftpflicht)</option>
                    <option value="schadengutachten">Schadengutachten (Kasko)</option>
                    <option value="fahrzeugbewertung">Fahrzeugbewertung / Wertgutachten</option>
                    <option value="sonstiges">Sonstige Anfrage / Erstberatung</option>
                  </select>
                </div>

              </div>

              {/* Message */}
              <div className="space-y-1.5">
                <label htmlFor="message-field" className="text-xs font-bold text-slate-500 uppercase tracking-wider">Ihre Nachricht / Schadensbeschreibung</label>
                <textarea 
                  id="message-field"
                  rows={4}
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  placeholder="Beschreiben Sie kurz den Schaden oder Ihr Fahrzeugmodell..." 
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm focus:border-navy-500 focus:outline-hidden transition-all bg-slate-50/50"
                />
              </div>

              {/* Preferred Contact Method */}
              <div className="space-y-2">
                <span className="text-xs font-bold text-slate-500 uppercase tracking-wider block">Gewünschter Kontaktweg *</span>
                <div className="grid grid-cols-3 gap-3">
                  {[
                    { id: 'phone', label: 'Anruf' },
                    { id: 'whatsapp', label: 'WhatsApp' },
                    { id: 'email', label: 'E-Mail' }
                  ].map((method) => (
                    <button 
                      key={method.id}
                      type="button"
                      onClick={() => setForm({ ...form, preferredContact: method.id as any })}
                      className={`py-3 px-2 text-center rounded-xl font-medium text-xs sm:text-sm cursor-pointer border transition-all ${
                        form.preferredContact === method.id 
                          ? 'bg-navy-950 text-white border-navy-950 shadow-sm' 
                          : 'bg-slate-50 text-slate-600 border-slate-200 hover:bg-slate-100'
                      }`}
                    >
                      {method.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Legal Hint */}
              <div className="text-[11px] text-slate-400 font-medium leading-relaxed font-sans select-none">
                Mit dem Absenden erklären Sie sich damit einverstanden, dass Ihre Angaben zur Kontaktaufnahme verarbeitet werden dürfen (Datenschutzerklärung beachten).
              </div>

              {/* Submit Button */}
              <div>
                <button 
                  type="submit"
                  className="w-full py-4 bg-gold-500 hover:bg-gold-600 text-navy-950 font-display font-extrabold text-sm rounded-xl flex items-center justify-center gap-2 shadow-lg hover:shadow-xl transition-all cursor-pointer"
                >
                  <Send className="w-4 h-4" />
                  <span>Jetzt Anfrage absenden</span>
                </button>
              </div>

            </form>
          )}

        </div>
      </section>

      {/* 3. Deep FAQ Section for Local Trust */}
      <section className="bg-slate-50 border-y border-slate-100 py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12 select-none">
          
          <div className="text-center space-y-2">
            <h2 className="text-2xl sm:text-3xl font-display font-extrabold text-navy-950 tracking-tight">
              Häufig gestellte Fragen (FAQ)
            </h2>
            <p className="text-slate-500 text-xs sm:text-sm font-sans max-w-lg mx-auto">
              Hier finden Sie sofortige und rechtssichere Antworten auf die gängigsten Fragen rund um Kfz-Gutachten.
            </p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq) => {
              const isOpen = activeFaq === faq.id;
              return (
                <div 
                  key={faq.id} 
                  className="bg-white border border-slate-250/30 rounded-2xl overflow-hidden shadow-2xs transition-all"
                >
                  <button 
                    type="button"
                    onClick={() => handleToggleFaq(faq.id)}
                    className="w-full text-left px-5 py-4 sm:p-6 flex justify-between items-center gap-4 cursor-pointer hover:bg-slate-50 transition-colors focus:outline-hidden"
                  >
                    <span className="font-display font-bold text-navy-950 text-sm sm:text-base leading-snug flex items-center gap-2.5">
                      <HelpCircle className="w-5 h-5 text-gold-500 flex-shrink-0" />
                      <span>{faq.question}</span>
                    </span>
                    <ChevronDown className={`w-5 h-5 text-slate-400 flex-shrink-0 transition-transform duration-250 ${isOpen ? 'rotate-180' : ''}`} />
                  </button>
                  
                  {isOpen && (
                    <div className="px-5 pb-5 sm:px-6 sm:pb-6 border-t border-slate-50 text-slate-600 text-xs sm:text-sm leading-relaxed font-sans pt-4 bg-slate-50/30 animate-fade-in">
                      {faq.answer}
                    </div>
                  )}
                </div>
              );
            })}
          </div>

        </div>
      </section>

    </div>
  );
};
