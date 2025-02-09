"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Clock, MapPin, Star, User } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";
import { useRouter } from "next/navigation";

// Dummy data for doctors
const doctors = [
  {
    id: 1,
    name: "Dr. Amrendra kumar",
    specialty: "Cardiologist",
    rating: 4.8,
    experience: "15 years",
    location: "synergy hospital",
    availableSlots: [
      "09:00 AM",
      "10:00 AM",
      "11:30 AM",
      "02:00 PM",
      "03:30 PM",
    ],
    image: "https://d35oenyzp35321.cloudfront.net/Dr_Amrendra_a20548063a.png",
  },
  {
    id: 2,
    name: "Dr. Michael Chen",
    specialty: "Neurologist",
    rating: 4.9,
    experience: "12 years",
    location: "Medical Center, Floor 2",
    availableSlots: [
      "09:30 AM",
      "11:00 AM",
      "02:30 PM",
      "04:00 PM",
    ],
    image: "https://randomuser.me/api/portraits/men/32.jpg",
  },
  {
    id: 3,
    name: "Dr. Emily Parker",
    specialty: "Pediatrician",
    rating: 4.7,
    experience: "10 years",
    location: "Children's Wing, Floor 1",
    availableSlots: [
      "10:30 AM",
      "01:00 PM",
      "03:00 PM",
      "04:30 PM",
    ],
    image: "https://randomuser.me/api/portraits/women/45.jpg",
  },
];

export default function Appointments() {
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(undefined);
  const [selectedDoctor, setSelectedDoctor] = useState<number | null>(null);
  const [selectedTime, setSelectedTime] = useState<string | null>(null);
  const { toast } = useToast();
  const router = useRouter();

  const handleConfirmBooking = () => {
    // Show success toast
    toast({
      title: "Appointment Scheduled!",
      description: `Your appointment with ${doctors.find(d => d.id === selectedDoctor)?.name} is confirmed for ${selectedDate?.toLocaleDateString('en-US', {
        weekday: 'long',
        month: 'long',
        day: 'numeric'
      })} at ${selectedTime}.`,
      variant: "default",
      duration: 5000,
    });

    // Redirect to dashboard after a short delay
    setTimeout(() => {
      router.push('/auth/dashboard/patient');
    }, 2000);
  };

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold mb-2">Book Appointment</h1>
        <p className="text-muted-foreground mb-8">Schedule your visit with our healthcare professionals</p>
        
        <div className="grid gap-8 lg:grid-cols-2">
          {/* Left Column - Calendar & Time Selection */}
          <div className="space-y-6">
            <Card>
              <CardHeader>
              
              </CardHeader>
              <CardContent>
                <Calendar
                  mode="single"
                  selected={selectedDate}
                  onSelect={setSelectedDate}
                  className="rounded-md border"
                  disabled={(date) => date < new Date() || date > new Date(new Date().setMonth(new Date().getMonth() + 2))}
                />
              </CardContent>
            </Card>

            {selectedDate && selectedDoctor && (
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Clock className="w-5 h-5 text-primary" />
                    Available Time Slots
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-3 gap-3">
                    {doctors.find(d => d.id === selectedDoctor)?.availableSlots.map((slot) => (
                      <Button
                        key={slot}
                        variant={selectedTime === slot ? "default" : "outline"}
                        className="w-full"
                        onClick={() => setSelectedTime(slot)}
                      >
                        {slot}
                      </Button>
                    ))}
                  </div>
                </CardContent>
              </Card>
            )}
          </div>

          {/* Right Column - Doctor Selection */}
          <div>
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <User className="w-5 h-5 text-primary" />
                  Select Doctor
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {doctors.map((doctor) => (
                  <div
                    key={doctor.id}
                    className={`p-4 rounded-lg border-2 transition-all cursor-pointer ${
                      selectedDoctor === doctor.id
                        ? "border-primary bg-primary/5"
                        : "border-transparent hover:border-primary/20"
                    }`}
                    onClick={() => setSelectedDoctor(doctor.id)}
                  >
                    <div className="flex items-center gap-4">
                      <img
                        src={doctor.image}
                        alt={doctor.name}
                        className="w-16 h-16 rounded-full object-cover"
                      />
                      <div className="flex-1">
                        <h3 className="font-semibold">{doctor.name}</h3>
                        <p className="text-sm text-muted-foreground">{doctor.specialty}</p>
                        <div className="flex items-center gap-4 mt-2">
                          <Badge variant="secondary" className="flex items-center gap-1">
                            <Star className="w-3 h-3 fill-current" /> {doctor.rating}
                          </Badge>
                          <span className="text-sm text-muted-foreground">
                            {doctor.experience}
                          </span>
                        </div>
                        <div className="flex items-center gap-1 mt-2 text-sm text-muted-foreground">
                          <MapPin className="w-4 h-4" />
                          {doctor.location}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Booking Summary & Action */}
        {selectedDate && selectedDoctor && selectedTime && (
          <Card className="mt-8">
            <CardHeader>
              <CardTitle>Booking Summary</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="space-y-1">
                  <p className="text-sm text-muted-foreground">Date</p>
                  <p className="font-medium">
                    {selectedDate.toLocaleDateString('en-US', {
                      weekday: 'long',
                      year: 'numeric',
                      month: 'long',
                      day: 'numeric'
                    })}
                  </p>
                </div>
                <div className="space-y-1">
                  <p className="text-sm text-muted-foreground">Time</p>
                  <p className="font-medium">{selectedTime}</p>
                </div>
                <div className="space-y-1">
                  <p className="text-sm text-muted-foreground">Doctor</p>
                  <p className="font-medium">
                    {doctors.find(d => d.id === selectedDoctor)?.name}
                  </p>
                </div>
              </div>
              <Button 
                className="w-full mt-6" 
                size="lg"
                onClick={handleConfirmBooking}
              >
                Confirm Booking
              </Button>
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  );
} 