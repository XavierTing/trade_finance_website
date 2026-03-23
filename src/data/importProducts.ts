import ImportBillLCFlow from '../components/ui/ImportBillLCFlow';
import ImportDocCollectionFlow from '../components/ui/ImportDocCollectionFlow';
import LCAcceptanceAdviceFlow from '../components/ui/LCAcceptanceAdviceFlow';
import LCAmendmentFlow from '../components/ui/LCAmendmentFlow';
import LCProcessFlow from '../components/ui/LCProcessFlow';
import TrustReceiptFlow from '../components/ui/TrustReceiptFlow';
import WithdrawalFormFlow from '../components/ui/WithdrawalFormFlow';
import type { Product } from '../types/Product';

export const importProducts: Product[] = [
  {
    id: 'letter-of-credit',
    name: 'Letter of Credit',
    scenario: 'An importer buying $500K of timber from Indonesia needs the seller to trust they\'ll get paid.',
    explanation: 'A Letter of Credit is an independent undertaking from your bank (the issuing bank) to the seller, communicated through the seller\'s bank (the advising bank). Your bank commits to pay the seller, as long as the seller presents documents that strictly comply with the LC terms — such as the bill of lading, commercial invoice, and any required certificates. This protects both sides: the seller knows payment is bank-guaranteed, and the buyer knows the bank only pays against compliant documents.',
    diagram: LCProcessFlow,
  },
  {
    id: 'lc-amendment',
    name: 'Letter of Credit Amendment',
    scenario: 'A port strike delays the shipment by 2 weeks — the buyer extends the Letter of Credit shipment date so it doesn\'t expire.',
    explanation: 'Sometimes after a Letter of Credit is issued, the terms need to change — maybe the shipment date is delayed, the quantity changes, or the price is adjusted. A Letter of Credit Amendment is a formal request to modify the original Letter of Credit. Under UCP 600, all parties — including the seller (beneficiary) — must agree before the amendment takes effect. The seller can reject amendments they find unfavorable.',
    diagram: LCAmendmentFlow,
  },
  {
    id: 'lc-acceptance-advice',
    name: 'Letter of Credit Acceptance Advice',
    scenario: 'A buyer imports $500K of electronics on 90-day terms — the bank formally accepts a time draft, locking in a future payment date.',
    explanation: 'When a Letter of Credit allows deferred payment (e.g. pay 90 days after shipment), the nominated bank formally "accepts" the time draft drawn under the LC — creating a banker\'s acceptance, which is a bank-guaranteed, tradeable promise to pay on a fixed date. The Acceptance Advice notifies all parties that this acceptance has been recorded and confirms the maturity date.',
    diagram: LCAcceptanceAdviceFlow,
  },
  {
    id: 'import-bill-under-lc',
    name: 'Import Bill under Letter of Credit',
    scenario: 'The shipping documents have arrived at The Bank — the buyer needs to pay or accept before collecting goods.',
    explanation: 'After the seller ships goods and presents documents to their bank, those documents travel to The Bank. The Bank checks everything matches the Letter of Credit terms, then asks the buyer to pay. Once paid, The Bank releases documents so the buyer can collect goods from the port.',
    diagram: ImportBillLCFlow,
  },
  {
    id: 'trust-receipt',
    name: 'Trust Receipt',
    scenario: 'A retailer\'s shipment arrived but they can\'t pay until they sell the goods — they need the stock now.',
    explanation: 'The goods have arrived at port, but the buyer hasn\'t fully paid the bank yet. A Trust Receipt lets the buyer collect the goods now and sell them, then repay The Bank from the sales proceeds. Legally, The Bank retains title to the goods — the buyer holds them as the bank\'s trustee, meaning the sales proceeds must be remitted directly to The Bank, not mixed with other funds.',
    diagram: TrustReceiptFlow,
  },
  {
    id: 'import-documentary-collection',
    name: 'Import Documentary Collection',
    scenario: 'A buyer has a trusted long-term supplier and wants a cheaper option than a Letter of Credit.',
    explanation: 'A simpler, cheaper alternative to a Letter of Credit. The bank acts as a middleman for documents — not a guarantor of payment. The Bank gives documents to the buyer only after the buyer pays (Documents against Payment, or D/P) or formally accepts a draft promising to pay later (Documents against Acceptance, or D/A). No bank guarantee — relies on trust between buyer and seller.',
    diagram: ImportDocCollectionFlow,
  },
  {
    id: 'withdrawal-form-notification',
    name: 'Withdrawal Form Notification',
    scenario: 'A buyer\'s $200K Letter of Credit was only used for $180K — they close it out to free up the remaining $20K credit limit.',
    explanation: 'When an import transaction is complete — the buyer has paid in full, or the Letter of Credit has expired unused — this formally closes it out. It notifies The Bank to release documents, return collateral, or cancel the remaining Letter of Credit balance.',
    diagram: WithdrawalFormFlow,
  },
];
