import React from 'react';
import { 
  ExternalLink, 
  MonitorPlay, 
  ShieldCheck, 
  Cpu, 
  Wrench, 
  Zap, 
  Boxes, 
  Users, 
  TrendingUp, 
  CheckCircle2, 
  Printer, 
  Smartphone, 
  ArrowRight, 
  Code2,
  ScanLine,
  FileCheck,
  Building,
  Headphones
} from 'lucide-react';
import { POS_FEATURES, TARGET_INDUSTRIES, POS_SYSTEM_URL } from '../data/posData';
import { PageId } from '../types';

interface HomeViewProps {
  onNavigate: (page: PageId) => void;
  onOpenSimulator: () => void;
  onOpenPhpModal: () => void;
}

export const HomeView: React.FC<HomeViewProps> = ({
  onNavigate,
  onOpenSimulator,
  onOpenPhpModal
}) => {
  return (
    <div className="space-y-16 sm:space-y-24">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-b from-blue-50/60 via-white to-white pt-10 pb-16 sm:pt-16 sm:pb-24 border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Content */}
            <div className="lg:col-span-7 space-y-6 text-left">
              <div className="flex flex-wrap items-center gap-3">
                <img
                  src="/zrm-pos-logo.svg"
                  alt="ZRM POS - Smart Sales • Simple Management • Better Business"
                  className="h-10 sm:h-12 w-auto object-contain"
                  referrerPolicy="no-referrer"
                />
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-100/70 border border-blue-200 text-blue-800 text-xs font-semibold shadow-xs">
                  <span className="w-2 h-2 rounded-full bg-blue-600 animate-ping"></span>
                  <span>Specialized Mobile Stores & Repair POS</span>
                </span>
              </div>

              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black text-slate-900 tracking-tight leading-[1.12]">
                Next-Generation <span className="text-blue-600">POS & Repair</span> System for Mobile Retailers
              </h1>

              <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-2xl">
                Streamline counter sales, track dual-IMEI phone numbers, issue repair job sheets with pattern locks, control stock variants, and dispatch instant WhatsApp invoices with <strong>eMobile POS</strong> by <strong>ZRM Solutions</strong>.
              </p>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-3 pt-2">
                <a
                  href={POS_SYSTEM_URL}
                  target="_blank"
                  rel="noreferrer"
                  id="hero-launch-pos-btn"
                  className="flex items-center gap-2 px-6 py-3.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold text-sm sm:text-base shadow-lg shadow-blue-500/20 hover:shadow-blue-500/30 transition-all group"
                >
                  <span>Launch eMobile POS</span>
                  <ExternalLink className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </a>

                <button
                  onClick={onOpenSimulator}
                  id="hero-simulator-btn"
                  className="flex items-center gap-2 px-5 py-3.5 rounded-xl bg-white hover:bg-slate-50 text-slate-800 font-bold text-sm sm:text-base border border-slate-300 shadow-xs hover:border-slate-400 transition-all"
                >
                  <MonitorPlay className="w-4 h-4 text-blue-600" />
                  <span>Try Interactive Demo</span>
                </button>

                <button
                  onClick={onOpenPhpModal}
                  id="hero-php-source-btn"
                  className="flex items-center gap-2 px-4 py-3.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-200 font-semibold text-xs sm:text-sm transition-all"
                  title="Plain PHP + Bootstrap 5 template files"
                >
                  <Code2 className="w-4 h-4 text-blue-400" />
                  <span>PHP & Bootstrap 5 Source</span>
                </button>
              </div>

              {/* Quick Feature Tickers */}
              <div className="pt-4 grid grid-cols-2 sm:grid-cols-3 gap-3 text-xs text-slate-600 font-medium">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>2-Second Counter Checkout</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Dual-IMEI & Warranty Logs</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>WhatsApp & Thermal Invoicing</span>
                </div>
              </div>
            </div>

            {/* Right Interactive Preview Card */}
            <div className="lg:col-span-5">
              <div className="relative mx-auto max-w-md">
                <div className="absolute -inset-1.5 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-3xl blur-md opacity-25"></div>
                
                <div className="relative bg-white rounded-2xl shadow-xl border border-slate-200 overflow-hidden">
                  {/* Card Terminal Header */}
                  <div className="bg-slate-900 px-4 py-2.5 text-white flex items-center justify-between border-b border-slate-800">
                    <div className="flex items-center gap-2.5">
                      <div className="flex gap-1.5">
                        <span className="w-2.5 h-2.5 rounded-full bg-rose-500"></span>
                        <span className="w-2.5 h-2.5 rounded-full bg-amber-500"></span>
                        <span className="w-2.5 h-2.5 rounded-full bg-emerald-500"></span>
                      </div>
                      <img 
                        src="/zrm-pos-logo-dark.svg" 
                        alt="ZRM POS" 
                        className="h-6 w-auto object-contain"
                        referrerPolicy="no-referrer"
                      />
                    </div>
                    <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-400 border border-emerald-500/30">
                      Live Cloud Sync
                    </span>
                  </div>

                  {/* Terminal Content */}
                  <div className="p-5 space-y-4">
                    {/* Live Metric Row */}
                    <div className="grid grid-cols-2 gap-3">
                      <div className="p-3 rounded-xl bg-blue-50/70 border border-blue-100">
                        <span className="text-[11px] font-semibold text-blue-700 block">Today's Revenue</span>
                        <span className="text-xl font-black text-slate-900">$3,480.00</span>
                      </div>
                      <div className="p-3 rounded-xl bg-amber-50/70 border border-amber-100">
                        <span className="text-[11px] font-semibold text-amber-700 block">Repair Lab</span>
                        <span className="text-xl font-black text-slate-900">14 Active Jobs</span>
                      </div>
                    </div>

                    {/* Barcode & IMEI Scanning Simulator Preview */}
                    <div className="p-3 rounded-xl bg-slate-50 border border-slate-200 space-y-2">
                      <div className="flex items-center justify-between text-xs">
                        <span className="font-bold text-slate-700 flex items-center gap-1.5">
                          <ScanLine className="w-3.5 h-3.5 text-blue-600" />
                          <span>Active Barcode / IMEI Scan</span>
                        </span>
                        <span className="text-[10px] font-mono text-emerald-600 font-bold bg-emerald-50 px-1.5 py-0.5 rounded">
                          Scanned
                        </span>
                      </div>
                      <div className="bg-white p-2 rounded-lg border border-slate-200 font-mono text-xs text-slate-800 flex justify-between items-center">
                        <span className="truncate">IMEI: 358921098234901</span>
                        <span className="text-blue-600 font-bold">$1,199.00</span>
                      </div>
                      <div className="text-[10px] text-slate-500 flex justify-between">
                        <span>Model: iPhone 15 Pro Max 256GB</span>
                        <span>Warranty: 1 Year Apple Care</span>
                      </div>
                    </div>

                    {/* Repair Job Ticket Item */}
                    <div className="p-3 rounded-xl bg-slate-50 border border-slate-200 space-y-1.5">
                      <div className="flex justify-between items-center text-xs">
                        <span className="font-bold text-slate-800 flex items-center gap-1.5">
                          <Wrench className="w-3.5 h-3.5 text-amber-500" />
                          <span>Ticket #REP-9042</span>
                        </span>
                        <span className="text-[10px] font-bold text-blue-700 bg-blue-50 px-2 py-0.5 rounded-full">
                          Ready for Pickup
                        </span>
                      </div>
                      <p className="text-[11px] text-slate-600">Samsung Galaxy S23 • Display & Battery</p>
                      <div className="flex justify-between items-center text-[10px] text-slate-500 pt-1 border-t border-slate-200/60">
                        <span>Technician: Bilal Khan</span>
                        <span className="font-bold text-slate-800">$145.00</span>
                      </div>
                    </div>

                    {/* Quick Access Portal Link */}
                    <div className="pt-2">
                      <a
                        href={POS_SYSTEM_URL}
                        target="_blank"
                        rel="noreferrer"
                        className="w-full py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs flex items-center justify-center gap-2 transition-colors"
                      >
                        <span>Access emobile.zrmsolutions.com Portal</span>
                        <ExternalLink className="w-3.5 h-3.5 text-blue-400" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Numbers / Trust Bar */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-slate-900 text-white rounded-3xl p-8 sm:p-10 shadow-xl">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center divide-y md:divide-y-0 md:divide-x divide-slate-800">
            <div className="pt-4 md:pt-0">
              <div className="text-3xl sm:text-4xl font-black text-blue-400">10,000+</div>
              <div className="text-xs sm:text-sm text-slate-300 font-medium mt-1">Smartphones & IMEIs Logged</div>
            </div>
            <div className="pt-4 md:pt-0">
              <div className="text-3xl sm:text-4xl font-black text-emerald-400">&lt; 2 Sec</div>
              <div className="text-xs sm:text-sm text-slate-300 font-medium mt-1">Average Counter Checkout</div>
            </div>
            <div className="pt-4 md:pt-0">
              <div className="text-3xl sm:text-4xl font-black text-indigo-400">99.9%</div>
              <div className="text-xs sm:text-sm text-slate-300 font-medium mt-1">Cloud Service Uptime</div>
            </div>
            <div className="pt-4 md:pt-0">
              <div className="text-3xl sm:text-4xl font-black text-amber-400">100%</div>
              <div className="text-xs sm:text-sm text-slate-300 font-medium mt-1">WhatsApp & Thermal Invoicing</div>
            </div>
          </div>
        </div>
      </section>

      {/* 6 Specialized Modules (Core Feature Grid) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <span className="text-xs font-extrabold uppercase tracking-widest text-blue-600 bg-blue-50 px-3 py-1 rounded-full border border-blue-100">
            Tailored Industry Architecture
          </span>
          <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
            Built Specifically for Mobile Phone & Gadget Retailers
          </h2>
          <p className="text-slate-600 text-sm sm:text-base">
            Generic grocery or boutique POS systems lack the unique requirements of the phone industry. eMobile POS combines IMEI serialization, repair ticketing, and digital customer khata into one unified workflow.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {POS_FEATURES.map((feat) => {
            const iconMap: Record<string, React.ReactNode> = {
              Cpu: <Cpu className="w-6 h-6 text-blue-600" />,
              Wrench: <Wrench className="w-6 h-6 text-amber-600" />,
              Zap: <Zap className="w-6 h-6 text-emerald-600" />,
              Boxes: <Boxes className="w-6 h-6 text-indigo-600" />,
              Users: <Users className="w-6 h-6 text-rose-600" />,
              TrendingUp: <TrendingUp className="w-6 h-6 text-violet-600" />
            };

            return (
              <div
                key={feat.id}
                className="bg-white rounded-2xl p-6 sm:p-7 border border-slate-200 shadow-xs hover:shadow-md hover:border-blue-300 transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 rounded-xl bg-slate-100 flex items-center justify-center">
                      {iconMap[feat.icon] || <Smartphone className="w-6 h-6 text-blue-600" />}
                    </div>
                    {feat.badge && (
                      <span className="text-[11px] font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-slate-100 text-slate-700">
                        {feat.badge}
                      </span>
                    )}
                  </div>

                  <h3 className="text-lg font-bold text-slate-900 mb-2">{feat.title}</h3>
                  <p className="text-sm text-slate-600 leading-relaxed mb-4">{feat.shortDesc}</p>

                  <div className="space-y-2 pt-2 border-t border-slate-100">
                    {feat.keyBenefits.map((b, i) => (
                      <div key={i} className="flex items-start gap-2 text-xs text-slate-700">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                        <span>{b}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-100">
                  <button
                    onClick={() => onNavigate('services')}
                    className="text-xs font-bold text-blue-600 hover:text-blue-700 flex items-center gap-1 group"
                  >
                    <span>Explore module details</span>
                    <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Target Industries */}
      <section className="bg-slate-50 py-16 border-y border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12 space-y-2">
            <span className="text-xs font-bold text-blue-600 uppercase tracking-wider">Industries We Serve</span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
              Who Uses eMobile POS?
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {TARGET_INDUSTRIES.map((ind, idx) => (
              <div key={idx} className="bg-white p-6 rounded-2xl border border-slate-200 shadow-xs space-y-3">
                <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center font-bold">
                  {idx === 0 && <Smartphone className="w-5 h-5" />}
                  {idx === 1 && <Wrench className="w-5 h-5 text-amber-600" />}
                  {idx === 2 && <Headphones className="w-5 h-5" />}
                  {idx === 3 && <Building className="w-5 h-5" />}
                </div>
                <h3 className="font-bold text-base text-slate-900">{ind.title}</h3>
                <p className="text-xs text-slate-600 leading-relaxed">{ind.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Hardware Compatibility Showcase */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-r from-slate-900 to-indigo-950 text-white rounded-3xl p-8 sm:p-12 overflow-hidden shadow-xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7 space-y-4">
              <span className="text-xs font-bold uppercase tracking-widest text-blue-400 bg-blue-900/40 px-3 py-1 rounded-full border border-blue-800">
                Plug & Play Hardware
              </span>
              <h2 className="text-2xl sm:text-4xl font-black tracking-tight text-white">
                Works With Your Existing Printers, Scanners & Cash Drawers
              </h2>
              <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                No proprietary hardware lock-in. eMobile POS connects seamlessly with industry-standard POS peripherals over USB, Bluetooth, or network LAN.
              </p>

              <div className="grid grid-cols-2 sm:grid-cols-2 gap-3 pt-2 text-xs text-slate-200">
                <div className="p-3 rounded-xl bg-white/5 border border-white/10">
                  <strong className="block text-white mb-1">Thermal Receipt Printers</strong>
                  <span>Epson, Xprinter, Rongta 80mm & 58mm ESC/POS</span>
                </div>
                <div className="p-3 rounded-xl bg-white/5 border border-white/10">
                  <strong className="block text-white mb-1">Barcode & QR Scanners</strong>
                  <span>1D/2D Handheld, Wireless Bluetooth, USB table-mount</span>
                </div>
                <div className="p-3 rounded-xl bg-white/5 border border-white/10">
                  <strong className="block text-white mb-1">Automatic Cash Drawers</strong>
                  <span>RJ11 standard pulse triggers on invoice printing</span>
                </div>
                <div className="p-3 rounded-xl bg-white/5 border border-white/10">
                  <strong className="block text-white mb-1">WhatsApp Cloud Receipts</strong>
                  <span>Paperless direct phone dispatch with 1-click</span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-5 flex flex-col items-center justify-center p-6 bg-white/5 border border-white/10 rounded-2xl space-y-4 text-center">
              <div className="w-16 h-16 rounded-2xl bg-blue-600/30 text-blue-400 flex items-center justify-center">
                <Printer className="w-8 h-8" />
              </div>
              <h3 className="font-bold text-lg text-white">Test the POS Simulator</h3>
              <p className="text-xs text-slate-300">
                See how rapid counter checkout and thermal receipt generation work right inside your browser.
              </p>
              <button
                onClick={onOpenSimulator}
                className="w-full py-3 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-bold text-xs sm:text-sm shadow transition-all"
              >
                Open POS Simulator
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Banner */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white border border-slate-200 rounded-3xl p-8 sm:p-12 shadow-sm text-center space-y-6">
          <span className="text-xs font-bold uppercase tracking-widest text-emerald-700 bg-emerald-50 px-3 py-1 rounded-full border border-emerald-200">
            System Live & Ready
          </span>
          <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight max-w-2xl mx-auto">
            Experience eMobile POS Today
          </h2>
          <p className="text-slate-600 text-sm sm:text-base max-w-xl mx-auto">
            Access the live POS system at <strong className="text-slate-900">emobile.zrmsolutions.com</strong> or contact our team for a personalized walkthrough.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
            <a
              href={POS_SYSTEM_URL}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 px-6 py-3 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold text-sm shadow transition-all"
            >
              <span>Launch Live System</span>
              <ExternalLink className="w-4 h-4" />
            </a>

            <button
              onClick={() => onNavigate('contact')}
              className="px-6 py-3 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-800 font-bold text-sm transition-all"
            >
              Request a Free Consultation
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};
