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
  title: string;
  content: string;
  author: string;
  publishedDate: string;
}

interface ArticleParams {
  params: {
    id: string;
  };
}

async function getArticleById(id: string): Promise<Article> {
  // Replace with your actual data fetching logic
  return {
    id,
    title: "Sample Article",
    content: "This is the article content...",
    author: "John Doe",
    publishedDate: new Date().toISOString(),
  };
}

export default async function ArticlePage({ params }: ArticleParams) {
  const { id } = params;
  const article = await getArticleById(id);

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl font-bold mb-4">{article.title}</h1>
        <div className="flex items-center text-gray-600 dark:text-gray-400 mb-6">
          <span className="mr-4">By {article.author}</span>
          <span>{new Date(article.publishedDate).toLocaleDateString()}</span>
        </div>
        <div className="prose dark:prose-invert max-w-none">
          {article.content}
        </div>
      </div>
    </div>
  );
} 