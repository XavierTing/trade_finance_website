import CashBackedBGFlow from '../components/ui/CashBackedBGFlow';
import PerformanceGuaranteeFlow from '../components/ui/PerformanceGuaranteeFlow';
import TenderGuaranteeFlow from '../components/ui/TenderGuaranteeFlow';
import type { Product } from '../types/Product';

export const guaranteeProducts: Product[] = [
  {
    id: 'bank-guarantee-sblc',
    name: 'Bank Guarantee / Standby Letter of Credit',
    scenario: 'A construction company needs to assure the project owner they\'ll complete the work — or the owner gets compensated.',
    explanation: 'A Bank Guarantee or Standby Letter of Credit is like an insurance policy from your bank. If you fail to fulfill a contract, the other party can claim money from The Bank. It\'s "standby" because it only activates if something goes wrong.',
    flow: [
      { label: 'Applicant requests guarantee' },
      { label: 'The Bank issues Bank Guarantee/Standby Letter of Credit' },
      { label: 'Beneficiary receives guarantee' },
      { label: 'Contract performed normally' },
      { label: 'If default: beneficiary claims' },
    ],
  },
  {
    id: 'bg-sblc-amendment',
    name: 'Bank Guarantee / Standby Letter of Credit Amendment',
    scenario: 'A warehouse project is extended by 6 months — the contractor needs to extend the Bank Guarantee expiry date.',
    explanation: 'If the terms of a Bank Guarantee or Standby Letter of Credit need to change — extend the validity period, increase the guarantee amount, or update beneficiary details — the applicant requests an amendment through The Bank.',
    bullets: [
      'Applicant requests → The Bank reviews → Beneficiary consents → Amendment issued',
      'The original guarantee remains in force until amendment is accepted',
      'Amendment fees apply and vary based on the type of change',
    ],
  },
  {
    id: 'performance-guarantee',
    name: 'Performance Guarantee',
    scenario: 'A construction firm wins a $10M contract — the owner requires a 10% performance bond before work begins.',
    explanation: 'Guarantees the applicant will fulfill their contract obligations. If they fail, the beneficiary (e.g. project owner) claims from The Bank without needing to prove the exact loss — just that the contractor didn\'t perform.',
    diagram: PerformanceGuaranteeFlow,
  },
  {
    id: 'tender-guarantee',
    name: 'Tender Guarantee',
    scenario: 'A company bidding on a $50M government project needs a 2% bid bond to prove they won\'t walk away if they win.',
    explanation: 'Required when bidding on projects or government tenders. It proves the bidder is serious and financially capable. If the bidder wins but refuses to sign the contract, the tender organizer claims the guarantee.',
    diagram: TenderGuaranteeFlow,
  },
  {
    id: 'cash-backed-bg',
    name: 'Cash Backed Bank Guarantee',
    scenario: 'A small business with limited credit history needs a guarantee fast — they deposit cash to secure it.',
    explanation: 'A simpler version where the applicant deposits the full guarantee amount in cash with The Bank. Faster to issue, lower fees, minimal credit assessment. Think of it as a security deposit issued as a formal guarantee document.',
    diagram: CashBackedBGFlow,
  },
];
