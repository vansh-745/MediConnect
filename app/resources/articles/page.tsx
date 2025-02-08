import { Card } from "@/components/ui/card";

export default function HealthArticles() {
  return (
    <div className="container mx-auto px-4 py-24">
      <h1 className="mb-8 text-4xl font-bold">Health Articles</h1>
      
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        <Card className="p-6">
          <h3 className="mb-2 text-xl font-semibold">Coming Soon</h3>
          <p className="text-muted-foreground">Health articles will appear here</p>
        </Card>
      </div>
    </div>
  );
} 