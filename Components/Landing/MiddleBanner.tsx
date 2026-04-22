import React from "react";
import Image from "next/image";

const MiddleBanner = () => {
    return (
        <div className="relative box-border flex w-full flex-col items-center justify-center gap-[34px] overflow-clip px-[50px] py-13 ">
            {/* Background Image mapped via Next/Image for optimization mapping to public/Landing/MiddleBannerBG.jpeg */}
            <Image
                src="/Landing/MiddleBannerBG.jpeg"
                alt="Middle Banner Background"
                fill
                className="object-cover object-center blur-sm z-0"
            />
            <div className="w-full absolute h-full z-10 bg-black/30">

            </div>

            {/* Heading Block explicitly matching CSS */}
            <div className="flex w-full justify-center z-10 items-center ">
                <div className="flex flex-col justify-center items-center">
                    <h1 className="font-antic-didone text-[63px] font-medium leading-[1.2] tracking-[0.03em] text-[#fffdf2]">
                        Greens With Collagen
                    </h1>
                    <span className="flex text-center font-medium text-2xl pt-2 flex-col">
                        <h2>
                            ONE SACHET. SIX COMPLEXES. THIRTY-SIX INGREDIENTS
                        </h2>
                        <h2 className="text-stone-300">
                            AND AN UNMATCHED TASTE
                        </h2>
                    </span>
                    <button
                        className="box-border flex w-[214px] h-[60px] flex-row items-center justify-end gap-[16px] overflow-clip mt-10 rounded-[100px] border-none bg-white pr-[5px] pl-0 py-0 font-poppins cursor-pointer"
                    >
                        <span className="whitespace-pre text-[24px] font-medium leading-[1.2] tracking-normal text-black">Shop Now</span>
                        <div className="flex h-11 w-11 items-center justify-center rounded-full text-white bg-[#26312D]">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M5 12H19" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M12 5L19 12L12 19" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </div>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default MiddleBanner;