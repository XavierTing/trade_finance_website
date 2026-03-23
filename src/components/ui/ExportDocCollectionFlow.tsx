const ExportDocCollectionFlow = () => (
  <div className="rounded-xl bg-[#EBEBE9] px-7 py-8">
    <svg width="100%" viewBox="0 0 620 230" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <marker id="edc-arrow" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
          <path d="M2 1L8 5L2 9" fill="none" stroke="context-stroke" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </marker>
      </defs>

      <text x="310" y="24" textAnchor="middle" fontFamily="'Inter',system-ui,sans-serif" fontWeight="700" fontSize="17" fill="#2C2A25">Export documentary collection</text>

      {/* Row 1 */}

      {/* 1. Seller submits docs */}
      <rect x="35" y="55" width="160" height="50" rx="6" fill="#C8927A" stroke="#B07A62" strokeWidth="0.5" />
      <text x="115" y="75" textAnchor="middle" fontFamily="'Inter',system-ui,sans-serif" fontWeight="700" fontSize="10" fill="#2C2A25">Seller</text>
      <text x="115" y="91" textAnchor="middle" fontFamily="'Inter',system-ui,sans-serif" fontWeight="400" fontSize="9" fill="#4A2E20">submits docs</text>

      <line x1="195" y1="80" x2="225" y2="80" stroke="#7A7872" strokeWidth="1" markerEnd="url(#edc-arrow)" />

      {/* 2. Seller's bank sends docs overseas */}
      <rect x="227" y="55" width="160" height="50" rx="6" fill="#D6D3C9" stroke="#B5B1A4" strokeWidth="0.5" />
      <text x="307" y="75" textAnchor="middle" fontFamily="'Inter',system-ui,sans-serif" fontWeight="700" fontSize="10" fill="#2C2A25">{"Seller\u2019s bank"}</text>
      <text x="307" y="91" textAnchor="middle" fontFamily="'Inter',system-ui,sans-serif" fontWeight="400" fontSize="9" fill="#5C5A53">sends docs overseas</text>

      <line x1="387" y1="80" x2="417" y2="80" stroke="#7A7872" strokeWidth="1" markerEnd="url(#edc-arrow)" />

      {/* 3. Buyer's bank presents to buyer */}
      <rect x="419" y="55" width="160" height="50" rx="6" fill="#D6D3C9" stroke="#B5B1A4" strokeWidth="0.5" />
      <text x="499" y="75" textAnchor="middle" fontFamily="'Inter',system-ui,sans-serif" fontWeight="700" fontSize="10" fill="#2C2A25">{"Buyer\u2019s bank"}</text>
      <text x="499" y="91" textAnchor="middle" fontFamily="'Inter',system-ui,sans-serif" fontWeight="400" fontSize="9" fill="#5C5A53">presents to buyer</text>

      {/* Wrap arrow */}
      <path d="M499 105 L499 125 L402 125 L402 142" fill="none" stroke="#7A7872" strokeWidth="1" markerEnd="url(#edc-arrow)" />

      {/* Row 2 */}

      {/* 4. Buyer pays */}
      <rect x="322" y="142" width="160" height="50" rx="6" fill="#B8B0C8" stroke="#9A90AE" strokeWidth="0.5" />
      <text x="402" y="162" textAnchor="middle" fontFamily="'Inter',system-ui,sans-serif" fontWeight="700" fontSize="10" fill="#2C2A25">Buyer</text>
      <text x="402" y="178" textAnchor="middle" fontFamily="'Inter',system-ui,sans-serif" fontWeight="400" fontSize="9" fill="#3D3A4E">pays</text>

      <line x1="322" y1="167" x2="292" y2="167" stroke="#7A7872" strokeWidth="1" markerEnd="url(#edc-arrow)" />

      {/* 5. Payment remitted to seller */}
      <rect x="130" y="142" width="160" height="50" rx="6" fill="#8B9A7A" stroke="#6B7D5E" strokeWidth="0.5" />
      <text x="210" y="162" textAnchor="middle" fontFamily="'Inter',system-ui,sans-serif" fontWeight="700" fontSize="10" fill="#EBEBE9">Payment remitted</text>
      <text x="210" y="178" textAnchor="middle" fontFamily="'Inter',system-ui,sans-serif" fontWeight="400" fontSize="9" fill="#D6D3C9">to seller</text>

      {/* Step numbers */}
      <circle cx="115" cy="120" r="9" fill="#B5B1A4" />
      <text x="115" y="124" textAnchor="middle" fontFamily="'Inter',system-ui,sans-serif" fontWeight="500" fontSize="8" fill="#EBEBE9">1</text>
      <circle cx="307" cy="120" r="9" fill="#B5B1A4" />
      <text x="307" y="124" textAnchor="middle" fontFamily="'Inter',system-ui,sans-serif" fontWeight="500" fontSize="8" fill="#EBEBE9">2</text>
      <circle cx="499" cy="120" r="9" fill="#B5B1A4" />
      <text x="499" y="124" textAnchor="middle" fontFamily="'Inter',system-ui,sans-serif" fontWeight="500" fontSize="8" fill="#EBEBE9">3</text>
      <circle cx="402" cy="207" r="9" fill="#B5B1A4" />
      <text x="402" y="211" textAnchor="middle" fontFamily="'Inter',system-ui,sans-serif" fontWeight="500" fontSize="8" fill="#EBEBE9">4</text>
      <circle cx="210" cy="207" r="9" fill="#B5B1A4" />
      <text x="210" y="211" textAnchor="middle" fontFamily="'Inter',system-ui,sans-serif" fontWeight="500" fontSize="8" fill="#EBEBE9">5</text>
    </svg>
  </div>
);

export default ExportDocCollectionFlow;
