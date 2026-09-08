export type PageId = 'home' | 'about' | 'services' | 'pricing' | 'contact' | 'php-source';

export interface PosFeature {
  id: string;
  title: string;
  category: 'Billing' | 'Repairs' | 'Inventory' | 'Accounting' | 'CRM' | 'Reporting';
  icon: string;
  shortDesc: string;
  detailedDesc: string;
  keyBenefits: string[];
  badge?: string;
}

export interface PricingPlan {
  id: string;
  name: string;
  tagline: string;
  monthlyPrice: number;
  annualPrice: number;
  isPopular?: boolean;
  features: string[];
  countersAllowed: string;
  supportLevel: string;
}

export interface RepairJobStatus {
  ticketNumber: string;
  customerName: string;
  phoneModel: string;
  imei: string;
  issue: string;
  status: 'Pending' | 'Diagnosing' | 'Parts Ordered' | 'In Repair' | 'Ready for Pickup' | 'Delivered';
  technician: string;
  estimatedCost: number;
  receivedDate: string;
}

export interface SampleProduct {
  id: string;
  name: string;
  category: 'Smartphone' | 'Accessories' | 'Spare Parts' | 'Audio';
  brand: string;
  price: number;
  imei?: string;
  stock: number;
  barcode: string;
}

export interface FaqItem {
  question: string;
  answer: string;
  category: 'General' | 'Hardware' | 'Repairs' | 'Pricing';
}

export interface PhpFileTemplate {
  filename: string;
  title: string;
  description: string;
  content: string;
}
