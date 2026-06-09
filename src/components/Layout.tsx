/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { Page } from '../types';
import { Logo } from './Logo';
import { VirtualAssistant } from './VirtualAssistant';
import { 
  Phone, 
  MessageCircle, 
  Mail, 
  MapPin, 
  Menu, 
  X, 
  ChevronDown, 
  Clock, 
  ShieldCheck,
  FileText
} from 'lucide-react';

interface LayoutProps {
  currentPage: Page;
  setCurrentPage: (page: Page) => void;
  children: React.ReactNode;
}

export const Layout: React.FC<LayoutProps> = ({
  currentPage,
  setCurrentPage,
  children
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Scroll detection for compact navbar
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Sync hash changes in real-time for full SPA internal-link support
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash;
      if (hash) {
        const pageRoute = hash.replace('#/', '') as Page;
        if (Object.values(Page).includes(pageRoute)) {
          setCurrentPage(pageRoute);
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }
      }
    };
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, [setCurrentPage]);

  const handlePageSelect = (page: Page) => {
    setCurrentPage(page);
    window.location.hash = `#/${page}`;
    setMobileMenuOpen(false);
    setServicesDropdownOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const services = [
    { name: 'Unfallgutachten', page: Page.UNFALLGUTACHTEN, desc: 'Schadensregulierung nach Fremdverschulden' },
    { name: 'Schadengutachten', page: Page.SCHADENGUTACHTEN, desc: 'Beweissicherung & Reparaturoptimierung' },
    { name: 'Fahrzeugbewertung', page: Page.FAHRZEUGBEWERTUNG, desc: 'Ermittlung des exakten Marktwertes' },
  ];

  return (
    <div className="min-h-screen flex flex-col font-sans bg-[#fcfcfd]">
      
      {/* Dynamic Announcement Banner - Trust Element */}
      <div className="bg-navy-950 text-slate-100 text-xs py-2 px-4 border-b border-navy-800 hidden md:block">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center gap-5">
            <span className="flex items-center gap-1.5 text-slate-300">
              <Clock className="w-3.5 h-3.5 text-gold-400" />
              <span>24/7 Notfall-Kontakt &amp; WhatsApp: <strong>0174 3169807</strong></span>
            </span>
            <span className="h-3 w-[1px] bg-navy-800"></span>
            <span className="flex items-center gap-1.5 text-slate-300">
              <MapPin className="w-3.5 h-3.5 text-gold-400" />
              <span>Einsatzgebiete: <strong>Essen &amp; ganzes Ruhrgebiet</strong></span>
            </span>
          </div>
          <div className="flex items-center gap-4 text-slate-300">
            <span className="flex items-center gap-1">
              <ShieldCheck className="w-3.5 h-3.5 text-green-500" />
              <span>Unabhängig von Versicherungen</span>
            </span>
          </div>
        </div>
      </div>

      {/* Sticky Main Navigation */}
      <header 
        className={`sticky top-0 z-50 transition-all duration-300 border-b ${
          isScrolled 
            ? 'bg-white/95 backdrop-blur-md shadow-md py-2 border-slate-100' 
            : 'bg-white py-2.5 md:py-3 border-slate-100'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          
          {/* Brand Logo Component */}
          <button 
            type="button"
            onClick={() => handlePageSelect(Page.HOME)}
            className="flex items-center gap-2 text-left cursor-pointer group focus:outline-hidden"
          >
            <Logo variant="dark" showSub={true} className="w-[132px] sm:w-[160px] lg:w-[188px] transition-transform duration-300 group-hover:scale-[1.02]" />
          </button>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8 font-display">
            <button 
              onClick={() => handlePageSelect(Page.HOME)}
              className={`font-semibold text-sm transition-colors cursor-pointer hover:text-navy-500 ${
                currentPage === Page.HOME ? 'text-navy-500 font-bold' : 'text-slate-600'
              }`}
            >
              Startseite
            </button>

            {/* Services Dropdown */}
            <div className="relative group/nav font-display">
              <button 
                onMouseEnter={() => setServicesDropdownOpen(true)}
                onClick={() => setServicesDropdownOpen(!servicesDropdownOpen)}
                className={`flex items-center gap-1 font-semibold text-sm transition-colors cursor-pointer hover:text-navy-500 ${
                  [Page.UNFALLGUTACHTEN, Page.SCHADENGUTACHTEN, Page.FAHRZEUGBEWERTUNG].includes(currentPage) 
                    ? 'text-navy-500 font-bold' 
                    : 'text-slate-600'
                }`}
              >
                <span>Leistungen</span>
                <ChevronDown className="w-4 h-4 transition-transform duration-200 group-hover/nav:rotate-180" />
              </button>

              {/* Dropdown Menu Overlay */}
              <div 
                className="absolute left-1/2 -translate-x-1/2 top-full mt-2 w-72 bg-white rounded-lg shadow-xl border border-slate-100 py-3 transition-all duration-200 opacity-0 invisible group-hover/nav:opacity-100 group-hover/nav:visible"
                onMouseLeave={() => setServicesDropdownOpen(false)}
              >
                {services.map((item) => (
                  <button
                    key={item.page}
                    onClick={() => handlePageSelect(item.page)}
                    className="w-full text-left px-5 py-3.5 hover:bg-slate-50 transition-colors flex flex-col cursor-pointer"
                  >
                    <span className="font-semibold text-sm text-navy-900 group-hover:text-navy-500">{item.name}</span>
                    <span className="text-xs text-slate-500 mt-0.5">{item.desc}</span>
                  </button>
                ))}
              </div>
            </div>

            <button 
              onClick={() => handlePageSelect(Page.EINSATZGEBIET)}
              className={`font-semibold text-sm transition-colors cursor-pointer hover:text-navy-500 ${
                currentPage === Page.EINSATZGEBIET ? 'text-navy-500 font-bold' : 'text-slate-600'
              }`}
            >
              Einsatzgebiet
            </button>

            <button 
              onClick={() => handlePageSelect(Page.UEBER_MICH)}
              className={`font-semibold text-sm transition-colors cursor-pointer hover:text-navy-500 ${
                currentPage === Page.UEBER_MICH ? 'text-navy-500 font-bold' : 'text-slate-600'
              }`}
            >
              Über mich
            </button>

            <button 
              onClick={() => handlePageSelect(Page.KONTAKT)}
              className={`font-semibold text-sm transition-colors cursor-pointer hover:text-navy-500 ${
                currentPage === Page.KONTAKT ? 'text-navy-500 font-bold' : 'text-slate-600'
              }`}
            >
              Kontakt
            </button>
          </nav>

          {/* Call-to-Action in Desktop Navbar */}
          <div className="hidden lg:flex items-center gap-4">
            <a 
              href="https://wa.me/491743169807"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-xs font-semibold px-4 py-2 border border-green-200 text-green-700 bg-green-50/50 hover:bg-green-50 rounded-full transition-all"
            >
              <MessageCircle className="w-4 h-4 fill-current" />
              <span>WhatsApp</span>
            </a>
            <a 
              href="tel:01743169807"
              className="flex items-center gap-2 text-sm text-white bg-navy-950 hover:bg-navy-900 font-bold px-5 py-2.5 rounded-full shadow-md hover:shadow-lg transition-all"
            >
              <Phone className="w-4 h-4" />
              <span>0174 3169807</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 text-slate-600 hover:text-navy-950 cursor-pointer focus:outline-hidden"
            aria-label="Menü öffnen"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>

        </div>
      </header>

      {/* Mobile Navigation Drawer */}
      {mobileMenuOpen && (
        <div className="fixed inset-x-0 top-[84px] bottom-[64px] z-40 bg-white border-t border-slate-100 flex flex-col md:top-[96px] lg:hidden">
          <div className="flex-1 overflow-y-auto py-4 px-4 space-y-5">
            <div className="flex flex-col space-y-2 font-display">
              <button 
                onClick={() => handlePageSelect(Page.HOME)}
                className={`text-left py-3 px-4 rounded-lg font-bold text-base cursor-pointer ${
                  currentPage === Page.HOME ? 'bg-navy-50 text-navy-950' : 'text-slate-700'
                }`}
              >
                Startseite
              </button>
              
              <div className="border-b border-slate-100 pb-2">
                <span className="px-4 text-xs font-bold text-slate-400 uppercase tracking-widest block mb-2">Leistungen</span>
                {services.map((service) => (
                  <button 
                    key={service.page}
                    onClick={() => handlePageSelect(service.page)}
                    className={`w-full text-left py-2.5 px-4 rounded-lg font-medium text-sm cursor-pointer ${
                      currentPage === service.page ? 'text-navy-950 font-bold' : 'text-slate-600'
                    }`}
                  >
                    {service.name}
                  </button>
                ))}
              </div>

              <button 
                onClick={() => handlePageSelect(Page.EINSATZGEBIET)}
                className={`text-left py-3 px-4 rounded-lg font-bold text-base cursor-pointer ${
                  currentPage === Page.EINSATZGEBIET ? 'bg-navy-50 text-navy-950' : 'text-slate-700'
                }`}
              >
                Einsatzgebiet
              </button>

              <button 
                onClick={() => handlePageSelect(Page.UEBER_MICH)}
                className={`text-left py-3 px-4 rounded-lg font-bold text-base cursor-pointer ${
                  currentPage === Page.UEBER_MICH ? 'bg-navy-50 text-navy-950' : 'text-slate-700'
                }`}
              >
                Über mich
              </button>

              <button 
                onClick={() => handlePageSelect(Page.KONTAKT)}
                className={`text-left py-3 px-4 rounded-lg font-bold text-base cursor-pointer ${
                  currentPage === Page.KONTAKT ? 'bg-navy-50 text-navy-950' : 'text-slate-700'
                }`}
              >
                Kontakt
              </button>
            </div>

            <div className="border-t border-slate-100 pt-5 space-y-3">
              <span className="block text-center text-xs font-semibold text-slate-400">Can Linker direkt kontaktieren</span>
              <a 
                href="tel:01743169807"
                className="flex items-center justify-center gap-3 w-full bg-navy-950 hover:bg-navy-900 text-white font-bold py-3 rounded-lg shadow-md transition-all text-center"
              >
                <Phone className="w-5 h-5" />
                <span>0174 3169807 anrufen</span>
              </a>
              <a 
                href="https://wa.me/491743169807"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-3 w-full bg-green-600 hover:bg-green-700 text-white font-bold py-3 rounded-lg shadow-md transition-all text-center"
              >
                <MessageCircle className="w-5 h-5 fill-current" />
                <span>WhatsApp Nachricht</span>
              </a>
            </div>
          </div>
        </div>
      )}

      {/* Main Page Area */}
      <main className="flex-1 pb-16 lg:pb-0">
        {children}
      </main>

      {/* Floating Interactive Virtual Assistant */}
      {!mobileMenuOpen && <VirtualAssistant onNavigate={setCurrentPage} />}

      {/* Professional Local Footer Section */}
      <footer className="bg-navy-950 text-slate-300 border-t border-navy-900 font-display">
        
        {/* Main Footer Information Columns */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          
          {/* Column 1: Brand & Professional Statement */}
          <div className="space-y-4">
            <button 
              onClick={() => handlePageSelect(Page.HOME)}
              className="text-left cursor-pointer focus:outline-hidden"
            >
              <Logo variant="light" showSub={true} className="w-[190px]" />
            </button>
            <p className="text-sm text-slate-400 leading-relaxed font-sans pt-2">
              Unabhängiger, kompetenter und lokaler Kfz-Sachverständiger für Unfallschäden, Fahrzeugbewertungen und Schadengutachten im gesamten Ruhrgebiet.
            </p>
            <div className="flex gap-2.5 text-xs text-gold-400 border border-slate-800 p-3 rounded-lg bg-navy-900/50">
              <ShieldCheck className="w-5 h-4 flex-shrink-0 text-gold-400" />
              <span>Als zertifizierter &amp; freier Gutachter vertreten wir ausschließlich Ihre Interessen – 100% unabhängig von Versicherungen.</span>
            </div>
          </div>

          {/* Column 2: Direct Subpage Navigation Link List */}
          <div className="space-y-4">
            <h3 className="text-sm font-bold text-white uppercase tracking-wider border-l-2 border-gold-500 pl-2.5">
              Leistungen
            </h3>
            <ul className="space-y-2.5 text-sm font-sans">
              <li>
                <button 
                  onClick={() => handlePageSelect(Page.UNFALLGUTACHTEN)} 
                  className="hover:text-gold-400 transition-colors cursor-pointer text-slate-400 hover:pl-1"
                >
                  Unfallgutachten (Haftpflicht)
                </button>
              </li>
              <li>
                <button 
                  onClick={() => handlePageSelect(Page.SCHADENGUTACHTEN)} 
                  className="hover:text-gold-400 transition-colors cursor-pointer text-slate-400 hover:pl-1"
                >
                  Schadengutachten (Kasko/Eigenschaden)
                </button>
              </li>
              <li>
                <button 
                  onClick={() => handlePageSelect(Page.FAHRZEUGBEWERTUNG)} 
                  className="hover:text-gold-400 transition-colors cursor-pointer text-slate-400 hover:pl-1"
                >
                  Fahrzeugbewertung &amp; Wertgutachten
                </button>
              </li>
              <li>
                <button 
                  onClick={() => handlePageSelect(Page.EINSATZGEBIET)} 
                  className="hover:text-gold-400 transition-colors cursor-pointer text-slate-400 hover:pl-1"
                >
                  Einsatzgebiet &amp; Städte
                </button>
              </li>
            </ul>
          </div>

          {/* Column 3: Contact & Business Owner Info */}
          <div className="space-y-4">
            <h3 className="text-sm font-bold text-white uppercase tracking-wider border-l-2 border-gold-500 pl-2.5">
              Kontakt &amp; Erreichbarkeit
            </h3>
            <div className="space-y-3 text-sm text-slate-400 font-sans">
              <p>
                <strong className="text-slate-200">RheinWertGutachten</strong><br />
                Inhaber: Can Linker
              </p>
              <div className="space-y-2 mt-2">
                <a 
                  href="tel:01743169807" 
                  className="flex items-center gap-2 hover:text-white transition-colors"
                >
                  <Phone className="w-4 h-4 text-gold-500" />
                  <span>0174 3169807</span>
                </a>
                <a 
                  href="https://wa.me/491743169807" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="flex items-center gap-2 hover:text-white transition-colors text-green-400"
                >
                  <MessageCircle className="w-4 h-4 fill-transparent text-green-500" />
                  <span>Schreib uns auf WhatsApp</span>
                </a>
                <a 
                  href="mailto:info@rheinwert-gutachten.de" 
                  className="flex items-center gap-2 hover:text-white transition-colors"
                >
                  <Mail className="w-4 h-4 text-gold-500" />
                  <span>info@rheinwert-gutachten.de</span>
                </a>
              </div>
            </div>
          </div>

          {/* Column 4: Service Area Detail */}
          <div className="space-y-4">
            <h3 className="text-sm font-bold text-white uppercase tracking-wider border-l-2 border-gold-500 pl-2.5">
              Unser Einsatzgebiet
            </h3>
            <p className="text-sm text-slate-400 leading-relaxed font-sans">
              Wir kommen kostenlos direkt zu Ihnen vor Ort oder an den Unfallort in:
            </p>
            <div className="flex flex-wrap gap-1.5 text-xs">
              {['Essen', 'Bochum', 'Duisburg', 'Gelsenkirchen', 'Oberhausen', 'Ruhrgebiet'].map((city) => (
                <span 
                  key={city}
                  onClick={() => handlePageSelect(Page.EINSATZGEBIET)}
                  className="px-2.5 py-1 bg-navy-900 border border-navy-800 rounded-md text-slate-300 font-medium hover:border-gold-500 hover:text-gold-400 transition-colors cursor-pointer"
                >
                  {city}
                </span>
              ))}
            </div>
          </div>

        </div>

        {/* Lower Legal Line */}
        <div className="border-t border-navy-900 bg-navy-950 px-4 pt-6 pb-28 md:pt-8 lg:py-8">
          <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-slate-500">
            <div>
              &copy; {new Date().getFullYear()} RheinWertGutachten. Alle Rechte vorbehalten. Inhaber Can Linker.
            </div>
            <div className="flex flex-wrap gap-6">
              <button 
                onClick={() => handlePageSelect(Page.IMPRESSUM)} 
                className="hover:text-slate-300 transition-colors flex items-center gap-1 cursor-pointer"
              >
                <FileText className="w-3.5 h-3.5" />
                <span>Impressum</span>
              </button>
              <button 
                onClick={() => handlePageSelect(Page.DATENSCHUTZ)} 
                className="hover:text-slate-300 transition-colors flex items-center gap-1 cursor-pointer"
              >
                <FileText className="w-3.5 h-3.5" />
                <span>Datenschutzerklärung</span>
              </button>
            </div>
          </div>
        </div>

      </footer>

      {/* Sticky Mobile Floater Action Bar for Maximum Calls & Conversion */}
      <div className="fixed bottom-0 left-0 right-0 z-40 bg-white border-t border-slate-200/80 shadow-2xl flex items-center divide-x divide-slate-100 lg:hidden font-display pb-[env(safe-area-inset-bottom)]">
        <a 
          href="tel:01743169807" 
          className="flex-1 flex flex-col items-center justify-center py-2.5 text-navy-950 font-bold hover:bg-slate-50 transition-all text-xs"
        >
          <Phone className="w-5 h-5 text-navy-600 mb-0.5 animate-subtle-pulse" />
          <span>Jetzt anrufen</span>
        </a>
        <a 
          href="https://wa.me/491743169807" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="flex-1 flex flex-col items-center justify-center py-2.5 text-green-700 font-bold hover:bg-slate-50 transition-all text-xs"
        >
          <MessageCircle className="w-5 h-5 text-green-600 mb-0.5 fill-current" />
          <span>WhatsApp Chat</span>
        </a>
        <a 
          href="mailto:info@rheinwert-gutachten.de?subject=Anfrage%20RheinWertGutachten"
          className="flex-1 flex flex-col items-center justify-center py-2.5 text-slate-700 font-bold hover:bg-slate-50 transition-all text-xs"
        >
          <Mail className="w-5 h-5 text-gold-500 mb-0.5" />
          <span>Anfragen</span>
        </a>
      </div>

    </div>
  );
};
