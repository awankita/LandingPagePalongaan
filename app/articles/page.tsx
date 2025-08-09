"use client"
import { useEffect, useState } from "react";
import ArticlePreview from "../components/agenda/ArticlePreview";
import Header from "@/app/components/layout/Header";

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
    fetch(
      "https://maycleansitepu.github.io/articlesPalongaan/articles.json" +
        `?t=${Date.now()}` 
    )
      .then((res) => res.json())
      .then((data) => setArticles(data))
      .catch((err) => console.error("Error fetching articles:", err));
  }, []);

  return (
    <div className="max-w-6xl mx-auto p-6 mt-20">
    <Header />
    <h1 className="text-3xl font-bold text-center mb-20">Articles</h1>
      <div className="grid gap-6">
        {articles.slice(0, visibleCount).map(article => (
          <ArticlePreview key={article.id} article={article} />
        ))}
      </div>

      {visibleCount < articles.length && (
        <div className="mt-6 text-center">
          <button
            onClick={() => setVisibleCount(articles.length)}
            className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
          >
            View More
          </button>
        </div>
      )}
    </div>
  );
}

