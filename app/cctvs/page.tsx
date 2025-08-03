"use client";

import React, { useState, useRef, useEffect } from "react";
import cctvs from "./cctvs";
import Link from "next/link";
import Hls from "hls.js";

export default function CctvsPage() {
  const [selectedCctv, setSelectedCctv] = useState(cctvs[0]);
  const [search, setSearch] = useState("");
  const videoRef = useRef<HTMLVideoElement>(null);
  const [showControls, setShowControls] = useState(true);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  const handleMouseMove = () => {
    setShowControls(true);
    if (timerRef.current) clearTimeout(timerRef.current);
    timerRef.current = setTimeout(() => {
      setShowControls(false);
    }, 2000);
  };

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    video.addEventListener("mousemove", handleMouseMove);
    video.addEventListener("touchstart", handleMouseMove);

    return () => {
      video.removeEventListener("mousemove", handleMouseMove);
      video.removeEventListener("touchstart", handleMouseMove);
    };
  }, []);

  const filteredCctvs = cctvs.filter((cctv) =>
    cctv.name.toLowerCase().includes(search.toLowerCase())
  );

  useEffect(() => {
    if (!selectedCctv?.ip || !videoRef.current) return;

    const video = videoRef.current;

    if (Hls.isSupported()) {
      const hls = new Hls();
      hls.loadSource(selectedCctv.ip);
      hls.attachMedia(video);
      return () => hls.destroy();
    } else if (video.canPlayType("application/vnd.apple.mpegurl")) {
      video.src = selectedCctv.ip;
    }
  }, [selectedCctv]);

  return (
    <div className="min-h-screen bg-white">
      {/* Navbar */}
      <nav className="flex items-center justify-between px-6 py-4 shadow-md">
        <h1 className="text-2xl font-bold">Palongaan.go.id</h1>
        <div className="space-x-6 md:flex">
          <Link href="/">Beranda</Link>
        </div>
      </nav>

      {/* Main Content */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 p-6">
        {/* Left Section - Livestream */}
        <div className="md:col-span-2 bg-[#2E3B32] p-4 rounded-2xl">
          <h2 className="text-white font-bold mb-2">Livestream</h2>
          <div className="relative aspect-video bg-black rounded-lg overflow-hidden mb-4">
            <video
              ref={videoRef}
              className="w-full h-full object-cover custom-video"
              controls={showControls}
              preload="true"
              autoPlay
              muted
            />

            {/* 🔴 LIVE Label */}
            <div className="absolute top-2 right-2 text-white text-xs font-bold px-2 py-1 rounded-md shadow-md">
              🔴 LIVE
            </div>
          </div>

          <div className="text-white mb-4">
            <h3 className="font-bold">{selectedCctv.name}</h3>
            <p>{selectedCctv.address}</p>
          </div>

          <div className="bg-[#546654] p-4 rounded-xl text-white text-sm">
            <h4 className="font-bold mb-2">Detail CCTV:</h4>
            <p>
              Perangkat: {selectedCctv.device} <br />
            </p>
          </div>
        </div>

        {/* Right Section - List */}
        <div className="md:col-span-1 bg-[#35443B] p-4 rounded-2xl">
          <div className="relative mb-4">
            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full p-3 pl-10 rounded-lg bg-[#3C4C45] border border-[#6e816e] text-[#fafafa] placeholder:text-[#fafafa] focus:outline-none focus:ring-0 focus:border-[#90A896] focus:placeholder-transparent"
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
                    ? "bg-[#4A5C42]"
                    : "hover:bg-[#546654]"
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
