import ExportDocCollectionFlow from '../components/ui/ExportDocCollectionFlow';
import ExpressTrackingFlow from '../components/ui/ExpressTrackingFlow';
import NegotiateDiscountFlow from '../components/ui/NegotiateDiscountFlow';
import TransferredLCFlow from '../components/ui/TransferredLCFlow';
import type { Product } from '../types/Product';

export const exportProducts: Product[] = [
  {
    id: 'export-documentary-collection',
    name: 'Export Documentary Collection',
    scenario: 'A Singapore electronics exporter ships $200K of goods to Africa and needs to control documents until payment.',
    explanation: 'The mirror image of Import Documentary Collection, from the exporter\'s perspective. When you ship goods overseas, you hand shipping documents to The Bank. The Bank forwards them to the buyer\'s bank, which only releases documents once the buyer pays or accepts.',
    diagram: ExportDocCollectionFlow,
  },
  {
    id: 'negotiate-discount-documents',
    name: 'Negotiate / Discount Documents',
    scenario: 'An exporter shipped goods but the Letter of Credit pays in 90 days — they need cash now, not in 3 months.',
    explanation: 'The exporter has shipped goods under a Letter of Credit and has compliant documents, but the Letter of Credit pays in 90 days. Instead of waiting, The Bank pays them now at a discount, then collects the full amount from the issuing bank at maturity.',
    diagram: NegotiateDiscountFlow,
  },
  {
    id: 'transferred-lc',
    name: 'Transferred Letter of Credit',
    scenario: 'A trading company wins an order but sources from a factory — they pass the Letter of Credit to their supplier.',
    explanation: 'A trading company receives a Letter of Credit from an overseas buyer but doesn\'t manufacture the goods. They "transfer" the Letter of Credit to their actual supplier, so the supplier can ship directly and get paid. The middleman earns the price difference.',
    diagram: TransferredLCFlow,
  },
  {
    id: 'express-tracking',
    name: 'Express Tracking Number Inquiry',
    scenario: 'An exporter needs to know when their documents will reach the buyer\'s bank so the buyer can clear goods.',
    explanation: 'When original shipping documents are sent between banks via courier, this service lets the exporter track exactly where the documents are in the banking chain. It provides the courier tracking number so you can monitor delivery in real-time.',
    diagram: ExpressTrackingFlow,
  },
];
