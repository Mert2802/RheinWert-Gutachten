import React, { useState } from 'react';
import { Cookie, X } from 'lucide-react';

const COOKIE_CONSENT_KEY = 'rheinwert-cookie-consent-v1';

interface CookieConsentProps {
  onPrivacyClick: () => void;
}

export const CookieConsent: React.FC<CookieConsentProps> = ({ onPrivacyClick }) => {
  const [isVisible, setIsVisible] = useState(() => (
    window.localStorage.getItem(COOKIE_CONSENT_KEY) === null
  ));

  const saveChoice = (choice: 'essential' | 'all') => {
    window.localStorage.setItem(
      COOKIE_CONSENT_KEY,
      JSON.stringify({
        choice,
        updatedAt: new Date().toISOString(),
      }),
    );
    setIsVisible(false);
  };

  if (!isVisible) {
    return null;
  }

  return (
    <div className="fixed inset-x-3 bottom-[86px] z-50 lg:bottom-4 lg:left-auto lg:right-4 lg:w-[420px] font-sans">
      <div className="rounded-xl border border-slate-200 bg-white shadow-2xl p-4 sm:p-5">
        <div className="flex items-start gap-3">
          <div className="w-10 h-10 rounded-lg bg-navy-950 text-gold-400 flex items-center justify-center flex-shrink-0">
            <Cookie className="w-5 h-5" />
          </div>
          <div className="min-w-0 space-y-2">
            <div className="flex items-start justify-between gap-3">
              <h2 className="font-display font-extrabold text-navy-950 text-base">Cookie-Hinweis</h2>
              <button
                type="button"
                onClick={() => saveChoice('essential')}
                className="p-1 text-slate-400 hover:text-slate-700 rounded-md"
                aria-label="Cookie-Hinweis schliessen"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
            <p className="text-xs sm:text-sm leading-relaxed text-slate-600">
              Wir nutzen technisch notwendige Speicherungen fuer den Betrieb der Website und Ihre Auswahl. Optionale Tracking- oder Marketing-Cookies werden nicht geladen.
            </p>
            <button
              type="button"
              onClick={onPrivacyClick}
              className="text-xs font-bold text-navy-600 hover:text-navy-950 underline underline-offset-2"
            >
              Datenschutz ansehen
            </button>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-2 mt-4">
          <button
            type="button"
            onClick={() => saveChoice('essential')}
            className="rounded-lg border border-slate-200 bg-white px-3 py-2.5 text-xs font-display font-extrabold text-slate-700 hover:bg-slate-50"
          >
            Nur notwendige
          </button>
          <button
            type="button"
            onClick={() => saveChoice('all')}
            className="rounded-lg bg-gold-500 px-3 py-2.5 text-xs font-display font-extrabold text-navy-950 hover:bg-gold-600"
          >
            Alle akzeptieren
          </button>
        </div>
      </div>
    </div>
  );
};
