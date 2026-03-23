export interface FlowStepData {
  label: string;
  description?: string;
}

export interface Product {
  id: string;
  name: string;
  scenario: string;
  explanation: string;
  bullets?: string[];
  flow?: FlowStepData[];
  image?: string;
  diagram?: React.ComponentType;
}

export type CategoryId = 'import' | 'export' | 'guarantee' | 'bills' | 'financing';

export interface Category {
  id: CategoryId;
  title: string;
  titleSecondary?: string;
  subtitle: string;
  products: Product[];
}

export interface SummaryRow {
  product: string;
  category: string;
  protection: string;
  keyBenefit: string;
}

export interface NavItem {
  id: string;
  label: string;
  href: string;
  children?: { label: string; href: string }[];
}
