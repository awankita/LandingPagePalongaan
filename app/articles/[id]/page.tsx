import Image from "next/image";
import Link from "next/link";

interface Article {
  id: number;
  tagLabel: string;
  writer: string;
  title: string;
  description: string;
  content: string; // Markdown yang sudah di-escape di JSON
  date: string;
  readTime: string;
  imageSrc: string;
}

export default async function ArticleDetail({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params; // ✅ wajib di-await di Next.js 15

  const res = await fetch(
    "https://maycleansitepu.github.io/articlesPalongaan/articles.json",
    { cache: "no-store" } // mirip getServerSideProps
  );

  if (!res.ok) {
    throw new Error(`Failed to fetch articles: ${res.statusText}`);
  }

  const data: Article[] = await res.json();
  const article = data.find((a) => a.id === Number(id));

  if (!article) {
    return <p className="p-6">Article not found.</p>;
  }

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

      {/* Render Markdown */}
      <div className="prose max-w-none">
        {article.content}
      </div>
    </div>
    </>
  );
}
