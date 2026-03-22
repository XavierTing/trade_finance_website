import type { Product } from '../types/Product';

export const billsProducts: Product[] = [
  {
    id: 'bank-acceptance-draft',
    name: 'Bank Acceptance Draft Issuance',
    scenario: 'A buyer with limited credit history needs the bank\'s name behind the draft so the seller will accept deferred payment.',
    explanation: 'The buyer asks The Bank to issue and accept a draft on their behalf. Because the bank\'s credit stands behind the draft, it carries higher trust and can be discounted at better rates. The seller receives a bank-guaranteed promise to pay on a fixed date.',
    flow: [
      { label: 'Buyer applies for draft' },
      { label: 'The Bank accepts & guarantees' },
      { label: 'Draft issued to seller' },
      { label: 'Seller can discount or endorse' },
    ],
  },
  {
    id: 'commercial-acceptance-draft',
    name: 'Commercial Acceptance Draft Issuance',
    scenario: 'A well-known buyer with strong credit purchases regularly — the seller trusts the buyer\'s own promise to pay.',
    explanation: 'The seller draws a draft directly on the buyer, who signs (accepts) it as a promise to pay. No bank guarantee — the draft is backed purely by the buyer\'s creditworthiness. Cheaper than a bank acceptance but riskier for the seller.',
    flow: [
      { label: 'Seller draws draft on buyer' },
      { label: 'Presented via The Bank' },
      { label: 'Buyer accepts (signs)' },
      { label: 'Seller can discount or endorse' },
    ],
  },
  {
    id: 'endorsement',
    name: 'Endorsement',
    scenario: 'Supplier A holds a 180-day draft but owes Supplier B for raw materials — they endorse the draft to B as payment.',
    explanation: 'The holder of an Acceptance Draft signs it over to a third party as payment. The draft becomes a transferable payment instrument — essentially "paying" your supplier with someone else\'s promise to pay you.',
    bullets: [
      'The draft passes from one party to the next, each adding their endorsement',
      'All endorsers are jointly liable — if the original payer defaults, the chain of endorsers is responsible',
      'Commonly used in supply chains where suppliers pay their own sub-suppliers',
      'No cash changes hands — the draft itself is the payment',
    ],
  },
  {
    id: 'discounting',
    name: 'Discounting',
    scenario: 'A seller has a $100K draft due in 6 months but needs cash today to fund a new order.',
    explanation: 'The holder sells the Acceptance Draft to The Bank at a discount before maturity. The Bank pays the holder today (minus a discount fee), then collects the full face value from the payer at maturity.',
    bullets: [
      'Example: A seller holds a $100K draft due in 6 months. The Bank buys it for ~$97K today.',
      'The discount rate depends on the payer\'s creditworthiness and time to maturity',
      'Bank acceptance drafts get better rates than commercial acceptance drafts',
      'The seller gets immediate liquidity; The Bank earns the spread',
    ],
  },
  {
    id: 'pledge',
    name: 'Pledge',
    scenario: 'A company holds $1M in drafts but doesn\'t want to sell them — they pledge them to get a loan instead.',
    explanation: 'Instead of discounting or endorsing, the holder uses Acceptance Drafts as collateral to secure a bank loan. The drafts sit with The Bank as security — the holder gets a working capital loan while the drafts remain in force.',
    bullets: [
      'Example: A company holds $1M in drafts and pledges them to The Bank for a working capital loan',
      'The loan amount is typically a percentage (e.g. 80-90%) of the draft face value',
      'When the drafts mature, the proceeds repay the loan automatically',
      'Useful when you want to keep the drafts but still need cash for operations',
    ],
  },
  {
    id: 'recourse',
    name: 'Recourse',
    scenario: 'The Bank discounted a $100K draft but the buyer defaulted — The Bank recovers the money from the seller who sold them the draft.',
    explanation: 'If the payer defaults on an Acceptance Draft at maturity, the bank exercises recourse — going back to the party who discounted or endorsed the draft to recover the money. It\'s the bank\'s safety net against non-payment.',
    bullets: [
      'All endorsers in the chain are liable — recourse can go back through multiple parties',
      'This is why the creditworthiness of all parties in the chain matters',
      '"Without recourse" arrangements exist but carry higher fees',
    ],
  },
  {
    id: 'signing-rejection-cancellation',
    name: 'Signing / Rejection & Cancellation',
    scenario: 'The buyer inspects the draft and either signs to confirm payment, rejects due to a dispute, or cancels if the deal falls through.',
    explanation: 'These cover the lifecycle decisions on an Acceptance Draft.',
    bullets: [
      'Signing (Acceptance): The buyer signs the draft — formally accepting the obligation to pay at maturity. Once signed, the buyer cannot back out.',
      'Rejection: The buyer refuses to sign — typically because the goods don\'t match the order or terms are wrong. The draft is returned unpaid.',
      'Cancellation: The underlying trade deal falls through and both parties agree to cancel. The draft is formally voided.',
      'Signing creates a legally binding payment obligation; rejection and cancellation do not.',
    ],
  },
];
