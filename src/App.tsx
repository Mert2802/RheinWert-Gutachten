/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Page } from './types';
import { Layout } from './components/Layout';
import { Home } from './components/Home';
import { Unfallgutachten } from './components/Unfallgutachten';
import { Schadengutachten } from './components/Schadengutachten';
import { Fahrzeugbewertung } from './components/Fahrzeugbewertung';
import { Einsatzgebiet } from './components/Einsatzgebiet';
import { UeberMich } from './components/UeberMich';
import { Kontakt } from './components/Kontakt';
import { Legal } from './components/Legal';

export default function App() {
  const [currentPage, setCurrentPage] = useState<Page>(Page.HOME);

  useEffect(() => {
    const handleHashSync = () => {
      const hash = window.location.hash;
      if (hash) {
        const pageRoute = hash.replace('#/', '') as Page;
        if (Object.values(Page).includes(pageRoute)) {
          setCurrentPage(pageRoute);
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }
      } else {
        window.location.hash = `#/home`;
      }
    };

    // Run once on mount
    handleHashSync();

    // Setup listener
    window.addEventListener('hashchange', handleHashSync);
    return () => window.removeEventListener('hashchange', handleHashSync);
  }, []);

  const handleNavigate = (page: Page) => {
    setCurrentPage(page);
    window.location.hash = `#/${page}`;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const renderContent = () => {
    switch (currentPage) {
      case Page.HOME:
        return <Home onNavigate={handleNavigate} />;
      case Page.UNFALLGUTACHTEN:
        return <Unfallgutachten onNavigate={handleNavigate} />;
      case Page.SCHADENGUTACHTEN:
        return <Schadengutachten onNavigate={handleNavigate} />;
      case Page.FAHRZEUGBEWERTUNG:
        return <Fahrzeugbewertung onNavigate={handleNavigate} />;
      case Page.EINSATZGEBIET:
        return <Einsatzgebiet onNavigate={handleNavigate} />;
      case Page.UEBER_MICH:
        return <UeberMich onNavigate={handleNavigate} />;
      case Page.KONTAKT:
        return <Kontakt onNavigate={handleNavigate} />;
      case Page.IMPRESSUM:
        return <Legal type="impressum" onNavigate={handleNavigate} />;
      case Page.DATENSCHUTZ:
        return <Legal type="datenschutz" onNavigate={handleNavigate} />;
      default:
        return <Home onNavigate={handleNavigate} />;
    }
  };

  return (
    <Layout currentPage={currentPage} setCurrentPage={handleNavigate}>
      <AnimatePresence mode="wait">
        <motion.div
          key={currentPage}
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -12 }}
          transition={{ duration: 0.28, ease: "easeInOut" }}
        >
          {renderContent()}
        </motion.div>
      </AnimatePresence>
    </Layout>
  );
}
