import { Card } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function PatientEducation() {
  return (
    <div className="container mx-auto px-4 py-24">
      <h1 className="mb-8 text-4xl font-bold">Patient Education</h1>
      
      <Tabs defaultValue="videos">
        <TabsList className="mb-8">
          <TabsTrigger value="videos">Video Resources</TabsTrigger>
          <TabsTrigger value="articles">Articles</TabsTrigger>
          <TabsTrigger value="guides">Patient Guides</TabsTrigger>
        </TabsList>
        
        <TabsContent value="videos">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <Card className="p-6">
              <h3 className="mb-2 text-xl font-semibold">Coming Soon</h3>
              <p className="text-muted-foreground">Educational videos will appear here</p>
            </Card>
          </div>
        </TabsContent>
        
        {/* Add other tab contents */}
      </Tabs>
    </div>
  );
} 