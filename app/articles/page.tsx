"use client"
import { useEffect, useState } from "react";
import ArticlePreview from "../components/agenda/ArticlePreview";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";

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

export default function ArticlesPage() {
  const [articles, setArticles] = useState<Article[]>([]);
  const [visibleCount, setVisibleCount] = useState(3);

  useEffect(() => {
    fetch("http://localhost:1337/api/articles?populate=*")
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
      <nav className="flex items-center justify-between px-6 py-4 shadow-md">
        <h1 className="text-2xl font-bold">Palongaan.go.id</h1>
        <div className="space-x-6 md:flex">
          <Link href="/">Beranda</Link>
        </div>
      </nav>
      <div className="max-w-full mx-auto p-6">
        <Badge className="bg-amber-200 text-amber-900 text-3xl font-bold flex mx-auto mb-20">Articles</Badge>
        <div className="grid gap-6">
          {articles.slice(0, visibleCount).map(article => (
            <ArticlePreview key={article.id} article={article} />
          ))}
        </div>

        {visibleCount < articles.length && (
          <div className="mt-6 text-center">
            <button
              onClick={() => setVisibleCount(articles.length)}
              className="mx-auto flex items-center justify-center mt-10 px-6 py-3 font-semibold text-white rounded-[24px] transition duration-300 bg-gradient-to-r from-[#559334] to-[#47820C] hover:brightness-125"
            >
              View More
            </button>
          </div>
        )}
      </div>
    </>
  );
}

