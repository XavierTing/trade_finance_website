const TenderGuaranteeFlow = () => (
  <div className="rounded-xl bg-[#EBEBE9] px-7 py-8">
    <svg width="100%" viewBox="0 0 620 135" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <marker id="tg-arrow" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
          <path d="M2 1L8 5L2 9" fill="none" stroke="context-stroke" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </marker>
      </defs>

      <text x="310" y="24" textAnchor="middle" fontFamily="'Inter',system-ui,sans-serif" fontWeight="700" fontSize="18" fill="#2C2A25">Tender guarantee</text>

      {/* 1. Bidder requests guarantee */}
      <rect x="50" y="55" width="150" height="50" rx="6" fill="#B8B0C8" stroke="#9A90AE" strokeWidth="0.5" />
      <text x="125" y="75" textAnchor="middle" fontFamily="'Inter',system-ui,sans-serif" fontWeight="700" fontSize="11" fill="#2C2A25">Bidder</text>
      <text x="125" y="91" textAnchor="middle" fontFamily="'Inter',system-ui,sans-serif" fontWeight="400" fontSize="10" fill="#3D3A4E">requests guarantee</text>

      <line x1="200" y1="80" x2="232" y2="80" stroke="#7A7872" strokeWidth="1" markerEnd="url(#tg-arrow)" />

      {/* 2. Buyer's bank issues guarantee */}
      <rect x="234" y="55" width="150" height="50" rx="6" fill="#D6D3C9" stroke="#B5B1A4" strokeWidth="0.5" />
      <text x="309" y="75" textAnchor="middle" fontFamily="'Inter',system-ui,sans-serif" fontWeight="700" fontSize="11" fill="#2C2A25">{"Buyer\u2019s bank"}</text>
      <text x="309" y="91" textAnchor="middle" fontFamily="'Inter',system-ui,sans-serif" fontWeight="400" fontSize="10" fill="#5C5A53">issues guarantee</text>

      <line x1="384" y1="80" x2="416" y2="80" stroke="#7A7872" strokeWidth="1" markerEnd="url(#tg-arrow)" />

      {/* 3. Submitted with tender documents */}
      <rect x="418" y="55" width="150" height="50" rx="6" fill="#8B9A7A" stroke="#6B7D5E" strokeWidth="0.5" />
      <text x="493" y="75" textAnchor="middle" fontFamily="'Inter',system-ui,sans-serif" fontWeight="700" fontSize="11" fill="#EBEBE9">Submitted with</text>
      <text x="493" y="91" textAnchor="middle" fontFamily="'Inter',system-ui,sans-serif" fontWeight="400" fontSize="10" fill="#D6D3C9">tender documents</text>

      {/* Step numbers */}
      <circle cx="125" cy="120" r="9" fill="#B5B1A4" />
      <text x="125" y="124" textAnchor="middle" fontFamily="'Inter',system-ui,sans-serif" fontWeight="500" fontSize="9" fill="#EBEBE9">1</text>
      <circle cx="309" cy="120" r="9" fill="#B5B1A4" />
      <text x="309" y="124" textAnchor="middle" fontFamily="'Inter',system-ui,sans-serif" fontWeight="500" fontSize="9" fill="#EBEBE9">2</text>
      <circle cx="493" cy="120" r="9" fill="#B5B1A4" />
      <text x="493" y="124" textAnchor="middle" fontFamily="'Inter',system-ui,sans-serif" fontWeight="500" fontSize="9" fill="#EBEBE9">3</text>
    </svg>
  </div>
);

export default TenderGuaranteeFlow;
