import React from "react";
import Image from "next/image";
import { Dot, BadgeCheckIcon } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";

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

export default function ArticlePreview({ article }: { article: Article }) {
  if (!article) return null;

  const {
    id,
    tagLabel,
    writer,
    title,
    description,
    date,
    readTime,
    imageSrc,
  } = article;

  return (
    <div className="px-10">
      <div className="border-b border-[#adadad] w-full sm:w-11/12 lg:w-[75%] mx-auto flex flex-col md:flex-row justify-between gap-4 pb-5 mb-10 ">
        {/* KIRI */}
        <div className="flex flex-col justify-between gap-4 md:max-w-[75%] order-2 md:order-1">
          <div className="flex flex-wrap gap-2 items-center">
            <Badge className="bg-green-200 text-green-900">
              <BadgeCheckIcon className="mr-1 h-4 w-4" />
              {tagLabel}
            </Badge>
            <span className="text-sm">by</span>
            <span className="font-medium text-foreground">{writer}</span>
          </div>

          <Link href={`/articles/${id}`} className="cursor-pointer">
            <div className="font-bold tracking-tight text-xl sm:text-2xl md:text-[34px] leading-tight hover:underline underline-offset-2 line-clamp-2">
              {title}
            </div>
          </Link>

          <div className="text-[#585858] text-muted-foreground line-clamp-2">
            {description}
          </div>

          <div className="flex flex-wrap items-center gap-3 text-sm text-muted-foreground">
            <span>{date}</span>
            <div className="flex items-center gap-1.5">
              <Dot className="h-4 w-4 -mx-1" />
              <span>{readTime}</span>
            </div>
          </div>
        </div>

        {/* KANAN */}
        <div className="flex items-center justify-center md:justify-end order-1 md:order-2">
          <Image
            className="rounded-lg"
            src={imageSrc}
            alt="Article preview image"
            loading="lazy"
            width={300}
            height={150}
          />
        </div>
      </div>
    </div>
  );
}
