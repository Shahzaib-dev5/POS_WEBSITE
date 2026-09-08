import React from 'react';
import { 
  Smartphone, 
  ExternalLink, 
  Mail, 
  Phone, 
  MapPin, 
  ShieldCheck, 
  Clock, 
  Code2, 
  Heart,
  ArrowRight
} from 'lucide-react';
import { PageId } from '../types';
import { POS_SYSTEM_URL } from '../data/posData';

interface FooterProps {
  onNavigate: (page: PageId) => void;
  onOpenPhpModal: () => void;
  onOpenSimulator: () => void;
}

export const Footer: React.FC<FooterProps> = ({
  onNavigate,
  onOpenPhpModal,
  onOpenSimulator
}) => {
  const currentYear = new Date().getFullYear();

  const handleLinkClick = (page: PageId) => {
    onNavigate(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-slate-950 text-slate-300 pt-16 pb-12 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-slate-800/80">
          {/* Brand & Overview */}
          <div className="lg:col-span-2 space-y-4">
            <div 
              onClick={() => handleLinkClick('home')}
              className="cursor-pointer inline-block"
              title="ZRM POS - Smart Sales • Simple Management • Better Business"
            >
              <img
                src="/zrm-pos-logo-dark.svg"
                alt="ZRM POS Logo"
                className="h-12 w-auto max-w-[240px] object-contain"
                referrerPolicy="no-referrer"
              />
            </div>

            <p className="text-sm text-slate-400 leading-relaxed max-w-sm">
              The premier cloud Point of Sale, dual-IMEI tracking system, and mobile device repair workshop management platform engineered specifically for modern smartphone stores and electronics service centers.
            </p>

            <div className="pt-2 flex flex-wrap gap-2">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium bg-slate-900 border border-slate-800 text-slate-300">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                99.9% Uptime SLA
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium bg-slate-900 border border-slate-800 text-slate-300">
                <Clock className="w-3.5 h-3.5 text-blue-400" />
                24/7 Cloud Sync
              </span>
            </div>

            <div className="pt-2">
              <button
                onClick={onOpenPhpModal}
                className="inline-flex items-center gap-2 text-xs text-blue-400 hover:text-blue-300 bg-blue-950/70 border border-blue-900/60 rounded-lg px-3 py-2 font-medium transition-colors"
              >
                <Code2 className="w-4 h-4 text-blue-400" />
                <span>Download Plain PHP & Bootstrap 5 Source</span>
              </button>
            </div>
          </div>

          {/* Quick Navigation */}
          <div>
            <h3 className="text-xs font-bold text-slate-100 uppercase tracking-wider mb-4">
              Website Pages
            </h3>
            <ul className="space-y-2.5 text-sm">
              <li>
                <button 
                  onClick={() => handleLinkClick('home')} 
                  className="hover:text-white transition-colors text-left"
                >
                  Home Overview
                </button>
              </li>
              <li>
                <button 
                  onClick={() => handleLinkClick('about')} 
                  className="hover:text-white transition-colors text-left"
                >
                  About ZRM Solutions
                </button>
              </li>
              <li>
                <button 
                  onClick={() => handleLinkClick('services')} 
                  className="hover:text-white transition-colors text-left"
                >
                  POS Services & Modules
                </button>
              </li>
              <li>
                <button 
                  onClick={() => handleLinkClick('pricing')} 
                  className="hover:text-white transition-colors text-left"
                >
                  Subscription Pricing
                </button>
              </li>
              <li>
                <button 
                  onClick={() => handleLinkClick('contact')} 
                  className="hover:text-white transition-colors text-left"
                >
                  Contact & Support
                </button>
              </li>
              <li>
                <button 
                  onClick={onOpenSimulator} 
                  className="text-blue-400 hover:text-blue-300 transition-colors text-left flex items-center gap-1 font-medium"
                >
                  <span>Interactive POS Demo</span>
                  <ArrowRight className="w-3 h-3" />
                </button>
              </li>
            </ul>
          </div>

          {/* POS Core Modules */}
          <div>
            <h3 className="text-xs font-bold text-slate-100 uppercase tracking-wider mb-4">
              Specialized Modules
            </h3>
            <ul className="space-y-2.5 text-sm text-slate-400">
              <li className="hover:text-slate-200 transition-colors">Dual-IMEI & Serial Tracker</li>
              <li className="hover:text-slate-200 transition-colors">Repair Job Sheet Manager</li>
              <li className="hover:text-slate-200 transition-colors">Thermal & WhatsApp Invoicing</li>
              <li className="hover:text-slate-200 transition-colors">Customer Khata / Ledger</li>
              <li className="hover:text-slate-200 transition-colors">Accessories Barcode Checkout</li>
              <li className="hover:text-slate-200 transition-colors">Technician Labor Commissions</li>
            </ul>
          </div>

          {/* Live System Portal */}
          <div className="space-y-4">
            <h3 className="text-xs font-bold text-slate-100 uppercase tracking-wider mb-4">
              System Access
            </h3>
            <div className="p-4 rounded-xl bg-slate-900 border border-slate-800 space-y-3">
              <div className="text-xs text-slate-400">
                Direct URL to your active POS counter and back-office:
              </div>
              <a
                href={POS_SYSTEM_URL}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center gap-2 w-full px-3.5 py-2 rounded-lg bg-blue-600 hover:bg-blue-500 text-white text-xs font-bold shadow transition-colors"
              >
                <span>emobile.zrmsolutions.com</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>

            <div className="space-y-2 text-xs text-slate-400">
              <div className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-blue-400" />
                <a href="mailto:support@zrmsolutions.com" className="hover:text-white">support@zrmsolutions.com</a>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-emerald-400" />
                <span>+92 300 0000000 (WhatsApp)</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <div>
            &copy; {currentYear} <strong className="text-slate-400 font-semibold">ZRM Solutions</strong>. All rights reserved.
          </div>

          <div className="flex items-center gap-4 text-slate-400">
            <span>Built with HTML5, CSS3 & Bootstrap 5 Compatibility</span>
            <span>•</span>
            <button 
              onClick={onOpenPhpModal} 
              className="text-blue-400 hover:underline cursor-pointer"
            >
              Export Plain PHP Code
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
