"use client";

import Image from "next/image";

export default function HeroSection() {
    return (
        <>
          <div className='relative overflow-hidden h-[85vh] border-red-500 border-2 rounded-[49px] mt-20 mx-5 z-0'>
              <Image
                  src="/heroBanner.png"
                  alt="Hero Banner"
                  layout="fill"
                  objectFit="cover"
              />
              <div className="mx-20 absolute top-2/7 z-10">
                  <h1 className="border-red-500 border-2 text-9xl md:text-8xl font-semibold text-white drop-shadow-lg">
                      Selamat Datang
                  </h1>
                  <p className="border-red-500 border-2 mt-4 text-lg md:text-3xl text-white drop-shadow-lg">
                      Portal Informasi Desa Palongaan
                  </p>

                  <button
                    className="mt-8 px-6 py-3 bg-[#C8A445] font-semibold text-white rounded-[24px] hover:bg-[#806725] transition duration-300"
                    style={{ 
                        height: "60px",
                        width: "190px",
                    }}
                  >
                    Agenda Desa
                  </button>
              </div>
              
          </div>

        </>
    );
}
