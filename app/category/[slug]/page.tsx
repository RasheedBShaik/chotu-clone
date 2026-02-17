"use client";

import React, { useState } from "react";
import { useParams, useRouter } from "next/navigation";
import Header from "@/app/components/Header";

const CategoryPage = () => {
  const { slug } = useParams();
  const router = useRouter();
  const [selectedShop, setSelectedShop] = useState<any | null>(null);
  const [step, setStep] = useState<"shop" | "receipt">("shop");
  const [searchActive, setSearchActive] = useState(false);
  const [activeFloor, setActiveFloor] = useState("ALL");
  const [cart, setCart] = useState<{ [key: number]: number }>({});

  // --- CART LOGIC ---
  const updateCart = (id: number, delta: number) => {
    setCart((prev) => {
      const currentQty = prev[id] || 0;
      const newQty = Math.max(0, currentQty + delta);
      if (newQty === 0) {
        const { [id]: _, ...rest } = prev;
        return rest;
      }
      return { ...prev, [id]: newQty };
    });
  };

  const healthShops = [
    {
      id: "mp-1",
      brand: "MedPlus",
      name: "MedPlus Sector 12",
      category: "pharmacy",
      address: "Main Road, Noida",
      icon: "👨‍💼",
      distance: "0.4 km",
      rating: "4.8",
    },
    {
      id: "sk-1",
      brand: "Sri Kumari",
      name: "Sri Kumari - Ameerpet",
      category: "pharmacy",
      address: "Ameerpet Metro",
      icon: "👩‍💼",
      distance: "0.5 km",
      rating: "4.7",
    },
    {
      id: "ap-1",
      brand: "Apollo",
      name: "Apollo Pharmacy",
      category: "pharmacy",
      address: "Jubilee Hills, Hyd",
      icon: "👨‍💼",
      distance: "1.2 km",
      rating: "4.9",
    },
  ];

  const shopProducts = [
    {
      id: 1,
      name: "Dolo 650",
      price: "₹30",
      weight: "15 strips",
      img: "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&q=80&w=400",
    },
    {
      id: 2,
      name: "Vicks Vaporub",
      price: "₹95",
      weight: "25ml",
      img: "https://images.unsplash.com/photo-1631549916768-4119b2e5f926?auto=format&fit=crop&q=80&w=400",
    },
    {
      id: 3,
      name: "N95 Mask",
      price: "₹150",
      weight: "1 unit",
      img: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&q=80&w=400",
    },
    {
      id: 4,
      name: "Hand Sanitizer",
      price: "₹50",
      weight: "100ml",
      img: "https://images.unsplash.com/photo-1584483766114-2cea6facdf57?auto=format&fit=crop&q=80&w=400",
    },
  ];

  const totalItems = Object.values(cart).reduce((a, b) => a + b, 0);
  const itemsPrice = shopProducts.reduce(
    (sum, p) => sum + (cart[p.id] || 0) * parseInt(p.price.replace("₹", "")),
    0,
  );
  const filteredShops = healthShops.filter(
    (shop) => shop.category.toLowerCase() === slug?.toString().toLowerCase(),
  );
  const brands = Array.from(new Set(filteredShops.map((s) => s.brand)));

  return (
    <div className="min-h-screen flex justify-center">
      <div className="w-full max-w-120 bg-gray-50 min-h-screen shadow-2xl relative overflow-x-hidden">
        <Header />

        <div className="">
          {step === "shop" ? (
            <>
              {/* --- HEADER --- */}
              <div
                className={`relative bg-gray-50 px-6 pb-8 transition-all duration-300 ${selectedShop ? "pt-6 rounded-b-4xl bg-white duration-100" : "pt-10 rounded-b-[3.5rem]"} `}
              >
                <button
                  onClick={() =>
                    selectedShop ? setSelectedShop(null) : router.back()
                  }
                  className={`flex items-center justify-center bg-red-700 rounded-2xl active:scale-90 transition-all duration-300 w-10 h-10 absolute -top-12.5`}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="white"
                    strokeWidth="3"
                    strokeLinecap="round"
                  >
                    <path d="m15 18-6-6 6-6" />
                  </svg>
                </button>

                <h1 className="text-2xl font-bold text-gray-900 tracking-tighter capitalize leading-tight">
                  {selectedShop ? (
                    <div>
                      <span className="text-green-600 block text-sm uppercase tracking-widest font-black mb-1">
                        welcome
                      </span>
                      <img src="/images/product/shop-img.png" alt="shop img" />
                    </div>
                  ) : (
                    <div>
                      popular <span className="text-red-600">{slug}</span> near
                      me
                    </div>
                  )}
                </h1>
                <div className="flex justify-start gap-3 mt-5 items-center h-10">
                  {/* SEARCH CONTAINER */}
                  <div
                    className={`relative transition-all duration-500 ease-[cubic-bezier(0.23,1,0.32,1)] flex items-center ${
                      !selectedShop || searchActive
                        ? "flex-1" // Grows smoothly to take available space
                        : "w-10 h-10"
                    }`}
                  >
                    {/* SEARCH ICON - Unified with the circle */}
                    <div
                      className={`absolute inset-y-0 left-0 flex items-center transition-all duration-300 z-30 pointer-events-none ${
                        selectedShop && !searchActive
                          ? "justify-center w-10" // Dead center in circle mode
                          : "pl-3" // Standard left padding in input mode
                      }`}
                    >
                      <svg
                        className="w-5 h-5 text-red-700"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="3"
                          d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                        />
                      </svg>
                    </div>

                    {/* THE INPUT FIELD */}
                    <input
                      type="text"
                      id="product-search"
                      placeholder="Search products..."
                      onFocus={() => selectedShop && setSearchActive(true)}
                      className={`block h-10 border border-red-700 rounded-full outline-none text-sm transition-all duration-500 bg-white ${
                        !selectedShop || searchActive
                          ? "w-full pl-10 pr-10 opacity-100 shadow-sm"
                          : "w-10 p-0 opacity-0 cursor-pointer" // Completely transparent but clickable
                      }`}
                    />

                    {/* THE "X" BUTTON */}
                    {selectedShop && searchActive && (
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          setSearchActive(false);
                          const input = document.getElementById(
                            "product-search",
                          ) as HTMLInputElement;
                          if (input) input.value = "";
                        }}
                        className="absolute right-2 w-7 h-7 flex items-center justify-center rounded-full bg-gray-100 text-red-700 z-40 hover:bg-gray-200 transition-colors"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="3"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <line x1="18" y1="6" x2="6" y2="18"></line>
                          <line x1="6" y1="6" x2="18" y2="18"></line>
                        </svg>
                      </button>
                    )}

                    {/* THE CIRCLE BUTTON (Visual Only) */}
                    {selectedShop && !searchActive && (
                      <div
                        onClick={() => setSearchActive(true)}
                        className="absolute inset-0 w-10 h-10 cursor-pointer rounded-full border-2 border-white bg-white shadow-[0_4px_10px_rgba(0,0,0,0.2)] z-20 active:scale-90 transition-transform"
                      ></div>
                    )}
                  </div>

                  {/* FILTER BUTTONS */}
                  {selectedShop && !searchActive && (
                    <div className="flex gap-2 animate-in fade-in slide-in-from-right-2 duration-300">
                      {["ALL", "F1", "F2"].map((f) => {
                        const isActive = activeFloor === f; // Check if this one is selected

                        return (
                          <div
                            key={f}
                            onClick={() => setActiveFloor(f)} // Update state on click
                            className={`w-10 h-10 shrink-0 flex items-center justify-center rounded-full text-xs font-black transition-all cursor-pointer active:scale-90 
            ${
              isActive
                ? "bg-green-600 text-white shadow-lg scale-110" // Active Styles
                : "bg-white text-gray-700 shadow-[0_4px_10px_rgba(0,0,0,0.2)]" // Inactive Styles
            }`}
                          >
                            {f}
                          </div>
                        );
                      })}
                    </div>
                  )}
                </div>
              </div>

              {/* --- SHOP LIST OR PRODUCT GRID --- */}
              {!selectedShop ? (
                <div className="pb-20">
                  {brands.map((brandName) => (
                    <div key={brandName} className="mt-8">
                      <div className="px-5 space-y-4 relative">
                        {filteredShops
                          .filter((s) => s.brand === brandName)
                          .map((shop) => (
                            <div
                              key={shop.id}
                              onClick={() => setSelectedShop(shop)}
                              className="bg-white p-4 rounded-4xl shadow-sm flex items-center border border-gray-100 active:scale-[0.98] cursor-pointer"
                            >
                              <div className="w-16 h-16 bg-red-50 rounded-4xl flex items-center justify-center text-2xl mr-4">
                                {shop.icon}
                              </div>
                              <div className="absolute bottom-2 border-2 border-white bg-red-200 text-red-700 px-4 py-1 rounded-2xl text-[10px] font-bold">
                                {shop.distance}
                              </div>
                              <div className="flex-1">
                                <h4 className="font-bold text-lg text-gray-900  truncate">
                                  {shop.name}
                                </h4>
                                <p className="text-gray-400 text-sm font-semibold ">
                                  {shop.address}
                                </p>
                              </div>
                            </div>
                          ))}
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <section className="px-4 mt-4 pb-32">
                  <div className="grid grid-cols-3 gap-x-2 gap-y-6">
                    {shopProducts.map((p) => {
                      const qty = cart[p.id] || 0;
                      return (
                        <div key={p.id} className="flex flex-col items-center">
                          <div className="w-full aspect-2/3 bg-white shadow-md rounded-2xl border border-gray-100 relative overflow-hidden mb-2">
                            <img
                              src={p.img}
                              alt={p.name}
                              className="aspect-vedio"
                            />
                            <div className="absolute bottom-2 inset-x-2">
                              {qty === 0 ? (
                                <button
                                  onClick={() => updateCart(p.id, 1)}
                                  className="w-full h-8 flex items-center justify-center border-2 border-green-600 rounded-2xl text-xl text-green-700 bg-white/90 active:scale-95 transition-all"
                                >
                                  <span className="leading-none pb-1">+</span>
                                </button>
                              ) : (
                                <div className="w-full h-8 bg-green-600 rounded-2xl flex justify-between items-center text-white shadow-lg">
                                  <button
                                    onClick={() => updateCart(p.id, -1)}
                                    // Added h-full and flex to center the minus sign
                                    className="h-full flex-1 flex items-center justify-center font-bold text-xl active:scale-125 transition-transform"
                                  >
                                    <span className="leading-none pb-1">−</span>
                                  </button>

                                  <span className="text-lg font-black tracking-tighter leading-none">
                                    {qty}
                                  </span>

                                  <button
                                    onClick={() => updateCart(p.id, 1)}
                                    // Added h-full and flex to center the plus sign
                                    className="h-full flex-1 flex items-center justify-center font-bold text-xl active:scale-125 transition-transform"
                                  >
                                    <span className="leading-none pb-1">+</span>
                                  </button>
                                </div>
                              )}
                            </div>
                            <h4 className="font-semibold text-sm px-2  text-gray-600 pt-2 w-full">
                              {p.name}
                            </h4>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </section>
              )}
            </>
          ) : (
            /* --- RECEIPT VIEW --- */
            <div className="px-6 py-4 animate-in slide-in-from-right duration-300">
              <div className="flex items-center gap-4 mb-8">
                <button
                  onClick={() => setStep("shop")}
                  className="w-10 h-10 flex items-center justify-center bg-gray-200 rounded-2xl active:scale-90"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="black"
                    strokeWidth="3"
                    strokeLinecap="round"
                  >
                    <path d="m15 18-6-6 6-6" />
                  </svg>
                </button>
                <h2 className="text-2xl font-black tracking-tighter  uppercase text-gray-900">
                  Get Bill
                </h2>
              </div>

              <div className="bg-white rounded-[2.5rem] p-6 shadow-xl border border-gray-100">
                <div className="mb-6 border-b border-dashed border-gray-200 pb-4">
                  <p className="text-[10px] font-black text-red-600 uppercase tracking-widest">
                    Store Receipt
                  </p>
                  <h3 className="text-xl font-bold text-gray-900">
                    {selectedShop?.name}
                  </h3>
                </div>

                <div className="space-y-4 mb-8">
                  {shopProducts
                    .filter((p) => cart[p.id] > 0)
                    .map((p) => (
                      <div
                        key={p.id}
                        className="flex justify-between items-center"
                      >
                        <div className="flex gap-3 items-center">
                          <span className="bg-gray-100 text-gray-600 px-2 py-1 rounded-lg text-[10px] font-bold">
                            {cart[p.id]}x
                          </span>
                          <p className="text-sm font-bold text-gray-800">
                            {p.name}
                          </p>
                        </div>
                        <p className="text-sm font-black text-gray-900">
                          ₹{parseInt(p.price.replace(/\D/g, "")) * cart[p.id]}
                        </p>
                      </div>
                    ))}
                </div>

                <div className="space-y-3 pt-4 border-t border-gray-100">
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-400">Subtotal</span>
                    <span className="font-bold">₹{itemsPrice}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-400">Delivery</span>
                    <span className="text-green-600 font-bold text-[10px] uppercase">
                      Free
                    </span>
                  </div>
                  <div className="flex justify-between text-xl pt-4">
                    <span className="font-black">Total Bill</span>
                    <span className="font-black text-red-600 text-2xl">
                      ₹{itemsPrice}
                    </span>
                  </div>
                </div>
              </div>
              <button
                onClick={() => {
                  // 1. Generate item list with clean text markers
                  const itemsList = shopProducts
                    .filter((p) => cart[p.id] > 0)
                    .map((p) => {
                      const pricePerUnit = parseInt(p.price.replace(/\D/g, ""));
                      const lineTotal = pricePerUnit * cart[p.id];
                      return `> *${p.name}*\n  ${cart[p.id]} x Rs.${pricePerUnit} = *Rs.${lineTotal}*`;
                    })
                    .join("\n\n");

                  const orderId = `ORD-${Math.floor(1000 + Math.random() * 9000)}`;
                  const timestamp = new Date().toLocaleString("en-IN", {
                    dateStyle: "medium",
                    timeStyle: "short",
                  });

                  // 2. Construct Message using standard text symbols
                  const receiptLines = [
                    "--- ORDER RECEIPT ---",
                    `Order ID: ${orderId}`,
                    "--------------------------",
                    `STORE: ${selectedShop?.name || "Shop"}`,
                    `DATE : ${timestamp}`,
                    "--------------------------",
                    "ITEMS ORDERED:",
                    itemsList,
                    "--------------------------",
                    `SUBTOTAL : Rs.${itemsPrice}`,
                    `DELIVERY : FREE`,
                    `TOTAL BILL: Rs.${itemsPrice}`,
                    "--------------------------",
                    "Order placed sucessfully!",
                  ];

                  const receiptMessage = receiptLines.join("\n");

                  // 3. Open WhatsApp
                  window.open(
                    `https://api.whatsapp.com/send?phone=91[1111111111]&text=${encodeURIComponent(receiptMessage)}`, // get the owner mobile number from the database and replace in []
                    "_blank",
                  );
                }}
                className="w-full mt-10 bg-green-600 text-white py-5 rounded-4xl font-bold text-lg shadow-xl active:scale-95 transition flex items-center justify-center"
              >
                Order on WhatsApp
              </button>
            </div>
          )}
        </div>

        {/* --- FLOATING CART BAR --- */}
        {totalItems > 0 && step === "shop" && (
          <div className="fixed max-w-120 bottom-0 left-0 right-0 mx-auto bg-white text-black p-4  shadow-2xl flex items-center justify-between animate-in fade-in slide-in-from-bottom-4 z-50">
            <div>
              <p className=" font-semibold px-4">{totalItems} Items</p>
              {/* <p className="text-xl font-black leading-none">₹{itemsPrice}</p> */}
            </div>
            <button
              onClick={() => setStep("receipt")}
              className="bg-green-600 text-white px-20 py-3 flex gap-2 rounded-3xl font-semibold active:scale-95 transition"
            >
              Next <span>&gt;</span>
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default CategoryPage;
