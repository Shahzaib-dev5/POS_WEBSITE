import React, { useState } from 'react';
import { 
  Smartphone, 
  ExternalLink, 
  Menu, 
  X, 
  Code2, 
  MonitorPlay, 
  PhoneCall, 
  ShieldCheck,
  ChevronRight
} from 'lucide-react';
import { PageId } from '../types';
import { POS_SYSTEM_URL } from '../data/posData';

interface NavbarProps {
  activePage: PageId;
  onNavigate: (page: PageId) => void;
  onOpenSimulator: () => void;
  onOpenPhpModal: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  activePage,
  onNavigate,
  onOpenSimulator,
  onOpenPhpModal
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks: { id: PageId; label: string }[] = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'services', label: 'Services & Modules' },
    { id: 'pricing', label: 'Pricing' },
    { id: 'contact', label: 'Contact' }
  ];

  const handleNavClick = (page: PageId) => {
    onNavigate(page);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className="sticky top-0 z-40 bg-white border-b border-slate-200 shadow-xs">
      {/* Top Notification / System Info Bar */}
      <div className="bg-slate-900 text-slate-300 text-xs py-2 px-4 border-b border-slate-800">
        <div className="max-w-7xl mx-auto flex flex-wrap justify-between items-center gap-2">
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1.5 font-medium text-slate-200">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
              Powered by <span className="text-white font-semibold">ZRM Solutions</span>
            </span>
            <span className="hidden sm:inline text-slate-500">|</span>
            <span className="hidden sm:flex items-center gap-1 text-slate-400">
              Live POS URL: 
              <a 
                href={POS_SYSTEM_URL} 
                target="_blank" 
                rel="noreferrer" 
                className="text-cyan-400 hover:underline font-mono"
              >
                emobile.zrmsolutions.com
              </a>
            </span>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={onOpenPhpModal}
              id="topbar-php-code-btn"
              className="flex items-center gap-1.5 px-2.5 py-0.5 rounded bg-blue-950 text-blue-300 border border-blue-800 hover:bg-blue-900 transition-colors font-medium text-xs cursor-pointer"
              title="View & Download plain PHP + Bootstrap 5 source files"
            >
              <Code2 className="w-3.5 h-3.5 text-blue-400" />
              <span>PHP & Bootstrap 5 Code</span>
            </button>
            <a
              href="mailto:support@zrmsolutions.com"
              className="text-slate-400 hover:text-white transition-colors hidden md:inline"
            >
              support@zrmsolutions.com
            </a>
          </div>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo & Brand */}
          <div 
            onClick={() => handleNavClick('home')}
            className="flex items-center gap-3 cursor-pointer group py-1"
            title="ZRM POS - Smart Sales • Simple Management • Better Business"
          >
            <img
              src="/zrm-pos-logo.svg"
              alt="ZRM POS - Smart Sales • Simple Management • Better Business"
              className="h-10 sm:h-12 w-auto max-w-[210px] sm:max-w-[240px] object-contain transition-transform group-hover:scale-[1.02]"
              referrerPolicy="no-referrer"
            />
          </div>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => {
              const isActive = activePage === link.id;
              return (
                <button
                  key={link.id}
                  id={`nav-link-${link.id}`}
                  onClick={() => handleNavClick(link.id)}
                  className={`px-3.5 py-2 rounded-lg text-sm font-semibold transition-all ${
                    isActive
                      ? 'text-blue-600 bg-blue-50/80 shadow-xs'
                      : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
                  }`}
                >
                  {link.label}
                </button>
              );
            })}
          </nav>

          {/* Right Action Buttons */}
          <div className="hidden sm:flex items-center gap-2.5">
            <button
              onClick={onOpenSimulator}
              id="navbar-simulator-btn"
              className="flex items-center gap-1.5 px-3.5 py-2 rounded-lg text-xs sm:text-sm font-semibold text-slate-700 hover:text-blue-700 hover:bg-slate-100 border border-slate-200 transition-colors"
            >
              <MonitorPlay className="w-4 h-4 text-blue-600" />
              <span>Interactive POS Demo</span>
            </button>

            <a
              href={POS_SYSTEM_URL}
              target="_blank"
              rel="noreferrer"
              id="navbar-launch-pos-btn"
              className="flex items-center gap-2 px-4 py-2 rounded-lg text-xs sm:text-sm font-bold text-white bg-blue-600 hover:bg-blue-700 shadow-sm hover:shadow transition-all group"
            >
              <span>Launch POS</span>
              <ExternalLink className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden flex items-center gap-2">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              id="mobile-menu-toggle-btn"
              className="p-2 rounded-lg text-slate-600 hover:text-slate-900 hover:bg-slate-100 focus:outline-none"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-slate-200 bg-white px-4 pt-3 pb-6 shadow-xl animate-in fade-in slide-in-from-top-2 duration-150">
          <div className="space-y-1 mb-4">
            {navLinks.map((link) => {
              const isActive = activePage === link.id;
              return (
                <button
                  key={link.id}
                  onClick={() => handleNavClick(link.id)}
                  className={`w-full flex items-center justify-between px-4 py-2.5 rounded-lg text-base font-semibold text-left transition-colors ${
                    isActive
                      ? 'text-blue-600 bg-blue-50 font-bold'
                      : 'text-slate-700 hover:bg-slate-100'
                  }`}
                >
                  <span>{link.label}</span>
                  <ChevronRight className="w-4 h-4 text-slate-400" />
                </button>
              );
            })}
          </div>

          <div className="pt-3 border-t border-slate-200 space-y-2.5">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenSimulator();
              }}
              className="w-full flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg text-sm font-semibold text-slate-800 bg-slate-100 hover:bg-slate-200"
            >
              <MonitorPlay className="w-4 h-4 text-blue-600" />
              <span>Try Interactive POS Simulator</span>
            </button>

            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenPhpModal();
              }}
              className="w-full flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg text-sm font-semibold text-indigo-700 bg-indigo-50 border border-indigo-200 hover:bg-indigo-100"
            >
              <Code2 className="w-4 h-4 text-indigo-600" />
              <span>Get PHP & Bootstrap 5 Source Files</span>
            </button>

            <a
              href={POS_SYSTEM_URL}
              target="_blank"
              rel="noreferrer"
              className="w-full flex items-center justify-center gap-2 px-4 py-3 rounded-lg text-base font-bold text-white bg-blue-600 hover:bg-blue-700 shadow-md"
            >
              <span>Launch Live eMobile POS</span>
              <ExternalLink className="w-4 h-4" />
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
