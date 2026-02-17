"use client";

import React, { useState, useEffect } from "react";

const HamburgerMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleEsc = (e: { key: string }) => {
      if (e.key === "Escape") setIsOpen(false);
    };
    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "unset";
  }, [isOpen]);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <>
      {/* 1. TRIGGER BUTTON */}
      <button
        onClick={toggleMenu}
        className="z-70 relative p-2 text-white hover:bg-white/20 rounded-lg transition-all active:scale-90"
        aria-label="Toggle Menu"
      >
        <div className="w-6 h-5 flex flex-col justify-between items-center">
          {/* Note: added !bg-black when isOpen is true so the X is visible on white background */}
          <span
            className={`h-0.5 w-full bg-white transform transition-all duration-300 ${isOpen ? "rotate-45 translate-y-2 bg-black!" : ""}`}
          />
          <span
            className={`h-0.5 w-full bg-white transition-all duration-200 ${isOpen ? "opacity-0" : "opacity-100"}`}
          />
          <span
            className={`h-0.5 w-full bg-white transform transition-all duration-300 ${isOpen ? "-rotate-45 -translate-y-2.5 bg-black!" : ""}`}
          />
        </div>
      </button>

      {/* 2. BACKDROP */}
      <div
        className={`absolute inset-0 bg-black/20 backdrop-blur-md z-50 transition-opacity duration-500 ${isOpen ? "opacity-100 visible" : "opacity-0 invisible"}`}
        onClick={toggleMenu}
      />

      {/* 3. SIDE DRAWER */}
      <div
        className={`absolute top-0 right-0 bottom-0 z-60 bg-white shadow-[-20px_25px_50px_-12px_rgba(0,0,0,0.25)] transform transition-transform duration-500 ease-in-out 
        ${isOpen ? "translate-x-0" : "translate-x-full hidden"}
        w-[80%] sm:w-80`}
      >
        <div className="flex flex-col justify-between pt-24 text-black">
          <div className="space-y-10">
            {/* SECTION 1: TEAM */}
            <section className="flex justify-start items-center ">
              <div className="text-gray-900">
                <img
                  className="px-4"
                  src="/images/header/team.png"
                  alt="teams"
                />
              </div>
              <p className="text-[#696969] font-semibold">Team behind chotu</p>
            </section>

            {/* SECTION 2: TERMS */}
            <section className="flex gap-2 justify-start items-center">
              <div className="text-gray-900">
                <img
                  className="px-4 "
                  src="/images/header/team.png"
                  alt="Logo"
                />
              </div>
              <p className="text-[#696969] font-semibold">Terms and Conditions</p>
            </section>
          </div>

          <footer className="border-t border-gray-100 absolute bottom-12">
              <img
                className="object-cover"
                src="/images/header/sidebarfooter.png"
                alt="Logo"
              />
          </footer>
        </div>
      </div>
    </>
  );
};

export default HamburgerMenu;
