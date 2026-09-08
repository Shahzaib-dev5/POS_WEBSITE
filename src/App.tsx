import React, { useState } from 'react';
import { PageId } from './types';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { HomeView } from './components/HomeView';
import { AboutView } from './components/AboutView';
import { ServicesView } from './components/ServicesView';
import { PricingView } from './components/PricingView';
import { ContactView } from './components/ContactView';
import { PosSimulatorModal } from './components/PosSimulatorModal';
import { PhpCodeViewerModal } from './components/PhpCodeViewerModal';
import { POS_SYSTEM_URL } from './data/posData';
import { MonitorPlay, Code2, ExternalLink } from 'lucide-react';

export default function App() {
  const [activePage, setActivePage] = useState<PageId>('home');
  const [isSimulatorOpen, setIsSimulatorOpen] = useState(false);
  const [isPhpModalOpen, setIsPhpModalOpen] = useState(false);

  const handleNavigate = (page: PageId) => {
    setActivePage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-white text-slate-900 flex flex-col selection:bg-blue-600 selection:text-white antialiased">
      {/* Navbar Header */}
      <Navbar
        activePage={activePage}
        onNavigate={handleNavigate}
        onOpenSimulator={() => setIsSimulatorOpen(true)}
        onOpenPhpModal={() => setIsPhpModalOpen(true)}
      />

      {/* Main Content Area */}
      <main className="flex-1">
        {activePage === 'home' && (
          <HomeView
            onNavigate={handleNavigate}
            onOpenSimulator={() => setIsSimulatorOpen(true)}
            onOpenPhpModal={() => setIsPhpModalOpen(true)}
          />
        )}

        {activePage === 'about' && (
          <AboutView
            onNavigate={handleNavigate}
            onOpenPhpModal={() => setIsPhpModalOpen(true)}
          />
        )}

        {activePage === 'services' && (
          <ServicesView
            onNavigate={handleNavigate}
            onOpenSimulator={() => setIsSimulatorOpen(true)}
          />
        )}

        {activePage === 'pricing' && (
          <PricingView
            onNavigate={handleNavigate}
            onOpenSimulator={() => setIsSimulatorOpen(true)}
          />
        )}

        {activePage === 'contact' && <ContactView />}
      </main>

      {/* Footer */}
      <Footer
        onNavigate={handleNavigate}
        onOpenPhpModal={() => setIsPhpModalOpen(true)}
        onOpenSimulator={() => setIsSimulatorOpen(true)}
      />

      {/* Interactive POS Simulator Modal */}
      <PosSimulatorModal
        isOpen={isSimulatorOpen}
        onClose={() => setIsSimulatorOpen(false)}
      />

      {/* Plain PHP + Bootstrap 5 Code Viewer & ZIP Exporter Modal */}
      <PhpCodeViewerModal
        isOpen={isPhpModalOpen}
        onClose={() => setIsPhpModalOpen(false)}
      />

      {/* Floating Action Button for Instant POS Access & Demo */}
      <div className="fixed bottom-5 right-5 z-30 flex flex-col items-end gap-2.5">
        <button
          onClick={() => setIsSimulatorOpen(true)}
          id="floating-demo-btn"
          className="flex items-center gap-2 px-3.5 py-2.5 rounded-full bg-slate-900 hover:bg-slate-800 text-white text-xs font-bold shadow-lg border border-slate-700 transition-all hover:scale-105 cursor-pointer"
          title="Try live cashier counter & repair job sheet simulator"
        >
          <MonitorPlay className="w-4 h-4 text-blue-400" />
          <span className="hidden sm:inline">Try POS Simulator</span>
        </button>

        <a
          href={POS_SYSTEM_URL}
          target="_blank"
          rel="noreferrer"
          id="floating-portal-btn"
          className="flex items-center gap-2 px-4 py-2.5 rounded-full bg-blue-600 hover:bg-blue-700 text-white text-xs font-bold shadow-xl shadow-blue-500/25 transition-all hover:scale-105"
          title="Open live system at emobile.zrmsolutions.com"
        >
          <span>Live POS Portal</span>
          <ExternalLink className="w-3.5 h-3.5" />
        </a>
      </div>
    </div>
  );
}
