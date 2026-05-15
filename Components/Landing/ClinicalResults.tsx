"use client";

export default function ClinicalResults() {
  const results = [
    {
      percentage: "60%",
      value: 60,
      label: "Improvement in Skin Elasticity",
    },
    {
      percentage: "49%",
      value: 49,
      label: "Improvement in Skin Firmness",
    },
    {
      percentage: "28%",
      value: 28,
      label: "Improvement in Skin Hydration",
    },
    {
      percentage: "19%",
      value: 19,
      label: "Increased Skin Suppleness",
    },
  ];

  return (
    <section className="w-full py-12 lg:py-16 px-4 lg:px-[50px] bg-[#f0f0f0]">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="flex flex-col items-center mb-8 lg:mb-12">
          <h3 className="text-center font-switzer text-[16px] sm:text-[18px] lg:text-[20px] font-medium text-[#666] tracking-wide">
            Clinically Proven Results in 12 Weeks
          </h3>
          <div className="mt-3 w-12 h-[2px] bg-[#34803c] rounded-full" />
        </div>

        {/* Results Grid - 2x2 Layout */}
        <div className="grid grid-cols-2 gap-8 lg:gap-16 max-w-3xl mx-auto">
          {results.map((result, i) => (
            <div key={i} className="flex flex-col items-start gap-2">
              <span className="font-switzer text-[36px] sm:text-[42px] lg:text-[52px] font-bold text-[#000] leading-none">
                {result.percentage}
              </span>

              {/* Progress bar */}
              <div className="w-full h-[3px] bg-[#e0e0e0] rounded-full overflow-hidden">
                <div
                  className="h-full bg-[#34803c] rounded-full"
                  style={{ width: `${result.value}%` }}
                />
              </div>

              <p className="font-switzer text-[11px] sm:text-[12px] lg:text-[14px] text-[#666] leading-[1.3] mt-1">
                {result.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
