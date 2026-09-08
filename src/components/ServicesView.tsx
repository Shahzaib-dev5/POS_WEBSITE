import React, { useState } from 'react';
import { 
  Cpu, 
  Wrench, 
  Zap, 
  Boxes, 
  Users, 
  TrendingUp, 
  Check, 
  ArrowRight, 
  ExternalLink, 
  Printer, 
  Smartphone,
  ShieldAlert,
  FileSpreadsheet,
  Layers,
  Sparkles
} from 'lucide-react';
import { POS_FEATURES, POS_SYSTEM_URL } from '../data/posData';
import { PageId, PosFeature } from '../types';

interface ServicesViewProps {
  onNavigate: (page: PageId) => void;
  onOpenSimulator: () => void;
}

export const ServicesView: React.FC<ServicesViewProps> = ({ onNavigate, onOpenSimulator }) => {
  const [activeFeatureId, setActiveFeatureId] = useState<string>(POS_FEATURES[0].id);

  const activeFeature = POS_FEATURES.find(f => f.id === activeFeatureId) || POS_FEATURES[0];

  const iconMap: Record<string, React.ReactNode> = {
    Cpu: <Cpu className="w-5 h-5 text-blue-600" />,
    Wrench: <Wrench className="w-5 h-5 text-amber-600" />,
    Zap: <Zap className="w-5 h-5 text-emerald-600" />,
    Boxes: <Boxes className="w-5 h-5 text-indigo-600" />,
    Users: <Users className="w-5 h-5 text-rose-600" />,
    TrendingUp: <TrendingUp className="w-5 h-5 text-violet-600" />
  };

  return (
    <div className="py-12 sm:py-16 space-y-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto space-y-4">
        <span className="text-xs font-bold uppercase tracking-widest text-blue-600 bg-blue-50 px-3 py-1 rounded-full border border-blue-100">
          Comprehensive Feature Suite
        </span>
        <h1 className="text-3xl sm:text-5xl font-black text-slate-900 tracking-tight">
          Every Tool You Need to Run a Modern Mobile Business
        </h1>
        <p className="text-base sm:text-lg text-slate-600">
          From the moment a new handset arrives at your loading dock to customer checkout and warranty returns, eMobile POS organizes your entire operational workflow.
        </p>
      </div>

      {/* Interactive Feature Deep Dive Showcase */}
      <div className="bg-white rounded-3xl border border-slate-200 shadow-md overflow-hidden">
        <div className="grid grid-cols-1 lg:grid-cols-12">
          {/* Left Module Navigation */}
          <div className="lg:col-span-4 bg-slate-50 p-4 sm:p-6 border-b lg:border-b-0 lg:border-r border-slate-200 space-y-2">
            <div className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-3 px-2">
              Select POS Module
            </div>
            {POS_FEATURES.map((feat) => {
              const isSelected = feat.id === activeFeatureId;
              return (
                <button
                  key={feat.id}
                  onClick={() => setActiveFeatureId(feat.id)}
                  className={`w-full flex items-center justify-between p-3.5 rounded-xl text-left transition-all ${
                    isSelected
                      ? 'bg-white text-blue-600 shadow-xs border border-slate-200 font-bold'
                      : 'text-slate-700 hover:bg-slate-100'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-slate-100">
                      {iconMap[feat.icon]}
                    </div>
                    <div>
                      <div className="text-xs sm:text-sm font-semibold text-slate-900 line-clamp-1">{feat.title}</div>
                      <span className="text-[10px] text-slate-500">{feat.category}</span>
                    </div>
                  </div>
                  <ArrowRight className={`w-4 h-4 ${isSelected ? 'text-blue-600' : 'text-slate-300'}`} />
                </button>
              );
            })}
          </div>

          {/* Right Detailed Panel */}
          <div className="lg:col-span-8 p-6 sm:p-10 flex flex-col justify-between space-y-6">
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <span className="text-xs font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-blue-50 text-blue-700 border border-blue-200">
                  {activeFeature.category}
                </span>
                {activeFeature.badge && (
                  <span className="text-xs font-semibold px-2.5 py-0.5 rounded-full bg-slate-100 text-slate-700">
                    {activeFeature.badge}
                  </span>
                )}
              </div>

              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
                {activeFeature.title}
              </h2>

              <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                {activeFeature.detailedDesc}
              </p>

              <div className="pt-4 border-t border-slate-100 space-y-3">
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500">
                  Key Capabilities & Benefits:
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {activeFeature.keyBenefits.map((b, idx) => (
                    <div key={idx} className="flex items-start gap-2.5 p-3 rounded-xl bg-slate-50 border border-slate-100 text-xs text-slate-700 font-medium">
                      <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                      <span>{b}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="pt-6 border-t border-slate-200 flex flex-wrap items-center justify-between gap-4">
              <button
                onClick={onOpenSimulator}
                className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white text-xs sm:text-sm font-bold shadow-xs transition-colors"
              >
                <span>Try this feature in live simulator</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <a
                href={POS_SYSTEM_URL}
                target="_blank"
                rel="noreferrer"
                className="text-xs font-semibold text-slate-600 hover:text-slate-900 flex items-center gap-1"
              >
                <span>Access live system at emobile.zrmsolutions.com</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Module Matrix Comparison */}
      <div className="space-y-6">
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
            System Capabilities Matrix
          </h2>
          <p className="text-xs sm:text-sm text-slate-600">
            Compare features across different store scale requirements.
          </p>
        </div>

        <div className="bg-white rounded-2xl border border-slate-200 shadow-xs overflow-x-auto">
          <table className="w-full text-left text-xs sm:text-sm border-collapse">
            <thead>
              <tr className="bg-slate-50 border-b border-slate-200 text-slate-700 font-bold">
                <th className="p-4">Feature / Module</th>
                <th className="p-4 text-center">Single Store</th>
                <th className="p-4 text-center">Store + Repair Lab</th>
                <th className="p-4 text-center">Multi-Branch Chain</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 text-slate-600">
              <tr>
                <td className="p-4 font-semibold text-slate-900">Dual IMEI & Serial Barcode Tracking</td>
                <td className="p-4 text-center text-emerald-600 font-bold">✓ (Up to 2,000)</td>
                <td className="p-4 text-center text-emerald-600 font-bold">✓ Unlimited</td>
                <td className="p-4 text-center text-emerald-600 font-bold">✓ Unlimited</td>
              </tr>
              <tr>
                <td className="p-4 font-semibold text-slate-900">Repair Job Sheet & Pattern Lock Recorder</td>
                <td className="p-4 text-center text-slate-400">Basic</td>
                <td className="p-4 text-center text-emerald-600 font-bold">✓ Advanced</td>
                <td className="p-4 text-center text-emerald-600 font-bold">✓ Advanced Multi-Lab</td>
              </tr>
              <tr>
                <td className="p-4 font-semibold text-slate-900">Technician Labor Commission Audit</td>
                <td className="p-4 text-center text-slate-400">—</td>
                <td className="p-4 text-center text-emerald-600 font-bold">✓ Included</td>
                <td className="p-4 text-center text-emerald-600 font-bold">✓ Included</td>
              </tr>
              <tr>
                <td className="p-4 font-semibold text-slate-900">Thermal 80mm/58mm & WhatsApp Receipts</td>
                <td className="p-4 text-center text-emerald-600 font-bold">✓</td>
                <td className="p-4 text-center text-emerald-600 font-bold">✓</td>
                <td className="p-4 text-center text-emerald-600 font-bold">✓</td>
              </tr>
              <tr>
                <td className="p-4 font-semibold text-slate-900">Customer Khata / Udhaar Credit Ledger</td>
                <td className="p-4 text-center text-emerald-600 font-bold">✓</td>
                <td className="p-4 text-center text-emerald-600 font-bold">✓</td>
                <td className="p-4 text-center text-emerald-600 font-bold">✓</td>
              </tr>
              <tr>
                <td className="p-4 font-semibold text-slate-900">Inter-Branch Stock Transfer with Transit Tracking</td>
                <td className="p-4 text-center text-slate-400">—</td>
                <td className="p-4 text-center text-slate-400">—</td>
                <td className="p-4 text-center text-emerald-600 font-bold">✓ Included</td>
              </tr>
              <tr>
                <td className="p-4 font-semibold text-slate-900">Custom ERP & API Integrations by ZRM Solutions</td>
                <td className="p-4 text-center text-slate-400">—</td>
                <td className="p-4 text-center text-slate-400">Optional</td>
                <td className="p-4 text-center text-emerald-600 font-bold">✓ Tailored</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* Custom Engineering Banner */}
      <div className="p-8 sm:p-10 rounded-3xl bg-slate-900 text-white flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="space-y-2 text-center md:text-left">
          <h3 className="text-xl sm:text-2xl font-bold">Need Custom ERP or Database Migration?</h3>
          <p className="text-xs sm:text-sm text-slate-300 max-w-xl">
            ZRM Solutions provides custom ERP modules, migration from existing Excel databases, and specialized hardware setups.
          </p>
        </div>
        <button
          onClick={() => onNavigate('contact')}
          className="px-6 py-3 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-bold text-xs sm:text-sm shrink-0 shadow transition-colors"
        >
          Speak with ZRM Solutions
        </button>
      </div>
    </div>
  );
};
