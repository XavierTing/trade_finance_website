const DiscountingFlow = () => (
  <div className="rounded-xl bg-[#EBEBE9] px-7 py-8">
    <svg width="100%" viewBox="0 0 620 135" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <marker id="disc-arrow" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
          <path d="M2 1L8 5L2 9" fill="none" stroke="context-stroke" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </marker>
      </defs>

      <text x="310" y="24" textAnchor="middle" fontFamily="'Inter',system-ui,sans-serif" fontWeight="700" fontSize="17" fill="#2C2A25">Discounting</text>

      {/* 1. Seller holds acceptance draft */}
      <rect x="18" y="55" width="130" height="50" rx="6" fill="#C8927A" stroke="#B07A62" strokeWidth="0.5" />
      <text x="83" y="75" textAnchor="middle" fontFamily="'Inter',system-ui,sans-serif" fontWeight="700" fontSize="10" fill="#2C2A25">Seller holds</text>
      <text x="83" y="91" textAnchor="middle" fontFamily="'Inter',system-ui,sans-serif" fontWeight="400" fontSize="9" fill="#4A2E20">acceptance draft</text>

      <line x1="148" y1="80" x2="168" y2="80" stroke="#7A7872" strokeWidth="1" markerEnd="url(#disc-arrow)" />

      {/* 2. Sells draft to bank at discount */}
      <rect x="170" y="55" width="130" height="50" rx="6" fill="#D6D3C9" stroke="#B5B1A4" strokeWidth="0.5" />
      <text x="235" y="75" textAnchor="middle" fontFamily="'Inter',system-ui,sans-serif" fontWeight="700" fontSize="10" fill="#2C2A25">Sells draft to</text>
      <text x="235" y="91" textAnchor="middle" fontFamily="'Inter',system-ui,sans-serif" fontWeight="400" fontSize="9" fill="#5C5A53">bank at discount</text>

      <line x1="300" y1="80" x2="320" y2="80" stroke="#7A7872" strokeWidth="1" markerEnd="url(#disc-arrow)" />

      {/* 3. Seller gets cash today */}
      <rect x="322" y="55" width="130" height="50" rx="6" fill="#8B9A7A" stroke="#6B7D5E" strokeWidth="0.5" />
      <text x="387" y="75" textAnchor="middle" fontFamily="'Inter',system-ui,sans-serif" fontWeight="700" fontSize="10" fill="#EBEBE9">Seller gets</text>
      <text x="387" y="91" textAnchor="middle" fontFamily="'Inter',system-ui,sans-serif" fontWeight="400" fontSize="9" fill="#D6D3C9">cash today</text>

      <line x1="452" y1="80" x2="472" y2="80" stroke="#7A7872" strokeWidth="1" markerEnd="url(#disc-arrow)" />

      {/* 4. Bank collects full value at maturity */}
      <rect x="474" y="55" width="130" height="50" rx="6" fill="#D6D3C9" stroke="#B5B1A4" strokeWidth="0.5" />
      <text x="539" y="75" textAnchor="middle" fontFamily="'Inter',system-ui,sans-serif" fontWeight="700" fontSize="10" fill="#2C2A25">Bank collects</text>
      <text x="539" y="91" textAnchor="middle" fontFamily="'Inter',system-ui,sans-serif" fontWeight="400" fontSize="9" fill="#5C5A53">full value at maturity</text>

      {/* Step numbers */}
      <circle cx="83" cy="120" r="9" fill="#B5B1A4" />
      <text x="83" y="124" textAnchor="middle" fontFamily="'Inter',system-ui,sans-serif" fontWeight="500" fontSize="8" fill="#EBEBE9">1</text>
      <circle cx="235" cy="120" r="9" fill="#B5B1A4" />
      <text x="235" y="124" textAnchor="middle" fontFamily="'Inter',system-ui,sans-serif" fontWeight="500" fontSize="8" fill="#EBEBE9">2</text>
      <circle cx="387" cy="120" r="9" fill="#B5B1A4" />
      <text x="387" y="124" textAnchor="middle" fontFamily="'Inter',system-ui,sans-serif" fontWeight="500" fontSize="8" fill="#EBEBE9">3</text>
      <circle cx="539" cy="120" r="9" fill="#B5B1A4" />
      <text x="539" y="124" textAnchor="middle" fontFamily="'Inter',system-ui,sans-serif" fontWeight="500" fontSize="8" fill="#EBEBE9">4</text>
    </svg>
  </div>
);

export default DiscountingFlow;
