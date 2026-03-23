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
    explanation: 'The buyer asks The Bank to issue and accept a draft on their behalf. Because the bank\'s credit stands behind the draft, it carries higher trust and can be discounted at better rates. The seller receives a bank-guaranteed promise to pay on a fixed date.',
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
    explanation: 'The holder of an Acceptance Draft signs it over to a third party as payment. The draft becomes a transferable payment instrument — essentially "paying" your supplier with someone else\'s promise to pay you.',
    diagram: EndorsementFlow,
  },
  {
    id: 'discounting',
    name: 'Discounting',
    scenario: 'A seller has a $100K draft due in 6 months but needs cash today to fund a new order.',
    explanation: 'The holder sells the Acceptance Draft to The Bank at a discount before maturity. The Bank pays the holder today (minus a discount fee), then collects the full face value from the payer at maturity.',
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
    explanation: 'These cover the lifecycle decisions on an Acceptance Draft.',
    diagram: SigningRejectionFlow,
  },
];
