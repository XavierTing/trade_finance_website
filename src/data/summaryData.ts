import type { SummaryRow } from '../types/Product';

export const importExportSummary: SummaryRow[] = [
  { product: 'Letter of Credit', category: 'Import', protection: 'High', keyBenefit: 'Bank guarantees payment to seller' },
  { product: 'Letter of Credit Amendment', category: 'Import', protection: 'High', keyBenefit: 'Modify Letter of Credit terms after issuance' },
  { product: 'Letter of Credit Acceptance Advice', category: 'Import', protection: 'High', keyBenefit: 'Buyer accepts deferred payment obligation' },
  { product: 'Import Bill under Letter of Credit', category: 'Import', protection: 'High', keyBenefit: 'Processing payment against Letter of Credit documents' },
  { product: 'Trust Receipt', category: 'Import', protection: 'Medium', keyBenefit: 'Collect goods now, pay from sales proceeds' },
  { product: 'Import Doc. Collection', category: 'Import', protection: 'Medium', keyBenefit: 'Bank routes docs; no payment guarantee' },
  { product: 'Withdrawal Form Notif.', category: 'Import', protection: 'Low', keyBenefit: 'Record-keeping for partial Letter of Credit drawdowns' },
  { product: 'Export Doc. Collection', category: 'Export', protection: 'Medium', keyBenefit: 'Exporter controls docs until payment' },
  { product: 'Negotiate / Discount', category: 'Export', protection: 'High', keyBenefit: 'Get paid early on Letter of Credit-backed documents' },
  { product: 'Transferred Letter of Credit', category: 'Export', protection: 'High', keyBenefit: 'Middleman passes Letter of Credit to actual supplier' },
  { product: 'Express Tracking', category: 'Export', protection: 'Low', keyBenefit: 'Real-time visibility on document status' },
];

export const guaranteeBillsFinancingSummary: SummaryRow[] = [
  { product: 'Bank Guarantee', category: 'Guarantee', protection: 'High', keyBenefit: 'Bank pays if applicant defaults on contract' },
  { product: 'Bank Guarantee Amendment', category: 'Guarantee', protection: 'High', keyBenefit: 'Modify guarantee terms after issuance' },
  { product: 'Standby Letter of Credit', category: 'Guarantee', protection: 'High', keyBenefit: 'Cross-border guarantee under LC rules' },
  { product: 'Standby Letter of Credit Amendment', category: 'Guarantee', protection: 'High', keyBenefit: 'Modify Standby LC terms after issuance' },
  { product: 'Performance Guarantee', category: 'Guarantee', protection: 'High', keyBenefit: 'Guarantees project / contract delivery' },
  { product: 'Tender Guarantee', category: 'Guarantee', protection: 'High', keyBenefit: 'Shows serious bid commitment' },
  { product: 'Cash Backed Bank Guarantee', category: 'Guarantee', protection: 'Low risk', keyBenefit: 'Fully cash-secured guarantee' },
  { product: 'Bank Acceptance Draft', category: 'Bills', protection: 'High', keyBenefit: 'Bank-backed promise to pay at future date' },
  { product: 'Commercial Accept. Draft', category: 'Bills', protection: 'Medium', keyBenefit: 'Buyer\'s own promise to pay at future date' },
  { product: 'Endorsement', category: 'Bills', protection: 'Medium', keyBenefit: 'Transfer draft to another party' },
  { product: 'Discounting', category: 'Bills', protection: 'Medium', keyBenefit: 'Cash out draft before maturity' },
  { product: 'Pledge', category: 'Bills', protection: 'Medium', keyBenefit: 'Use draft as collateral for credit' },
  { product: 'Recourse', category: 'Bills', protection: 'Medium', keyBenefit: 'Recover funds from prior endorser' },
  { product: 'Signing / Rejection', category: 'Bills', protection: 'Low', keyBenefit: 'Accept or decline a draft' },
  { product: 'Invoice Financing', category: 'Financing', protection: 'Medium', keyBenefit: 'Early cash advance against invoices' },
  { product: 'Margin Letter', category: 'Financing', protection: 'Medium', keyBenefit: 'Top-up collateral for trade facilities' },
  { product: 'TF Amendment & Settl.', category: 'Financing', protection: 'Medium', keyBenefit: 'Modify or close trade finance facilities' },
];
