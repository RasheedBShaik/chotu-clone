"use client";

import React, { useState } from "react";
import Footer from "./components/Footer";
import Header from "./components/Header";
import ShopList from "./components/ShopList";

export default function Home() {
  const [activeTab, setActiveTab] = useState("home");

  const renderView = () => {
    switch (activeTab) {
      case "recent":
        return (
          <section className="px-2 mt-8 pb-10">
            <h2 className="font-bold text-gray-800 mb-4">Visit Again</h2>
            <div className="space-y-4">
              {/* We add 'i' as the index here */}
              {[1, 2, 3, 4].map((s, i) => (
                <div
                  key={s}
                  className="flex items-center p-3 bg-white shadow-sm rounded-2xl border border-gray-100"
                >
                  <div className="w-16 h-16 bg-red-100 rounded-4xl mr-4 flex items-center justify-center text-3xl">
                    {/* If index is 0 or 2 (even), show Man. If 1 or 3 (odd), show Woman */}
                    {i % 2 === 0 ? "👨‍💼" : "👩‍💼"}
                  </div>

                  <div className="flex-1">
                    <h4 className="font-bold text-sm text-gray-800">
                      Shop Name {s}
                    </h4>
                    <p className="text-xs text-gray-500">Address</p>
                  </div>

                  <button className="bg-green-100 text-green-700 px-3 py-1 rounded-lg text-[10px] font-black uppercase active:scale-90 transition-transform">
                    Order
                  </button>
                </div>
              ))}
            </div>
          </section>
        );
      case "scan":
        return (
          <div className="flex  flex-col justify-center h-[calc(100dvh-20dvh)]">
            <div className=" px-4 text-xl pb-10">install chotu</div>
            <div className=" bg-white">
              <div className="px-4 py-10 text-sm text-gray-500">
                chotu app is 10x easier
              </div>
              <div className="flex justify-between py-10 px-4">
                <div className="bg-black text-center text-white px-4 py-4 rounded-2xl mx-2 w-50">
                  play store
                </div>
                <div className="bg-black text-center text-white px-4 py-4 rounded-2xl mx-2 w-50">
                  app store
                </div>
              </div>
            </div>
          </div>
        );
      case "home":
      default:
        return (
          <div className="animate-in slide-in-from-bottom-2 duration-500">
            <div className="px-4 text-2xl font-bold pt-4 text-gray-900 leading-tight">
              Find local shops near you <br />
              <span className="text-green-600">Order on WhatsApp</span>
            </div>

            {/* The ShopList will now render fully inside this scrollable area */}
            <ShopList />
          </div>
        );
    }
  };

  return (
    // 1. Ensure the outermost wrapper prevents horizontal scroll
    <div className="w-full  min-h-screen">
      {/* 2. max-w-[480px] is more standard for mobile apps than max-w-120 */}
      <div className="max-w-120  bg-gray-50 w-full mx-auto min-h-screen relative flex flex-col  shadow-xl">
        {/* Header stays at the top */}
        <Header />
        {/* 3. SCROLL FIX: The 'main' tag must be allowed to grow and scroll */}
        <main className="flex-1 overflow-y-auto pt-2">{renderView()}</main>

        {/* Footer */}
        <Footer activeTab={activeTab} setActiveTab={setActiveTab} />
      </div>
    </div>
  );
}
