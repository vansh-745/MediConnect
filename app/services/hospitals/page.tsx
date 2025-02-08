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

// Mock data for hospitals
const hospitals = [
  {
    id: 1,
    name: "Central City Hospital",
    address: "123 Healthcare Ave, Central City",
    phone: "(555) 123-4567",
    occupancy: 75,
    availableBeds: 45,
    totalBeds: 200,
    availableDoctors: 28,
    totalDoctors: 35,
    emergencyWaitTime: "15 mins",
    specialties: ["Cardiology", "Neurology", "Pediatrics"],
    status: "busy",
  },
  {
    id: 2,
    name: "Riverside Medical Center",
    address: "456 Riverside Dr, Westview",
    phone: "(555) 987-6543",
    occupancy: 45,
    availableBeds: 120,
    totalBeds: 180,
    availableDoctors: 42,
    totalDoctors: 45,
    emergencyWaitTime: "5 mins",
    specialties: ["Orthopedics", "Oncology", "General Surgery"],
    status: "available",
  },
  {
    id: 3,
    name: "Summit Healthcare",
    address: "789 Highland Park, Eastside",
    phone: "(555) 246-8135",
    occupancy: 90,
    availableBeds: 20,
    totalBeds: 150,
    availableDoctors: 15,
    totalDoctors: 30,
    emergencyWaitTime: "45 mins",
    specialties: ["Emergency Care", "Internal Medicine", "Psychiatry"],
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
  return (
    <div className="container mx-auto px-4 py-24">
      <h1 className="mb-8 text-4xl font-bold">Find Hospitals</h1>
      
      <div className="mb-8 flex gap-4">
        <div className="flex-1">
          <Input placeholder="Search by hospital name or location" />
        </div>
        <Button>
          <Search className="mr-2 h-4 w-4" />
          Search
        </Button>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {hospitals.map((hospital) => (
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