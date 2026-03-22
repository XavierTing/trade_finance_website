import type { NavItem } from '../types/Product';

export const navItems: NavItem[] = [
  { id: 'overview', label: 'Overview', href: '#overview' },
  {
    id: 'import',
    label: 'Import',
    href: '#import',
    children: [
      { label: 'Letter of Credit', href: '#import' },
      { label: 'Letter of Credit Amendment', href: '#import' },
      { label: 'Letter of Credit Acceptance Advice', href: '#import' },
      { label: 'Import Bill under Letter of Credit', href: '#import' },
      { label: 'Trust Receipt', href: '#import' },
      { label: 'Import Documentary Collection', href: '#import' },
    ],
  },
  {
    id: 'export',
    label: 'Export',
    href: '#export',
    children: [
      { label: 'Withdrawal Form Notification', href: '#export' },
      { label: 'Export Documentary Collection', href: '#export' },
      { label: 'Negotiate / Discount Documents', href: '#export' },
      { label: 'Transferred Letter of Credit', href: '#export' },
      { label: 'Express Tracking Number Inquiry', href: '#export' },
    ],
  },
  {
    id: 'guarantee',
    label: 'Guarantee',
    href: '#guarantee',
    children: [
      { label: 'Bank Guarantee / Standby Letter of Credit', href: '#guarantee' },
      { label: 'Bank Guarantee / Standby Letter of Credit Amendment', href: '#guarantee' },
      { label: 'Performance Guarantee', href: '#guarantee' },
      { label: 'Tender Guarantee', href: '#guarantee' },
      { label: 'Cash Backed Bank Guarantee', href: '#guarantee' },
    ],
  },
  {
    id: 'bills',
    label: 'e-Bills',
    href: '#bills',
    children: [
      { label: 'Bank Acceptance Draft Issuance', href: '#bills' },
      { label: 'Commercial Acceptance Draft Issuance', href: '#bills' },
      { label: 'Endorsement', href: '#bills' },
      { label: 'Discounting', href: '#bills' },
      { label: 'Pledge', href: '#bills' },
      { label: 'Recourse', href: '#bills' },
      { label: 'Signing / Rejection & Cancellation', href: '#bills' },
    ],
  },
  {
    id: 'financing',
    label: 'Financing',
    href: '#financing',
    children: [
      { label: 'Invoice Financing', href: '#financing' },
      { label: 'Margin Letter', href: '#financing' },
      { label: 'Trade Financing Amendment & Settlement', href: '#financing' },
    ],
  },
  { id: 'summary', label: 'Summary', href: '#summary' },
];
