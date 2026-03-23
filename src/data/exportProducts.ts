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
    explanation: 'The exporter\'s side of a Documentary Collection. When you ship goods overseas, you hand shipping documents to your bank (the remitting bank), which forwards them to the buyer\'s bank (the collecting bank). The collecting bank only releases documents once the buyer pays (D/P) or formally accepts a time draft (D/A). Unlike a Letter of Credit, the banks do not guarantee payment — if the buyer refuses or cannot pay, the exporter bears the risk and must arrange return of goods or sell them locally.',
    diagram: ExportDocCollectionFlow,
  },
  {
    id: 'negotiate-discount-documents',
    name: 'Negotiate / Discount Documents',
    scenario: 'An exporter shipped goods but the Letter of Credit pays in 90 days — they need cash now, not in 3 months.',
    explanation: 'The exporter has shipped goods under a Letter of Credit and has compliant documents, but the Letter of Credit pays in 90 days. Instead of waiting, The Bank pays them now at a discount (minus an early-payment fee), then collects the full amount from the issuing bank at maturity. This may be done with or without recourse — if "with recourse" and the issuing bank fails to pay, the exporter must repay The Bank.',
    diagram: NegotiateDiscountFlow,
  },
  {
    id: 'transferred-lc',
    name: 'Transferred Letter of Credit',
    scenario: 'A trading company wins an order but sources from a factory — they pass the Letter of Credit to their supplier.',
    explanation: 'A trading company receives a Letter of Credit from an overseas buyer but doesn\'t manufacture the goods. They "transfer" the Letter of Credit to their actual supplier, so the supplier can ship directly and get paid. The middleman earns the price difference by substituting their own higher-value invoice before documents are presented to the issuing bank. Note: the original LC must explicitly state it is "transferable," and it can only be transferred once.',
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
