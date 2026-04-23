"use client";

import React, { useRef, useState } from "react";
import Image from "next/image";

const variants = [
    { label: "30 days pack", price: "₹ 3,100", img: "/Landing/Stand Up Pouch Front latest mockup.png" },
    { label: "60 days pack", price: "₹ 5,800", img: "/Landing/Stand Up Pouch Front latest mockup.png" },
    { label: "6 days trial", price: "₹ 699", img: "/Landing/Stand Up Pouch Front latest mockup.png" },
];

const thumbnails = [
    { src: "/Landing/Stand Up Pouch Back latest mockup.png", alt: "Pouch Back" },
    { src: "/Landing/Sachet Front latest mockup.png", alt: "Sachet Front" },
    { src: "/Landing/Sachet Back latest mockup.png", alt: "Sachet Back" },
];

const features = [
    "Refreshing taste and no fishy smell",
    "Quick absorbing",
    "Clinically proven results",
    "Sourced from India for Indians",
    "Tested amino acids",
];

const ShopFromUs = () => {
    const [selectedVariant, setSelectedVariant] = useState(0);
    const [activeThumbnail, setActiveThumbnail] = useState(0);

    return (
        <section className="w-full pt-14 bg-[#fffdf2] px-6 ">
            {/* Section Header */}
            <div className="mb-12 flex flex-col items-center gap-2 text-center">
                <h2 className="font-antic-didone font-medium text-[60px] leading-[1.2] tracking-[0.01em] text-black">
                    Shop from Us
                </h2>
                <p className="font-poppins text-[22px] font-medium uppercase tracking-[0.12em] text-black">
                    OUR PREMIUM RANGE OF COLLAGEN
                </p>
            </div>

            <div className="box-border flex w-full flex-row items-start justify-evenly overflow-visible px-[50px]">
                {/* ── LEFT PANEL (sticky image block) ─────────────────────────── */}
                <div className="sticky top-24 h-fit w-[55%] shrink-0">
                    {/* Outer container: 55% width, 550px height, flex-row, bg #faf6de, gap 20px, rounded 20px, border 4px #fff6b3 */}
                    <div className="box-border flex h-[650px] w-full flex-row items-center justify-center gap-[20px] overflow-clip rounded-[20px] border-[4px] border-[#fff6b3] bg-[#faf6de] p-[20px]">
                        {/* Thumbnails column — each card fully rounded with gaps between */}
                        <div className="flex h-full shrink-0 flex-col gap-[10px]" style={{ width: "27%" }}>
                            {thumbnails.map((t, i) => (
                                <button
                                    key={i}
                                    onClick={() => setActiveThumbnail(i)}
                                    className={`relative box-border flex w-full flex-1 cursor-pointer items-center justify-center overflow-clip ${i === 0 ? "rounded-t-2xl" : ""} ${i === 2 ? "rounded-b-2xl" : ""} border-[4px] border-[#34803c] bg-[#fffdf2] transition-all`}
                                >
                                    <Image src={t.src} alt={t.alt} fill sizes="(max-width: 768px) 30vw, 10vw" className="object-contain p-3" />
                                </button>
                            ))}
                        </div>

                        {/* Main product image — 63% width, 492px height, bg #fffdf2, rounded 14px, border 4px #34803c */}
                        <div className="relative box-border flex flex-col overflow-clip rounded-[14px] border-[4px] border-[#34803c] bg-[#fffdf2]" style={{ width: "73%", height: 600 }}>
                            {/* Limited Time Offer banner */}
                            <div className="absolute top-10 z-50 flex h-11 w-full shrink-0 items-center justify-center border-y-4 border-[#11731b] bg-[#fffc60]">
                                <span className="font-cormorant text-[20px] font-normal italic text-[#11731b]">
                                    Limited Time Offer
                                </span>
                            </div>

                            {/* Product image — always front pouch */}
                            <div className="absolute right-20 top-4 z-30 h-full w-full">
                                <Image
                                    src="/Landing/Stand Up Pouch Front latest mockup.png"
                                    alt="Collagreens Stand Up Pouch"
                                    fill
                                    sizes="(max-width: 768px) 100vw, 50vw"
                                    className="absolute right-[10px] object-contain p-8"
                                    priority
                                />
                            </div>

                            {/* Pack label badge at bottom right */}
                            <div className="absolute bottom-4 right-4 z-10 rounded-full bg-[#26312d] px-5 py-2">
                                <span className="font-poppins text-[14px] font-medium text-white">
                                    {variants[selectedVariant].label === "30 days pack" ? "30 Day Pack"
                                        : variants[selectedVariant].label === "60 days pack" ? "60 Day Pack"
                                            : "6 Day Trial"}
                                </span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* ── RIGHT PANEL — 45% width, padding 16px 30px 0 30px, gap 0, rounded 20px ── */}
                <div className="box-border flex w-[45%] flex-col items-center justify-center gap-0 overflow-clip rounded-[20px] px-[30px] pt-[16px] pb-0">
                    {/* Rating — h-53px, flex-row, gap 10px */}
                    <div className="flex h-[53px] w-full flex-row items-center justify-start gap-[10px] overflow-clip">
                        <div className="flex text-[#11731b]">
                            {"★★★★★".split("").map((s, i) => (
                                <span key={i} className="text-[22px]">{s}</span>
                            ))}
                        </div>
                        <span className="font-poppins whitespace-nowrap text-[20px] font-semibold text-[#11731b]">
                            4.9/5.0 (80,000) | 1 lakh+ customers
                        </span>
                    </div>

                    {/* Product title — w-340px, antic didone, color #34803c, 45px, tracking 0.02em */}
                    <h3 className="w-full break-words whitespace-pre-wrap font-antic-didone text-[45px] font-extrabold leading-[1.2] tracking-[0.02em] text-[#34803c]">
                        Collagreens
                    </h3>

                    {/* Description paragraphs — font-poppins, color #3d3d3d, 18px, tracking -0.03em, line-height 1.2 */}
                    <div className="mt-4 flex w-full flex-col gap-5">
                        <p className="w-full break-words whitespace-pre-wrap font-poppins text-[21px] font-normal leading-[1.2] tracking-[-0.03em] text-[#3d3d3d]">
                            Collagreens combines hydrolyzed marine collagen with supergreens and 30+ bioactive ingredients across 6 clinically studied complexes. Designed to support radiant skin, stronger hair, and healthier nails while promoting gut health.
                        </p>
                        <p className="w-full break-words whitespace-pre-wrap font-poppins text-[21px] font-normal leading-[1.2] tracking-[-0.03em] text-[#3d3d3d]">
                            The 6 complexes naturally deliver Vitamin C, Vitamin A, antioxidants, fibres, minerals and actives like amla, moringa and spirulina to support collagen supplementation deeply.
                        </p>
                        <p className="w-full break-words whitespace-pre-wrap font-poppins text-[21px] font-normal leading-[1.2] tracking-[-0.03em] text-[#3d3d3d]">
                            Each convenient sachet delivers natural taste with real ingredients. Manufactured in a USFDA certified facility with third-party testing for purity and safety. No fillers. No artificial preservatives. No artificial sweeteners. No colourants.
                        </p>
                    </div>

                    {/* Feature checkmarks — w-100%, flex-col, gap 10px */}
                    <div className="mt-6 flex w-full flex-col items-start gap-[10px] overflow-clip">
                        {features.map((f, i) => (
                            <div key={i} className="flex items-center gap-3">
                                <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                                    <path d="M4 10L8 14L16 6" stroke="#34803c" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                                <span className="font-poppins text-[21px] leading-[1.1] font-normal text-[#3d3d3d]">{f}</span>
                            </div>
                        ))}
                    </div>

                    {/* Select Variant — w-100%, h-207px, flex-col, gap 10px */}
                    <div className="mt-8 flex h-[207px] w-full flex-col items-start justify-center gap-[10px] overflow-clip">
                        <h4 className="font-poppins text-[24px] font-medium mt-2 mb-4 text-black">Select Variant</h4>
                        {/* Variant row — w-min-content, h-134px, flex-row, gap 30px */}
                        <div className="flex w-min flex-row items-center gap-[30px] overflow-clip" style={{ height: 134 }}>
                            {variants.map((v, i) => (
                                <button
                                    key={i}
                                    onClick={() => setSelectedVariant(i)}
                                    className="flex flex-col items-center gap-2"
                                >
                                    {/* Each variant: h-110px, rounded 100px (pill), border 2px solid #c9c9c9, bg #fffdf2 */}
                                    <div
                                        className={`relative box-border h-[100px] w-[100px] overflow-clip rounded-full border-[2px] bg-[#fffdf2] transition-all ${selectedVariant === i ? "border-[#34803c]" : "border-[#c9c9c9]"
                                            }`}
                                    >
                                        <Image src={v.img} alt={v.label} fill sizes="(max-width: 768px) 20vw, 100px" className="object-contain p-2" />
                                    </div>
                                    <span
                                        className={`font-poppins text-[14px] ${selectedVariant === i ? "font-semibold text-black" : "font-normal text-gray-500"
                                            }`}
                                    >
                                        {v.label}
                                    </span>
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* 30 day div — w-100%, h-138px, flex-col, justify-between */}
                    <div className="flex h-[138px] w-full flex-col items-start justify-between overflow-clip">
                        <div>
                            <p className="font-antic-didone text-[32px] font-bold pb-1 leading-[1.2] text-black">
                                {variants[selectedVariant].label}
                            </p>
                            <p className="font-poppins text-[28px] font-normal pb-1 leading-[1.2] text-gray-500">
                                {variants[selectedVariant].price}
                            </p>
                        </div>
                        {/* CTA Buttons */}
                        <div className="flex gap-4">
                            <button className="box-border rounded-full border border-gray-400 bg-white px-8 py-3 font-poppins text-[16px] font-medium text-black transition-all hover:border-[#34803c] hover:text-[#34803c]">
                                Add to Cart
                            </button>
                            <button className="box-border rounded-full border border-gray-300 bg-[#fffc60] px-10 py-3 font-poppins text-[16px] font-medium text-black transition-all hover:bg-[#f5f014]">
                                Buy Now
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ShopFromUs;