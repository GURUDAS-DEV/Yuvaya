"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const instaPosts = [
    { src: "/Landing/InstaPost_3.jpg", alt: "Yuvaya Collagreens with tropical backdrop" },
    { src: "/Landing/InstaPost_4.jpg", alt: "Model holding Yuvaya sachet" },
    { src: "/Landing/InstaPost_2.jpg", alt: "Yuvaya pouch in a luxury handbag" },
    { src: "/Landing/InstaPost_5.jpg", alt: "Model drinking Yuvaya greens drink" },
    { src: "/Landing/InstaPost_1.jpg", alt: "Yuvaya sachets flat lay" },
];

// Duplicate for seamless infinite scroll
const repeatedPosts = [...instaPosts, ...instaPosts, ...instaPosts, ...instaPosts];

const InstagramIcon = () => (
    <svg
        width="48"
        height="48"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
    >
        <rect
            x="2"
            y="2"
            width="20"
            height="20"
            rx="5"
            stroke="white"
            strokeWidth="1.5"
        />
        <circle cx="12" cy="12" r="5" stroke="white" strokeWidth="1.5" />
        <circle cx="17.5" cy="6.5" r="1.2" fill="white" />
    </svg>
);

const VerticalInstaPost = () => {
    return (
        <section
            id="insta-posts"
            className="relative w-full overflow-hidden py-8 sm:py-12 md:py-16"
            style={{ backgroundColor: "#fffdf2" }}
        >

            {/* Scrolling container */}
            <div className="relative w-full overflow-hidden">
                <motion.div
                    className="flex w-max flex-row flex-nowrap gap-2 sm:gap-3"
                    animate={{ x: ["0%", "-50%"] }}
                    transition={{
                        repeat: Infinity,
                        ease: "linear",
                        duration: 70,
                    }}
                >
                    {repeatedPosts.map((post, index) => (
                        <a
                            key={index}
                            href="https://www.instagram.com/yuvaya"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group relative block shrink-0 overflow-hidden rounded-[8px] w-[260px] h-[260px] sm:w-[320px] sm:h-[320px] md:w-[400px] md:h-[400px]"
                        >
                            {/* Post image */}
                            <Image
                                src={post.src}
                                alt={post.alt}
                                fill
                                sizes="(max-width: 640px) 260px, (max-width: 768px) 320px, 400px"
                                priority={index < 4}
                                className="object-cover object-center transition-transform duration-500 ease-out group-hover:scale-105"
                            />

                            {/* Hover overlay — blur + Instagram icon */}
                            <div
                                className="absolute inset-0 z-10 flex items-center justify-center opacity-0 transition-opacity duration-300 ease-in-out group-hover:opacity-100"
                                style={{
                                    WebkitBackdropFilter: "blur(7px)",
                                    backdropFilter: "blur(7px)",
                                    backgroundColor: "rgba(122, 122, 122, 0.11)",
                                }}
                            >
                                <InstagramIcon />
                            </div>
                        </a>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default VerticalInstaPost;