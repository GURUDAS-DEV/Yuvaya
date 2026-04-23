"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const instaPosts = [
    { src: "/Landing/InstaPost_3.JPG", alt: "Yuvaya Collagreens with tropical backdrop" },
    { src: "/Landing/InstaPost_4.JPG", alt: "Model holding Yuvaya sachet" },
    { src: "/Landing/InstaPost_2.jpg", alt: "Yuvaya pouch in a luxury handbag" },
    { src: "/Landing/InstaPost_5.JPG", alt: "Model drinking Yuvaya greens drink" },
    { src: "/Landing/InstaPost_1.JPG", alt: "Yuvaya sachets flat lay" },
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
            className="relative w-full overflow-hidden py-16"
            style={{ backgroundColor: "#fffdf2" }}
        >

            {/* Scrolling container */}
            <div className="relative w-full overflow-hidden">
                <motion.div
                    className="flex w-max flex-row flex-nowrap gap-3"
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
                            className="group relative block shrink-0 overflow-hidden rounded-[8px]"
                            style={{
                                width: "400px",
                                height: "400px",
                            }}
                        >
                            {/* Post image */}
                            <Image
                                src={post.src}
                                alt={post.alt}
                                fill
                                sizes="(max-width: 768px) 100vw, 400px"
                                priority={index < 4}
                                className="object-cover object-center transition-transform duration-500 ease-out group-hover:scale-105"
                            />

                            {/* Hover overlay — blur + Instagram icon */}
                            <div
                                className="absolute inset-0 z-10 flex flex-row flex-wrap items-center justify-center gap-[10px] overflow-visible p-0 opacity-0 transition-opacity duration-300 ease-in-out group-hover:opacity-100"
                                style={{
                                    flex: "1",
                                    WebkitBackdropFilter: "blur(7px)",
                                    backdropFilter: "blur(7px)",
                                    backgroundColor: "rgba(122, 122, 122, 0.11)",
                                    borderRadius: "0px",
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