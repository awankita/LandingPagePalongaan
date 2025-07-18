"use client"

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";

const agendaCards = [
    { id: 1, img: "agendaPic.png" },
    { id: 2, img: "agendaPic.png" },
    { id: 3, img: "agendaPic.png" },
];

export default function AgendaSection() {
    return (
        <>
            <div id="agenda" className="text-center mt-10 md:mt-20 font-bold text-2xl md:text-4xl text-[#252524]">
                <h1>Agenda Desa</h1>
            </div>
            <div className="text-center mx-4 md:mx-60 mt-3 md:mt-5 mb-6 md:mb-10 font-medium text-base md:text-xl text-[#585858]">
                <h4>Agenda Acara Kegiatan Desa Palongaan</h4>
            </div>

            <div className="px-2 md:px-0 mx-5 max-w-[100vw]">
                <Swiper
                    spaceBetween={24}
                    slidesPerView={1}
                    pagination={{ clickable: true }}
                    modules={[Pagination]}
                    breakpoints={{
                        768: {
                            slidesPerView: 2,
                            spaceBetween: 32,
                        },
                        1024: {
                            slidesPerView: 3,
                            spaceBetween: 40,
                        },
                    }}
                >
                    {agendaCards.map((card) => (
                        <SwiperSlide key={card.id}>
                            <div className="w-full h-[250px] md:h-[350px] bg-gray-100 rounded-lg shadow-md flex-shrink-0">
                                <div
                                    className="bg-cover bg-center h-[250px] md:h-[350px] rounded-xl shadow-lg flex flex-col items-center justify-center text-white font-medium p-6"
                                    style={{ backgroundImage: `url('${card.img}')` }}
                                ></div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </>
    );
}