import InvoiceFinancingFlow from '../components/ui/InvoiceFinancingFlow';
import MarginLetterFlow from '../components/ui/MarginLetterFlow';
import TFAmendmentSettlementFlow from '../components/ui/TFAmendmentSettlementFlow';
import type { Product } from '../types/Product';

export const financingProducts: Product[] = [
  {
    id: 'invoice-financing',
    name: 'Invoice Financing',
    scenario: 'A supplier has $500K in outstanding invoices but needs cash now to fulfill a new order.',
    explanation: 'Instead of waiting 30-90 days for your customer to pay, you submit the invoice to The Bank and receive 80-90% upfront. When the customer pays at maturity, The Bank deducts fees and gives you the remainder.',
    diagram: InvoiceFinancingFlow,
  },
  {
    id: 'margin-letter',
    name: 'Margin Letter',
    scenario: 'A buyer applies for a $1M Letter of Credit — The Bank requires 20% cash margin ($200K deposit) before issuing it.',
    explanation: 'Before issuing a Letter of Credit or Bank Guarantee, The Bank may require the customer to deposit a percentage of the total value as cash margin. The Margin Letter confirms this deposit and the terms under which it\'s held.',
    diagram: MarginLetterFlow,
  },
  {
    id: 'tf-amendment-settlement',
    name: 'Trade Financing Amendment & Settlement',
    scenario: 'A borrower\'s buyer is paying late — they need to extend the financing repayment date by 30 days.',
    explanation: 'Covers modifications to existing trade financing and their final repayment. An amendment might extend a repayment date or adjust the financing amount. Settlement is the final repayment that closes out the facility.',
    diagram: TFAmendmentSettlementFlow,
  },
];
