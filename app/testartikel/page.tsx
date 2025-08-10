import { BlocksRenderer } from "@strapi/blocks-react-renderer";

interface BlogData {
  documentId: string;
  Title: string;
  content: any;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
}

const fetchDataByDocumentId = async (documentId: string) => {
  const req = await fetch(
    `http://localhost:1337/api/articles`,
    { cache: "no-store" },
  );

  if (!req.ok) return null;

  const res = await req.json();
  return res.data[0] as BlogData; 
};

export default async function ArtikelByDocumentId({
  params,
}: {
  params: { documentId: string };
}) {
  const blog = await fetchDataByDocumentId(params.documentId);

  if (!blog) {
    return <div className="text-center mt-10">Artikel tidak ditemukan</div>;
  }

  return (
    <div className="prose lg:prose-xl mx-auto my-10">
      <article style={{ marginBottom: "2rem" }}>
        <h2>{blog.Title}</h2>
        <BlocksRenderer content={blog.content} />
      </article>
    </div>
  );
}
