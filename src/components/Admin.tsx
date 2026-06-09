import React, { useMemo, useState } from 'react';
import { CheckCircle, Eye, FileText, Lock, LogOut, Save, ShieldAlert } from 'lucide-react';
import { LegalContent, loadLegalContent, saveLegalContent } from '../legalContent';

const ADMIN_PASSWORD = 'Can2809.!!';
const ADMIN_SESSION_KEY = 'rheinwert-admin-authenticated';

interface AdminProps {
  onExit: () => void;
}

export const Admin: React.FC<AdminProps> = ({ onExit }) => {
  const [password, setPassword] = useState('');
  const [isAuthenticated, setIsAuthenticated] = useState(
    () => window.sessionStorage.getItem(ADMIN_SESSION_KEY) === 'true',
  );
  const [error, setError] = useState('');
  const [saved, setSaved] = useState(false);
  const [content, setContent] = useState<LegalContent>(() => loadLegalContent());

  const updatedLabel = useMemo(() => {
    if (!content.updatedAt) {
      return 'Noch nicht gespeichert';
    }

    return new Intl.DateTimeFormat('de-DE', {
      dateStyle: 'medium',
      timeStyle: 'short',
    }).format(new Date(content.updatedAt));
  }, [content.updatedAt]);

  const handleLogin = (event: React.FormEvent) => {
    event.preventDefault();
    if (password === ADMIN_PASSWORD) {
      window.sessionStorage.setItem(ADMIN_SESSION_KEY, 'true');
      setIsAuthenticated(true);
      setError('');
      setPassword('');
      return;
    }

    setError('Passwort ist falsch.');
  };

  const handleSave = () => {
    const nextContent = {
      ...content,
      updatedAt: new Date().toISOString(),
    };
    saveLegalContent(nextContent);
    setContent(nextContent);
    setSaved(true);
    window.setTimeout(() => setSaved(false), 2500);
  };

  const handleLogout = () => {
    window.sessionStorage.removeItem(ADMIN_SESSION_KEY);
    setIsAuthenticated(false);
    setPassword('');
  };

  if (!isAuthenticated) {
    return (
      <main className="min-h-screen bg-navy-950 text-white flex items-center justify-center px-4 py-10 font-sans">
        <form onSubmit={handleLogin} className="w-full max-w-sm bg-white text-slate-800 rounded-xl shadow-2xl border border-slate-200 p-6 space-y-5">
          <div className="space-y-2 text-center">
            <div className="w-12 h-12 rounded-xl bg-navy-950 text-gold-400 flex items-center justify-center mx-auto">
              <Lock className="w-6 h-6" />
            </div>
            <h1 className="font-display text-2xl font-extrabold text-navy-950">Admin Zugang</h1>
            <p className="text-sm text-slate-500">Impressum und Datenschutz bearbeiten.</p>
          </div>

          <div className="space-y-1.5">
            <label htmlFor="admin-password" className="text-xs font-bold uppercase tracking-wider text-slate-500">Passwort</label>
            <input
              id="admin-password"
              type="password"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
              className="w-full rounded-lg border border-slate-200 px-4 py-3 text-sm focus:border-navy-500 focus:outline-hidden"
              autoFocus
            />
          </div>

          {error && <p className="text-sm font-semibold text-red-600">{error}</p>}

          <button type="submit" className="w-full rounded-lg bg-gold-500 px-4 py-3 font-display font-extrabold text-navy-950 hover:bg-gold-600 transition-colors">
            Einloggen
          </button>
        </form>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-slate-50 text-slate-800 font-sans">
      <header className="bg-navy-950 text-white border-b border-navy-900">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-5 flex flex-col sm:flex-row gap-4 sm:items-center sm:justify-between">
          <div>
            <p className="text-xs uppercase tracking-widest text-gold-400 font-bold">RheinWertGutachten</p>
            <h1 className="font-display text-2xl sm:text-3xl font-extrabold">Legal Admin</h1>
            <p className="text-xs text-slate-400 mt-1">Letzte Speicherung: {updatedLabel}</p>
          </div>
          <div className="flex gap-2">
            <button onClick={onExit} className="inline-flex items-center gap-2 rounded-lg border border-white/10 px-3 py-2 text-sm font-bold hover:bg-white/5 transition-colors">
              <Eye className="w-4 h-4" />
              Website
            </button>
            <button onClick={handleLogout} className="inline-flex items-center gap-2 rounded-lg border border-white/10 px-3 py-2 text-sm font-bold hover:bg-white/5 transition-colors">
              <LogOut className="w-4 h-4" />
              Logout
            </button>
          </div>
        </div>
      </header>

      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-6">
        <div className="rounded-lg border border-amber-200 bg-amber-50 p-4 text-sm text-amber-900 flex gap-3">
          <ShieldAlert className="w-5 h-5 flex-shrink-0" />
          <p>
            Dieser Adminbereich laeuft auf einer statischen GitHub-Pages-Seite. Gespeicherte Texte werden im Browser dieses Geraets abgelegt und sollten vor Veroeffentlichung rechtlich geprueft werden.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
          <label className="space-y-2">
            <span className="flex items-center gap-2 text-sm font-display font-extrabold text-navy-950">
              <FileText className="w-4 h-4 text-gold-500" />
              Impressum
            </span>
            <textarea
              value={content.impressum}
              onChange={(event) => setContent({ ...content, impressum: event.target.value })}
              className="min-h-[520px] w-full rounded-lg border border-slate-200 bg-white px-4 py-3 text-sm leading-relaxed shadow-sm focus:border-navy-500 focus:outline-hidden"
              spellCheck={false}
            />
          </label>

          <label className="space-y-2">
            <span className="flex items-center gap-2 text-sm font-display font-extrabold text-navy-950">
              <FileText className="w-4 h-4 text-gold-500" />
              Datenschutz
            </span>
            <textarea
              value={content.datenschutz}
              onChange={(event) => setContent({ ...content, datenschutz: event.target.value })}
              className="min-h-[520px] w-full rounded-lg border border-slate-200 bg-white px-4 py-3 text-sm leading-relaxed shadow-sm focus:border-navy-500 focus:outline-hidden"
              spellCheck={false}
            />
          </label>
        </div>

        <div className="sticky bottom-4 rounded-xl border border-slate-200 bg-white/95 backdrop-blur p-4 shadow-xl flex flex-col sm:flex-row gap-3 sm:items-center sm:justify-between">
          <div className="text-sm text-slate-500">
            {saved ? (
              <span className="inline-flex items-center gap-2 font-bold text-green-700">
                <CheckCircle className="w-4 h-4" />
                Gespeichert
              </span>
            ) : (
              <span>Aenderungen speichern, damit sie in Impressum und Datenschutz angezeigt werden.</span>
            )}
          </div>
          <button onClick={handleSave} className="inline-flex items-center justify-center gap-2 rounded-lg bg-navy-950 px-5 py-3 font-display font-extrabold text-white hover:bg-navy-900 transition-colors">
            <Save className="w-4 h-4" />
            Speichern
          </button>
        </div>
      </section>
    </main>
  );
};
