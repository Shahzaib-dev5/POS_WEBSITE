import React, { useState } from 'react';
import { 
  X, 
  ShoppingCart, 
  Wrench, 
  Printer, 
  ExternalLink, 
  Plus, 
  Trash2, 
  Search, 
  CheckCircle2, 
  Smartphone, 
  Receipt, 
  FileText, 
  Share2, 
  CreditCard, 
  Banknote, 
  BookOpen, 
  RefreshCw,
  QrCode
} from 'lucide-react';
import { SAMPLE_PRODUCTS, SAMPLE_REPAIR_JOBS, POS_SYSTEM_URL } from '../data/posData';
import { SampleProduct, RepairJobStatus } from '../types';

interface PosSimulatorModalProps {
  isOpen: boolean;
  onClose: () => void;
}

interface CartItem {
  product: SampleProduct;
  quantity: number;
  selectedImei?: string;
}

export const PosSimulatorModal: React.FC<PosSimulatorModalProps> = ({ isOpen, onClose }) => {
  const [activeTab, setActiveTab] = useState<'billing' | 'repair'>('billing');
  const [cart, setCart] = useState<CartItem[]>([
    {
      product: SAMPLE_PRODUCTS[0],
      quantity: 1,
      selectedImei: SAMPLE_PRODUCTS[0].imei
    },
    {
      product: SAMPLE_PRODUCTS[2],
      quantity: 2
    }
  ]);
  const [searchQuery, setSearchQuery] = useState('');
  const [discountAmount, setDiscountAmount] = useState<number>(20);
  const [paymentMethod, setPaymentMethod] = useState<'cash' | 'card' | 'khata'>('cash');
  const [customerName, setCustomerName] = useState('Hamza Sheikh');
  const [customerPhone, setCustomerPhone] = useState('+92 301 8899771');
  const [showReceiptModal, setShowReceiptModal] = useState(false);

  // Repair State
  const [repairJobs, setRepairJobs] = useState<RepairJobStatus[]>(SAMPLE_REPAIR_JOBS);
  const [selectedJob, setSelectedJob] = useState<RepairJobStatus>(SAMPLE_REPAIR_JOBS[0]);
  const [repairFilter, setRepairFilter] = useState<string>('all');

  if (!isOpen) return null;

  // Calculation
  const subtotal = cart.reduce((acc, item) => acc + item.product.price * item.quantity, 0);
  const total = Math.max(0, subtotal - discountAmount);

  const handleAddToCart = (product: SampleProduct) => {
    const existing = cart.find(c => c.product.id === product.id);
    if (existing) {
      setCart(cart.map(c => c.product.id === product.id ? { ...c, quantity: c.quantity + 1 } : c));
    } else {
      setCart([...cart, { product, quantity: 1, selectedImei: product.imei }]);
    }
  };

  const handleRemoveFromCart = (productId: string) => {
    setCart(cart.filter(c => c.product.id !== productId));
  };

  const handleUpdateStatus = (ticketNumber: string, newStatus: RepairJobStatus['status']) => {
    const updated = repairJobs.map(job => 
      job.ticketNumber === ticketNumber ? { ...job, status: newStatus } : job
    );
    setRepairJobs(updated);
    if (selectedJob.ticketNumber === ticketNumber) {
      setSelectedJob({ ...selectedJob, status: newStatus });
    }
  };

  const filteredProducts = SAMPLE_PRODUCTS.filter(p => 
    p.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    (p.imei && p.imei.includes(searchQuery)) ||
    p.barcode.includes(searchQuery)
  );

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-slate-950/80 backdrop-blur-xs overflow-y-auto">
      <div className="bg-white rounded-2xl shadow-2xl border border-slate-200 w-full max-w-5xl overflow-hidden flex flex-col max-h-[90vh]">
        {/* Modal Header */}
        <div className="bg-slate-900 text-white px-5 py-3 flex items-center justify-between border-b border-slate-800">
          <div className="flex items-center gap-3">
            <img 
              src="/zrm-pos-logo-dark.svg" 
              alt="ZRM POS" 
              className="h-8 w-auto object-contain"
              referrerPolicy="no-referrer"
            />
            <div className="border-l border-slate-700 pl-3">
              <div className="flex items-center gap-2">
                <span className="font-bold text-sm sm:text-base">Interactive POS Counter</span>
                <span className="text-[10px] uppercase font-bold bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 px-2 py-0.5 rounded">
                  Live Demo
                </span>
              </div>
              <p className="text-[11px] text-slate-400">
                Experience dual-IMEI scanning, repair ticketing & thermal receipt generation.
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <a
              href={POS_SYSTEM_URL}
              target="_blank"
              rel="noreferrer"
              className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-blue-600 hover:bg-blue-500 text-white text-xs font-semibold shadow-xs"
            >
              <span>Go to emobile.zrmsolutions.com</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
            <button
              onClick={onClose}
              className="p-1.5 text-slate-400 hover:text-white rounded-lg hover:bg-slate-800 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Tab Navigation */}
        <div className="bg-slate-100 px-5 py-2.5 border-b border-slate-200 flex flex-wrap justify-between items-center gap-2">
          <div className="flex items-center gap-2">
            <button
              onClick={() => setActiveTab('billing')}
              className={`flex items-center gap-2 px-4 py-1.5 rounded-lg text-xs sm:text-sm font-bold transition-all ${
                activeTab === 'billing'
                  ? 'bg-white text-blue-600 shadow-xs border border-slate-200'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              <ShoppingCart className="w-4 h-4" />
              <span>Counter POS & Barcode Checkout</span>
            </button>

            <button
              onClick={() => setActiveTab('repair')}
              className={`flex items-center gap-2 px-4 py-1.5 rounded-lg text-xs sm:text-sm font-bold transition-all ${
                activeTab === 'repair'
                  ? 'bg-white text-blue-600 shadow-xs border border-slate-200'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              <Wrench className="w-4 h-4" />
              <span>Mobile Repair Job Sheets</span>
            </button>
          </div>

          <div className="text-xs text-slate-500 hidden sm:block">
            Cashier: <strong className="text-slate-700">Admin (Terminal #01)</strong>
          </div>
        </div>

        {/* Modal Body */}
        <div className="flex-1 overflow-y-auto p-4 sm:p-6 bg-slate-50">
          {activeTab === 'billing' ? (
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
              {/* Left Column: Product Selection */}
              <div className="lg:col-span-7 space-y-4">
                <div className="flex items-center gap-2 bg-white p-2.5 rounded-xl border border-slate-200 shadow-xs">
                  <Search className="w-4 h-4 text-slate-400 ml-1" />
                  <input
                    type="text"
                    placeholder="Scan Barcode or Search by Model / IMEI (e.g. 3589210...)"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full text-xs sm:text-sm outline-none bg-transparent"
                  />
                  {searchQuery && (
                    <button onClick={() => setSearchQuery('')} className="text-xs text-slate-400 hover:text-slate-600">
                      Clear
                    </button>
                  )}
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {filteredProducts.map((p) => (
                    <div 
                      key={p.id}
                      className="bg-white p-3.5 rounded-xl border border-slate-200 shadow-xs hover:border-blue-300 transition-all flex flex-col justify-between"
                    >
                      <div>
                        <div className="flex justify-between items-start mb-1">
                          <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded bg-slate-100 text-slate-600">
                            {p.category}
                          </span>
                          <span className="text-xs font-semibold text-emerald-600">
                            In Stock: {p.stock}
                          </span>
                        </div>
                        <h4 className="font-bold text-xs sm:text-sm text-slate-800 line-clamp-2">
                          {p.name}
                        </h4>
                        {p.imei && (
                          <div className="mt-1 font-mono text-[10px] text-blue-600 bg-blue-50 px-1.5 py-0.5 rounded inline-block">
                            IMEI: {p.imei}
                          </div>
                        )}
                      </div>

                      <div className="mt-3 pt-2 border-t border-slate-100 flex items-center justify-between">
                        <span className="font-extrabold text-sm text-slate-900">
                          ${p.price.toFixed(2)}
                        </span>
                        <button
                          onClick={() => handleAddToCart(p)}
                          className="flex items-center gap-1 px-2.5 py-1 rounded-md bg-blue-600 hover:bg-blue-700 text-white text-xs font-semibold transition-colors"
                        >
                          <Plus className="w-3.5 h-3.5" />
                          <span>Add</span>
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Right Column: Checkout Cart & Bill */}
              <div className="lg:col-span-5 bg-white p-4 sm:p-5 rounded-2xl border border-slate-200 shadow-xs flex flex-col justify-between space-y-4">
                <div>
                  <div className="flex justify-between items-center pb-3 border-b border-slate-200">
                    <h3 className="font-bold text-sm text-slate-900 flex items-center gap-1.5">
                      <Receipt className="w-4 h-4 text-blue-600" />
                      <span>Current Order Bill</span>
                    </h3>
                    <button 
                      onClick={() => setCart([])}
                      className="text-xs text-rose-600 hover:underline"
                    >
                      Clear Cart
                    </button>
                  </div>

                  {/* Customer Info */}
                  <div className="my-3 p-2.5 rounded-lg bg-slate-50 border border-slate-200 space-y-2">
                    <div className="grid grid-cols-2 gap-2 text-xs">
                      <div>
                        <label className="block text-[10px] uppercase font-bold text-slate-500">Customer Name</label>
                        <input
                          type="text"
                          value={customerName}
                          onChange={(e) => setCustomerName(e.target.value)}
                          className="w-full bg-white border border-slate-200 rounded px-2 py-1 font-medium text-slate-800"
                        />
                      </div>
                      <div>
                        <label className="block text-[10px] uppercase font-bold text-slate-500">WhatsApp / Phone</label>
                        <input
                          type="text"
                          value={customerPhone}
                          onChange={(e) => setCustomerPhone(e.target.value)}
                          className="w-full bg-white border border-slate-200 rounded px-2 py-1 font-medium text-slate-800"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Items List */}
                  <div className="space-y-2.5 max-h-48 overflow-y-auto pr-1">
                    {cart.length === 0 ? (
                      <div className="text-center py-8 text-slate-400 text-xs">
                        No items in cart. Click "Add" on any product.
                      </div>
                    ) : (
                      cart.map((item) => (
                        <div key={item.product.id} className="p-2 rounded-lg bg-slate-50 border border-slate-100 flex items-center justify-between text-xs">
                          <div className="max-w-[65%]">
                            <div className="font-semibold text-slate-800 truncate">{item.product.name}</div>
                            {item.selectedImei && (
                              <div className="font-mono text-[9px] text-blue-600">IMEI: {item.selectedImei}</div>
                            )}
                            <div className="text-[10px] text-slate-500">
                              Qty: {item.quantity} × ${item.product.price.toFixed(2)}
                            </div>
                          </div>
                          <div className="flex items-center gap-2">
                            <span className="font-bold text-slate-900">
                              ${(item.product.price * item.quantity).toFixed(2)}
                            </span>
                            <button
                              onClick={() => handleRemoveFromCart(item.product.id)}
                              className="text-slate-400 hover:text-rose-600 p-1"
                            >
                              <Trash2 className="w-3.5 h-3.5" />
                            </button>
                          </div>
                        </div>
                      ))
                    )}
                  </div>
                </div>

                {/* Bill Summary & Payment */}
                <div className="space-y-3 pt-3 border-t border-slate-200">
                  <div className="space-y-1.5 text-xs text-slate-600">
                    <div className="flex justify-between">
                      <span>Subtotal:</span>
                      <span className="font-semibold text-slate-800">${subtotal.toFixed(2)}</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span>Special Discount:</span>
                      <div className="flex items-center gap-1">
                        <span className="text-slate-400">$</span>
                        <input
                          type="number"
                          value={discountAmount}
                          onChange={(e) => setDiscountAmount(Number(e.target.value))}
                          className="w-16 bg-slate-50 border border-slate-200 rounded px-1.5 py-0.5 text-right font-medium"
                        />
                      </div>
                    </div>
                    <div className="flex justify-between text-sm font-extrabold text-slate-900 pt-1 border-t border-dashed">
                      <span>Net Payable:</span>
                      <span className="text-blue-600 font-mono text-base">${total.toFixed(2)}</span>
                    </div>
                  </div>

                  {/* Payment Method Selector */}
                  <div>
                    <label className="block text-[10px] uppercase font-bold text-slate-500 mb-1.5">
                      Payment Tender
                    </label>
                    <div className="grid grid-cols-3 gap-1.5">
                      <button
                        onClick={() => setPaymentMethod('cash')}
                        className={`flex items-center justify-center gap-1 py-1.5 rounded-lg text-xs font-bold border transition-colors ${
                          paymentMethod === 'cash'
                            ? 'bg-emerald-50 border-emerald-500 text-emerald-700'
                            : 'bg-white border-slate-200 text-slate-600'
                        }`}
                      >
                        <Banknote className="w-3.5 h-3.5" />
                        <span>Cash</span>
                      </button>
                      <button
                        onClick={() => setPaymentMethod('card')}
                        className={`flex items-center justify-center gap-1 py-1.5 rounded-lg text-xs font-bold border transition-colors ${
                          paymentMethod === 'card'
                            ? 'bg-blue-50 border-blue-500 text-blue-700'
                            : 'bg-white border-slate-200 text-slate-600'
                        }`}
                      >
                        <CreditCard className="w-3.5 h-3.5" />
                        <span>Card</span>
                      </button>
                      <button
                        onClick={() => setPaymentMethod('khata')}
                        className={`flex items-center justify-center gap-1 py-1.5 rounded-lg text-xs font-bold border transition-colors ${
                          paymentMethod === 'khata'
                            ? 'bg-amber-50 border-amber-500 text-amber-700'
                            : 'bg-white border-slate-200 text-slate-600'
                        }`}
                      >
                        <BookOpen className="w-3.5 h-3.5" />
                        <span>Khata</span>
                      </button>
                    </div>
                  </div>

                  {/* Checkout & Thermal Print Actions */}
                  <div className="space-y-2 pt-1">
                    <button
                      onClick={() => setShowReceiptModal(true)}
                      disabled={cart.length === 0}
                      className="w-full py-2.5 rounded-xl bg-blue-600 hover:bg-blue-700 disabled:bg-slate-300 text-white font-bold text-xs sm:text-sm flex items-center justify-center gap-2 shadow-sm transition-all"
                    >
                      <Printer className="w-4 h-4" />
                      <span>Complete Sale & Print 80mm Receipt</span>
                    </button>

                    <div className="text-center">
                      <span className="text-[10px] text-slate-500">
                        Generates WhatsApp digital invoice + 80mm thermal receipt with IMEI
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ) : (
            /* Repair Tab */
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
              <div className="lg:col-span-6 space-y-4">
                <div className="flex justify-between items-center">
                  <h3 className="font-bold text-sm text-slate-900 flex items-center gap-2">
                    <Wrench className="w-4 h-4 text-warning text-amber-500" />
                    <span>Workshop Active Job Sheets</span>
                  </h3>
                  <span className="text-xs text-slate-500">Total: {repairJobs.length} Tickets</span>
                </div>

                <div className="space-y-3">
                  {repairJobs.map((job) => {
                    const isSelected = selectedJob.ticketNumber === job.ticketNumber;
                    return (
                      <div
                        key={job.ticketNumber}
                        onClick={() => setSelectedJob(job)}
                        className={`p-4 rounded-xl border transition-all cursor-pointer ${
                          isSelected
                            ? 'bg-white border-blue-500 shadow-md ring-1 ring-blue-500'
                            : 'bg-white border-slate-200 hover:border-slate-300 shadow-xs'
                        }`}
                      >
                        <div className="flex justify-between items-start mb-2">
                          <span className="font-mono font-bold text-xs bg-slate-100 text-slate-800 px-2 py-0.5 rounded">
                            {job.ticketNumber}
                          </span>
                          <span className={`text-[11px] font-bold px-2 py-0.5 rounded-full ${
                            job.status === 'Ready for Pickup'
                              ? 'bg-emerald-100 text-emerald-700'
                              : job.status === 'In Repair'
                              ? 'bg-blue-100 text-blue-700'
                              : 'bg-amber-100 text-amber-700'
                          }`}>
                            {job.status}
                          </span>
                        </div>

                        <h4 className="font-bold text-sm text-slate-900">{job.phoneModel}</h4>
                        <p className="text-xs text-slate-500 mt-1 line-clamp-1">{job.issue}</p>

                        <div className="mt-3 pt-2 border-t border-slate-100 flex items-center justify-between text-xs text-slate-600">
                          <span>Customer: <strong>{job.customerName}</strong></span>
                          <span className="font-bold text-slate-900">${job.estimatedCost}</span>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Selected Job Detail */}
              <div className="lg:col-span-6 bg-white p-5 rounded-2xl border border-slate-200 shadow-xs space-y-5">
                <div className="flex justify-between items-center pb-3 border-b border-slate-200">
                  <div>
                    <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400">
                      Ticket Details
                    </span>
                    <h3 className="font-extrabold text-base text-slate-900">
                      {selectedJob.ticketNumber} – {selectedJob.phoneModel}
                    </h3>
                  </div>
                  <span className="font-mono text-xs text-blue-600 bg-blue-50 px-2.5 py-1 rounded-lg border border-blue-200 font-semibold">
                    IMEI: {selectedJob.imei}
                  </span>
                </div>

                <div className="grid grid-cols-2 gap-4 text-xs">
                  <div className="p-3 rounded-xl bg-slate-50 border border-slate-100">
                    <span className="text-[10px] uppercase font-bold text-slate-400 block mb-1">Customer</span>
                    <div className="font-bold text-slate-900">{selectedJob.customerName}</div>
                    <div className="text-slate-500">Received: {selectedJob.receivedDate}</div>
                  </div>

                  <div className="p-3 rounded-xl bg-slate-50 border border-slate-100">
                    <span className="text-[10px] uppercase font-bold text-slate-400 block mb-1">Assigned Technician</span>
                    <div className="font-bold text-slate-900">{selectedJob.technician}</div>
                    <div className="text-emerald-600 font-semibold">Est. Cost: ${selectedJob.estimatedCost}</div>
                  </div>
                </div>

                <div>
                  <label className="text-xs font-bold text-slate-700 block mb-1">Reported Diagnostic Issue</label>
                  <p className="text-xs text-slate-600 p-3 rounded-lg bg-slate-50 border border-slate-200">
                    {selectedJob.issue}
                  </p>
                </div>

                <div>
                  <label className="text-xs font-bold text-slate-700 block mb-2">Update Repair Workflow Status</label>
                  <div className="grid grid-cols-3 gap-2">
                    {(['Diagnosing', 'In Repair', 'Ready for Pickup'] as const).map((statusOption) => (
                      <button
                        key={statusOption}
                        onClick={() => handleUpdateStatus(selectedJob.ticketNumber, statusOption)}
                        className={`py-2 px-2 rounded-lg text-xs font-bold border transition-all ${
                          selectedJob.status === statusOption
                            ? 'bg-blue-600 text-white border-blue-600 shadow-xs'
                            : 'bg-white border-slate-200 text-slate-700 hover:bg-slate-50'
                        }`}
                      >
                        {statusOption}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="p-3.5 rounded-xl bg-amber-50 border border-amber-200 text-xs text-amber-800 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-amber-600 shrink-0" />
                    <span>WhatsApp customer notification is automated upon status update.</span>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Modal Footer */}
        <div className="bg-white px-5 py-3 border-t border-slate-200 flex justify-between items-center text-xs text-slate-500">
          <span>Running on eMobile POS Core Architecture</span>
          <a
            href={POS_SYSTEM_URL}
            target="_blank"
            rel="noreferrer"
            className="text-blue-600 hover:underline font-semibold flex items-center gap-1"
          >
            <span>Log in to your store at emobile.zrmsolutions.com</span>
            <ExternalLink className="w-3 h-3" />
          </a>
        </div>
      </div>

      {/* 80mm Thermal Receipt Preview Modal */}
      {showReceiptModal && (
        <div className="fixed inset-0 z-60 flex items-center justify-center p-4 bg-black/70 backdrop-blur-xs">
          <div className="bg-white rounded-xl shadow-2xl p-6 max-w-sm w-full font-mono text-xs text-slate-800 space-y-3">
            <div className="text-center border-b pb-3 border-dashed border-slate-300">
              <img
                src="/zrm-pos-logo.svg"
                alt="ZRM POS"
                className="h-8 mx-auto mb-2 object-contain"
                referrerPolicy="no-referrer"
              />
              <div className="text-[10px] text-slate-500 font-semibold">ZRM Solutions Retail Counter</div>
              <div className="text-[10px] text-slate-500">Phone: +92 300 1234567 • emobile.zrmsolutions.com</div>
              <div className="text-[10px] text-slate-400 mt-1">Date: {new Date().toLocaleDateString()} {new Date().toLocaleTimeString()}</div>
              <div className="text-[10px] font-bold text-slate-700">Invoice #: INV-2025-0894</div>
            </div>

            <div className="text-[11px]">
              <div>Customer: <strong>{customerName}</strong></div>
              <div>Phone: {customerPhone}</div>
              <div>Payment: {paymentMethod.toUpperCase()}</div>
            </div>

            <div className="border-t border-b border-dashed border-slate-300 py-2 space-y-1.5">
              {cart.map((item, idx) => (
                <div key={idx}>
                  <div className="flex justify-between font-bold">
                    <span className="truncate max-w-[70%]">{item.product.name}</span>
                    <span>${(item.product.price * item.quantity).toFixed(2)}</span>
                  </div>
                  {item.selectedImei && (
                    <div className="text-[9px] text-slate-500">IMEI: {item.selectedImei}</div>
                  )}
                  <div className="text-[10px] text-slate-400">Qty: {item.quantity} × ${item.product.price.toFixed(2)}</div>
                </div>
              ))}
            </div>

            <div className="space-y-1 text-right">
              <div className="flex justify-between text-slate-500">
                <span>Subtotal:</span>
                <span>${subtotal.toFixed(2)}</span>
              </div>
              <div className="flex justify-between text-slate-500">
                <span>Discount:</span>
                <span>-${discountAmount.toFixed(2)}</span>
              </div>
              <div className="flex justify-between font-black text-sm text-slate-900 border-t border-slate-300 pt-1">
                <span>NET TOTAL:</span>
                <span>${total.toFixed(2)}</span>
              </div>
            </div>

            <div className="text-center border-t border-dashed border-slate-300 pt-3 text-[10px] text-slate-500 space-y-1">
              <div>* 7 Days Checking Warranty with IMEI *</div>
              <div>Powered by emobile.zrmsolutions.com</div>
              <div className="pt-2 flex justify-center">
                <QrCode className="w-12 h-12 text-slate-700" />
              </div>
            </div>

            <div className="flex gap-2 pt-2">
              <button
                onClick={() => setShowReceiptModal(false)}
                className="flex-1 py-2 rounded-lg bg-slate-200 hover:bg-slate-300 text-slate-800 font-bold"
              >
                Close
              </button>
              <button
                onClick={() => {
                  alert('Receipt dispatched to thermal printer and WhatsApp!');
                  setShowReceiptModal(false);
                }}
                className="flex-1 py-2 rounded-lg bg-blue-600 hover:bg-blue-700 text-white font-bold"
              >
                Print / Send
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
