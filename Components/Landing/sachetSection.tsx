"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

const complexes = [
    {
        title: "Peptide Blend Complex",
        description:
            "Hydrolyzed collagen peptides for better absorption.",
        img: "/Landing/Peptide_Blend.jpg",
    },
    {
        title: "Supergreens",
        description:
            "It builds gut health, support digestion, act as a powerful prebiotic.",
        img: "/Landing/Super_Green.jpg",
    },
    {
        title: "Vitamin C Complex",
        description:
            "Amla, acerola cherries, and mangoes added to supplement collagen.",
        img: "/Landing/Vitamin_C.jpg",
    },
    {
        title: "Antioxidant Blend",
        description:
            "Beetroots, carrots, blueberries, grapeseed and others are present.",
        img: "/Landing/Anti_Oxidant.jpg",
    },
    {
        title: "Anti-Inflammatory",
        description:
            "Ginger, turmeric, fenugreek, pineapple, and black pepper.",
        img: "/Landing/Anti_Inflammatory.jpg",
    },
    {
        title: "Vitamin A Complex",
        description:
            "Moringa, Amaranth, and apples are great sources for skin and hair health.",
        img: "/Landing/Vitamin_A.jpg",
    },
];

const SachetSection = () => {
    const [activeCard, setActiveCard] = useState<number | null>(null);

    return (
        <section
            className="relative w-full mb-10"
            style={{ backgroundColor: "#fffdf2", overflow: "visible" }}
        >
            {/* ── Heading Section ─────────────────────────────────── */}
            <div
                className="box-border flex w-full flex-row flex-nowrap items-center justify-center gap-[10px] overflow-clip"
                style={{ padding: "35px 0px 0px 0px" }}
            >
                <h2
                    className="font-antic-didone whitespace-pre text-center text-[28px] font-semibold leading-[1.2] tracking-[0.03em] text-black sm:text-[36px] lg:text-[50px]"
                >
                    1 Sachet = 6 Powerful Complexes
                </h2>
            </div>

            {/* ── Content Section (cards grid) ─────────────────────── */}
            <div
                className="mx-auto grid max-w-7xl grid-cols-2 auto-rows-fr gap-3 px-3 py-6 sm:grid-cols-3 sm:gap-4 sm:px-5 sm:py-8 md:gap-5 md:px-8 lg:grid-cols-6 lg:gap-4 lg:px-10 lg:py-10"
            >
                {complexes.map((item, index) => {
                    const isActive = activeCard === index;

                    return (
                        /* Card wrapper — grid controls sizing */
                        <div
                            key={index}
                            className="relative cursor-pointer h-full"
                            onMouseEnter={() => setActiveCard(index)}
                            onMouseLeave={() => setActiveCard(null)}
                            onClick={() => setActiveCard(isActive ? null : index)}
                        >
                            {/* ── Dark card container ── */}
                            <div
                                className="box-border flex h-full w-full flex-col items-center rounded-2xl bg-[#191a1d] p-2 pb-4 sm:rounded-[20px] sm:p-2.5 sm:pb-5 md:rounded-[22px] md:p-3 md:pb-6 lg:rounded-[22px] lg:p-2.5 lg:pb-5"
                            >
                                {/* ── Card image — translates up on hover ── */}
                                <motion.div
                                    className="relative w-full shrink-0 overflow-hidden rounded-[10px] aspect-[4/3] sm:rounded-[12px] md:rounded-[14px]"
                                    animate={{
                                        y: isActive ? -40 : 0,
                                    }}
                                    transition={{
                                        duration: 0.35,
                                        ease: [0.25, 0.46, 0.45, 0.94],
                                    }}
                                >
                                    <Image
                                        src={item.img}
                                        alt={item.title}
                                        fill
                                        sizes="(max-width: 640px) 45vw, (max-width: 1024px) 30vw, 190px"
                                        className="object-cover object-center"
                                    />
                                </motion.div>

                                {/* ── Title — translates up on hover ──── */}
                                <motion.span
                                    className="mt-1.5 font-poppins whitespace-pre-wrap text-center text-[11px] font-normal leading-[1.2] tracking-[0em] text-white sm:mt-2 sm:text-[13px] md:text-[14px]"
                                    animate={{
                                        y: isActive ? -28 : 0,
                                    }}
                                    transition={{
                                        duration: 0.35,
                                        ease: [0.25, 0.46, 0.45, 0.94],
                                    }}
                                >
                                    {item.title}
                                </motion.span>

                                {/* ── Description (hover reveal) ───────── */}
                                <motion.p
                                    className="font-poppins w-full break-words text-center text-[9px] font-normal leading-[1.2] tracking-[0em] sm:text-[10px] md:text-[11px]"
                                    style={{
                                        color: "rgba(255, 255, 255, 0.69)",
                                        whiteSpace: "pre-wrap",
                                        wordWrap: "break-word",
                                        wordBreak: "break-word",
                                    }}
                                    animate={{
                                        opacity: isActive ? 1 : 0,
                                        y: isActive ? -22 : 15,
                                    }}
                                    transition={{
                                        duration: 0.3,
                                        ease: [0.25, 0.46, 0.45, 0.94],
                                    }}
                                >
                                    {item.description}
                                </motion.p>
                            </div>
                        </div>
                    );
                })}
            </div>
        </section>
    );
};

export default SachetSection;