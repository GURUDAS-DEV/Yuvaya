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
            style={{ backgroundColor: "#fffdf2", height: "500px", overflow: "visible" }}
        >
            {/* ── Heading Section ─────────────────────────────────── */}
            <div
                className="box-border flex w-full flex-row flex-nowrap items-center justify-center gap-[10px] overflow-clip"
                style={{ padding: "35px 0px 0px 0px" }}
            >
                <h2
                    className="font-antic-didone whitespace-pre text-[50px] font-semibold leading-[1.2] tracking-[0.03em] text-black"
                >
                    1 Sachet = 6 Powerful Complexes
                </h2>
            </div>

            {/* ── Content Section (cards row) ─────────────────────── */}
            <div
                className="box-border flex w-full flex-row flex-nowrap items-end justify-evenly"
                style={{
                    height: "360px",
                    padding: "30px 0px 0px 0px",
                    alignContent: "flex-start",
                    overflow: "visible",
                }}
            >
                {complexes.map((item, index) => {
                    const isActive = activeCard === index;

                    return (
                        /* Wrapper — fixed height, card anchored to bottom */
                        <div
                            key={index}
                            className="relative cursor-pointer"
                            style={{ width: "200px", height: "250px" }}
                            onMouseEnter={() => setActiveCard(index)}
                            onMouseLeave={() => setActiveCard(null)}
                        >
                            {/* ── Dark card container — fixed size, overflow visible ── */}
                            <div
                                className="absolute bottom-0 left-0 box-border flex w-[200px] flex-col flex-nowrap items-center overflow-visible rounded-[22px] bg-[#191a1d]"
                                style={{
                                    height: "230px",
                                    padding: "10px 10px 25px 10px",
                                    gap: "5px",
                                }}
                            >
                                {/* ── Card image — translates up on hover ── */}
                                <motion.div
                                    className="relative w-full shrink-0 overflow-hidden rounded-[14px]"
                                    style={{ height: "176px" }}
                                    animate={{
                                        y: isActive ? -50 : 0,
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
                                        sizes="(max-width: 768px) 50vw, 190px"
                                        className="object-cover object-center"
                                    />
                                </motion.div>

                                {/* ── Title — translates up on hover ──── */}
                                <motion.span
                                    className="font-poppins whitespace-pre text-center text-[14px] font-normal leading-[1.2] tracking-[0em] text-white"
                                    animate={{
                                        y: isActive ? -35 : 0,
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
                                    className="font-poppins w-full break-words text-center text-[11px] font-normal leading-[1.2] tracking-[0em]"
                                    style={{
                                        color: "rgba(255, 255, 255, 0.69)",
                                        whiteSpace: "pre-wrap",
                                        wordWrap: "break-word",
                                        wordBreak: "break-word",
                                    }}
                                    animate={{
                                        opacity: isActive ? 1 : 0,
                                        y: isActive ? -30 : 20,
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