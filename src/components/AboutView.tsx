import React from 'react';
import { 
  ShieldCheck, 
  ExternalLink, 
  Cpu, 
  Wrench, 
  Server, 
  Users, 
  CheckCircle2, 
  Code2, 
  Award,
  Globe,
  Sparkles,
  ArrowRight
} from 'lucide-react';
import { POS_SYSTEM_URL } from '../data/posData';
import { PageId } from '../types';

interface AboutViewProps {
  onNavigate: (page: PageId) => void;
  onOpenPhpModal: () => void;
}

export const AboutView: React.FC<AboutViewProps> = ({ onNavigate, onOpenPhpModal }) => {
  return (
    <div className="py-12 sm:py-16 space-y-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Page Header */}
      <div className="text-center max-w-3xl mx-auto space-y-4">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-blue-700 text-xs font-bold border border-blue-100">
          <Globe className="w-3.5 h-3.5" />
          <span>About ZRM Solutions & eMobile POS</span>
        </div>
        <h1 className="text-3xl sm:text-5xl font-black text-slate-900 tracking-tight">
          Empowering Mobile & Electronics Retailers with Precision POS
        </h1>
        <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
          ZRM Solutions crafts tailored business management platforms. With <strong>eMobile POS</strong>, we engineered a dedicated solution for the specific needs of phone shops, repair labs, and tech distributors.
        </p>
      </div>

      {/* Story & Problem / Solution Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
        <div className="lg:col-span-7 space-y-6">
          <span className="text-xs font-bold uppercase tracking-widest text-blue-600">The eMobile POS Story</span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
            Why Standard Point of Sale Systems Don't Work for Mobile Shops
          </h2>
          <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
            Most generic retail POS systems were designed for grocery stores or clothing boutiques. They treat every product as an anonymous SKU. But in the smartphone and electronics industry:
          </p>

          <div className="space-y-3">
            <div className="flex items-start gap-3 p-3.5 rounded-xl bg-slate-50 border border-slate-200">
              <Cpu className="w-5 h-5 text-blue-600 shrink-0 mt-0.5" />
              <div>
                <strong className="text-sm text-slate-900 block">Every Handset is Unique (IMEI & Serial)</strong>
                <span className="text-xs text-slate-600">Each smartphone has a unique 15-digit dual IMEI number, vendor warranty, purchase cost, and battery condition that must be tracked individually.</span>
              </div>
            </div>

            <div className="flex items-start gap-3 p-3.5 rounded-xl bg-slate-50 border border-slate-200">
              <Wrench className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
              <div>
                <strong className="text-sm text-slate-900 block">Mobile Repair Workshop Workflows</strong>
                <span className="text-xs text-slate-600">Customer devices arrive with pattern locks, scratches, diagnostic issues, and require spare part deductions and technician commission tracking.</span>
              </div>
            </div>

            <div className="flex items-start gap-3 p-3.5 rounded-xl bg-slate-50 border border-slate-200">
              <Users className="w-5 h-5 text-rose-600 shrink-0 mt-0.5" />
              <div>
                <strong className="text-sm text-slate-900 block">Dealer Khata & Udhaar Ledgers</strong>
                <span className="text-xs text-slate-600">Shop-to-shop trading requires flexible credit ledgers, partial cash payments, and instant WhatsApp reminders.</span>
              </div>
            </div>
          </div>
        </div>

        {/* ZRM Solutions Company Profile Box */}
        <div className="lg:col-span-5 bg-gradient-to-br from-slate-900 to-indigo-950 text-white p-8 rounded-3xl shadow-xl space-y-6">
          <div className="flex items-center gap-3">
            <img
              src="/zrm-pos-logo-dark.svg"
              alt="ZRM POS - Smart Sales • Simple Management • Better Business"
              className="h-11 w-auto object-contain"
              referrerPolicy="no-referrer"
            />
          </div>

          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
            ZRM Solutions (<strong>zrmsolutions.com</strong>) provides enterprise-grade custom web applications, custom CRM platforms, automated ERP systems, and retail point-of-sale solutions.
          </p>

          <div className="space-y-2.5 text-xs text-slate-200 border-t border-slate-800 pt-4">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-400" />
              <span>Full-Stack Custom Development & Systems Integration</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-400" />
              <span>Cloud Database Migration & Dedicated Hosting</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-400" />
              <span>Continuous 24/7 Monitoring & Technical Support</span>
            </div>
          </div>

          <div className="pt-2">
            <a
              href={POS_SYSTEM_URL}
              target="_blank"
              rel="noreferrer"
              className="w-full py-3 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-bold text-xs flex items-center justify-center gap-2 transition-colors"
            >
              <span>Launch eMobile POS Live Terminal</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      </div>

      {/* Cloud Reliability & Security */}
      <div className="bg-slate-50 rounded-3xl p-8 sm:p-12 border border-slate-200 space-y-8">
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <span className="text-xs font-bold uppercase tracking-wider text-blue-600">Enterprise Infrastructure</span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
            Speed, Reliability & Rock-Solid Security
          </h2>
          <p className="text-xs sm:text-sm text-slate-600">
            Engineered to ensure your checkout counter never stops, even during peak rush hours.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-xs space-y-3">
            <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center font-bold">
              <Server className="w-5 h-5" />
            </div>
            <h3 className="font-bold text-base text-slate-900">Automatic Daily Backups</h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Never fear hardware failure or computer theft. All sales data, customer ledgers, and IMEI records are continuously synchronized to secure cloud vaults.
            </p>
          </div>

          <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-xs space-y-3">
            <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center font-bold">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <h3 className="font-bold text-base text-slate-900">Role-Based Staff Access</h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Restrict sensitive data. Cashiers can only perform sales; repair techs access job sheets; only administrators see purchase costs and profit reports.
            </p>
          </div>

          <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-xs space-y-3">
            <div className="w-10 h-10 rounded-xl bg-indigo-50 text-indigo-600 flex items-center justify-center font-bold">
              <Code2 className="w-5 h-5" />
            </div>
            <h3 className="font-bold text-base text-slate-900">Plain PHP & Bootstrap 5 Code</h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Looking for pure PHP templates for your private hosting? We provide full plain PHP and Bootstrap 5 files ready to deploy on any cPanel or Apache server.
            </p>
            <button
              onClick={onOpenPhpModal}
              className="text-xs font-bold text-blue-600 hover:underline flex items-center gap-1"
            >
              <span>View & download source files</span>
              <ArrowRight className="w-3 h-3" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
