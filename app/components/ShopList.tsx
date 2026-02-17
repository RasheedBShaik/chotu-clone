"use client";

import React from "react";
import Link from "next/link";
import { ALL_SHOPS, ALL_PRODUCTS, Shop } from "../../data/shops";

const ShopList = () => {
  // 1. Get unique categories from your ALL_SHOPS array
  const categories = Array.from(new Set(ALL_SHOPS.map((s) => s.category)));

  return (
    <div className="px-3 py-6 space-y-12">
      {categories.map((catKey) => {
        // Filter shops belonging to this specific category
        const shopsInCategory = ALL_SHOPS.filter((s) => s.category === catKey);

        return (
          <div key={catKey} className="space-y-5">
            {/* CATEGORY HEADER */}
            <div className="flex items-center justify-between px-1">
              <div className="flex items-center gap-3">
                <h2 className="text-xl  text-red-700 capitalize font-semibold tracking-tight">
                  {catKey}
                </h2>
              </div>
            </div>

            {/* 4-COLUMN GRID */}
            <div className="grid grid-cols-4 gap-x-2 gap-y-8">
              {shopsInCategory.map((shop: Shop) => {
                // Calculate item count for this specific shop from ALL_PRODUCTS
                const itemCount = ALL_PRODUCTS.filter(
                  (p) => p.shopId === shop.id,
                ).length;

                return (
                  <Link
                    key={shop.id}
                    href={`/category/${shop.category}`}
                    className="flex flex-col items-center group cursor-pointer bg-white p-2 rounded-2xl py-4"
                  >
                    {/* SHOP IMAGE BOX */}
                    <div
                      className={`relative w-full aspect-square rounded-2xl overflow-hidden border border-gray-100 transition-all active:scale-90 shadow-sm ${!shop.isOpen ? "grayscale opacity-50" : ""}`}
                    >
                      <img
                        src={shop.img}
                        alt={shop.name}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      />

                      {/* Product Count Badge (Only shows if products exist) */}
                    </div>

                    {/* SHOP DETAILS */}
                    <div className="text-center w-full mt-2 space-y-0.5">
                      <h3 className="text-[10px] font-semibold text-gray-800 leading-tight ">
                        {shop.name}
                      </h3>
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ShopList;
