"use client";

import Image from "next/image";

export default function HeroSection() {
  return (
    <div className="relative overflow-hidden h-[30vh] md:h-[85vh] rounded-[24px] md:rounded-[49px] mt-20 md:mt-20 mx-2 md:mx-5 z-0">
      <Image
        src="/heroBanner.png"
        alt="Hero Banner"
        fill
        className="object-cover"
        priority
      />
      <div className="absolute inset-0 flex flex-col justify-center items-start px-4 md:px-20 z-10">
        <h1 className="text-3xl sm:text-5xl md:text-8xl font-semibold text-white drop-shadow-lg">
          Selamat Datang
        </h1>
        <p className="mt-2 text-[15px] sm:text-xl md:text-3xl text-white drop-shadow-lg">
          Portal Informasi Desa Palongaan
        </p>
        <button className="mt-6 px-4 py-2 md:px-6 md:py-3 h-[30px] w-[100px] md:h-[60px] md:w-[190px] bg-[#C8A445] font-semibold text-white rounded-[12px] md:rounded-[24px] hover:bg-[#806725] transition duration-300 flex items-center justify-center">
          <span className="md:text-base text-[10px]">Agenda Desa</span>
        </button>
      </div>
    </div>
  );
}
