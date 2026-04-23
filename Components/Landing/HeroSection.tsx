import Image from "next/image";
import ZigzagSVG from "@/Components/Shared/ZigzagSVG";

const HeroSection = () => {
  return (
    <section className="relative w-full bg-white px-3 pb-6 pt-4 sm:px-5 sm:pb-8 sm:pt-5">
      {/* Yellow Gradient Box */}
      <div className="relative w-full overflow-hidden rounded-t-[28px] bg-[linear-gradient(180deg,#fffc60_0%,rgb(255,253,242)_100%)] px-4 pb-8 pt-10 sm:rounded-t-[32px] sm:px-6 sm:pb-10 md:px-10 md:pb-14 md:pt-12 lg:min-h-[726px] lg:rounded-t-[40px] lg:px-16 lg:pt-12">
        <div className="mx-auto w-full max-w-[1320px] lg:relative lg:min-h-[660px]">
          {/* Left Text Content */}
          <div className="z-10 flex w-full max-w-[640px] flex-col items-center gap-4 text-center sm:gap-5 md:items-start md:text-left lg:absolute lg:left-8 lg:top-[40%] lg:w-[56%] lg:max-w-[680px] lg:-translate-y-1/2">
            <span className="font-poppins text-[13px] font-bold uppercase leading-[1.25] tracking-[0.04em] text-[#11731b] sm:text-[16px] md:text-[18px]">
              CLEAN. FUNCTIONAL. STUDIED
            </span>

            <div className="z-10 flex w-full flex-col gap-1">
              <h1 className="font-antic-didone m-0 pt-1 text-[clamp(2rem,9vw,5.1rem)] font-bold capitalize leading-[0.98] tracking-[0.02em] text-[#11731b] lg:text-[85px]">
                WORLD&apos;S FIRST
              </h1>
              <h2 className="font-cormorant m-0 mx-auto w-full max-w-[22ch] text-[clamp(1.7rem,7vw,3.75rem)] font-normal italic leading-[1.1] tracking-[-0.03em] text-[#11731b] md:mx-0 md:max-w-[85%] lg:w-[80%] lg:max-w-none lg:text-[60px]">
                Daily Greens + Collagen
              </h2>
            </div>

            <p className="font-poppins m-0 w-full max-w-[42ch] break-words text-[15px] font-normal leading-[1.45] tracking-[-0.01em] text-[#11731b] sm:text-[18px] md:max-w-[80%] md:text-[20px]">
              A comprehensive blend with 25+ bioactives for a convenient and easy to
              stick routine.
            </p>

            <button className="mt-4 box-border flex h-[52px] w-[170px] cursor-pointer flex-row items-center justify-end gap-3 overflow-hidden rounded-[100px] border-none bg-[#11731b] px-1 py-0 font-poppins sm:mt-6 sm:h-[56px] sm:w-[194px] sm:gap-4 md:mt-8 md:h-[60px] md:w-[214px]">
              <span className="whitespace-pre text-[18px] font-medium leading-[1.2] tracking-normal text-[#fffdf2] sm:text-[21px] md:text-[24px]">
                Shop Now
              </span>
              <div className="flex h-9 w-9 items-center justify-center rounded-full bg-white text-[#11731b] sm:h-10 sm:w-10 md:h-11 md:w-11">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M5 12H19"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M12 5L19 12L12 19"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
            </button>
          </div>

          {/* Right Image Container */}
          <div className="relative z-0 mt-4 flex w-full justify-center md:mt-2 lg:absolute right-[20%] lg:right-[15%] lg:top-[-95px] lg:mt-0 lg:w-auto lg:justify-end">
            <div className="relative w-[min(84vw,420px)] sm:w-[min(66vw,470px)] md:w-[min(52vw,500px)] lg:w-[370px]">
              <div className="relative aspect-[3/5] w-full overflow-visible">
                <Image
                  src="/Landing/Stand Up Pouch Front latest mockup.png"
                  alt="Yuvaya Daily Greens + Collagen Pouch"
                  fill
                  sizes="(max-width: 639px) 84vw, (max-width: 767px) 66vw, (max-width: 1023px) 52vw, 370px"
                  className="origin-bottom object-contain object-bottom lg:scale-[1.4]"
                  priority
                />

                {/* Decorative Zigzags — percentage-based sizing keeps them compact & synced to image at every breakpoint */}
                {/* Green — top right */}
                <ZigzagSVG
                  color="green"
                  className="absolute -z-10 top-[7%] right-[12%] sm:right-[10%] lg:right-[8%] rotate-[85deg] sm:rotate-[75deg] lg:rotate-[68deg]"
                  width={100}
                  height={50}
                  style={{
                    width: "24%",
                    height: "auto",
                  }}
                />
                {/* Green — center left */}
                <ZigzagSVG
                  color="green"
                  className="absolute z-20 top-[61%] right-[50%] sm:right-[48%] lg:right-[45%] rotate-[75deg] sm:rotate-[65deg] lg:rotate-[55deg]"
                  width={100}
                  height={65}
                  style={{
                    width: "24%",
                    height: "auto",
                  }}
                />
                {/* Green — bottom center */}
                <ZigzagSVG
                  color="green"
                  className="absolute z-20 bottom-[5%] right-[32%] sm:right-[30%] lg:right-[28%] rotate-[30deg] sm:rotate-[22deg] lg:rotate-[14deg]"
                  width={100}
                  height={58}
                  style={{
                    width: "23%",
                    height: "auto",
                  }}
                />
                {/* Orange — top right (inside on mobile, peeks out on sm+) */}
                <ZigzagSVG
                  color="orange"
                  className="absolute z-20 top-[24%] right-[-20%] sm:right-[-30%] lg:right-[-40%] rotate-[60deg] sm:rotate-[50deg] lg:rotate-[40deg]"
                  width={115}
                  height={72}
                  style={{
                    width: "27%",
                    height: "auto",
                  }}
                />
                {/* Orange — mid left */}
                <ZigzagSVG
                  color="orange"
                  className="absolute z-20 top-[39%] left-[10%] sm:left-[12%] lg:left-[14%] rotate-[20deg] sm:rotate-[10deg] lg:rotate-[0deg]"
                  width={100}
                  height={75}
                  style={{
                    width: "24%",
                    height: "auto",
                  }}
                />
                {/* Orange — bottom right (inside on mobile, peeks out on sm+) */}
                <ZigzagSVG
                  color="orange"
                  className="absolute z-20 bottom-[24%] right-[-15%] sm:right-[-24%] lg:right-[-33%] rotate-[-20deg] sm:rotate-[-12deg] lg:rotate-[-5deg]"
                  width={110}
                  height={70}
                  style={{
                    width: "30%",
                    height: "auto",
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;