"use client";

import React, { Dispatch, SetStateAction } from "react";

// 1. Define the props interface for TypeScript
interface FooterProps {
  activeTab: string;
  setActiveTab: Dispatch<SetStateAction<string>>;
}

const Footer = ({ activeTab, setActiveTab }: FooterProps) => {
  // Helper to determine color based on props
  const getStyle = (tabName: string) => 
    activeTab === tabName ? "text-red-600" : "text-gray-500";

  return (
    <footer className="sticky bottom-0 left-0 right-0 bg-white border-t border-gray-200 z-50">
      <div className="max-w-120 mx-auto flex justify-evenly items-center h-16">
        
        {/* Recent */}
        <button 
          onClick={() => setActiveTab("recent")}
          className={`flex flex-col items-center w-full transition-colors ${getStyle("recent")}`}
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="12" cy="12" r="10" />
            <polyline points="12 6 12 12 16 14" />
          </svg>
          <span className="text-[10px] font-bold uppercase mt-1">Recent</span>
        </button>

        {/* Home */}
        <button 
          onClick={() => setActiveTab("home")}
          className={`flex flex-col items-center w-full transition-colors ${getStyle("home")}`}
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
            <polyline points="9 22 9 12 15 12 15 22" />
          </svg>
          <span className="text-[10px] font-bold uppercase mt-1">Home</span>
        </button>

        {/* Scan */}
        <button 
          onClick={() => setActiveTab("scan")}
          className={`flex flex-col items-center w-full transition-colors ${getStyle("scan")}`}
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M3 7V5a2 2 0 0 1 2-2h2" />
            <path d="M17 3h2a2 2 0 0 1 2 2v2" />
            <path d="M21 17v2a2 2 0 0 1-2 2h-2" />
            <path d="M7 21H5a2 2 0 0 1-2-2v-2" />
            <line x1="7" y1="12" x2="17" y2="12" />
          </svg>
          <span className="text-[10px] font-bold uppercase mt-1">Scan</span>
        </button>

      </div>
    </footer>
  );
};

export default Footer;