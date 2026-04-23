"use client";

import React, { useState } from "react";

const NewsLetter = () => {
  const [email, setEmail] = useState("");

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: wire up newsletter subscription
    console.log("Subscribe:", email);
    setEmail("");
  };

  return (
    <section className="box-border flex w-full flex-col items-center justify-center gap-[10px] overflow-clip bg-[#fffdf2] px-0 pt-[80px] pb-[50px]">
      <div className="w-[66%] border-2 border-[#26312d] rounded-3xl px-5 py-18 bg-[#26312d] flex justify-center items-center flex-col gap-10">
        <div className="flex justify-center items-center w-[80%] flex-col">
          <div className="flex flex-col justify-center items-center gap-3">
            <h2 className="font-antic-didone font-[600] text-[47px] leading-[1.2] tracking-[0.03em] text-[#fffdf2] text-center">
              Subscribe to our newsletter
            </h2>
            <h2 className="font-antic-didone text-[16px] w-[80%] leading-[1.2] tracking-[0.03em] text-[#fffdf2] text-center">
              Get local community event announcements, access to new product launches, tips and exclusive discounts.
            </h2>
          </div>
        </div>
        <div className="w-[560px]">
          <form
            onSubmit={handleSubscribe}
            className="flex w-full flex-row items-center justify-center gap-4"
          >
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter email address"
              required
              className="box-border h-[56px] flex-1 rounded-full bg-[#fffdf2] px-6 font-sans text-[16px] font-normal text-[#26312d] placeholder:text-[#999999] outline-none transition-shadow duration-200 focus:ring-2 focus:ring-[#34803c]"
            />
            <button
              type="submit"
              className="box-border h-[52px] cursor-pointer rounded-full bg-[#34803c] px-8 font-sans text-[16px] font-semibold text-[#fffdf2] transition-all duration-200 hover:bg-[#2a6a30] active:scale-95"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default NewsLetter;
