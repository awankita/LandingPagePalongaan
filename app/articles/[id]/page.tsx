/* eslint-disable @typescript-eslint/no-explicit-any */
import Image from "next/image";
import { BlocksRenderer } from "@strapi/blocks-react-renderer";
import Link from "next/link";

// --- Type Definitions ---
interface StrapiMedia {
  url: string;
}

interface StrapiArticle {
  documentId: string;
  taglabel?: string;
  writer?: string;
  title?: string;
  description?: string;
  date?: string;
  readtime?: string;
  cover?: StrapiMedia;
  medias?: StrapiMedia[];
  content?: any; // pakai 'any' di sini karena BlocksRenderer punya struktur kompleks
}

interface StrapiResponse<T> {
  data: T;
}

interface Article {
  id: string;
  tagLabel: string;
  writer: string;
  title: string;
  description: string;
  date: string;
  readTime: string;
  imageSrc: string;
  content: any;
  medias: string[];
}

// --- Helper Function ---
const getFullUrl = (url: string): string => {
  return url.startsWith("http")
    ? url
    : `${process.env.NEXT_PUBLIC_STRAPI_URL}${url}`;
};

// --- Page Component ---
export default async function ArticleDetail({
  params,
}: {
  params: { id: string };
}) {
  const { id } = params;

  const res = await fetch(
    `${process.env.NEXT_PUBLIC_STRAPI_URL}/api/articles/${id}?populate=*`,
    { cache: "no-store" }
  );

  if (!res.ok) {
    throw new Error(`Failed to fetch article: ${res.statusText}`);
  }

  const data: StrapiResponse<StrapiArticle> = await res.json();
  const item = data.data;

  const article: Article = {
    id: item.documentId,
    tagLabel: item.taglabel ?? "",
    writer: item.writer ?? "",
    title: item.title ?? "",
    description: item.description ?? "",
    date: item.date ?? "",
    readTime: item.readtime ?? "",
    imageSrc: item.cover?.url ? getFullUrl(item.cover.url) : "/loading.png",
    medias: item.medias?.map((media) => getFullUrl(media.url)) ?? [],
    content: item.content ?? [],
  };

  return (
    <>
      <nav className="flex items-center justify-between px-6 py-4 shadow-md">
        <h1 className="text-2xl font-bold">Palongaan.go.id</h1>
        <div className="space-x-6 md:flex">
          <Link href="/">Beranda</Link>
        </div>
      </nav>
      <div className="max-w-4xl mx-auto p-6 mt-16">
        <Image
          src={article.imageSrc}
          alt={article.title}
          className="w-full h-64 object-cover rounded mb-6"
          width={800}
          height={400}
        />
        <h1 className="text-4xl font-bold mb-4">{article.title}</h1>
        <p className="text-gray-500 mb-4">{article.date}</p>
        <div className="prose max-w-none whitespace-pre-line text-justify">
          <BlocksRenderer content={article.content} />
        </div>
        <div className="mt-8">
          <h2 className="text-2xl text-center font-semibold mb-4">
            Dokumentasi
          </h2>
          <div className="grid grid-cols-2 gap-4">
            {article.medias.map((media, index) => (
              <Image
                key={index}
                src={media}
                alt={`Media ${index + 1}`}
                className="w-full h-48 object-cover rounded"
                width={400}
                height={200}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
