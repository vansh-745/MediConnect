import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Send } from "lucide-react";

export default function AIAssistant() {
  return (
    <div className="container mx-auto px-4 py-24">
      <h1 className="mb-8 text-4xl font-bold">AI Health Assistant</h1>
      
      <div className="mx-auto max-w-3xl">
        <div className="mb-4 h-[400px] rounded-lg border p-4">
          {/* Chat messages will appear here */}
          <div className="text-center text-muted-foreground">
            Start a conversation with our AI Health Assistant
          </div>
        </div>
        
        <div className="flex gap-4">
          <Textarea placeholder="Type your health-related question..." className="flex-1" />
          <Button>
            <Send className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </div>
  );
} 