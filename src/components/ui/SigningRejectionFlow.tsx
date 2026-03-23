const SigningRejectionFlow = () => (
  <div className="rounded-xl bg-[#EBEBE9] px-7 py-8">
    <svg width="100%" viewBox="0 0 620 250" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <marker id="src-arrow" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
          <path d="M2 1L8 5L2 9" fill="none" stroke="context-stroke" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </marker>
      </defs>

      <text x="310" y="24" textAnchor="middle" fontFamily="'Inter',system-ui,sans-serif" fontWeight="700" fontSize="17" fill="#2C2A25">{"Signing / rejection & cancellation"}</text>

      {/* Row 1: 2 boxes centered */}
      <rect x="130" y="55" width="160" height="50" rx="6" fill="#D6D3C9" stroke="#B5B1A4" strokeWidth="0.5" />
      <text x="210" y="75" textAnchor="middle" fontFamily="'Inter',system-ui,sans-serif" fontWeight="700" fontSize="10" fill="#2C2A25">Draft presented</text>
      <text x="210" y="91" textAnchor="middle" fontFamily="'Inter',system-ui,sans-serif" fontWeight="400" fontSize="9" fill="#5C5A53">to buyer</text>

      <line x1="290" y1="80" x2="320" y2="80" stroke="#7A7872" strokeWidth="1" markerEnd="url(#src-arrow)" />

      <rect x="322" y="55" width="160" height="50" rx="6" fill="#B8B0C8" stroke="#9A90AE" strokeWidth="0.5" />
      <text x="402" y="75" textAnchor="middle" fontFamily="'Inter',system-ui,sans-serif" fontWeight="700" fontSize="10" fill="#2C2A25">Buyer inspects</text>
      <text x="402" y="91" textAnchor="middle" fontFamily="'Inter',system-ui,sans-serif" fontWeight="400" fontSize="9" fill="#3D3A4E">{"terms & documents"}</text>

      {/* Single trunk line from center bottom of buyer box */}
      <line x1="402" y1="105" x2="402" y2="130" stroke="#7A7872" strokeWidth="1" />

      {/* Horizontal rail */}
      <line x1="115" y1="130" x2="499" y2="130" stroke="#7A7872" strokeWidth="1" />

      {/* 3 vertical drops to each outcome box */}
      <line x1="115" y1="130" x2="115" y2="152" stroke="#7A7872" strokeWidth="1" markerEnd="url(#src-arrow)" />
      <line x1="307" y1="130" x2="307" y2="152" stroke="#7A7872" strokeWidth="1" markerEnd="url(#src-arrow)" />
      <line x1="499" y1="130" x2="499" y2="152" stroke="#7A7872" strokeWidth="1" markerEnd="url(#src-arrow)" />

      {/* Row 2: 3 outcome boxes */}
      <rect x="35" y="154" width="160" height="50" rx="6" fill="#8B9A7A" stroke="#6B7D5E" strokeWidth="0.5" />
      <text x="115" y="174" textAnchor="middle" fontFamily="'Inter',system-ui,sans-serif" fontWeight="700" fontSize="10" fill="#EBEBE9">Signing (acceptance)</text>
      <text x="115" y="190" textAnchor="middle" fontFamily="'Inter',system-ui,sans-serif" fontWeight="400" fontSize="9" fill="#D6D3C9">binding obligation to pay</text>

      <rect x="227" y="154" width="160" height="50" rx="6" fill="#C48A7A" stroke="#A8705E" strokeWidth="0.5" />
      <text x="307" y="174" textAnchor="middle" fontFamily="'Inter',system-ui,sans-serif" fontWeight="700" fontSize="10" fill="#2C2A25">Rejection</text>
      <text x="307" y="190" textAnchor="middle" fontFamily="'Inter',system-ui,sans-serif" fontWeight="400" fontSize="9" fill="#4A2E20">draft returned unpaid</text>

      <rect x="419" y="154" width="160" height="50" rx="6" fill="#D6D3C9" stroke="#B5B1A4" strokeWidth="0.5" />
      <text x="499" y="174" textAnchor="middle" fontFamily="'Inter',system-ui,sans-serif" fontWeight="700" fontSize="10" fill="#2C2A25">Cancellation</text>
      <text x="499" y="190" textAnchor="middle" fontFamily="'Inter',system-ui,sans-serif" fontWeight="400" fontSize="9" fill="#5C5A53">draft formally voided</text>

      {/* Step numbers */}
      <circle cx="210" cy="120" r="9" fill="#B5B1A4" />
      <text x="210" y="124" textAnchor="middle" fontFamily="'Inter',system-ui,sans-serif" fontWeight="500" fontSize="8" fill="#EBEBE9">1</text>
      <circle cx="402" cy="120" r="9" fill="#B5B1A4" />
      <text x="402" y="124" textAnchor="middle" fontFamily="'Inter',system-ui,sans-serif" fontWeight="500" fontSize="8" fill="#EBEBE9">2</text>
      <circle cx="115" cy="219" r="9" fill="#B5B1A4" />
      <text x="115" y="223" textAnchor="middle" fontFamily="'Inter',system-ui,sans-serif" fontWeight="500" fontSize="8" fill="#EBEBE9">3a</text>
      <circle cx="307" cy="219" r="9" fill="#B5B1A4" />
      <text x="307" y="223" textAnchor="middle" fontFamily="'Inter',system-ui,sans-serif" fontWeight="500" fontSize="8" fill="#EBEBE9">3b</text>
      <circle cx="499" cy="219" r="9" fill="#B5B1A4" />
      <text x="499" y="223" textAnchor="middle" fontFamily="'Inter',system-ui,sans-serif" fontWeight="500" fontSize="8" fill="#EBEBE9">3c</text>
    </svg>
  </div>
);

export default SigningRejectionFlow;
