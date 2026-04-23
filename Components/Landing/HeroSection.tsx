import Image from "next/image";

const HeroSection = () => {
  return (
    <div className="relative box-border min-h-[750px]   w-full bg-white px-5 ">
      {/* Yellow Gradient Box */}
      <div className="relative box-border h-full min-h-[726px] w-full overflow-visible rounded-t-[40px] bg-[linear-gradient(180deg,#fffc60_0%,rgb(255,253,242)_100%)]">
        {/* Left Text Content */}
        <div className="absolute overflow-auto left-20 top-[48%] z-10 flex h-min min-w-[602px] -translate-y-1/2 flex-col items-start justify-center gap-[20px] overflow-clip p-0">
          <span
            className="font-poppins whitespace-pre text-[20px] font-bold uppercase leading-[1.2] tracking-normal text-[#11731b]"
          >
            CLEAN. FUNCTIONAL. STUDIED
          </span>

          <div className="flex w-full sticky z-10 flex-col gap-0">
            <h1
              className="font-antic-didone m-0 whitespace-pre text-[85px] pt-2 font-bold capitalize leading-[1] tracking-[0.03em] text-[#11731b]"
            >
              WORLD&apos;S FIRST
            </h1>
            <h2
              className="font-cormorant m-0 w-[80%]  whitespace-pre text-[60px] font-normal italic leading-[1.2] tracking-[-0.03em] text-[#11731b]"
            >
              Daily Greens + Collagen
            </h2>
          </div>

          <p
            className="font-poppins m-0 w-full break-words whitespace-pre-wrap  font-normal leading-[1.2] tracking-[-0.03em] text-[#11731b] text-[22px] max-w-[80%]"
          >
            A comprehensive blend with 25+ bioactives for a convenient and easy to stick routine.
          </p>

          <button
            className="box-border flex w-[214px] h-[60px] flex-row items-center justify-end gap-[16px] overflow-clip mt-10 rounded-[100px] border-none bg-[#11731b] pr-[5px] pl-0 py-0 font-poppins cursor-pointer"
          >
            <span className="whitespace-pre text-[24px] font-medium leading-[1.2] tracking-normal text-[#fffdf2]">Shop Now</span>
            <div className="flex h-11 w-11 items-center justify-center rounded-full bg-white text-[#11731b]">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M5 12H19" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M12 5L19 12L12 19" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
          </button>
        </div>

        {/* Right Image Container */}
        <div className="absolute right-[266px] -top-22 z-0 block h-full w-[410px] overflow-visible">
          <div className="relative h-full w-full">
            <Image
              src="/Landing/Stand Up Pouch Front latest mockup.png"
              alt="Yuvaya Daily Greens + Collagen Pouch"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="origin-bottom scale-[1.4] object-contain object-bottom"
              priority
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;