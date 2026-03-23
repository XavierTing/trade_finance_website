const LCProcessFlow = () => (
  <div className="rounded-xl bg-[#EBEBE9] px-8 py-9">
    <svg width="100%" viewBox="0 0 620 480" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <marker id="lc-arrow" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
          <path d="M2 1L8 5L2 9" fill="none" stroke="context-stroke" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </marker>
      </defs>

      {/* Title */}
      <text x="310" y="30" textAnchor="middle" fontFamily="'Inter',system-ui,sans-serif" fontWeight="700" fontSize="20" fill="#2C2A25">Letter of credit</text>

      {/* Buyer (Applicant) */}
      <rect x="30" y="100" width="160" height="60" rx="6" fill="#B8B0C8" stroke="#9A90AE" strokeWidth="0.5" />
      <text x="110" y="124" textAnchor="middle" fontFamily="'Inter',system-ui,sans-serif" fontWeight="700" fontSize="14" fill="#2C2A25">Buyer (applicant)</text>
      <text x="110" y="144" textAnchor="middle" fontFamily="'Inter',system-ui,sans-serif" fontWeight="400" fontSize="11" fill="#3D3A4E">Applies for LC</text>

      {/* Seller (Beneficiary) */}
      <rect x="430" y="100" width="160" height="60" rx="6" fill="#C8927A" stroke="#B07A62" strokeWidth="0.5" />
      <text x="510" y="124" textAnchor="middle" fontFamily="'Inter',system-ui,sans-serif" fontWeight="700" fontSize="14" fill="#2C2A25">Seller (beneficiary)</text>
      <text x="510" y="144" textAnchor="middle" fontFamily="'Inter',system-ui,sans-serif" fontWeight="400" fontSize="11" fill="#4A2E20">Ships goods</text>

      {/* Issuing Bank */}
      <rect x="30" y="290" width="160" height="60" rx="6" fill="#D6D3C9" stroke="#B5B1A4" strokeWidth="0.5" />
      <text x="110" y="314" textAnchor="middle" fontFamily="'Inter',system-ui,sans-serif" fontWeight="700" fontSize="14" fill="#2C2A25">Issuing bank</text>
      <text x="110" y="334" textAnchor="middle" fontFamily="'Inter',system-ui,sans-serif" fontWeight="400" fontSize="11" fill="#5C5A53">{"Verifies, issues & pays LC"}</text>

      {/* Advising Bank */}
      <rect x="430" y="290" width="160" height="60" rx="6" fill="#D6D3C9" stroke="#B5B1A4" strokeWidth="0.5" />
      <text x="510" y="314" textAnchor="middle" fontFamily="'Inter',system-ui,sans-serif" fontWeight="700" fontSize="14" fill="#2C2A25">Advising bank</text>
      <text x="510" y="334" textAnchor="middle" fontFamily="'Inter',system-ui,sans-serif" fontWeight="400" fontSize="11" fill="#5C5A53">Advises LC to seller</text>

      {/* Step 1: Buyer → Issuing Bank */}
      <line x1="80" y1="160" x2="80" y2="290" stroke="#7A7872" strokeWidth="1.2" markerEnd="url(#lc-arrow)" />
      <text x="16" y="218" fontFamily="'Inter',system-ui,sans-serif" fontWeight="500" fontSize="10" fill="#7A7872" letterSpacing="0.4">1. APPLIES</text>
      <text x="16" y="230" fontFamily="'Inter',system-ui,sans-serif" fontWeight="500" fontSize="10" fill="#7A7872" letterSpacing="0.4">FOR LC</text>

      {/* Step 2: Issuing Bank → Advising Bank */}
      <line x1="190" y1="320" x2="430" y2="320" stroke="#7A7872" strokeWidth="1.2" markerEnd="url(#lc-arrow)" />
      <text x="310" y="312" textAnchor="middle" fontFamily="'Inter',system-ui,sans-serif" fontWeight="500" fontSize="10" fill="#7A7872" letterSpacing="0.4">2. LC ISSUED</text>

      {/* Step 3: Advising Bank → Seller */}
      <line x1="556" y1="290" x2="556" y2="160" stroke="#7A7872" strokeWidth="1.2" markerEnd="url(#lc-arrow)" />
      <text x="548" y="212" textAnchor="end" fontFamily="'Inter',system-ui,sans-serif" fontWeight="500" fontSize="10" fill="#7A7872" letterSpacing="0.4">3. LC ADVISED</text>
      <text x="548" y="224" textAnchor="end" fontFamily="'Inter',system-ui,sans-serif" fontWeight="500" fontSize="10" fill="#7A7872" letterSpacing="0.4">TO SELLER</text>

      {/* Step 4: Goods shipped */}
      <text x="310" y="58" textAnchor="middle" fontFamily="'Inter',system-ui,sans-serif" fontWeight="500" fontSize="10" fill="#6B7D5E" letterSpacing="0.4">4. GOODS SHIPPED;</text>
      <text x="310" y="72" textAnchor="middle" fontFamily="'Inter',system-ui,sans-serif" fontWeight="500" fontSize="10" fill="#6B7D5E" letterSpacing="0.4">DOCS SENT VIA BANKS</text>
      <path d="M510 100 L510 82 L110 82 L110 100" fill="none" stroke="#6B7D5E" strokeWidth="1.5" markerEnd="url(#lc-arrow)" />

      {/* Step 5: Payment settled */}
      <path d="M110 350 L110 385 L510 385 L510 350" fill="none" stroke="#6B7D5E" strokeWidth="1.2" strokeDasharray="5 3" markerEnd="url(#lc-arrow)" />
      <text x="310" y="402" textAnchor="middle" fontFamily="'Inter',system-ui,sans-serif" fontWeight="500" fontSize="10" fill="#6B7D5E" letterSpacing="0.4">5. PAYMENT SETTLED THROUGH BANKS</text>

      {/* Legend */}
      <line x1="100" y1="432" x2="135" y2="432" stroke="#7A7872" strokeWidth="1.2" markerEnd="url(#lc-arrow)" />
      <text x="142" y="436" fontFamily="'Inter',system-ui,sans-serif" fontWeight="400" fontSize="10" fill="#7A7872">LC issuance flow</text>

      <line x1="270" y1="432" x2="305" y2="432" stroke="#6B7D5E" strokeWidth="1.5" markerEnd="url(#lc-arrow)" />
      <text x="312" y="436" fontFamily="'Inter',system-ui,sans-serif" fontWeight="400" fontSize="10" fill="#6B7D5E">{"Goods & payment"}</text>

      <path d="M430 432 L465 432" fill="none" stroke="#6B7D5E" strokeWidth="1.2" strokeDasharray="5 3" markerEnd="url(#lc-arrow)" />
      <text x="472" y="436" fontFamily="'Inter',system-ui,sans-serif" fontWeight="400" fontSize="10" fill="#6B7D5E">Settlement</text>

      {/* Callout box */}
      <rect x="18" y="452" width="584" height="22" rx="4" fill="#DEDAD0" stroke="none" />
      <text x="310" y="467" textAnchor="middle" fontFamily="'Inter',system-ui,sans-serif" fontWeight="400" fontSize="10" fill="#5C5A53">{"The LC guarantees payment to the seller, provided all documentary conditions are met \u2014 reducing risk for both parties."}</text>
    </svg>
  </div>
);

export default LCProcessFlow;
