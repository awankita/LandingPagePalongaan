"use client";

import React, { useState } from "react";
import cctvs from "./cctvs";
import Link from "next/link";


export default function CctvsPage() {
  const [selectedCctv, setSelectedCctv] = useState(cctvs[0]);
  const [search, setSearch] = useState("");
  const filteredCctvs = cctvs.filter(cctv =>
  cctv.name.toLowerCase().includes(search.toLowerCase())
);

  return (
    <div className="min-h-screen bg-white">
      {/* Navbar */}
      <nav className="flex items-center justify-between px-6 py-4 shadow-md">
        <h1 className="text-2xl font-bold">Rinascita.</h1>
        <div className="space-x-6 hidden md:flex">
          <Link href="/">Beranda</Link>
          <Link href="/">FAQ</Link>
          <Link href="/">CCTV</Link>
        </div>
        <button className="md:hidden">☰</button>
      </nav>

      {/* Main Content */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-6">
        {/* Left Section - Livestream */}
        <div className="bg-[#203612] p-4 rounded-2xl border border-blue-400">
          <h2 className="text-white font-bold mb-2">Livestream</h2>
          <div className="aspect-video bg-black rounded-lg overflow-hidden mb-4">
            <iframe
              src={selectedCctv.ip}
              title={selectedCctv.name}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="w-full h-full object-cover"
            />
          </div>
          <div className="text-white mb-4">
            <h3 className="font-bold">{selectedCctv.name}</h3>
            <p>{selectedCctv.address}</p>
          </div>

          <div className="bg-[#3B4435] p-4 rounded-xl text-white text-sm">
            <h4 className="font-bold mb-2">Detail CCTV:</h4>
            <p>
              Perangkat: {selectedCctv.device} <br />
              IP Stream: {selectedCctv.ip}
            </p>
          </div>
        </div>

        {/* Right Section - List */}
        <div className="bg-[#203612] p-4 rounded-2xl">
          <div className="relative mb-4">
            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full p-3 pl-10 rounded-lg bg-transparent border border-white text-white placeholder:text-white"
              placeholder="pencarian lokasi cctv..."
            />
            <span className="absolute left-3 top-1/2 -translate-y-1/2 text-white">
              🔍
            </span>
          </div>

          <ul className="text-white space-y-2 pr-2 max-h-[400px] overflow-y-auto">
            {filteredCctvs.map((cctv, key) => (
              <li
                key={key}
                onClick={() => setSelectedCctv(cctv)}
                className={`flex flex-col p-3 rounded-md cursor-pointer transition ${
                  selectedCctv.name === cctv.name
                    ? "bg-[#4D5C2C]"
                    : "hover:bg-[#3C4A1E]"
                }`}
              >
                <span className="font-semibold">{cctv.name}</span>
                <span className="text-sm text-gray-200">{cctv.address}</span>
                <span className="text-xs text-gray-300">{cctv.device}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
