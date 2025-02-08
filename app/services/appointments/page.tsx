import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { Card } from "@/components/ui/card";

export default function Appointments() {
  return (
    <div className="container mx-auto px-4 py-24">
      <h1 className="mb-8 text-4xl font-bold">Book Appointment</h1>
      
      <div className="grid gap-8 lg:grid-cols-2">
        <Card className="p-6">
          <h2 className="mb-4 text-xl font-semibold">Select Date & Time</h2>
          <Calendar mode="single" className="mb-4" />
          <Button className="w-full">Continue Booking</Button>
        </Card>
        
        <Card className="p-6">
          <h2 className="mb-4 text-xl font-semibold">Available Doctors</h2>
          <div className="text-muted-foreground">
            Please select a date to see available doctors
          </div>
        </Card>
      </div>
    </div>
  );
} 