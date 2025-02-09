"use client"
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
  Search,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import { Input } from "@/components/ui/input";
import { useState } from "react";

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
    name: "Coronation Hospital",
    distance: "0.8 miles",
    address: "Dalanwala, Dehradun",
    emergency: "Open 24/7",
    waitTime: "15 mins",
    pincode: "248001",

  },
  {
    id: 2,
    name: "Doon Valley Hospital",
    pincode: "248001",
    distance: "1.2 miles",
    address: "PremNagar Dehradun",
    emergency: "Open 24/7",
    waitTime: "5 mins",
  },

  {
    id: 3,
    name: "Fortis Escorts Heart Institute and Research Centre",
    pincode: "248001",
    distance: "2.5 miles",
    address: "kandloi",
    emergency: "Open 24/7",
    waitTime: "45 mins",
  },
  {
    id: 4,
    name: "Dehradun Medical College and Hospital",
    pincode: "248001",
    distance: "3.0 miles",
    address: "Roorkee Road, Dehradun",
    emergency: "Open 24/7",
    waitTime: "3 mins",
  },
  {
    id: 5,
    name: "Millitary Hospital",
    pincode: "248003",
    distance: "3.0 miles",
    address: "Garhi Cantonment, Dehradun",
    emergency: "Open 24/7",
    waitTime: "11 mins",
  },
  {
    id: 6,
    name : "nethrajivan Hospital",
    pincode:"248005",
    distance: "3.0 miles",
    address: "Bhagwanpur, Dehradun",
    emergency: "Open 24/7",
    waitTime: "26 mins",
  },
  {
    id: 7,
    name :"Dr K.K.B.M Subharti Hospital",
    pincode:"248007",
    distance: "1.0 miles",
    address: "Kandloi, Dehradun",
    emergency: "Open 24/7",
    waitTime: "10 mins",
  },{
    id: 8,
    name :"synergy hospital",
    pincode:"248001",
    distance: "5.0 miles",
    address: "Ballupur chowk, Dehradun",
    emergency: "Open 24/7",
    waitTime: "46 mins",
  }
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
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedPincode, setSelectedPincode] = useState("");
  const [searchByPincode, setSearchByPincode] = useState(false);

  // Enhanced filter function with exact pincode matching
  const filteredHospitals = nearbyHospitals.filter((hospital) => {
    if (searchByPincode) {
      // Exact pincode matching when in pincode search mode
      return hospital.pincode === searchQuery;
    } else {
      // Regular search by name or address with optional pincode filter
      const matchesSearch = searchQuery === "" || 
        hospital.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        hospital.address.toLowerCase().includes(searchQuery.toLowerCase());
      
      const matchesPincode = selectedPincode === "" || 
        hospital.pincode === selectedPincode;

      return matchesSearch && matchesPincode;
    }
  });

  // Get unique pincodes for the dropdown
  const uniquePincodes = Array.from(
    new Set(nearbyHospitals.map((hospital) => hospital.pincode))
  ).sort();

  // Handle pincode input
  const handlePincodeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    // Only allow numbers and limit to 6 digits
    if (value === '' || (/^\d+$/.test(value) && value.length <= 6)) {
      setSearchQuery(value);
    }
  };

  return (
    <div className="container mx-auto px-4 py-24">
      {/* Emergency Banner */}
      <div className="mb-8 rounded-lg bg-destructive/10 p-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <AlertTriangle className="mr-2 h-6 w-6 text-destructive" />
            <h2 className="text-lg font-semibold text-destructive">
              In case of emergency, dial 108 immediately
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

      {/* Nearby Emergency Rooms with Search */}
      <div className="mb-12">
        <h2 className="mb-4 text-2xl font-semibold">Nearby Emergency Rooms</h2>
        
        {/* Updated Search Section */}
        <div className="mb-6 space-y-4">
          <div className="flex gap-4 items-center">
            <div className="flex-1">
              <div className="relative">
                {searchByPincode ? (
                  <Input
                    placeholder="Enter 6-digit pincode..."
                    value={searchQuery}
                    onChange={handlePincodeInput}
                    className="w-full"
                    maxLength={6}
                    pattern="\d*"
                    inputMode="numeric"
                  />
                ) : (
                  <Input
                    placeholder="Search hospitals by name or address..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full"
                  />
                )}
                <Button
                  variant="ghost"
                  size="sm"
                  className="absolute right-2 top-1/2 -translate-y-1/2"
                  onClick={() => {
                    setSearchByPincode(!searchByPincode);
                    setSearchQuery("");
                    setSelectedPincode("");
                  }}
                >
                  {searchByPincode ? "Search by Name" : "Search by Pincode"}
                </Button>
              </div>
            </div>

            {/* Show dropdown only in name search mode */}
            {!searchByPincode && (
              <select
                className="flex h-10 w-48 rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2"
                value={selectedPincode}
                onChange={(e) => setSelectedPincode(e.target.value)}
              >
                <option value="">All Pincodes</option>
                {uniquePincodes.map((pincode) => (
                  <option key={pincode} value={pincode}>
                    {pincode}
                  </option>
                ))}
              </select>
            )}

            {/* Clear button */}
            {(searchQuery || selectedPincode) && (
              <Button 
                variant="outline" 
                onClick={() => {
                  setSearchQuery("");
                  setSelectedPincode("");
                }}
              >
                Clear
              </Button>
            )}
          </div>

          {/* Quick Pincode Filters */}
          <div className="flex flex-wrap gap-2">
            <span className="text-sm text-muted-foreground mr-2">Quick select:</span>
            {uniquePincodes.map((pincode) => (
              <Badge
                key={pincode}
                variant={searchQuery === pincode && searchByPincode ? "default" : "outline"}
                className="cursor-pointer hover:bg-accent"
                onClick={() => {
                  if (searchQuery === pincode && searchByPincode) {
                    setSearchQuery("");
                  } else {
                    setSearchQuery(pincode);
                    setSearchByPincode(true);
                  }
                }}
              >
                {pincode}
              </Badge>
            ))}
          </div>

          {/* Search Results Summary */}
          <div className="text-sm text-muted-foreground">
            {filteredHospitals.length > 0 ? (
              <div>
                Found {filteredHospitals.length} hospital{filteredHospitals.length !== 1 ? 's' : ''}
                {searchQuery && searchByPincode && ` in pincode ${searchQuery}`}
                {searchQuery && !searchByPincode && ` matching "${searchQuery}"`}
                {selectedPincode && ` in pincode ${selectedPincode}`}
              </div>
            ) : (
              <div className="text-destructive">
                {searchByPincode ? 
                  `No hospitals found in pincode ${searchQuery}` :
                  'No hospitals found matching your search criteria'
                }
              </div>
            )}
          </div>
        </div>

        {/* Hospital Cards Grid */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {filteredHospitals.length > 0 ? (
            filteredHospitals.map((hospital) => (
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
                      <Badge variant="outline" className="ml-2">
                        {hospital.pincode}
                      </Badge>
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
            ))
          ) : (
            <div className="col-span-full text-center py-8 text-muted-foreground">
              No hospitals found matching your search criteria
            </div>
          )}
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