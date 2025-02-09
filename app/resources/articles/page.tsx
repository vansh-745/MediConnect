import { Card } from "@/components/ui/card";
import Link from "next/link";

// You could move this to a separate data file later
const articles = [
  {
    id: 1,
    title: "Understanding Mental Health",
    excerpt: "Learn about the importance of mental health and ways to maintain it.",
    category: "Mental Health",
    readTime: "5 min read",
  },
  {
    id: 2,
    title: "Nutrition Basics",
    excerpt: "Essential nutrition guidelines for a healthy lifestyle.",
    category: "Nutrition",
    readTime: "4 min read",
  },
  {
    id: 3,
    title: "Exercise Fundamentals",
    excerpt: "Get started with basic exercise routines for better health.",
    category: "Fitness",
    readTime: "6 min read",
  },
  {
    id: 4,
    title: "Sleep and Recovery",
    excerpt: "Why quality sleep is crucial for your overall health.",
    category: "Wellness",
    readTime: "3 min read",
  },
  {
    id: 5,
    title: "Stress Management",
    excerpt: "Effective techniques for managing daily stress.",
    category: "Mental Health",
    readTime: "4 min read",
  },
  {
    id: 6,
    title: "Healthy Aging",
    excerpt: "Tips and advice for maintaining health as you age.",
    category: "Wellness",
    readTime: "5 min read",
  },
];

export default function HealthArticles() {
  return (
    <div className="container mx-auto px-4 py-24">
      <h1 className="mb-8 text-4xl font-bold">Health Articles</h1>
      
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {articles.map((article) => (
          <Link href={`/resources/articles/${article.id}`} key={article.id}>
            <Card className="p-6 transition-transform hover:scale-[1.02]">
              <div className="mb-4">
                <span className="rounded-full bg-blue-100 px-3 py-1 text-sm text-blue-800">
                  {article.category}
                </span>
              </div>
              <h3 className="mb-2 text-xl font-semibold">{article.title}</h3>
              <p className="mb-4 text-muted-foreground">{article.excerpt}</p>
              <div className="flex items-center text-sm text-gray-500">
                <span>{article.readTime}</span>
              </div>
            </Card>
          </Link>
        ))}
      </div>
    </div>
  );
} 