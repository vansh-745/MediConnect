import { articleData } from "../data";
import { notFound } from "next/navigation";
import { Calendar, Clock, User, Share2, Bookmark, ThumbsUp } from "lucide-react";
import Image from "next/image";
import { Button } from "@/components/ui/button";

const categoryColors: Record<string, { bg: string; text: string }> = {
  "Mental Health": { bg: "bg-purple-100 dark:bg-purple-900/30", text: "text-purple-700 dark:text-purple-300" },
  "Nutrition": { bg: "bg-green-100 dark:bg-green-900/30", text: "text-green-700 dark:text-green-300" },
  "Fitness": { bg: "bg-blue-100 dark:bg-blue-900/30", text: "text-blue-700 dark:text-blue-300" },
  "Wellness": { bg: "bg-orange-100 dark:bg-orange-900/30", text: "text-orange-700 dark:text-orange-300" },
};

interface Article {
  id: string;
  title?: string;
  content?: string;
  author?: string;
  publishedDate?: string;
  category?: string;
  imageUrl?: string;
}

async function getArticleById(id: string): Promise<Article> {
  const article = articleData[Number(id) as keyof typeof articleData];
  
  if (!article) {
    notFound();
  }
  
  return {
    id: id,
    title: article.title,
    content: article.content,
    author: article.author,
    publishedDate: article.publishDate,
    category: article.category,
    imageUrl: article.imageUrl
  };
}

interface ArticlePageProps {
  params: { id: string };
}

export default async function ArticlePage({ params }: ArticlePageProps) {
  const { id } = params;
  const article = await getArticleById(id);

  if (!article) {
    notFound();
  }

  const categoryColor =
    categoryColors[article.category || ""] || {
      bg: "bg-gray-100 dark:bg-gray-800",
      text: "text-gray-700 dark:text-gray-300",
    };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <div className="bg-gradient-to-b from-primary/5 via-primary/2 to-background pt-24 pb-12">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="space-y-6">
              <span
                className={`inline-flex items-center px-4 py-1.5 rounded-full text-sm font-medium ${categoryColor.bg} ${categoryColor.text}`}
              >
                {article.category}
              </span>

              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-gray-100 leading-tight">
                {article.title}
              </h1>

              <div className="flex flex-wrap items-center gap-6 text-gray-600 dark:text-gray-400">
                <div className="flex items-center gap-2">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                    <User className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-medium text-foreground">
                      {article.author}
                    </p>
                    <p className="text-sm">Medical Writer</p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <Calendar className="w-4 h-4" />
                  <span>{article.publishedDate}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        <article className="max-w-4xl mx-auto">
          {article.imageUrl && (
            <div className="mb-10 rounded-2xl overflow-hidden shadow-xl">
              <Image
                src={article.imageUrl}
                alt={article.title || ""}
                width={1200}
                height={600}
                className="w-full h-[500px] object-cover"
              />
            </div>
          )}

          <div className="prose prose-lg dark:prose-invert max-w-none">
            <div className="space-y-6">
              {article.content?.split("\n\n").map((paragraph, index) => (
                <p
                  key={index}
                  className="text-gray-700 dark:text-gray-300 leading-relaxed"
                >
                  {paragraph}
                </p>
              ))}
            </div>
          </div>

          <div className="flex justify-between items-center my-8 p-4 bg-white dark:bg-gray-800 rounded-lg shadow-sm">
            <div className="flex gap-4">
              <Button variant="ghost" size="sm" className="flex items-center gap-2">
                <ThumbsUp className="w-4 h-4" />
                Like
              </Button>
              <Button variant="ghost" size="sm" className="flex items-center gap-2">
                <Bookmark className="w-4 h-4" />
                Save
              </Button>
            </div>
            <Button variant="ghost" size="sm" className="flex items-center gap-2">
              <Share2 className="w-4 h-4" />
              Share
            </Button>
          </div>
        </article>
      </div>
    </div>
  );
}
