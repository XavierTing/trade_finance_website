import BankGuaranteeAmendmentFlow from '../components/ui/BankGuaranteeAmendmentFlow';
import BankGuaranteeFlow from '../components/ui/BankGuaranteeFlow';
import CashBackedBGFlow from '../components/ui/CashBackedBGFlow';
import PerformanceGuaranteeFlow from '../components/ui/PerformanceGuaranteeFlow';
import StandbyLCAmendmentFlow from '../components/ui/StandbyLCAmendmentFlow';
import StandbyLCFlow from '../components/ui/StandbyLCFlow';
import TenderGuaranteeFlow from '../components/ui/TenderGuaranteeFlow';
import type { Product } from '../types/Product';

export const guaranteeProducts: Product[] = [
  {
    id: 'bank-guarantee',
    name: 'Bank Guarantee',
    scenario: 'A construction company wins a $5M government contract — the project owner requires a guarantee that the work will be completed as promised.',
    explanation: 'A Bank Guarantee is a promise from The Bank to a third party: if your company fails to deliver on a contract, The Bank will compensate them. Think of it as your bank vouching for you. It\'s commonly used in construction, supply agreements, and government contracts where the other party needs assurance before working with you.',
    diagram: BankGuaranteeFlow,
  },
  {
    id: 'bank-guarantee-amendment',
    name: 'Bank Guarantee Amendment',
    scenario: 'A warehouse project is extended by 6 months — the contractor needs to extend the Bank Guarantee expiry date before it lapses.',
    explanation: 'Sometimes the terms of an existing Bank Guarantee need to change — the project timeline shifts, the contract value increases, or the beneficiary details are updated. An amendment is a formal request through The Bank to modify the original guarantee. The beneficiary must consent before the change takes effect.',
    diagram: BankGuaranteeAmendmentFlow,
  },
  {
    id: 'standby-lc',
    name: 'Standby Letter of Credit',
    scenario: 'A Singapore supplier needs to assure an overseas buyer that if they fail to deliver, the buyer will be compensated up to $1M.',
    explanation: 'A Standby Letter of Credit works like a Bank Guarantee but follows international letter of credit rules (UCP/ISP). It sits in the background — "on standby" — and only activates if you fail to meet your obligations. It\'s widely used in cross-border transactions where the beneficiary prefers a letter of credit format over a guarantee.',
    diagram: StandbyLCFlow,
  },
  {
    id: 'standby-lc-amendment',
    name: 'Standby Letter of Credit Amendment',
    scenario: 'A long-term supply contract is renewed for another year — the Standby Letter of Credit validity needs to be extended to match.',
    explanation: 'When the terms of an existing Standby Letter of Credit need updating — extending the expiry date, adjusting the amount, or changing beneficiary details — the applicant requests an amendment through The Bank. Like a Bank Guarantee Amendment, all parties must agree before the changes take effect.',
    diagram: StandbyLCAmendmentFlow,
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
