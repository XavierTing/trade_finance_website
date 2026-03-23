import LCProcessFlow from '../components/ui/LCProcessFlow';
import type { Product } from '../types/Product';

export const importProducts: Product[] = [
  {
    id: 'letter-of-credit',
    name: 'Letter of Credit',
    scenario: 'An importer buying $500K of timber from Indonesia needs the seller to trust they\'ll get paid.',
    explanation: 'A Letter of Credit is like a promise from your bank to the seller\'s bank. When you (the buyer) want to purchase goods from overseas, your bank issues a document saying: "We guarantee payment, as long as the seller ships the goods and provides the correct documents." This protects both sides.',
    diagram: LCProcessFlow,
  },
  {
    id: 'lc-amendment',
    name: 'Letter of Credit Amendment',
    scenario: 'A port strike delays the shipment by 2 weeks — the buyer extends the Letter of Credit shipment date so it doesn\'t expire.',
    explanation: 'Sometimes after a Letter of Credit is issued, the terms need to change — maybe the shipment date is delayed, the quantity changes, or the price is adjusted. A Letter of Credit Amendment is a formal request to modify the original Letter of Credit.',
    bullets: [
      'Buyer requests → The Bank processes → Seller\'s bank notified → Seller agrees/rejects',
      'Both parties must consent — the seller cannot be forced to accept changes',
      'Each amendment may incur additional bank charges',
      'The original Letter of Credit remains valid until the amendment is accepted',
    ],
  },
  {
    id: 'lc-acceptance-advice',
    name: 'Letter of Credit Acceptance Advice',
    scenario: 'A buyer imports $500K of electronics on 90-day terms — they sign to confirm they\'ll pay in 90 days.',
    explanation: 'When a Letter of Credit allows deferred payment (e.g. pay 90 days after shipment), the buyer formally "accepts" the obligation to pay at maturity. The Acceptance Advice is the bank\'s record confirming the buyer has agreed to this future payment.',
    bullets: [
      'The seller can use this accepted draft to get early payment (discounting)',
      'Once accepted, the buyer cannot reverse or dispute the payment obligation',
      'The Bank records the acceptance and tracks the maturity date for settlement',
    ],
  },
  {
    id: 'import-bill-under-lc',
    name: 'Import Bill under Letter of Credit',
    scenario: 'The shipping documents have arrived at The Bank — the buyer needs to pay or accept before collecting goods.',
    explanation: 'After the seller ships goods and presents documents to their bank, those documents travel to The Bank. The Bank checks everything matches the Letter of Credit terms, then asks the buyer to pay. Once paid, The Bank releases documents so the buyer can collect goods from the port.',
    flow: [
      { label: 'Seller\'s bank sends docs' },
      { label: 'The Bank checks documents' },
      { label: 'Buyer pays / accepts' },
      { label: 'Documents released' },
      { label: 'Buyer collects goods' },
    ],
  },
  {
    id: 'trust-receipt',
    name: 'Trust Receipt',
    scenario: 'A retailer\'s shipment arrived but they can\'t pay until they sell the goods — they need the stock now.',
    explanation: 'The goods have arrived at port, but the buyer hasn\'t fully paid the bank yet. A Trust Receipt lets the buyer collect the goods now and sell them, then repay The Bank from the sales proceeds. The bank trusts you with the goods while you convert them into cash.',
    flow: [
      { label: 'Buyer signs Trust Receipt' },
      { label: 'The Bank releases docs' },
      { label: 'Buyer collects & sells goods' },
      { label: 'Repays The Bank from sales' },
    ],
  },
  {
    id: 'import-documentary-collection',
    name: 'Import Documentary Collection',
    scenario: 'A buyer has a trusted long-term supplier and wants a cheaper option than a Letter of Credit.',
    explanation: 'A simpler, cheaper alternative to a Letter of Credit. The bank acts as a middleman for documents — not a guarantor of payment. The Bank gives documents to the buyer only after the buyer pays (D/P) or promises to pay later (D/A). No bank guarantee — relies on trust.',
    flow: [
      { label: 'Seller ships goods' },
      { label: 'Seller\'s bank sends docs' },
      { label: 'The Bank forwards docs' },
      { label: 'Presents to buyer' },
      { label: 'Buyer pays or accepts' },
    ],
  },
  {
    id: 'withdrawal-form-notification',
    name: 'Withdrawal Form Notification',
    scenario: 'A buyer\'s $200K Letter of Credit was only used for $180K — they close it out to free up the remaining $20K credit limit.',
    explanation: 'When an import transaction is complete — the buyer has paid in full, or the Letter of Credit has expired unused — this formally closes it out. It notifies The Bank to release documents, return collateral, or cancel the remaining Letter of Credit balance.',
    bullets: [
      'Also used when the buyer wants to withdraw original shipping documents from the bank',
      'Ensures the bank\'s records are updated and no lingering obligations remain',
      'Prevents unused Letters of Credit from tying up credit limits',
    ],
  },
];
