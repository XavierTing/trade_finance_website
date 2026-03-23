import Navbar from '../components/sections/Navbar';
import Hero from '../components/sections/Hero';
import WhatIsTradeFinance from '../components/sections/WhatIsTradeFinance';
import CategorySection from '../components/sections/CategorySection';
import SummaryTables from '../components/sections/SummaryTables';
import Footer from '../components/sections/Footer';
import { importProducts } from '../data/importProducts';
import { exportProducts } from '../data/exportProducts';
import { guaranteeProducts } from '../data/guaranteeProducts';
import { billsProducts } from '../data/billsProducts';
import { financingProducts } from '../data/financingProducts';
import type { Category } from '../types/Product';

const categories: Category[] = [
  {
    id: 'import',
    title: 'Import',
    titleSecondary: 'Products',
    subtitle: 'Products for bringing goods into Singapore.',
    products: importProducts,
  },
  {
    id: 'export',
    title: 'Export',
    titleSecondary: 'Products',
    subtitle: 'Products for selling goods from Singapore overseas.',
    products: exportProducts,
  },
  {
    id: 'guarantee',
    title: 'Guarantee',
    titleSecondary: 'Products',
    subtitle: 'Products that provide financial assurance to counterparties.',
    products: guaranteeProducts,
  },
  {
    id: 'bills',
    title: 'e-Bills',
    titleSecondary: 'E-Commercial Draft',
    subtitle: 'China\'s electronic tradeable payment instruments for domestic and cross-border trade, covering issuance, endorsement, discounting, pledging, and lifecycle management of acceptance drafts.',
    products: billsProducts,
  },
  {
    id: 'financing',
    title: 'Trade',
    titleSecondary: 'Financing',
    subtitle: 'Products that help manage cash flow in international trade.',
    products: financingProducts,
  },
];

const Divider = () => (
  <div className="mx-auto max-w-6xl px-6 lg:px-8">
    <div className="border-t border-text-primary/[0.06]" />
  </div>
);

const Home = () => (
  <>
    <div className="relative z-10 bg-bg-primary">
      <Navbar />
      <main>
        <Hero />
        <WhatIsTradeFinance />
        {categories.map((category) => (
          <div key={category.id}>
            <Divider />
            <CategorySection category={category} />
          </div>
        ))}
        <Divider />
        <SummaryTables />
      </main>
    </div>
    <Footer />
  </>
);

export default Home;
