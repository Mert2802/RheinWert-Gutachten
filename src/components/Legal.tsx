/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useMemo } from 'react';
import { Page } from '../types';
import { ChevronRight } from 'lucide-react';
import { loadLegalContent } from '../legalContent';

interface LegalProps {
  type: 'impressum' | 'datenschutz';
  onNavigate: (page: Page) => void;
}

export const Legal: React.FC<LegalProps> = ({ type, onNavigate }) => {
  const isImpressum = type === 'impressum';
  const legalContent = useMemo(() => loadLegalContent(), []);
  const pageContent = isImpressum ? legalContent.impressum : legalContent.datenschutz;

  return (
    <div className="space-y-12 pb-20">
      <section className="bg-slate-900 text-white py-12 md:py-16 relative overflow-hidden select-none">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-slate-900 via-navy-950 to-black pointer-events-none"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex items-center gap-1.5 text-xs text-slate-400 mb-4">
            <span onClick={() => onNavigate(Page.HOME)} className="hover:text-gold-400 cursor-pointer transition-colors">Startseite</span>
            <ChevronRight className="w-3 h-3" />
            <span className="text-gold-400 font-semibold">{isImpressum ? 'Impressum' : 'Datenschutz'}</span>
          </div>

          <h1 className="text-3xl sm:text-4xl font-display font-extrabold tracking-tight">
            {isImpressum ? 'Impressum' : 'Datenschutzerklaerung'}
          </h1>
          <p className="text-slate-400 text-xs sm:text-sm max-w-xl font-sans mt-1">
            Rechtliche Pflichtangaben fuer RheinWertGutachten.
          </p>
        </div>
      </section>

      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 font-sans text-slate-700 text-sm leading-relaxed space-y-8">
        <article className="rounded-xl border border-slate-200 bg-white p-5 sm:p-7 shadow-sm whitespace-pre-line">
          {pageContent}
        </article>
      </section>
    </div>
  );
};
