"use client";

import React, { useEffect, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ShoppingCart } from "lucide-react";
import Link from "next/link";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "Shop", href: "/shop" },
  { name: "About Us", href: "/about" },
  { name: "Contact Us", href: "/contact" },
  { name: "Account", href: "/account" },
];

const Navbar = () => {
  const { scrollY } = useScroll();
  const [windowHeight, setWindowHeight] = useState(0);

  useEffect(() => {
    setWindowHeight(window.innerHeight);
    const handleResize = () => setWindowHeight(window.innerHeight);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Calculate hero middle point (assuming hero is ~100vh)
  const heroMiddle = windowHeight * 0.5;
  const shrinkThreshold = 10; // Shrink almost immediately (10px scroll)

  // Width transforms - dramatic shrink from full to compact very fast
  const navWidth = useTransform(
    scrollY,
    [0, shrinkThreshold, heroMiddle, heroMiddle + 50],
    ["98%", "60%", "60%", "98%"]
  );

  const navLeft = useTransform(
    scrollY,
    [0, shrinkThreshold, heroMiddle, heroMiddle + 50],
    ["1%", "20%", "20%", "1%"]
  );

  return (
    <motion.nav
      className="font-poppins z-50"
      style={{
        boxSizing: "border-box",
        position: "fixed",
        top: "10px",
        left: navLeft,
        width: navWidth,
        height: "56px",
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "10px",
        backgroundColor: "#191a1d",
        overflow: "visible",
        alignContent: "center",
        flexWrap: "nowrap",
        borderRadius: "100px",
      }}
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      {/* Logo */}
      <motion.div
        className="flex items-center justify-center h-full aspect-square rounded-full bg-white/10 text-white font-bold text-base"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        style={{ flex: "none" }}
      >
        Y
      </motion.div>

      {/* Navigation Links */}
      <div
        className="flex items-center"
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
          flex: 1,
          gap: "12px",
        }}
      >
        {navLinks.map((link, index) => (
          <motion.div
            key={link.name}
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 + 0.3, duration: 0.4 }}
          >
            <Link
              href={link.href}
              className="text-white hover:text-white text-sm font-medium tracking-wide transition-colors duration-200 relative group"
            >
              {link.name}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-white group-hover:w-full transition-all duration-300" />
            </Link>
          </motion.div>
        ))}
      </div>

      {/* Cart Icon */}
      <motion.button
        className="flex items-center justify-center h-full aspect-square rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors duration-200"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        aria-label="Shopping Cart"
        style={{ flex: "none" }}
      >
        <ShoppingCart size={18} strokeWidth={2} />
      </motion.button>
    </motion.nav>
  );
};

export default Navbar;