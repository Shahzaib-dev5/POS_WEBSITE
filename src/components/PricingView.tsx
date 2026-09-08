import React, { useState } from 'react';
import { 
  Check, 
  ExternalLink, 
  HelpCircle, 
  Sparkles, 
  ChevronDown, 
  ChevronUp, 
  Headphones, 
  ShieldCheck,
  Building2
} from 'lucide-react';
import { PRICING_PLANS, FAQS, POS_SYSTEM_URL } from '../data/posData';
import { PageId } from '../types';

interface PricingViewProps {
  onNavigate: (page: PageId) => void;
  onOpenSimulator: () => void;
}

export const PricingView: React.FC<PricingViewProps> = ({ onNavigate, onOpenSimulator }) => {
  const [billingCycle, setBillingCycle] = useState<'monthly' | 'annual'>('annual');
  const [openFaqIdx, setOpenFaqIdx] = useState<number | null>(0);

  const toggleFaq = (idx: number) => {
    setOpenFaqIdx(openFaqIdx === idx ? null : idx);
  };

  return (
    <div className="py-12 sm:py-16 space-y-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto space-y-4">
        <span className="text-xs font-bold uppercase tracking-widest text-blue-600 bg-blue-50 px-3 py-1 rounded-full border border-blue-100">
          Transparent Investment
        </span>
        <h1 className="text-3xl sm:text-5xl font-black text-slate-900 tracking-tight">
          Affordable Packages for Single Shops & Multi-Branch Chains
        </h1>
        <p className="text-base sm:text-lg text-slate-600">
          Choose the plan that matches your counter volume. All plans include continuous cloud backups and free software updates.
        </p>

        {/* Monthly vs Annual Toggle */}
        <div className="pt-4 flex items-center justify-center gap-3">
          <span className={`text-sm font-semibold ${billingCycle === 'monthly' ? 'text-slate-900' : 'text-slate-500'}`}>
            Monthly
          </span>
          <button
            onClick={() => setBillingCycle(billingCycle === 'monthly' ? 'annual' : 'monthly')}
            className="w-14 h-7 rounded-full bg-slate-900 p-1 transition-colors relative cursor-pointer"
            aria-label="Toggle billing cycle"
          >
            <div
              className={`w-5 h-5 rounded-full bg-white shadow-md transition-transform ${
                billingCycle === 'annual' ? 'translate-x-7 bg-blue-500' : 'translate-x-0'
              }`}
            />
          </button>
          <span className={`text-sm font-semibold flex items-center gap-1.5 ${billingCycle === 'annual' ? 'text-slate-900' : 'text-slate-500'}`}>
            <span>Annual</span>
            <span className="text-[10px] font-bold bg-emerald-100 text-emerald-800 px-2 py-0.5 rounded-full border border-emerald-200">
              Save 20%
            </span>
          </span>
        </div>
      </div>

      {/* Pricing Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
        {PRICING_PLANS.map((plan) => {
          const price = billingCycle === 'annual' ? Math.round(plan.annualPrice / 12) : plan.monthlyPrice;

          return (
            <div
              key={plan.id}
              className={`bg-white rounded-3xl p-8 border flex flex-col justify-between transition-all relative ${
                plan.isPopular
                  ? 'border-blue-500 shadow-xl ring-2 ring-blue-500/20'
                  : 'border-slate-200 shadow-sm hover:shadow-md'
              }`}
            >
              {plan.isPopular && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-gradient-to-r from-blue-600 to-indigo-600 text-white text-xs font-black uppercase tracking-wider px-3.5 py-1 rounded-full shadow-md">
                  Most Popular for Mobile Stores
                </div>
              )}

              <div>
                <div className="space-y-2 mb-6">
                  <h3 className="text-xl font-black text-slate-900">{plan.name}</h3>
                  <p className="text-xs text-slate-500 min-h-[36px]">{plan.tagline}</p>
                </div>

                <div className="flex items-baseline gap-1 mb-6 pb-6 border-b border-slate-100">
                  <span className="text-4xl sm:text-5xl font-black text-slate-900">${price}</span>
                  <span className="text-xs text-slate-500 font-semibold">/ month</span>
                  {billingCycle === 'annual' && (
                    <span className="text-[11px] text-slate-400 block ml-2">billed annually (${plan.annualPrice}/yr)</span>
                  )}
                </div>

                <div className="space-y-2 mb-6 text-xs text-slate-600 bg-slate-50 p-3.5 rounded-xl border border-slate-100">
                  <div>Counter Limit: <strong className="text-slate-900">{plan.countersAllowed}</strong></div>
                  <div>Support: <strong className="text-slate-900">{plan.supportLevel}</strong></div>
                </div>

                <div className="space-y-3 mb-8">
                  <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider block">
                    What's Included:
                  </span>
                  {plan.features.map((f, idx) => (
                    <div key={idx} className="flex items-start gap-2.5 text-xs text-slate-700">
                      <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                      <span>{f}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-4 border-t border-slate-100 space-y-2">
                <button
                  onClick={() => onNavigate('contact')}
                  className={`w-full py-3 rounded-xl font-bold text-xs sm:text-sm shadow-xs transition-colors ${
                    plan.isPopular
                      ? 'bg-blue-600 hover:bg-blue-700 text-white'
                      : 'bg-slate-900 hover:bg-slate-800 text-white'
                  }`}
                >
                  Get Started with {plan.name}
                </button>

                <button
                  onClick={onOpenSimulator}
                  className="w-full py-2 text-xs text-slate-500 hover:text-slate-800 font-semibold"
                >
                  Test in interactive simulator first
                </button>
              </div>
            </div>
          );
        })}
      </div>

      {/* Enterprise Custom Banner */}
      <div className="bg-slate-900 text-white rounded-3xl p-8 sm:p-10 border border-slate-800 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="space-y-2 text-center md:text-left">
          <div className="flex items-center justify-center md:justify-start gap-2 text-blue-400 font-bold text-xs uppercase tracking-wider">
            <Building2 className="w-4 h-4" />
            <span>Regional Distributors & Franchise Chains</span>
          </div>
          <h3 className="text-xl sm:text-2xl font-black">Need a Dedicated Server or Custom ERP?</h3>
          <p className="text-xs sm:text-sm text-slate-300 max-w-xl">
            ZRM Solutions can deploy eMobile POS onto your private Virtual Private Server (VPS), customize invoice printing, and integrate directly with your supplier APIs.
          </p>
        </div>
        <button
          onClick={() => onNavigate('contact')}
          className="px-6 py-3 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-bold text-xs sm:text-sm shrink-0 shadow transition-colors"
        >
          Contact Enterprise Sales
        </button>
      </div>

      {/* FAQ Accordion */}
      <div className="space-y-6 max-w-4xl mx-auto">
        <div className="text-center space-y-2">
          <span className="text-xs font-bold text-blue-600 uppercase tracking-wider">Common Questions</span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
            Frequently Asked Questions
          </h2>
        </div>

        <div className="space-y-3">
          {FAQS.map((faq, idx) => {
            const isOpen = openFaqIdx === idx;
            return (
              <div
                key={idx}
                className="bg-white rounded-2xl border border-slate-200 overflow-hidden transition-all shadow-xs"
              >
                <button
                  onClick={() => toggleFaq(idx)}
                  className="w-full p-5 text-left flex justify-between items-center gap-4 font-bold text-sm sm:text-base text-slate-900 hover:text-blue-600"
                >
                  <span>{faq.question}</span>
                  {isOpen ? (
                    <ChevronUp className="w-5 h-5 text-blue-600 shrink-0" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-slate-400 shrink-0" />
                  )}
                </button>
                {isOpen && (
                  <div className="px-5 pb-5 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-100 pt-3">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
