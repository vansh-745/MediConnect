import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Phone,
  Ambulance,
  Stethoscope,
  Clock,
  MapPin,
  Info,
  AlertTriangle,
  Heart,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";

const emergencyServices = [
  {
    id: 1,
    name: "Emergency Ambulance",
    phone: "108",
    description: "24/7 Emergency Medical Services",
    response: "5-10 minutes",
    type: "critical",
  },
  {
    id: 2,
    name: "Fire Emergency",
    phone: "112",
    description: "Fire Department Emergency Response",
    response: "5-8 minutes",
    type: "critical",
  },
  {
    id: 3,
    name: "Police Emergency",
    phone: "100",
    description: "Law Enforcement Emergency Response",
    response: "4-7 minutes",
    type: "critical",
  },
];

const nearbyHospitals = [
  {
    id: 1,
    name: "Central City Hospital",
    distance: "0.8 miles",
    address: "Ballupur",
    emergency: "Open 24/7",
    waitTime: "15 mins",

  },
  {
    id: 2,
    name: "Riverside Medical Center",
    distance: "1.2 miles",
    address: "PremNagar Dehradun",
    emergency: "Open 24/7",
    waitTime: "5 mins",
  },
  {
    id: 3,
    name: "Summit Healthcare",
    distance: "2.5 miles",
    address: "kandloi",
    emergency: "Open 24/7",
    waitTime: "45 mins",
  },
];

const emergencyGuides = [
  {
    id: 1,
    title: "CPR Guide",
    description: "Step-by-step guide for performing CPR",
    icon: Heart,
  },
  {
    id: 2,
    title: "First Aid Basics",
    description: "Essential first aid procedures",
    icon: Stethoscope,
  },
  {
    id: 3,
    title: "Emergency Preparedness",
    description: "How to prepare for medical emergencies",
    icon: AlertTriangle,
  },
];

export default function Emergency() {
  return (
    <div className="container mx-auto px-4 py-24">
      {/* Emergency Banner */}
      <div className="mb-8 rounded-lg bg-destructive/10 p-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <AlertTriangle className="mr-2 h-6 w-6 text-destructive" />
            <h2 className="text-lg font-semibold text-destructive">
              In case of emergency, dial 911 immediately
            </h2>
          </div>
          <Button variant="destructive" size="lg">
            <Phone className="mr-2 h-4 w-4" />
            Call 911
          </Button>
        </div>
      </div>

      <h1 className="mb-8 text-4xl font-bold">Emergency Services</h1>

      {/* Emergency Services Section */}
      <div className="mb-12">
        <h2 className="mb-4 text-2xl font-semibold">Emergency Contacts</h2>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {emergencyServices.map((service) => (
            <Card key={service.id} className="border-2 border-destructive/20">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Ambulance className="mr-2 h-5 w-5 text-destructive" />
                  {service.name}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <p className="text-sm text-muted-foreground">
                    {service.description}
                  </p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <Clock className="mr-2 h-4 w-4" />
                      <span className="text-sm">Response Time:</span>
                    </div>
                    <Badge variant="secondary">{service.response}</Badge>
                  </div>
                  <Button className="w-full" variant="destructive">
                    <Phone className="mr-2 h-4 w-4" />
                    {service.phone}
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Nearby Emergency Rooms */}
      <div className="mb-12">
        <h2 className="mb-4 text-2xl font-semibold">Nearby Emergency Rooms</h2>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {nearbyHospitals.map((hospital) => (
            <Card key={hospital.id}>
              <CardHeader>
                <CardTitle>{hospital.name}</CardTitle>
                <Badge variant="secondary">{hospital.distance}</Badge>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center text-sm text-muted-foreground">
                    <MapPin className="mr-2 h-4 w-4" />
                    {hospital.address}
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm">{hospital.emergency}</span>
                    <div className="flex items-center">
                      <Clock className="mr-2 h-4 w-4" />
                      <span>Wait: {hospital.waitTime}</span>
                    </div>
                  </div>
                  <Button className="w-full" variant="outline">
                    Get Directions
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Emergency Guides */}
      <div>
        <h2 className="mb-4 text-2xl font-semibold">Emergency Guides</h2>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {emergencyGuides.map((guide) => {
            const Icon = guide.icon;
            return (
              <Link key={guide.id} href="#">
                <Card className="transition-colors hover:bg-muted/50">
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <Icon className="mr-2 h-5 w-5" />
                      {guide.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">
                      {guide.description}
                    </p>
                  </CardContent>
                </Card>
              </Link>
            );
          })}
        </div>
      </div>

      {/* Additional Information */}
      <div className="mt-12 rounded-lg bg-muted p-6">
        <div className="flex items-start space-x-4">
          <Info className="h-6 w-6 text-muted-foreground" />
          <div>
            <h3 className="mb-2 font-semibold">Important Information</h3>
            <ul className="list-disc space-y-2 pl-4 text-sm text-muted-foreground">
              <li>Always call 911 in life-threatening situations</li>
              <li>Keep emergency numbers saved in your phone</li>
              <li>Know your location when calling emergency services</li>
              <li>Stay calm and follow dispatcher instructions</li>
              <li>Have important medical information readily available</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
} 