"use client";

import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import ArticlePreview from "./ArticlePreview";
import Link from "next/link";

const agendaCards = [
  { id: 1, img: "agendaPic.png" },
  { id: 2, img: "agendaPic.png" },
  { id: 3, img: "agendaPic.png" },
];

interface Article {
  id: string;
  tagLabel: string;
  writer: string;
  title: string;
  description: string;
  date: string;
  readTime: string;
  imageSrc: string;
}

export default function AgendaSection() {
  const [articles, setArticles] = useState<Article[]>([]);

  useEffect(() => {
    fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/articles?populate=*&sort=date:desc&pagination[limit]=3`)
      .then((res) => res.json())
      .then((data) => {
        if (data && data.data) {
          const mappedData: Article[] = data.data.map((item: any) => ({
            id: String(item.documentId),
            tagLabel: item.taglabel || "",
            writer: item.writer || "",
            title: item.title || "",
            description:
              item.content?.[0]?.children?.map((c: any) => c.text).join(" ") ||
              "",
            date: item.date || "",
            readTime: item.readtime || "",
            imageSrc:
              item.cover?.url
                ? `http://localhost:1337${item.cover.url}`
                : "/loading.png",
          }));
          setArticles(mappedData);
        }
      })
      .catch((err) => console.error("Error fetching articles:", err));
  }, []);

  return (
    <>
      <div
        id="agenda"
        className="text-center mt-10 md:mt-20 font-bold text-2xl md:text-4xl text-[#252524]"
      >
        <h1>Agenda Desa</h1>
      </div>
      <div className="text-center mx-4 md:mx-60 mt-3 md:mt-5 mb-6 md:mb-10 font-medium text-base md:text-xl text-[#585858]">
        <h4>Agenda Acara Kegiatan Desa Palongaan</h4>
      </div>

      <div className="px-2 md:px-0 mx-5 max-w-[100vw] mb-20">
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

      {articles.map((article) => (
        <ArticlePreview key={article.id} article={article} />
      ))}

      <div className="text-center mt-6">
        <Link
          href="/articles"
          className="w-[250px] h-[60px] mx-auto flex items-center justify-center mt-10 px-6 py-3 font-semibold text-white rounded-[24px] transition duration-300 bg-gradient-to-r from-[#559334] to-[#47820C] hover:brightness-125"
        >
          View More
        </Link>
      </div>
    </>
  );
}
