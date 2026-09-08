import { PosFeature, PricingPlan, RepairJobStatus, SampleProduct, FaqItem, PhpFileTemplate } from '../types';

export const POS_SYSTEM_URL = 'http://emobile.zrmsolutions.com/';
export const COMPANY_NAME = 'ZRM Solutions';
export const PRODUCT_NAME = 'eMobile POS';

export const POS_FEATURES: PosFeature[] = [
  {
    id: 'imei-tracking',
    title: 'IMEI & Serial Number Tracking',
    category: 'Inventory',
    icon: 'Cpu',
    badge: 'Mobile Retail Essential',
    shortDesc: 'Trace every handset from purchase order to customer invoice with lifetime warranty logs and battery health records.',
    detailedDesc: 'Built specifically for smartphone shops: record dual-IMEI numbers upon stock receiving, prevent duplicate IMEI entry, track vendor warranty terms, and instantly recall historical purchase data during returns or warranty claims.',
    keyBenefits: [
      'Dual-IMEI & serial number barcode scanning',
      'Automatic warranty expiration tracking',
      'Anti-theft check & serial history log',
      'Prevent duplicate or stolen device intake'
    ]
  },
  {
    id: 'repair-ticketing',
    title: 'Mobile Repair & Job Sheet Manager',
    category: 'Repairs',
    icon: 'Wrench',
    badge: 'Workshop Ready',
    shortDesc: 'Complete service center workflow: generate intake job sheets, assign technicians, track spare parts, and notify customers.',
    detailedDesc: 'Elevate your phone repair workshop. Record device pattern locks, pre-existing damages, estimated costs, and assigned technician. Deduct replacement screens, batteries, or ICs automatically from stock upon job completion.',
    keyBenefits: [
      'Customer job sheet printing with pattern locks & terms',
      'Technician assignment & commission tracking',
      'Real-time repair status (Diagnosing, In Repair, Ready)',
      'Automated SMS/WhatsApp status notifications'
    ]
  },
  {
    id: 'rapid-billing',
    title: 'Rapid Counter POS & Barcode Billing',
    category: 'Billing',
    icon: 'Zap',
    badge: '2-Second Checkout',
    shortDesc: 'High-speed touch and barcode billing interface with split payments, cash drawer triggers, and thermal receipts.',
    detailedDesc: 'Keep lines moving at your mobile counter. Scan barcodes for cables, cases, and tempered glasses; select handsets via quick search; apply discounts; and accept split payment (Cash, Credit Card, Bank Transfer, Customer Khata).',
    keyBenefits: [
      'Compatible with 58mm & 80mm ESC/POS thermal printers',
      'Direct WhatsApp digital invoice sharing',
      'Split tender payment (Cash + Card + Khata Credit)',
      'Hold cart / multi-customer tab switching'
    ]
  },
  {
    id: 'stock-control',
    title: 'Multi-Variant Stock & Accessories Inventory',
    category: 'Inventory',
    icon: 'Boxes',
    badge: 'Smart Alerts',
    shortDesc: 'Manage variants by color, storage (128GB/256GB), condition (Brand New/Used), and receive low-stock reorder warnings.',
    detailedDesc: 'Never run out of fast-selling chargers or popular models. Organize mobile accessories, brand-wise device categorization, supplier purchase invoices, and automated profit margins on selling price.',
    keyBenefits: [
      'Multi-attribute variants (RAM, ROM, Color, Grade A/B)',
      'Real-time low stock SMS and dashboard alerts',
      'Supplier purchase return & credit note tracking',
      'Barcode label designer & batch printing'
    ]
  },
  {
    id: 'customer-khata',
    title: 'Customer Khata & Udhaar Credit Ledger',
    category: 'CRM',
    icon: 'Users',
    badge: 'Khata / Ledger',
    shortDesc: 'Digital customer accounts with credit limits, payment reminders, transaction histories, and balance receipts.',
    detailedDesc: 'Say goodbye to paper ledger books. Keep track of regular wholesale buyers, shop-to-shop traders, and retail credit customers. Print balance statements and send automated WhatsApp payment reminders with one click.',
    keyBenefits: [
      'Customer balance ledger with payment history',
      'Pre-set credit limits to prevent overdue debt',
      'One-click WhatsApp balance reminder messages',
      'Wholesale tiered pricing for regular dealer accounts'
    ]
  },
  {
    id: 'analytics-reports',
    title: 'Sales Analytics, Profit & Tax Reporting',
    category: 'Reporting',
    icon: 'TrendingUp',
    badge: 'Real-Time Insights',
    shortDesc: 'Live dashboards showing daily gross profit, top-selling phone brands, technician earnings, and tax summaries.',
    detailedDesc: 'Make data-driven business decisions. Understand which phone models bring the highest margins, view cash register closing sheets (Z-Report), audit employee transactions, and export data directly to Excel or PDF.',
    keyBenefits: [
      'Daily register opening & closing balance (X/Z Reports)',
      'Gross profit calculation based on purchase vs sold price',
      'Technician performance & repair revenue audit',
      'Tax & VAT compliant invoice generation'
    ]
  }
];

export const TARGET_INDUSTRIES = [
  {
    title: 'Smartphone & Gadget Retail',
    description: 'Track IMEI, manage manufacturer warranties, sell brand-new and pre-owned devices with complete provenance.',
    icon: 'Smartphone'
  },
  {
    title: 'Mobile Repair Centers & Labs',
    description: 'Job sheets, technician labor commissions, spare parts consumption, and live repair status tracking.',
    icon: 'Tool'
  },
  {
    title: 'Electronics & Accessories Shops',
    description: 'High-speed barcode checkout for chargers, earbuds, cases, tempered glass, and smartwatches.',
    icon: 'Headphones'
  },
  {
    title: 'Wholesale & Telecom Distributors',
    description: 'Bulk device purchase orders, dealer credit ledgers, multi-location stock transfers, and tiered pricing.',
    icon: 'Building2'
  }
];

export const PRICING_PLANS: PricingPlan[] = [
  {
    id: 'starter',
    name: 'Starter Retail',
    tagline: 'Ideal for independent mobile shops & single-counter repair desks',
    monthlyPrice: 24,
    annualPrice: 228,
    countersAllowed: '1 Counter / Cashier',
    supportLevel: 'Standard Email & Ticket Support',
    features: [
      'Full Point of Sale Billing Terminal',
      'IMEI & Serial Number Tracking (up to 2,000 devices)',
      'Basic Mobile Repair Job Sheets',
      'Thermal 58mm/80mm & WhatsApp Invoices',
      'Customer Khata / Credit Ledger',
      'Daily Sales & Revenue Summaries',
      'Cloud Backup & 99.9% Uptime'
    ]
  },
  {
    id: 'professional',
    name: 'Pro Workshop & Store',
    tagline: 'Best for busy mobile stores with dedicated repair technicians',
    monthlyPrice: 49,
    annualPrice: 468,
    isPopular: true,
    countersAllowed: 'Up to 3 Counters + 5 Technicians',
    supportLevel: 'Priority WhatsApp & Phone Support',
    features: [
      'Everything in Starter Retail',
      'Unlimited IMEI & Serial Tracking',
      'Advanced Repair Job Sheet & Pattern Lock Recorder',
      'Spare Parts Inventory & Auto-Deduction',
      'Technician Commission & Repair Labor Tracker',
      'Customer Live Repair Status Tracker Portal',
      'Supplier Purchase Orders & AP Tracking',
      'Custom Barcode Label Printing',
      'Multi-User Role Permissions'
    ]
  },
  {
    id: 'enterprise',
    name: 'Multi-Branch Enterprise',
    tagline: 'For mobile retail chains, franchises, and regional tech distributors',
    monthlyPrice: 99,
    annualPrice: 948,
    countersAllowed: 'Unlimited Counters & Branches',
    supportLevel: 'Dedicated Account Manager & 24/7 Hotline',
    features: [
      'Everything in Pro Workshop',
      'Centralized Multi-Store Management',
      'Inter-Branch Stock Transfers with In-Transit Logs',
      'Wholesale Dealer Portals & Custom Price Tiers',
      'Consolidated P&L and Multi-Tax Compliance',
      'Custom ERP & Third-party API Integrations',
      'Onsite / Remote Staff Training & Data Migration',
      'Custom Domain & Dedicated Cloud Server Setup'
    ]
  }
];

export const SAMPLE_PRODUCTS: SampleProduct[] = [
  { id: '1', name: 'iPhone 15 Pro Max 256GB Natural Titanium', category: 'Smartphone', brand: 'Apple', price: 1199, imei: '358921098234901', stock: 4, barcode: '880609123401' },
  { id: '2', name: 'Samsung Galaxy S24 Ultra 512GB Titanium Black', category: 'Smartphone', brand: 'Samsung', price: 1299, imei: '354419082348912', stock: 6, barcode: '880609123402' },
  { id: '3', name: 'Apple 20W USB-C Fast Power Adapter', category: 'Accessories', brand: 'Apple', price: 25, stock: 45, barcode: '190199220023' },
  { id: '4', name: 'Original iPhone 14 Pro OLED Display Screen', category: 'Spare Parts', brand: 'OEM', price: 185, stock: 12, barcode: '778901239101' },
  { id: '5', name: 'Anker 10,000mAh Magnetic Wireless Power Bank', category: 'Accessories', brand: 'Anker', price: 49, stock: 28, barcode: '194644021234' },
  { id: '6', name: 'Samsung Galaxy A54 5G 128GB Awesome Violet', category: 'Smartphone', brand: 'Samsung', price: 349, imei: '352901239841029', stock: 9, barcode: '880609998124' }
];

export const SAMPLE_REPAIR_JOBS: RepairJobStatus[] = [
  {
    ticketNumber: 'REP-9042',
    customerName: 'Muhammad Ali',
    phoneModel: 'iPhone 13 Pro',
    imei: '359012398129031',
    issue: 'Cracked screen & battery health service (74%)',
    status: 'Ready for Pickup',
    technician: 'Bilal Khan (Senior Tech)',
    estimatedCost: 145,
    receivedDate: '2025-05-12'
  },
  {
    ticketNumber: 'REP-9043',
    customerName: 'Sara Ahmed',
    phoneModel: 'Samsung Galaxy S23',
    imei: '354129081293041',
    issue: 'Type-C charging port replacement & mic cleaning',
    status: 'In Repair',
    technician: 'Fahad Mehmood',
    estimatedCost: 40,
    receivedDate: '2025-05-13'
  },
  {
    ticketNumber: 'REP-9044',
    customerName: 'Kamran Tariq',
    phoneModel: 'Google Pixel 7',
    imei: '357891209381204',
    issue: 'Water damage diagnostic & motherboard power IC',
    status: 'Diagnosing',
    technician: 'Zeeshan Raza',
    estimatedCost: 85,
    receivedDate: '2025-05-14'
  }
];

export const FAQS: FaqItem[] = [
  {
    question: 'How do I access our live eMobile POS system?',
    answer: 'You can access your live terminal directly at http://emobile.zrmsolutions.com/ using your authenticated store credentials. You can also click the "Launch eMobile POS" button anywhere on this website.',
    category: 'General'
  },
  {
    question: 'How does IMEI tracking work for smartphones?',
    answer: 'During inventory receiving or purchase invoice recording, you can scan or type the dual IMEIs. At the checkout counter, scanning the IMEI automatically identifies the specific phone model, purchase warranty, vendor cost, and prints the IMEI on the customer receipt.',
    category: 'General'
  },
  {
    question: 'Can eMobile POS generate job sheets for device repair centers?',
    answer: 'Yes! When a customer brings a broken phone, you record device details, pattern lock / passcode, cosmetic condition (scratches), problem description, and estimated cost. A job sheet with terms is printed or sent to WhatsApp, and technician commissions are calculated upon completion.',
    category: 'Repairs'
  },
  {
    question: 'What hardware is compatible with eMobile POS?',
    answer: 'eMobile POS works seamlessly with standard USB, Bluetooth, and LAN thermal receipt printers (80mm and 58mm like Epson, Xprinter, Rongta), standard 1D/2D barcode and QR scanners, electric cash drawers, and customer-facing displays.',
    category: 'Hardware'
  },
  {
    question: 'Can we send WhatsApp receipts to save on paper printing?',
    answer: 'Absolutely. With one click, your cashier can dispatch a digital invoice with itemized IMEI numbers, warranty terms, and store branding straight to the customer’s WhatsApp number.',
    category: 'General'
  },
  {
    question: 'Does ZRM Solutions provide custom software modifications?',
    answer: 'Yes. ZRM Solutions is a full-service software development and ERP provider. If you need specialized modules, custom accounting integrations, or wholesale distribution features, our engineering team can customize the system for your operations.',
    category: 'Pricing'
  }
];

// Plain PHP & Bootstrap 5 templates requested by user
export const PHP_BOOTSTRAP_TEMPLATES: PhpFileTemplate[] = [
  {
    filename: 'index.php',
    title: 'Home Page (index.php)',
    description: 'Main landing page in plain PHP including header.php, dynamic hero section, core POS feature highlights, interactive stats, industry solutions, and footer.php.',
    content: `<?php
/**
 * eMobile POS - Official Website
 * Developed by ZRM Solutions (zrmsolutions.com)
 * System URL: http://emobile.zrmsolutions.com/
 */

$page_title = "eMobile POS - Smart Point of Sale & Repair Management | ZRM Solutions";
$active_page = "home";
include 'header.php';
?>

<!-- Hero Section -->
<section class="hero-section py-5 bg-light border-bottom position-relative overflow-hidden">
  <div class="container py-lg-5">
    <div class="row align-items-center g-5">
      <div class="col-lg-6">
        <div class="badge bg-primary bg-opacity-10 text-primary px-3 py-2 rounded-pill mb-3 fw-semibold border border-primary border-opacity-25">
          <i class="bi bi-patch-check-fill me-1"></i> Dedicated for Mobile & Electronics Retailers
        </div>
        <h1 class="display-4 fw-bold text-dark mb-3 tracking-tight">
          Next-Generation POS & Repair Management for Mobile Shops
        </h1>
        <p class="lead text-secondary mb-4">
          Streamline counter sales, track device IMEI numbers, manage repair job sheets, control stock inventory, and dispatch instant WhatsApp invoices — all in one modern platform.
        </p>
        <div class="d-flex flex-wrap gap-3 mb-4">
          <a href="http://emobile.zrmsolutions.com/" target="_blank" class="btn btn-primary btn-lg px-4 fw-semibold shadow-sm">
            <i class="bi bi-box-arrow-up-right me-2"></i> Launch eMobile POS
          </a>
          <a href="contact.php" class="btn btn-outline-dark btn-lg px-4 fw-semibold">
            <i class="bi bi-chat-dots me-2"></i> Request Live Demo
          </a>
        </div>
        <div class="d-flex align-items-center gap-4 text-muted small pt-2">
          <div><i class="bi bi-check-circle-fill text-success me-1"></i> 2-Second Checkout</div>
          <div><i class="bi bi-check-circle-fill text-success me-1"></i> IMEI Serial Tracking</div>
          <div><i class="bi bi-check-circle-fill text-success me-1"></i> Cloud & Offline Ready</div>
        </div>
      </div>
      
      <div class="col-lg-6">
        <div class="card shadow-lg border-0 rounded-4 overflow-hidden">
          <div class="card-header bg-dark text-white p-3 d-flex justify-content-between align-items-center">
            <div class="d-flex align-items-center gap-2">
              <span class="rounded-circle bg-danger d-inline-block" style="width:10px; height:10px;"></span>
              <span class="rounded-circle bg-warning d-inline-block" style="width:10px; height:10px;"></span>
              <span class="rounded-circle bg-success d-inline-block" style="width:10px; height:10px;"></span>
              <span class="ms-2 small text-light fw-medium">eMobile POS Terminal Preview</span>
            </div>
            <span class="badge bg-success small"><i class="bi bi-wifi me-1"></i> System Online</span>
          </div>
          <div class="card-body p-4 bg-white">
            <div class="d-flex justify-content-between align-items-center pb-3 border-bottom mb-3">
              <div>
                <small class="text-muted text-uppercase fw-bold">Live Counter #1</small>
                <h5 class="mb-0 fw-bold text-dark">Mobile Zone Main Branch</h5>
              </div>
              <span class="badge bg-primary fs-6 px-3 py-2">IMEI Scan Ready</span>
            </div>
            
            <div class="row g-2 mb-3">
              <div class="col-6">
                <div class="p-3 bg-light rounded-3 border">
                  <small class="text-muted d-block">Today Sales</small>
                  <strong class="fs-5 text-primary">$3,480.00</strong>
                </div>
              </div>
              <div class="col-6">
                <div class="p-3 bg-light rounded-3 border">
                  <small class="text-muted d-block">Active Repair Tickets</small>
                  <strong class="fs-5 text-warning">14 Devices</strong>
                </div>
              </div>
            </div>

            <div class="list-group list-group-flush border rounded-3 mb-3">
              <div class="list-group-item d-flex justify-content-between align-items-center py-2">
                <div>
                  <div class="fw-semibold small">iPhone 15 Pro Max 256GB</div>
                  <small class="text-muted font-monospace">IMEI: 358921098234901</small>
                </div>
                <span class="fw-bold text-dark">$1,199.00</span>
              </div>
              <div class="list-group-item d-flex justify-content-between align-items-center py-2">
                <div>
                  <div class="fw-semibold small">Job #REP-9042 Screen Replacement</div>
                  <small class="text-success"><i class="bi bi-check2-circle me-1"></i> Ready for Pickup</small>
                </div>
                <span class="fw-bold text-dark">$145.00</span>
              </div>
            </div>

            <div class="d-grid gap-2">
              <a href="http://emobile.zrmsolutions.com/" class="btn btn-dark fw-semibold">
                <i class="bi bi-shield-lock me-2"></i> Enter POS Dashboard
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

<!-- Core Features Section -->
<section class="py-5 bg-white">
  <div class="container py-lg-4">
    <div class="text-center max-w-700 mx-auto mb-5" style="max-width: 700px;">
      <span class="text-primary fw-bold text-uppercase small tracking-wider">Tailored for Your Industry</span>
      <h2 class="display-6 fw-bold mt-2">Engineered Specifically for Mobile Phone Businesses</h2>
      <p class="text-secondary">Unlike generic retail software, eMobile POS incorporates specialized features that mobile phone shops and service centers demand daily.</p>
    </div>

    <div class="row g-4">
      <div class="col-md-6 col-lg-4">
        <div class="card h-100 p-4 border rounded-4 shadow-sm hover-shadow transition">
          <div class="rounded-3 bg-primary bg-opacity-10 text-primary d-inline-flex p-3 mb-3 fs-3" style="width: fit-content;">
            <i class="bi bi-cpu"></i>
          </div>
          <h4 class="fw-bold h5">IMEI & Serial Number Tracking</h4>
          <p class="text-muted small mb-0">Record dual-IMEIs upon receiving stock. Track handset warranty, vendor origin, and print IMEIs on customer invoices automatically.</p>
        </div>
      </div>

      <div class="col-md-6 col-lg-4">
        <div class="card h-100 p-4 border rounded-4 shadow-sm hover-shadow transition">
          <div class="rounded-3 bg-warning bg-opacity-10 text-warning d-inline-flex p-3 mb-3 fs-3" style="width: fit-content;">
            <i class="bi bi-tools"></i>
          </div>
          <h4 class="fw-bold h5">Mobile Repair Job Sheets</h4>
          <p class="text-muted small mb-0">Record pattern locks, phone cosmetic conditions, problem diagnostics, technician assignment, and auto-deduct spare parts.</p>
        </div>
      </div>

      <div class="col-md-6 col-lg-4">
        <div class="card h-100 p-4 border rounded-4 shadow-sm hover-shadow transition">
          <div class="rounded-3 bg-success bg-opacity-10 text-success d-inline-flex p-3 mb-3 fs-3" style="width: fit-content;">
            <i class="bi bi-lightning-charge"></i>
          </div>
          <h4 class="fw-bold h5">Fast Counter & Barcode Billing</h4>
          <p class="text-muted small mb-0">Checkout in under 2 seconds. Seamlessly integrate barcode scanners, 80mm/58mm thermal printers, and instant WhatsApp receipts.</p>
        </div>
      </div>

      <div class="col-md-6 col-lg-4">
        <div class="card h-100 p-4 border rounded-4 shadow-sm hover-shadow transition">
          <div class="rounded-3 bg-info bg-opacity-10 text-info d-inline-flex p-3 mb-3 fs-3" style="width: fit-content;">
            <i class="bi bi-boxes"></i>
          </div>
          <h4 class="fw-bold h5">Smart Inventory & Variants</h4>
          <p class="text-muted small mb-0">Categorize handsets by storage (128GB/256GB), color, and condition (New/Used). Get automatic low-stock notifications.</p>
        </div>
      </div>

      <div class="col-md-6 col-lg-4">
        <div class="card h-100 p-4 border rounded-4 shadow-sm hover-shadow transition">
          <div class="rounded-3 bg-danger bg-opacity-10 text-danger d-inline-flex p-3 mb-3 fs-3" style="width: fit-content;">
            <i class="bi bi-journal-bookmark"></i>
          </div>
          <h4 class="fw-bold h5">Customer Khata / Credit Ledger</h4>
          <p class="text-muted small mb-0">Keep clean records of shop-to-shop dealer credit, customer balances, payment histories, and send automated WhatsApp reminders.</p>
        </div>
      </div>

      <div class="col-md-6 col-lg-4">
        <div class="card h-100 p-4 border rounded-4 shadow-sm hover-shadow transition">
          <div class="rounded-3 bg-secondary bg-opacity-10 text-dark d-inline-flex p-3 mb-3 fs-3" style="width: fit-content;">
            <i class="bi bi-graph-up-arrow"></i>
          </div>
          <h4 class="fw-bold h5">Real-Time Profit & Tax Reports</h4>
          <p class="text-muted small mb-0">Daily register closing reports (X/Z), gross margin calculation per phone model, technician earnings, and exportable financial data.</p>
        </div>
      </div>
    </div>
  </div>
</section>

<!-- Call to Action -->
<section class="py-5 bg-dark text-white text-center">
  <div class="container py-4">
    <h2 class="fw-bold mb-3">Ready to Modernize Your Mobile Shop?</h2>
    <p class="lead text-light text-opacity-75 mb-4 mx-auto" style="max-width: 600px;">
      Log in directly to your eMobile POS account or contact ZRM Solutions for a tailored demonstration.
    </p>
    <div class="d-flex justify-content-center gap-3">
      <a href="http://emobile.zrmsolutions.com/" target="_blank" class="btn btn-primary btn-lg px-4 fw-semibold">
        <i class="bi bi-box-arrow-up-right me-2"></i> Access eMobile POS
      </a>
      <a href="contact.php" class="btn btn-outline-light btn-lg px-4 fw-semibold">
        <i class="bi bi-envelope me-2"></i> Contact Us
      </a>
    </div>
  </div>
</section>

<?php include 'footer.php'; ?>`
  },
  {
    filename: 'header.php',
    title: 'Header Navigation (header.php)',
    description: 'Shared Bootstrap 5 navigation header with brand logo, dynamic active menu highlighting, responsive mobile hamburger drawer, and direct POS access link.',
    content: `<?php
/**
 * Shared Header Template
 * Bootstrap 5.3 & HTML5 Compliant
 */
if (!isset($page_title)) {
    $page_title = "eMobile POS - ZRM Solutions";
}
if (!isset($active_page)) {
    $active_page = "home";
}
?>
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title><?php echo htmlspecialchars($page_title); ?></title>
  <meta name="description" content="eMobile POS by ZRM Solutions - Next-Generation Point of Sale & Repair Management System for Mobile and Electronics Retailers.">
  
  <!-- Bootstrap 5.3 CSS -->
  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH" crossorigin="anonymous">
  <!-- Bootstrap Icons -->
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.3/font/bootstrap-icons.min.css">
  <!-- Google Fonts: Plus Jakarta Sans -->
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@300;400;500;600;700;800&display=swap" rel="stylesheet">
  <!-- Custom Styles -->
  <link rel="stylesheet" href="style.css">
</head>
<body>

<!-- Top Notification Bar -->
<div class="bg-dark text-white py-1 px-3 border-bottom border-secondary small d-none d-md-block">
  <div class="container d-flex justify-content-between align-items-center">
    <div class="d-flex align-items-center gap-3">
      <span><i class="bi bi-globe me-1 text-primary"></i> Powered by <strong>ZRM Solutions</strong></span>
      <span><i class="bi bi-envelope me-1 text-primary"></i> support@zrmsolutions.com</span>
    </div>
    <div>
      <span class="badge bg-success-subtle text-success border border-success-subtle px-2 py-1">
        <i class="bi bi-shield-check me-1"></i> Live System: emobile.zrmsolutions.com
      </span>
    </div>
  </div>
</div>

<!-- Main Navigation -->
<nav class="navbar navbar-expand-lg navbar-light bg-white sticky-top border-bottom py-3 shadow-sm">
  <div class="container">
    <a class="navbar-brand d-flex align-items-center" href="index.php">
      <img src="zrm-pos-logo.svg" alt="ZRM POS" height="42" class="d-inline-block align-text-top me-2">
    </a>

    <button class="navbar-toggler border-0" type="button" data-bs-toggle="collapse" data-bs-target="#navbarMain" aria-controls="navbarMain" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>

    <div class="collapse navbar-collapse" id="navbarMain">
      <ul class="navbar-nav mx-auto mb-2 mb-lg-0 fw-semibold">
        <li class="nav-item">
          <a class="nav-link <?php echo ($active_page === 'home') ? 'active text-primary' : ''; ?>" href="index.php">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link <?php echo ($active_page === 'about') ? 'active text-primary' : ''; ?>" href="about.php">About Us</a>
        </li>
        <li class="nav-item">
          <a class="nav-link <?php echo ($active_page === 'services') ? 'active text-primary' : ''; ?>" href="services.php">Services & Modules</a>
        </li>
        <li class="nav-item">
          <a class="nav-link <?php echo ($active_page === 'contact') ? 'active text-primary' : ''; ?>" href="contact.php">Contact & Support</a>
        </li>
      </ul>

      <div class="d-flex align-items-center gap-2">
        <a href="http://emobile.zrmsolutions.com/" target="_blank" class="btn btn-primary fw-semibold px-3">
          <i class="bi bi-box-arrow-up-right me-1"></i> Launch POS
        </a>
      </div>
    </div>
  </div>
</nav>`
  },
  {
    filename: 'about.php',
    title: 'About Page (about.php)',
    description: 'Company background of ZRM Solutions, eMobile POS origins, engineering philosophy, cloud reliability, and mobile electronics industry expertise.',
    content: `<?php
/**
 * About Us Page
 * Developed by ZRM Solutions
 */
$page_title = "About eMobile POS & ZRM Solutions";
$active_page = "about";
include 'header.php';
?>

<div class="bg-light py-5 border-bottom">
  <div class="container py-lg-4 text-center">
    <span class="badge bg-primary bg-opacity-10 text-primary px-3 py-2 rounded-pill fw-semibold mb-2">Our Story & Mission</span>
    <h1 class="display-5 fw-bold text-dark mb-3">Empowering Mobile & Electronics Retailers</h1>
    <p class="lead text-secondary mx-auto" style="max-width: 750px;">
      Built by ZRM Solutions, eMobile POS solves the complex operational hurdles of smartphone retail, IMEI traceability, and device repair ticketing.
    </p>
  </div>
</div>

<div class="container py-5">
  <div class="row align-items-center g-5 mb-5">
    <div class="col-lg-6">
      <h2 class="fw-bold mb-3">Why eMobile POS Was Created</h2>
      <p class="text-secondary">
        Traditional retail POS systems fail to handle the nuances of smartphone commerce: dual IMEI numbers, warranty tracking, condition grades for pre-owned stock, pattern locks for repair tickets, and technician commissions.
      </p>
      <p class="text-secondary">
        <strong>ZRM Solutions</strong> designed eMobile POS from the ground up to replace fragmented spreadsheets and manual paper receipt books with a unified, cloud-backed point of sale software.
      </p>
      <div class="row g-3 pt-2">
        <div class="col-sm-6">
          <div class="border rounded-3 p-3 bg-light">
            <h5 class="fw-bold text-primary mb-1">10,000+</h5>
            <small class="text-muted">Devices & IMEIs tracked</small>
          </div>
        </div>
        <div class="col-sm-6">
          <div class="border rounded-3 p-3 bg-light">
            <h5 class="fw-bold text-primary mb-1">99.9%</h5>
            <small class="text-muted">Cloud Uptime & Security</small>
          </div>
        </div>
      </div>
    </div>
    
    <div class="col-lg-6">
      <div class="card border-0 shadow-sm rounded-4 p-4 bg-primary text-white">
        <h3 class="fw-bold mb-3">About ZRM Solutions</h3>
        <p class="text-white text-opacity-90">
          ZRM Solutions specializes in bespoke software engineering, enterprise ERP applications, eCommerce systems, and point-of-sale platforms. With years of experience serving retail and service industries, we build software that delivers speed, reliability, and precision.
        </p>
        <ul class="list-unstyled mb-4">
          <li class="mb-2"><i class="bi bi-check-lg me-2"></i> Custom ERP & Business Management Software</li>
          <li class="mb-2"><i class="bi bi-check-lg me-2"></i> Cloud Hosting & Secure Data Redundancy</li>
          <li class="mb-2"><i class="bi bi-check-lg me-2"></i> Ongoing Technical Support & Training</li>
        </ul>
        <a href="http://emobile.zrmsolutions.com/" target="_blank" class="btn btn-light text-primary fw-bold">
          Visit Live POS Portal <i class="bi bi-arrow-right ms-1"></i>
        </a>
      </div>
    </div>
  </div>
</div>

<?php include 'footer.php'; ?>`
  },
  {
    filename: 'services.php',
    title: 'Services Page (services.php)',
    description: 'Comprehensive overview of eMobile POS modules: IMEI Tracker, Repair Job Sheets, Thermal & WhatsApp Invoicing, Stock Control, Khata Ledger, and ZRM ERP Services.',
    content: `<?php
/**
 * Services & Modules Page
 * Developed by ZRM Solutions
 */
$page_title = "POS Services & Modules - eMobile POS";
$active_page = "services";
include 'header.php';
?>

<div class="bg-light py-5 border-bottom">
  <div class="container py-lg-4 text-center">
    <span class="badge bg-primary bg-opacity-10 text-primary px-3 py-2 rounded-pill fw-semibold mb-2">Complete System Breakdown</span>
    <h1 class="display-5 fw-bold text-dark mb-3">All-In-One POS Solutions & Modules</h1>
    <p class="lead text-secondary mx-auto" style="max-width: 750px;">
      Explore the specialized functional tools within eMobile POS designed to accelerate your counters and organize your workshop.
    </p>
  </div>
</div>

<div class="container py-5">
  <div class="row g-4">
    <!-- Service 1 -->
    <div class="col-lg-6">
      <div class="card h-100 border rounded-4 p-4 shadow-sm">
        <div class="d-flex align-items-center gap-3 mb-3">
          <div class="bg-primary text-white rounded-3 p-3 fs-4"><i class="bi bi-upc-scan"></i></div>
          <div>
            <h3 class="h5 fw-bold mb-0">IMEI & Serial Number Management</h3>
            <small class="text-primary fw-semibold">Retail & Warranty Module</small>
          </div>
        </div>
        <p class="text-secondary small">Prevent duplicate handset entries, log purchase invoices with dual-IMEIs, track manufacturer warranties, and trace complete device history from purchase to return.</p>
        <ul class="small text-muted ps-3 mb-0">
          <li>Automated IMEI barcode verification</li>
          <li>Warranty card generation on thermal prints</li>
          <li>Supplier vendor assignment per device</li>
        </ul>
      </div>
    </div>

    <!-- Service 2 -->
    <div class="col-lg-6">
      <div class="card h-100 border rounded-4 p-4 shadow-sm">
        <div class="d-flex align-items-center gap-3 mb-3">
          <div class="bg-warning text-dark rounded-3 p-3 fs-4"><i class="bi bi-tools"></i></div>
          <div>
            <h3 class="h5 fw-bold mb-0">Repair Job Sheet & Workshop Tracker</h3>
            <small class="text-warning fw-semibold">Service Lab Module</small>
          </div>
        </div>
        <p class="text-secondary small">Intake broken devices, record physical scratches, pattern locks, battery health, and assign jobs to specific technicians with labor commission calculations.</p>
        <ul class="small text-muted ps-3 mb-0">
          <li>Auto-deduct spare parts (screens, batteries) from stock</li>
          <li>Customer repair status tracking</li>
          <li>Print professional service intake receipts</li>
        </ul>
      </div>
    </div>

    <!-- Service 3 -->
    <div class="col-lg-6">
      <div class="card h-100 border rounded-4 p-4 shadow-sm">
        <div class="d-flex align-items-center gap-3 mb-3">
          <div class="bg-success text-white rounded-3 p-3 fs-4"><i class="bi bi-printer"></i></div>
          <div>
            <h3 class="h5 fw-bold mb-0">Rapid Checkout & WhatsApp Billing</h3>
            <small class="text-success fw-semibold">Sales Counter Module</small>
          </div>
        </div>
        <p class="text-secondary small">Speed up lines with barcode scanning, support for 80mm & 58mm thermal printers, cash drawer triggers, and 1-click paperless WhatsApp invoice delivery.</p>
        <ul class="small text-muted ps-3 mb-0">
          <li>Split payment: Cash, Card, Bank, Khata</li>
          <li>Discounts and promo coupon codes</li>
          <li>Hold orders & multi-customer cart switching</li>
        </ul>
      </div>
    </div>

    <!-- Service 4 -->
    <div class="col-lg-6">
      <div class="card h-100 border rounded-4 p-4 shadow-sm">
        <div class="d-flex align-items-center gap-3 mb-3">
          <div class="bg-danger text-white rounded-3 p-3 fs-4"><i class="bi bi-book"></i></div>
          <div>
            <h3 class="h5 fw-bold mb-0">Customer Khata & Udhaar Credit Ledger</h3>
            <small class="text-danger fw-semibold">Financial Accounts Module</small>
          </div>
        </div>
        <p class="text-secondary small">Replace manual account registers. Track wholesale buyer balances, credit limits, received cash payments, and automated WhatsApp reminder alerts.</p>
        <ul class="small text-muted ps-3 mb-0">
          <li>Customer account statements & payment receipts</li>
          <li>Credit limit alerts to prevent bad debts</li>
          <li>Wholesale dealer tiered price lists</li>
        </ul>
      </div>
    </div>
  </div>

  <div class="text-center mt-5 pt-4 border-top">
    <h3 class="fw-bold mb-2">Need a Custom Module or Multi-Branch ERP?</h3>
    <p class="text-secondary mb-4">ZRM Solutions provides custom software engineering and database migrations tailored to your exact store operations.</p>
    <a href="contact.php" class="btn btn-primary btn-lg px-4 fw-semibold">Consult with ZRM Solutions</a>
  </div>
</div>

<?php include 'footer.php'; ?>`
  },
  {
    filename: 'contact.php',
    title: 'Contact Page (contact.php)',
    description: 'Clean responsive contact form with PHP form processing, WhatsApp direct link, ZRM Solutions support details, and direct access link to http://emobile.zrmsolutions.com/.',
    content: `<?php
/**
 * Contact Us & Demo Inquiries
 * Developed by ZRM Solutions
 */
$page_title = "Contact Us & Request Demo - eMobile POS";
$active_page = "contact";

$message_sent = false;
$error = "";

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = strip_tags(trim($_POST["name"] ?? ""));
    $email = filter_var(trim($_POST["email"] ?? ""), FILTER_SANITIZE_EMAIL);
    $phone = strip_tags(trim($_POST["phone"] ?? ""));
    $business = strip_tags(trim($_POST["business"] ?? ""));
    $message = strip_tags(trim($_POST["message"] ?? ""));

    if (!empty($name) && !empty($phone)) {
        // In production, configure mail() or log to database
        $message_sent = true;
    } else {
        $error = "Please fill in your name and phone/WhatsApp number.";
    }
}

include 'header.php';
?>

<div class="bg-light py-5 border-bottom">
  <div class="container py-lg-4 text-center">
    <span class="badge bg-primary bg-opacity-10 text-primary px-3 py-2 rounded-pill fw-semibold mb-2">Get in Touch</span>
    <h1 class="display-5 fw-bold text-dark mb-3">Contact Support & Request Demo</h1>
    <p class="lead text-secondary mx-auto" style="max-width: 700px;">
      Have questions about eMobile POS or need onboarding support? Our team at ZRM Solutions is ready to help your mobile business grow.
    </p>
  </div>
</div>

<div class="container py-5">
  <div class="row g-5">
    <div class="col-lg-7">
      <div class="card border rounded-4 p-4 p-md-5 shadow-sm">
        <h3 class="fw-bold mb-3">Send Us a Message</h3>
        
        <?php if ($message_sent): ?>
          <div class="alert alert-success d-flex align-items-center gap-3 p-3 rounded-3 mb-4">
            <i class="bi bi-check-circle-fill fs-3 text-success"></i>
            <div>
              <h5 class="alert-heading mb-1 fw-bold">Thank You!</h5>
              <p class="mb-0 small">Your inquiry has been received. A ZRM Solutions POS specialist will contact you shortly.</p>
            </div>
          </div>
        <?php endif; ?>

        <?php if (!empty($error)): ?>
          <div class="alert alert-danger p-3 rounded-3 mb-4 small">
            <i class="bi bi-exclamation-triangle-fill me-2"></i> <?php echo htmlspecialchars($error); ?>
          </div>
        <?php endif; ?>

        <form action="contact.php" method="POST">
          <div class="row g-3">
            <div class="col-md-6">
              <label class="form-label fw-semibold small">Full Name *</label>
              <input type="text" name="name" class="form-control py-2" placeholder="e.g. John Doe" required>
            </div>
            <div class="col-md-6">
              <label class="form-label fw-semibold small">Phone / WhatsApp Number *</label>
              <input type="text" name="phone" class="form-control py-2" placeholder="+1 (555) 000-0000" required>
            </div>
            <div class="col-md-6">
              <label class="form-label fw-semibold small">Email Address</label>
              <input type="email" name="email" class="form-control py-2" placeholder="name@store.com">
            </div>
            <div class="col-md-6">
              <label class="form-label fw-semibold small">Shop / Business Name</label>
              <input type="text" name="business" class="form-control py-2" placeholder="e.g. Mobile Tech Zone">
            </div>
            <div class="col-12">
              <label class="form-label fw-semibold small">Your Message / Requirements</label>
              <textarea name="message" rows="4" class="form-control py-2" placeholder="Tell us how many counters or stores you manage..."></textarea>
            </div>
            <div class="col-12 mt-4">
              <button type="submit" class="btn btn-primary btn-lg px-4 fw-semibold w-100">
                <i class="bi bi-send me-2"></i> Submit Inquiry
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>

    <div class="col-lg-5">
      <div class="card border rounded-4 p-4 bg-light mb-4 shadow-sm">
        <h4 class="fw-bold mb-3">Live System Access</h4>
        <p class="text-secondary small mb-3">
          If you are an existing user or staff member, you can log straight into the live terminal dashboard at any time.
        </p>
        <a href="http://emobile.zrmsolutions.com/" target="_blank" class="btn btn-dark fw-semibold py-2">
          <i class="bi bi-box-arrow-up-right me-2"></i> Open emobile.zrmsolutions.com
        </a>
      </div>

      <div class="card border rounded-4 p-4 shadow-sm">
        <h4 class="fw-bold mb-3">ZRM Solutions Details</h4>
        
        <div class="d-flex align-items-start gap-3 mb-3">
          <div class="bg-primary bg-opacity-10 text-primary p-2 rounded-3 fs-5"><i class="bi bi-envelope"></i></div>
          <div>
            <div class="fw-semibold small">Email Support</div>
            <a href="mailto:support@zrmsolutions.com" class="text-decoration-none text-secondary small">support@zrmsolutions.com</a>
          </div>
        </div>

        <div class="d-flex align-items-start gap-3 mb-3">
          <div class="bg-success bg-opacity-10 text-success p-2 rounded-3 fs-5"><i class="bi bi-whatsapp"></i></div>
          <div>
            <div class="fw-semibold small">WhatsApp Hotline</div>
            <span class="text-secondary small">Instant technical assistance & onboarding</span>
          </div>
        </div>

        <div class="d-flex align-items-start gap-3">
          <div class="bg-info bg-opacity-10 text-info p-2 rounded-3 fs-5"><i class="bi bi-clock"></i></div>
          <div>
            <div class="fw-semibold small">Support Working Hours</div>
            <span class="text-secondary small">Monday – Saturday: 9:00 AM – 9:00 PM</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

<?php include 'footer.php'; ?>`
  },
  {
    filename: 'footer.php',
    title: 'Footer Template (footer.php)',
    description: 'Shared Bootstrap 5 footer with brand links, quick navigation, live system notice, and copyright notice.',
    content: `<?php
/**
 * Shared Footer Template
 */
?>
<footer class="bg-dark text-white pt-5 pb-4 border-top border-secondary">
  <div class="container">
    <div class="row g-4 mb-4">
      <div class="col-lg-4 col-md-6">
        <div class="mb-3">
          <img src="zrm-pos-logo-dark.svg" alt="ZRM POS" height="42" class="d-inline-block">
        </div>
        <p class="text-light text-opacity-75 small">
          The all-in-one cloud Point of Sale, IMEI inventory tracker, and mobile repair ticketing system built specifically for electronics stores and workshops.
        </p>
        <div class="small text-muted">
          Developed by <a href="https://zrmsolutions.com" class="text-light fw-semibold text-decoration-none">ZRM Solutions</a>
        </div>
      </div>

      <div class="col-lg-2 col-md-6">
        <h6 class="fw-bold text-uppercase text-light mb-3 small tracking-wider">Navigation</h6>
        <ul class="list-unstyled small">
          <li class="mb-2"><a href="index.php" class="text-light text-opacity-75 text-decoration-none hover-white">Home</a></li>
          <li class="mb-2"><a href="about.php" class="text-light text-opacity-75 text-decoration-none hover-white">About Us</a></li>
          <li class="mb-2"><a href="services.php" class="text-light text-opacity-75 text-decoration-none hover-white">Services & Modules</a></li>
          <li class="mb-2"><a href="contact.php" class="text-light text-opacity-75 text-decoration-none hover-white">Contact & Support</a></li>
        </ul>
      </div>

      <div class="col-lg-3 col-md-6">
        <h6 class="fw-bold text-uppercase text-light mb-3 small tracking-wider">POS Modules</h6>
        <ul class="list-unstyled small">
          <li class="mb-2 text-light text-opacity-75"><i class="bi bi-check2 text-primary me-1"></i> IMEI Serial Management</li>
          <li class="mb-2 text-light text-opacity-75"><i class="bi bi-check2 text-primary me-1"></i> Mobile Repair Job Sheets</li>
          <li class="mb-2 text-light text-opacity-75"><i class="bi bi-check2 text-primary me-1"></i> Thermal & WhatsApp Billing</li>
          <li class="mb-2 text-light text-opacity-75"><i class="bi bi-check2 text-primary me-1"></i> Customer Khata / Credit</li>
        </ul>
      </div>

      <div class="col-lg-3 col-md-6">
        <h6 class="fw-bold text-uppercase text-light mb-3 small tracking-wider">Live System Portal</h6>
        <p class="text-light text-opacity-75 small mb-3">Access your store counter and backoffice directly:</p>
        <a href="http://emobile.zrmsolutions.com/" target="_blank" class="btn btn-outline-light btn-sm fw-semibold w-100 py-2">
          <i class="bi bi-box-arrow-up-right me-2"></i> emobile.zrmsolutions.com
        </a>
      </div>
    </div>

    <div class="border-top border-secondary pt-3 d-flex flex-column flex-md-row justify-content-between align-items-center small text-light text-opacity-50">
      <div>&copy; <?php echo date('Y'); ?> ZRM Solutions. All rights reserved.</div>
      <div>Designed with HTML5, CSS3 & Bootstrap 5 for modern mobile responsiveness.</div>
    </div>
  </div>
</footer>

<!-- Bootstrap 5 Bundle with Popper JS -->
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-YvpcrYf0tY3lHB60NNkmXc5s9fDVZLESaAA55NDzOxhy9GkcIdslK1eN7N6jIeHz" crossorigin="anonymous"></script>
</body>
</html>`
  },
  {
    filename: 'style.css',
    title: 'Custom CSS (style.css)',
    description: 'Custom CSS3 styling for smooth transitions, card hovers, typography refinements, and mobile responsive optimization.',
    content: `/* Custom CSS for eMobile POS */
:root {
  --bs-primary: #0d6efd;
  --bs-primary-rgb: 13, 110, 253;
  --font-family-base: 'Plus Jakarta Sans', system-ui, -apple-system, sans-serif;
}

body {
  font-family: var(--font-family-base);
  color: #2b3445;
  background-color: #ffffff;
  overflow-x: hidden;
}

.hover-shadow {
  transition: transform 0.2s ease, box-shadow 0.2s ease;
}

.hover-shadow:hover {
  transform: translateY(-4px);
  box-shadow: 0 0.5rem 1.5rem rgba(0, 0, 0, 0.08) !important;
}

.tracking-tight {
  letter-spacing: -0.025em;
}

.tracking-wider {
  letter-spacing: 0.05em;
}

.hero-section {
  background: linear-gradient(180deg, #f8faff 0%, #ffffff 100%);
}

.nav-link {
  transition: color 0.15s ease;
}

.hover-white:hover {
  color: #ffffff !important;
}

/* Mobile responsive padding enhancements */
@media (max-width: 767.98px) {
  .display-4 {
    font-size: 2.25rem;
  }
}
`
  }
];
