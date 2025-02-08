import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function FAQs() {
  return (
    <div className="container mx-auto px-4 py-24">
      <h1 className="mb-8 text-4xl font-bold">Frequently Asked Questions</h1>
      
      <div className="mx-auto max-w-3xl">
        <Accordion type="single" collapsible>
          <AccordionItem value="item-1">
            <AccordionTrigger>How do I book an appointment?</AccordionTrigger>
            <AccordionContent>
              You can book an appointment through our online booking system or by calling our service center.
            </AccordionContent>
          </AccordionItem>
          {/* Add more FAQ items */}
        </Accordion>
      </div>
    </div>
  );
} 