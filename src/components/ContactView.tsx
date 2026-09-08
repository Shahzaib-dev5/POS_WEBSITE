import React, { useState } from 'react';
import { 
  Mail, 
  Phone, 
  MapPin, 
  ExternalLink, 
  Clock, 
  Send, 
  CheckCircle2, 
  MessageSquare, 
  Building, 
  Smartphone,
  ShieldCheck
} from 'lucide-react';
import { POS_SYSTEM_URL } from '../data/posData';

export const ContactView: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    businessName: '',
    storeType: 'Mobile Retail Store',
    counterCount: '1-2 Counters',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 800);
  };

  return (
    <div className="py-12 sm:py-16 space-y-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto space-y-4">
        <span className="text-xs font-bold uppercase tracking-widest text-blue-600 bg-blue-50 px-3 py-1 rounded-full border border-blue-100">
          We're Here to Assist
        </span>
        <h1 className="text-3xl sm:text-5xl font-black text-slate-900 tracking-tight">
          Contact ZRM Solutions & Request Onboarding
        </h1>
        <p className="text-base sm:text-lg text-slate-600">
          Whether you need a full demonstration, help configuring your thermal receipt printers, or a custom ERP integration, our specialists are ready to help.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
        {/* Contact Form */}
        <div className="lg:col-span-7 bg-white rounded-3xl p-6 sm:p-10 border border-slate-200 shadow-sm">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center font-bold">
              <MessageSquare className="w-5 h-5" />
            </div>
            <div>
              <h2 className="text-xl font-bold text-slate-900">Send an Inquiry or Request Demo</h2>
              <p className="text-xs text-slate-500">We typically reply within 1 business hour on WhatsApp or email.</p>
            </div>
          </div>

          {submitted ? (
            <div className="p-8 rounded-2xl bg-emerald-50 border border-emerald-200 text-center space-y-4">
              <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold text-emerald-900">Inquiry Received Successfully!</h3>
              <p className="text-xs sm:text-sm text-emerald-800 max-w-md mx-auto">
                Thank you, <strong>{formData.name}</strong>. A ZRM Solutions POS specialist will reach out to you via WhatsApp at <strong>{formData.phone}</strong> shortly.
              </p>
              <button
                onClick={() => setSubmitted(false)}
                className="mt-4 px-6 py-2.5 rounded-xl bg-emerald-700 hover:bg-emerald-800 text-white text-xs font-bold transition-colors"
              >
                Send Another Message
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                    Your Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Shahzaib Ali"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 font-medium"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                    Phone / WhatsApp *
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="+92 300 1234567"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 font-medium"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                    Email Address
                  </label>
                  <input
                    type="email"
                    placeholder="name@store.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 font-medium"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                    Shop / Store Name
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. Mobile World City Center"
                    value={formData.businessName}
                    onChange={(e) => setFormData({ ...formData, businessName: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 font-medium"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                    Primary Business Focus
                  </label>
                  <select
                    value={formData.storeType}
                    onChange={(e) => setFormData({ ...formData, storeType: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 font-medium"
                  >
                    <option value="Mobile Retail Store">Smartphones & Retail</option>
                    <option value="Mobile Repair Workshop">Repair Lab & Diagnostics</option>
                    <option value="Accessories Wholesaler">Accessories & Wholesale</option>
                    <option value="Multi-Branch Chain">Multi-Store Chain / Franchise</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                    Number of Counters
                  </label>
                  <select
                    value={formData.counterCount}
                    onChange={(e) => setFormData({ ...formData, counterCount: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 font-medium"
                  >
                    <option value="1 Counter">1 Counter / Cashier</option>
                    <option value="2-3 Counters">2 – 3 Counters</option>
                    <option value="4+ Counters">4+ Counters</option>
                    <option value="Multiple Locations">Multiple Branch Locations</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                  How Can We Help You?
                </label>
                <textarea
                  rows={4}
                  placeholder="Tell us if you need help with printer setup, IMEI barcode imports, or live demo..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 font-medium"
                ></textarea>
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full py-3.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold text-sm shadow-md flex items-center justify-center gap-2 transition-all cursor-pointer"
                >
                  <Send className="w-4 h-4" />
                  <span>{loading ? 'Submitting Details...' : 'Submit Demo & Inquiry Request'}</span>
                </button>
              </div>
            </form>
          )}
        </div>

        {/* Right Info & Live Portal Column */}
        <div className="lg:col-span-5 space-y-6">
          {/* Active Terminal Portal Card */}
          <div className="bg-gradient-to-br from-slate-900 to-indigo-950 text-white rounded-3xl p-6 sm:p-8 shadow-xl space-y-4">
            <span className="text-[10px] font-bold uppercase tracking-widest text-emerald-400 bg-emerald-950/60 px-2.5 py-1 rounded-full border border-emerald-800/80">
              System Online
            </span>
            <h3 className="text-xl font-black">Direct Portal Login</h3>
            <p className="text-xs text-slate-300 leading-relaxed">
              If you are an active merchant or technician, open your live counter terminal at <strong>emobile.zrmsolutions.com</strong>:
            </p>
            <a
              href={POS_SYSTEM_URL}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center gap-2 w-full py-3 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-bold text-xs sm:text-sm shadow transition-colors"
            >
              <span>Access emobile.zrmsolutions.com</span>
              <ExternalLink className="w-4 h-4" />
            </a>
          </div>

          {/* Contact Details Card */}
          <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-sm space-y-5">
            <h3 className="text-lg font-bold text-slate-900">ZRM Solutions Information</h3>

            <div className="space-y-4 text-xs sm:text-sm">
              <div className="flex items-start gap-3.5">
                <div className="p-2 rounded-xl bg-blue-50 text-blue-600 mt-0.5">
                  <Mail className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-[11px] font-bold uppercase text-slate-400">Email Inquiries</div>
                  <a href="mailto:support@zrmsolutions.com" className="font-semibold text-slate-800 hover:text-blue-600">
                    support@zrmsolutions.com
                  </a>
                  <div className="text-[11px] text-slate-400">info@zrmsolutions.com</div>
                </div>
              </div>

              <div className="flex items-start gap-3.5">
                <div className="p-2 rounded-xl bg-emerald-50 text-emerald-600 mt-0.5">
                  <Phone className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-[11px] font-bold uppercase text-slate-400">WhatsApp Hotline</div>
                  <div className="font-semibold text-slate-800">+92 300 0000000</div>
                  <div className="text-[11px] text-emerald-600 font-medium">Instant technician chat & demos</div>
                </div>
              </div>

              <div className="flex items-start gap-3.5">
                <div className="p-2 rounded-xl bg-amber-50 text-amber-600 mt-0.5">
                  <Clock className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-[11px] font-bold uppercase text-slate-400">Working Hours</div>
                  <div className="font-semibold text-slate-800">Monday – Saturday</div>
                  <div className="text-[11px] text-slate-500">9:00 AM – 9:00 PM (Local Time)</div>
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-slate-100 flex items-center gap-2 text-xs text-slate-500">
              <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0" />
              <span>Official software service product by ZRM Solutions (zrmsolutions.com).</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
