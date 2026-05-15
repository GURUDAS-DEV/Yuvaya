"use client";

import MiddleBanner from "@/Components/Landing/MiddleBanner";
import NewsLetter from "@/Components/Landing/NewsLetter";
import { motion, AnimatePresence } from "framer-motion";
import { Star } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

const page = () => {
  return (
    <div className="pt-20 bg-white">
      <ProductsPart />
      <ProductTransparency />
      <HowToUseSection />
      <FAQsForShopPage />
      <MiddleBanner />
      <StillDoubts />
      <NewsLetter />
    </div>
  );
};

export default page;

export const HowToUseSection = () => {
  const steps = [
    { number: 1, title: "Tear", description: "Tear open the sachet carefully", img: "/Shop/tear.png" },
    { number: 2, title: "Pour", description: "Pour into 200ml of water or beverage", img: "/Shop/pour.png" },
    { number: 3, title: "Shake", description: "Shake or stir well until fully dissolved", img: "/Shop/shake.png" },
    { number: 4, title: "Sip", description: "Enjoy your daily Collagreens", img: "/Shop/sip.png" },
  ];

  return (
    <section className="w-full bg-[#fffdf2] py-16 lg:py-24 px-4 lg:px-[50px]">
      {/* Header */}
      <div className="flex flex-col items-center gap-2 mb-12 lg:mb-16 max-w-3xl mx-auto">
        <h2 className="text-center font-tt-ramillas text-[36px] sm:text-[44px] lg:text-[56px] font-semibold text-black leading-[1.1]">
          How to Use
        </h2>
        <p className="text-center font-poppins text-[13px] sm:text-[15px] lg:text-[17px] text-[#666] mt-1">
          Simple 4-step process to prepare your daily wellness drink
        </p>
      </div>

      {/* Steps */}
      <div className="max-w-6xl mx-auto grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
        {steps.map((step, i) => (
          <div key={i} className="flex flex-col items-center text-center">
            {/* Image card */}
            <div className="relative w-full aspect-square rounded-2xl overflow-hidden bg-white border-2 border-[#34803c] mb-4">
              <Image
                src={step.img}
                alt={step.title}
                fill
                sizes="(max-width: 768px) 45vw, 22vw"
                className="object-cover p-4"
              />
              <div className="absolute top-3 left-3 w-8 h-8 bg-[#34803c] rounded-full flex items-center justify-center">
                <span className="text-white font-poppins text-[13px] font-semibold">{step.number}</span>
              </div>
            </div>
            <h3 className="font-tt-ramillas text-[24px] sm:text-[28px] lg:text-[32px] font-semibold text-[#34803c] mb-1">{step.title}</h3>
            <p className="font-poppins text-[12px] sm:text-[13px] lg:text-[14px] text-[#666] leading-[1.5]">{step.description}</p>
          </div>
        ))}
      </div>

    </section>
  );
};



export const ProductsPart = () => {
  const features = [
    "Refreshing taste and no fishy smell",
    "Quick absorbing",
    "Clinically proven results",
    "Sourced from India for Indians",
    "Tested amino acids",
  ];

  const variants = [
    {
      label: "30 days pack",
      price: "₹ 3,100",
      img: "/Landing/Stand Up Pouch Front latest mockup.png",
    },
    {
      label: "60 days pack",
      price: "₹ 5,800",
      img: "/Landing/Stand Up Pouch Front latest mockup.png",
    },
    {
      label: "6 days trial",
      price: "₹ 699",
      img: "/Landing/Stand Up Pouch Front latest mockup.png",
    },
  ];

  const thumbnails = [
    {
      src: "/Landing/Stand Up Pouch Front latest mockup.png",
      alt: "Pouch Front",
    },
    { src: "/Landing/Sachet Front latest mockup.png", alt: "Sachet Front" },
    { src: "/Landing/Sachet Back latest mockup.png", alt: "Sachet Back" },
  ];
  const [activeThumbnail, setActiveThumbnail] = useState(0);
  const [selectedVariant, setSelectedVariant] = useState(0);

  return (
    <section id="products" className="bg-white min-h-screen ">
      <div className="box-border flex w-full flex-col items-start gap-8 overflow-visible px-4 lg:flex-row lg:justify-evenly lg:gap-0 lg:px-[50px]">
        {/* ── LEFT PANEL (sticky image block) ─────────────────────────── */}
        <div className="h-fit w-full shrink-0 lg:sticky lg:top-24 lg:w-[55%]">
          {/* Outer container: responsive height and styling */}
          <div className="box-border flex h-[350px] w-full flex-row items-center justify-center gap-3 overflow-clip rounded-2xl border-[4px] border-[#fff6b3] bg-[#faf6de] p-3 sm:h-[450px] sm:gap-4 sm:p-4 lg:h-[650px] lg:gap-5 lg:p-5">
            {/* Thumbnails column — each card fully rounded with gaps between */}
            <div
              className="flex h-full shrink-0 flex-col gap-2 sm:gap-2.5"
              style={{ width: "27%" }}
            >
              {thumbnails.map((t, i) => (
                <button
                  key={i}
                  onClick={() => setActiveThumbnail(i)}
                  className={`relative box-border flex w-full flex-1 cursor-pointer items-center justify-center overflow-clip ${i === 0 ? "rounded-t-2xl" : ""} ${i === 2 ? "rounded-b-2xl" : ""} border-2 sm:border-[3px] lg:border-[4px] border-[#34803c] bg-[#fffdf2] transition-all`}
                >
                  <Image
                    src={t.src}
                    alt={t.alt}
                    fill
                    sizes="(max-width: 768px) 30vw, 10vw"
                    className="object-contain p-2 sm:p-3"
                  />
                </button>
              ))}
            </div>

            {/* Main product image — responsive height */}
            <div
              className="relative box-border flex flex-col overflow-clip rounded-xl lg:rounded-[14px] border-2 sm:border-[3px] lg:border-[4px] border-[#34803c] bg-[#fffdf2]"
              style={{ width: "73%", height: "100%" }}
            >
              {/* Limited Time Offer banner */}
              <div className="absolute top-4 sm:top-6 lg:top-10 z-50 flex h-8 sm:h-10 lg:h-11 w-full shrink-0 items-center justify-center border-y-2 sm:border-y-4 border-[#11731b] bg-[#fffc60]">
                <span className="font-cormorant text-[14px] sm:text-[18px] lg:text-[20px] font-normal italic text-[#11731b]">
                  Limited Time Offer
                </span>
              </div>

              {/* Product image — changes based on selected thumbnail */}
              <div className="absolute inset-0 z-30 flex items-center justify-center p-8 sm:p-10 lg:p-12">
                <div className="relative h-full w-full max-h-full max-w-full">
                  <Image
                    src={thumbnails[activeThumbnail].src}
                    alt={thumbnails[activeThumbnail].alt}
                    key={activeThumbnail}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-contain object-center"
                    priority
                  />
                </div>
              </div>

              {/* Pack label badge at bottom right */}
              <div className="absolute bottom-4 right-4 z-10 rounded-full bg-[#26312d] px-5 py-2">
                <span className="font-poppins text-[14px] font-medium text-white">
                  {variants[selectedVariant].label === "30 days pack"
                    ? "30 Day Pack"
                    : variants[selectedVariant].label === "60 days pack"
                      ? "60 Day Pack"
                      : "6 Day Trial"}
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* ── RIGHT PANEL ── */}
        <div className="box-border flex w-full flex-col items-center justify-center gap-0 overflow-clip rounded-2xl px-4 pt-4 pb-0 lg:w-[45%] lg:px-[30px] lg:pt-[16px]">
          {/* Rating */}
          <div className="flex h-auto min-h-[40px] lg:h-[53px] w-full flex-row flex-wrap items-center justify-start gap-2 lg:gap-[10px] overflow-clip">
            <div className="flex text-[#11731b]">
              {"★★★★★".split("").map((s, i) => (
                <span
                  key={i}
                  className="text-[16px] sm:text-[18px] lg:text-[22px]"
                >
                  {s}
                </span>
              ))}
            </div>
            <span className="font-poppins text-[12px] sm:text-[16px] lg:text-[20px] font-semibold text-[#11731b]">
              4.9/5.0 (80,000)
            </span>
            <a
              href="/test-results"
              className="font-tt-ramillas text-[12px] sm:text-[14px] lg:text-[18px] font-semibold text-[#34803c] hover:text-[#2a6a30] underline"
            >
              View test results
            </a>
          </div>

          {/* Product title */}
          <h3 className="w-full break-words  whitespace-pre-wrap font-tt-ramillas text-[32px] sm:text-[38px] lg:text-[45px] font-semibold leading-[1.2] tracking-[0.02em] text-[#34803c]">
            Collagreens
          </h3>

          {/* Product Specifications */}
          <div className="mt-2 flex gap-2 flex-wrap">
            <span className="inline-block bg-[#e8f5e9] px-4 py-2 rounded-full font-poppins text-[12px] sm:text-[13px] lg:text-[14px] font-medium text-[#34803c] border border-[#34803c]">
              200 g
            </span>
            <span className="inline-block bg-[#e8f5e9] px-4 py-2 rounded-full font-poppins text-[12px] sm:text-[13px] lg:text-[14px] font-medium text-[#34803c] border border-[#34803c]">
              Unflavored
            </span>
          </div>

          {/* Description paragraphs */}
          <div className="mt-4 flex w-full flex-col gap-3 lg:gap-5">
            <p className="w-full break-words whitespace-pre-wrap font-poppins text-[14px] sm:text-[16px] lg:text-[21px] font-normal leading-[1.3] lg:leading-[1.2] tracking-[-0.03em] text-[#3d3d3d]">
              Collagreens combines hydrolyzed marine collagen with supergreens
              and 30+ bioactive ingredients across 6 clinically studied
              complexes. Designed to support radiant skin, stronger hair, and
              healthier nails while promoting gut health.
            </p>
            <p className="w-full break-words whitespace-pre-wrap font-poppins text-[14px] sm:text-[16px] lg:text-[21px] font-normal leading-[1.3] lg:leading-[1.2] tracking-[-0.03em] text-[#3d3d3d]">
              The 6 complexes naturally deliver Vitamin C, Vitamin A,
              antioxidants, fibres, minerals and actives like amla, moringa and
              spirulina to support collagen supplementation deeply.
            </p>
            <p className="w-full break-words whitespace-pre-wrap font-poppins text-[14px] sm:text-[16px] lg:text-[21px] font-normal leading-[1.3] lg:leading-[1.2] tracking-[-0.03em] text-[#3d3d3d]">
              Each convenient sachet delivers natural taste with real
              ingredients. Manufactured in a USFDA certified facility with
              third-party testing for purity and safety. No fillers. No
              artificial preservatives. No artificial sweeteners. No colourants.
            </p>
          </div>

          {/* Feature checkmarks */}
          <div className="mt-6 lg:mt-8 flex w-full flex-col items-start gap-2 lg:gap-[10px] overflow-clip">
            {features.map((f, i) => (
              <div key={i} className="flex items-center gap-2 lg:gap-3">
                <svg
                  width="16"
                  height="16"
                  className="lg:w-[20px] lg:h-[20px]"
                  viewBox="0 0 20 20"
                  fill="none"
                >
                  <path
                    d="M4 10L8 14L16 6"
                    stroke="#34803c"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                <span className="font-poppins text-[13px] sm:text-[15px] lg:text-[21px] leading-[1.1] font-normal text-[#3d3d3d]">
                  {f}
                </span>
              </div>
            ))}
          </div>

          {/* Select Variant */}
          <div className="mt-6 lg:mt-8 flex w-full flex-col items-start justify-center gap-2 lg:gap-[10px] overflow-clip">
            <h4 className="font-poppins text-[18px] sm:text-[21px] lg:text-[24px] font-medium mt-2 mb-2 lg:mb-4 text-black">
              Select Variant
            </h4>
            {/* Variant row */}
            <div className="flex w-full flex-row items-center justify-start gap-4 sm:gap-6 lg:gap-[30px] overflow-x-auto overflow-y-clip pb-2">
              {variants.map((v, i) => (
                <button
                  key={i}
                  onClick={() => setSelectedVariant(i)}
                  className="flex flex-col items-center gap-2 shrink-0"
                >
                  {/* Each variant */}
                  <div
                    className={`relative box-border h-[70px] w-[70px] sm:h-[85px] sm:w-[85px] lg:h-[100px] lg:w-[100px] overflow-clip rounded-full border-2 bg-[#fffdf2] transition-all ${selectedVariant === i
                      ? "border-[#34803c]"
                      : "border-[#c9c9c9]"
                      }`}
                  >
                    <Image
                      src={v.img}
                      alt={v.label}
                      fill
                      sizes="(max-width: 768px) 20vw, 100px"
                      className="object-contain p-2"
                    />
                  </div>
                  <span
                    className={`font-poppins text-[12px] sm:text-[13px] lg:text-[14px] ${selectedVariant === i
                      ? "font-semibold text-black"
                      : "font-normal text-gray-500"
                      }`}
                  >
                    {v.label}
                  </span>
                </button>
              ))}
            </div>
          </div>

          {/* Price & CTA */}
          <div className="flex w-full flex-col items-start gap-4 mt-6 lg:mt-0 lg:h-[138px] lg:justify-between">
            <div>
              <p className="font-antic-didone text-[24px] sm:text-[28px] lg:text-[32px] font-bold pb-1 leading-[1.2] text-black">
                {variants[selectedVariant].label}
              </p>
              <p className="font-poppins text-[20px] sm:text-[24px] lg:text-[28px] font-normal pb-1 leading-[1.2] text-gray-500">
                {variants[selectedVariant].price}
              </p>
            </div>
            {/* CTA Buttons */}
            <div className="flex w-full flex-col gap-3 sm:flex-row sm:gap-4 ">
              <a href="/cart" className="box-border rounded-full border border-gray-400 bg-white px-6 py-2.5 sm:px-8 sm:py-3 font-poppins text-[14px] sm:text-[16px] font-medium text-black transition-all hover:border-[#34803c] hover:text-[#34803c] text-center">
                Add to Cart
              </a>
              <a href="/checkout" className="box-border rounded-full border border-gray-300 bg-[#fffc60] px-6 py-2.5 sm:px-10 sm:py-3 font-poppins text-[14px] sm:text-[16px] font-medium text-black transition-all hover:bg-[#f5f014] text-center">
                Buy Now
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const transparencyRows = [
  {
    img: "/Shop/WhatsInside.png",
    alt: "What's Inside",
    title: "What\u2019s Inside",
    desc: "Only 4 real ingredient systems \u2014 each one chosen for a reason. No mystery blends, no proprietary formulas. You see exactly what goes into every sachet.",
  },
  {
    img: "/Shop/WhatsNotInside.png",
    alt: "What's Not Inside",
    title: "What\u2019s Not Inside",
    desc: "Zero artificial flavours, colours, added sugars, or sweeteners. We stripped out everything your body doesn\u2019t need \u2014 so only the good stuff remains.",
  },
  {
    img: "/Shop/MostTransparentLabel.png",
    alt: "Most Transparent Label",
    title: "Full Ingredient Transparency",
    desc: "Every ingredient listed with its exact percentage. 93% whey protein concentrate, 6.8% cocoa powder, 0.2% stevia \u2014 no hiding behind vague labels.",
  },
  {
    img: "/Shop/NutrientValue.png",
    alt: "Nutritional Table",
    title: "Complete Nutrition Facts",
    desc: "24g protein and 5.2g BCAAs per 33g serving. Full macro and micronutrient breakdown so you know exactly what you\u2019re fuelling your body with.",
  },
  {
    img: "/Shop/Believe.png",
    alt: "Lab Testing Parameters",
    title: "7 Critical Lab Tests",
    desc: "Every batch is tested for protein accuracy, amino acid profile, heavy metals, melamine spiking, microbial contamination, aflatoxins, and pesticides.",
  },
  {
    img: "/Shop/LabTested.png",
    alt: "Lab Tested and Passed",
    title: "Third-Party Lab Verified",
    desc: "Independently tested and certified. Every claim on the label is backed by real lab reports \u2014 not marketing promises. Full results available on request.",
  },
];

export const ProductTransparency = () => {
  return (
    <section className="w-full bg-white">
      {transparencyRows.map((row, i) => {
        const isEven = i % 2 === 0;
        return (
          <div
            key={i}
            className={`flex flex-col ${isEven ? "lg:flex-row" : "lg:flex-row-reverse"
              } w-full min-h-[400px] lg:min-h-[500px]`}
          >
            {/* Image half */}
            <div className={`relative w-full lg:w-1/2 min-h-[300px] sm:min-h-[400px] lg:min-h-full bg-[#f7f7f7] flex ${isEven ? "justify-end" : "justify-start"}`}>
              <Image
                src={row.img}
                alt={row.alt}
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className={`object-contain p-6 sm:p-10 lg:p-14 ${isEven ? "lg:object-right" : "lg:object-left"}`}
              />
            </div>

            {/* Text half */}
            <div
              className={`w-full lg:w-1/2 flex flex-col justify-center py-8 lg:py-12 ${isEven ? "items-start px-6 lg:pl-10 lg:pr-16 bg-white" : "items-end px-6 lg:pr-10 lg:pl-16 bg-[#fffdf2]"}`}
            >
              <span className={`font-poppins text-[11px] ${isEven ? "text-left" : "text-right"} font-semibold uppercase tracking-widest text-[#34803c] mb-3`}>
                {String(i + 1).padStart(2, "0")} / 06
              </span>
              <h3 className={`font-tt-ramillas text-[28px] ${isEven ? "text-left" : "text-right"} sm:text-[34px] lg:text-[42px] font-semibold text-black leading-[1.15] mb-4 lg:mb-6`}>
                {row.title}
              </h3>
              <p className={`font-poppins text-[14px] ${isEven ? "text-left" : "text-right"} sm:text-[16px] lg:text-[18px] text-[#555] leading-[1.6] max-w-lg`}>
                {row.desc}
              </p>
            </div>
          </div>
        );
      })}
    </section>
  );
};

export const FAQsForShopPage = () => {
  const faqs = [
    {
      question: "Is Yuvaya collagen really chemical free?",
      answer:
        "Yes, Yuvaya Collagen is 100% chemical free and made from 6 complexes.",
    },
    {
      question: "How will I know that my order is confirmed?",
      answer:
        'You shall receive communication on WhatsApp and Email after placing your order successfully on the website. Additionally, you can also check this under the my orders section account page',
    },
    {
      question: "Do I need to order from the website or somewhere else?",
      answer:
        'Currently we are only available at our own website, and are soon planning to cover different vendors as well.',
    },
    {
      question: "When will I get my order",
      answer:
        "7-10 business days (excluding weekends and public holidays). Delivery times vary depending on your location.",
    },
    {
      question: "How much does shipping cost?",
      answer:
        "There are no shipping fees unless mentioned otherwise.",
    }
  ];

  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setOpenIndex((prev) => (prev === index ? null : index));
  };

  return (
    <section className="box-border flex min-h-min w-full flex-col items-center justify-center gap-8 overflow-clip bg-[#fffdf2] px-4 pt-8 pb-10 md:gap-12.5 md:px-0 md:pt-10 md:pb-15">
      <div className="flex justify-center items-center flex-col gap-2">
        {/* FAQs badge */}
        <div className="box-border flex h-[28px] min-w-min flex-col items-center justify-center overflow-clip rounded-full bg-[#26312d] px-3">
          <span className="whitespace-pre text-[11px] font-semibold uppercase tracking-wider text-[#fffdf2]">
            FAQs
          </span>
        </div>

        {/* Heading */}
        <h2 className="whitespace-pre text-center font-tt-ramillas text-[24px] font-[400] leading-[1.1] tracking-[0.03em] text-[#000000] md:text-[40px] md:leading-[1]">
          Got Questions?
        </h2>
      </div>
      {/* Accordion container */}
      <div className="flex w-full flex-col items-center justify-start gap-2 rounded-2xl border-[3px] border-[#26312d] bg-[#26312d] p-[2px] md:max-w-[950px] md:gap-3">
        {faqs.map((faq, index) => {
          const isOpen = openIndex === index;
          return (
            <div
              key={index}
              className={`w-full overflow-hidden ${index == 0 ? "rounded-t-2xl" : ""} ${index == faqs.length - 1 && !isOpen ? "rounded-b-2xl" : ""} ${isOpen && index == faqs.length - 1 ? "rounded-b-2xl" : ""} bg-[#fffdf2]`}
            >
              {/* Question row */}
              <button
                onClick={() => toggle(index)}
                className="box-border flex min-h-[48px] w-full cursor-pointer flex-row items-center justify-between gap-3 px-4 text-left md:h-[56px] md:px-[18px]"
              >
                <span className="flex-1 whitespace-pre-wrap font-sans text-[15px] font-medium leading-[1.4] text-[#000000] md:text-[18px]">
                  {faq.question}
                </span>
                <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#26312d] md:h-7 md:w-7">
                  <div className="relative flex items-center justify-center">
                    {/* Horizontal line (always visible) */}
                    <div className="h-[2px] w-[14px] rounded-full bg-[#fffdf2] md:h-[3px] md:w-[18px]" />
                    {/* Vertical line (rotates and merges into horizontal to form minus) */}
                    <motion.div
                      className="absolute h-[14px] w-[2px] rounded-full bg-[#fffdf2] md:h-[18px] md:w-[3px]"
                      animate={{ rotate: isOpen ? 90 : 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                      style={{ originY: 0.5, originX: 0.5 }}
                    />
                  </div>
                </div>
              </button>

              {/* Answer */}
              <AnimatePresence initial={false}>
                {isOpen && (
                  <motion.div
                    key="content"
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className="overflow-hidden"
                  >
                    <div className="box-border flex w-full flex-col items-center justify-start gap-2 px-4 pb-3 pt-0 md:gap-3 md:px-[18px] md:pb-4">
                      {/* Separator between question and answer */}
                      <div className="h-px w-full bg-gray-400" />
                      <p className="w-full whitespace-pre-wrap text-left font-sans text-[13px] font-normal leading-[1.5] text-[#444444] md:text-[14px]">
                        {faq.answer}
                      </p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export const StillDoubts = () => {
  const reviews = [
    { name: "Karan", rating: 5, date: "24/04/2026" },
    { name: "Karan", rating: 5, date: "24/04/2026" },
    { name: "Karan", rating: 5, date: "24/04/2026" },
  ];

  const renderStars = (count: number) => (
    <div className="flex gap-0.5">
      {[...Array(count)].map((_, i) => (
        <span key={i} className="text-[#11731b] text-3xl">
          <Star fill="#11731b" />
        </span>
      ))}
    </div>
  );

  return (
    <section className="relative w-full min-h-auto flex flex-col justify-center items-center px-4 lg:px-0 py-10 lg:py-[60px] bg-[#fffdf2] gap-[50px] overflow-clip">
      {/* Heading Container */}
      <div className="w-full flex flex-col justify-center items-center px-5 lg:px-20 gap-[14px]">
        {/* Reviews Badge */}
        <div className="flex justify-center items-center h-[28px] bg-[#26312d] px-3 rounded-full">
          <span className="text-[11px] font-semibold uppercase tracking-widest text-[#fffdf2]">
            Reviews
          </span>
        </div>

        {/* Main Heading */}
        <h2 className="text-[32px] sm:text-[40px] md:text-[48px] lg:text-[52px] font-normal text-center leading-tight text-black font-tt-ramillas">
          Still doubts?
        </h2>
      </div>

      {/* Reviews Container - Responsive Width */}
      <div className="w-full max-w-6xl flex flex-col gap-4 px-4 lg:px-0">
        {/* First Card - Rating Stats with Blue Boxes */}
        <div className="w-full h-auto lg:h-[180px] flex flex-col lg:flex-row justify-between items-center lg:items-center gap-3 lg:gap-0 p-6 lg:p-8 bg-[#fff7c7] rounded-[30px]">
          {/* Left Content - Rating Info */}
          <div className="flex flex-col w-full lg:w-auto">
            {/* Stars Rating */}
            {renderStars(5)}

            {/* Rating Number */}
            <p className="text-base lg:text-lg font-semibold text-[#11731b] font-poppins">
              4.9/5.0
            </p>

            {/* Review Count */}
            <p className="text-sm lg:text-xl font-semibold text-[#11731b] font-poppins">
              Based on 480 reviews
            </p>

            {/* Write Review Button */}
            <a href="/reviews/write" className="w-fit mt-5 px-6 py-2  bg-black text-white text-sm lg:text-base font-semibold rounded-[6px] hover:bg-gray-900 transition-colors font-poppins inline-block text-center">
              Write a review
            </a>
          </div>

          {/* Right Content - Blue Boxes */}
          <div className="flex gap-3 lg:gap-4 w-full lg:w-auto justify-center lg:justify-end flex-wrap lg:flex-nowrap">
            {[...Array(4)].map((_, i) => (
              <div
                key={i}
                className="w-[100px] h-[100px] lg:w-[130px] lg:h-[130px] bg-[#44ccff] rounded-[10px] shrink-0"
              />
            ))}
          </div>
        </div>

        {/* Review Cards */}
        {reviews.map((review, idx) => (
          <div
            key={idx}
            className="w-full h-auto flex flex-col lg:flex-row justify-between items-start lg:items-center gap-4 lg:gap-0 p-6 lg:p-8 bg-[#fff7c7] rounded-[30px]"
          >
            {/* Left Content - Reviewer Info */}
            <div className="flex flex-col gap-[6px] w-full lg:w-auto">
              {/* Reviewer Name */}
              <p className="text-lg lg:text-2xl font-semibold text-black font-poppins">
                {review.name}
              </p>

              {/* Stars */}
              <div className="text-3xl">
                {renderStars(review.rating)}
              </div>
            </div>

            {/* Right Content - Date */}
            <p className="text-lg lg:text-2xl font-medium text-[rgba(0,0,0,0.5)] font-poppins whitespace-nowrap">
              {review.date}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};