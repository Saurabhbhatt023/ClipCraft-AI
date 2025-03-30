"use client";

import Image from "next/image";
import React from "react";
import AppHeader from "../_components/AppHeader";
import { Button } from "@/components/ui/button";
import { Home, FileText, Search, CreditCard } from "lucide-react";

const Dashboard = () => {
  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <div className="w-1/5 bg-gray-900 text-white p-5 flex flex-col gap-4">
        {/* Logo */}
        <div className="flex items-center gap-2 mb-4">
          <Image src="/logo.svg" alt="logo" width={30} height={30} />
          <h2 className="text-lg font-bold">Video Gen</h2>
        </div>
        <p className="text-sm text-gray-400">AI Short Video Generator</p>
        
        {/* Create Video Button */}
        <Button className="bg-white text-black w-full py-2 font-semibold rounded-md">
          +Create New Video
        </Button>
        
        {/* Sidebar Links */}
        <nav className="mt-4 flex flex-col gap-3">
          <a href="#" className="flex items-center gap-2 text-gray-300 hover:text-white">
            <Home size={18} /> Home
          </a>
          <a href="#" className="flex items-center gap-2 text-gray-300 hover:text-white">
            <FileText size={18} /> Create New Video
          </a>
          <a href="#" className="flex items-center gap-2 text-gray-300 hover:text-white">
            <Search size={18} /> Explore
          </a>
          <a href="#" className="flex items-center gap-2 text-gray-300 hover:text-white">
            <CreditCard size={18} /> Billing
          </a>
        </nav>
      </div>

      {/* Main Content */}
      <div className="flex-1 bg-black text-white p-5">
        <AppHeader />
        <h1 className="text-2xl font-bold mt-4">Dashboard</h1>
      </div>
    </div>
  );
};

export default Dashboard;
