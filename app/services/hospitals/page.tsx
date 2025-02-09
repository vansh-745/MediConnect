"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search, MapPin, Users, BedDouble, Clock, Phone } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { useState } from "react";

const hospitals = [
  {
    id: 1,
    name: "Coronation Hospital",
    distance: "0.8 miles",
    address: "Dalanwala, Dehradun",
    emergency: "Open 24/7",
    waitTime: "15 mins",
    pincode: "248001",
    phone: "(555) 123-4567",
    occupancy: 75,
    availableBeds: 45,
    totalBeds: 200,
    availableDoctors: 20,
    totalDoctors: 35,
    emergencyWaitTime: "15 mins",
    specialties: ["Emergency Care", "Cardiology", "Orthopedics", "General Surgery"],
    status: "busy",
  },
  {
    id: 2,
    name: "Doon Valley Hospital",
    pincode: "248001",
    distance: "1.2 miles",
    address: "PremNagar Dehradun",
    emergency: "Open 24/7",
    waitTime: "5 mins",
    phone: "(555) 234-5678",
    occupancy: 60,
    availableBeds: 80,
    totalBeds: 250,
    availableDoctors: 25,
    totalDoctors: 40,
    emergencyWaitTime: "5 mins",
    specialties: ["Emergency Care", "Pediatrics", "Neurology", "Oncology"],
    status: "available",
  },
  {
    id: 3,
    name: "Fortis Escorts Heart Institute and Research Centre",
    pincode: "248001",
    distance: "2.5 miles",
    address: "kandloi",
    emergency: "Open 24/7",
    waitTime: "45 mins",
    phone: "(555) 345-6789",
    occupancy: 85,
    availableBeds: 30,
    totalBeds: 300,
    availableDoctors: 18,
    totalDoctors: 45,
    emergencyWaitTime: "45 mins",
    specialties: ["Cardiology", "Cardiac Surgery", "Emergency Care", "Internal Medicine"],
    status: "very-busy",
  },
  {
    id: 4,
    name: "Dehradun Medical College and Hospital",
    pincode: "248001",
    distance: "3.0 miles",
    address: "Roorkee Road, Dehradun",
    emergency: "Open 24/7",
    waitTime: "3 mins",
    phone: "(555) 456-7890",
    occupancy: 50,
    availableBeds: 120,
    totalBeds: 400,
    availableDoctors: 40,
    totalDoctors: 60,
    emergencyWaitTime: "3 mins",
    specialties: ["Emergency Care", "Trauma Care", "Neurosurgery", "Orthopedics", "Psychiatry"],
    status: "available",
  },
  {
    id: 5,
    name: "Millitary Hospital",
    pincode: "248003",
    distance: "3.0 miles",
    address: "Garhi Cantonment, Dehradun",
    emergency: "Open 24/7",
    waitTime: "11 mins",
    phone: "(555) 567-8901",
    occupancy: 70,
    availableBeds: 60,
    totalBeds: 250,
    availableDoctors: 22,
    totalDoctors: 38,
    emergencyWaitTime: "11 mins",
    specialties: ["Emergency Care", "Trauma Care", "General Surgery", "Rehabilitation"],
    status: "busy",
  },
  {
    id: 6,
    name: "nethrajivan Hospital",
    pincode: "248005",
    distance: "3.0 miles",
    address: "Bhagwanpur, Dehradun",
    emergency: "Open 24/7",
    waitTime: "26 mins",
    phone: "(555) 678-9012",
    occupancy: 80,
    availableBeds: 25,
    totalBeds: 150,
    availableDoctors: 15,
    totalDoctors: 25,
    emergencyWaitTime: "26 mins",
    specialties: ["Emergency Care", "Ophthalmology", "General Medicine"],
    status: "busy",
  },
  {
    id: 7,
    name: "Dr K.K.B.M Subharti Hospital",
    pincode: "248007",
    distance: "1.0 miles",
    address: "Kandloi, Dehradun",
    emergency: "Open 24/7",
    waitTime: "10 mins",
    phone: "(555) 789-0123",
    occupancy: 65,
    availableBeds: 70,
    totalBeds: 220,
    availableDoctors: 28,
    totalDoctors: 42,
    emergencyWaitTime: "10 mins",
    specialties: ["Emergency Care", "Pediatrics", "Obstetrics", "Gynecology"],
    status: "busy",
  },
  {
    id: 8,
    name: "synergy hospital",
    pincode: "248001",
    distance: "5.0 miles",
    address: "Ballupur chowk, Dehradun",
    emergency: "Open 24/7",
    waitTime: "46 mins",
    phone: "(555) 890-1234",
    occupancy: 95,
    availableBeds: 10,
    totalBeds: 180,
    availableDoctors: 12,
    totalDoctors: 30,
    emergencyWaitTime: "46 mins",
    specialties: ["Emergency Care", "Internal Medicine", "Critical Care", "Surgery"],
    status: "very-busy",
  },
];

const getStatusColor = (status: string) => {
  switch (status) {
    case "available":
      return "bg-green-500/10 text-green-500";
    case "busy":
      return "bg-yellow-500/10 text-yellow-500";
    case "very-busy":
      return "bg-red-500/10 text-red-500";
    default:
      return "bg-gray-500/10 text-gray-500";
  }
};

const getStatusText = (status: string) => {
  switch (status) {
    case "available":
      return "Available";
    case "busy":
      return "Busy";
    case "very-busy":
      return "Very Busy";
    default:
      return "Unknown";
  }
};

export default function Hospitals() {
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredHospitals, setFilteredHospitals] = useState(hospitals);

  const handleSearch = () => {
    if (!searchQuery.trim()) {
      setFilteredHospitals(hospitals);
      return;
    }

    const filtered = hospitals.filter((hospital) =>
      hospital.pincode.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setFilteredHospitals(filtered);
  };

  return (
    <div className="container mx-auto px-4 py-24">
      <h1 className="mb-8 text-4xl font-bold">Find Hospitals</h1>
      
      <div className="mb-8 flex gap-4">
        <div className="flex-1">
          <Input 
            placeholder="Search by pincode" 
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            onKeyPress={(e) => {
              if (e.key === 'Enter') {
                handleSearch();
              }
            }}
          />
        </div>
        <Button onClick={handleSearch}>
          <Search className="mr-2 h-4 w-4" />
          Search
        </Button>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {filteredHospitals.map((hospital) => (
          <Card key={hospital.id} className="overflow-hidden">
            <CardHeader>
              <div className="flex items-start justify-between">
                <div>
                  <CardTitle>{hospital.name}</CardTitle>
                  <CardDescription className="flex items-center mt-2">
                    <MapPin className="mr-2 h-4 w-4" />
                    {hospital.address}
                  </CardDescription>
                </div>
                <Badge className={getStatusColor(hospital.status)}>
                  {getStatusText(hospital.status)}
                </Badge>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              {/* Occupancy */}
              <div>
                <div className="flex justify-between mb-2 text-sm">
                  <span>Occupancy</span>
                  <span>{hospital.occupancy}%</span>
                </div>
                <Progress value={hospital.occupancy} />
              </div>

              {/* Available Resources */}
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <div className="flex items-center text-sm">
                    <BedDouble className="mr-2 h-4 w-4" />
                    Available Beds
                  </div>
                  <p className="font-semibold">
                    {hospital.availableBeds} / {hospital.totalBeds}
                  </p>
                </div>
                <div className="space-y-2">
                  <div className="flex items-center text-sm">
                    <Users className="mr-2 h-4 w-4" />
                    Available Doctors
                  </div>
                  <p className="font-semibold">
                    {hospital.availableDoctors} / {hospital.totalDoctors}
                  </p>
                </div>
              </div>

              {/* Wait Time */}
              <div className="flex items-center justify-between border-t pt-4">
                <div className="flex items-center">
                  <Clock className="mr-2 h-4 w-4" />
                  <span className="text-sm">Emergency Wait Time</span>
                </div>
                <span className="font-semibold">{hospital.emergencyWaitTime}</span>
              </div>

              {/* Specialties */}
              <div className="border-t pt-4">
                <div className="text-sm mb-2">Specialties</div>
                <div className="flex flex-wrap gap-2">
                  {hospital.specialties.map((specialty) => (
                    <Badge key={specialty} variant="secondary">
                      {specialty}
                    </Badge>
                  ))}
                </div>
              </div>

              {/* Contact */}
              <Button className="w-full" variant="outline">
                <Phone className="mr-2 h-4 w-4" />
                {hospital.phone}
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
} 