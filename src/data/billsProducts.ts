import BankAcceptanceDraftFlow from '../components/ui/BankAcceptanceDraftFlow';
import CommercialAcceptanceDraftFlow from '../components/ui/CommercialAcceptanceDraftFlow';
import DiscountingFlow from '../components/ui/DiscountingFlow';
import EndorsementFlow from '../components/ui/EndorsementFlow';
import PledgeFlow from '../components/ui/PledgeFlow';
import RecourseFlow from '../components/ui/RecourseFlow';
import SigningRejectionFlow from '../components/ui/SigningRejectionFlow';
import type { Product } from '../types/Product';

export const billsProducts: Product[] = [
  {
    id: 'bank-acceptance-draft',
    name: 'Bank Acceptance Draft Issuance',
    scenario: 'A buyer with limited credit history needs the bank\'s name behind the draft so the seller will accept deferred payment.',
    explanation: 'The buyer asks The Bank to accept a draft on their behalf, making the bank the primary obligor. Because the bank\'s credit stands behind the draft, it carries higher trust and can be discounted at better rates in the money market. The seller receives a bank-guaranteed promise to pay on a fixed date. In China\'s ECDS (Electronic Commercial Draft System), these are issued and traded electronically.',
    diagram: BankAcceptanceDraftFlow,
  },
  {
    id: 'commercial-acceptance-draft',
    name: 'Commercial Acceptance Draft Issuance',
    scenario: 'A well-known buyer with strong credit purchases regularly — the seller trusts the buyer\'s own promise to pay.',
    explanation: 'The seller draws a draft directly on the buyer, who signs (accepts) it as a promise to pay. No bank guarantee — the draft is backed purely by the buyer\'s creditworthiness. Cheaper than a bank acceptance but riskier for the seller.',
    diagram: CommercialAcceptanceDraftFlow,
  },
  {
    id: 'endorsement',
    name: 'Endorsement',
    scenario: 'Supplier A holds a 180-day draft but owes Supplier B for raw materials — they endorse the draft to B as payment.',
    explanation: 'The holder of an Acceptance Draft signs it over to a third party as payment. The draft becomes a transferable payment instrument — essentially "paying" your supplier with someone else\'s promise to pay you. Note: the endorser remains contingently liable — if the original payer defaults at maturity, the holder can seek payment from any prior endorser in the chain.',
    diagram: EndorsementFlow,
  },
  {
    id: 'discounting',
    name: 'Discounting',
    scenario: 'A seller has a $100K draft due in 6 months but needs cash today to fund a new order.',
    explanation: 'The holder sells the Acceptance Draft to The Bank at a discount before maturity. The Bank pays the holder today (minus a discount fee), then collects the full face value from the payer at maturity. Discounting may be "with recourse" (if the payer defaults, The Bank can recover from the seller) or "without recourse" (The Bank absorbs the risk). Check the terms carefully.',
    diagram: DiscountingFlow,
  },
  {
    id: 'pledge',
    name: 'Pledge',
    scenario: 'A company holds $1M in drafts but doesn\'t want to sell them — they pledge them to get a loan instead.',
    explanation: 'Instead of discounting or endorsing, the holder uses Acceptance Drafts as collateral to secure a bank loan. The drafts sit with The Bank as security — the holder gets a working capital loan while the drafts remain in force.',
    diagram: PledgeFlow,
  },
  {
    id: 'recourse',
    name: 'Recourse',
    scenario: 'The Bank discounted a $100K draft but the buyer defaulted — The Bank recovers the money from the seller who sold them the draft.',
    explanation: 'If the payer defaults on an Acceptance Draft at maturity, the bank exercises recourse — going back to the party who discounted or endorsed the draft to recover the money. It\'s the bank\'s safety net against non-payment.',
    diagram: RecourseFlow,
  },
  {
    id: 'signing-rejection-cancellation',
    name: 'Signing / Rejection & Cancellation',
    scenario: 'The buyer inspects the draft and either signs to confirm payment, rejects due to a dispute, or cancels if the deal falls through.',
    explanation: 'When an Acceptance Draft is presented, the buyer has three options. Signing (acceptance) formally commits the buyer to pay at maturity — once signed, this is an unconditional legal obligation. Rejection means the buyer refuses to accept the draft, typically due to a dispute over the goods or terms; the presenting party retains recourse rights. Cancellation voids a previously issued draft by mutual agreement, usually when the underlying deal falls through.',
    diagram: SigningRejectionFlow,
  },
];
