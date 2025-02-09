import { Video, Calendar, MessageSquare } from "lucide-react";

export default function Telemedicine() {
  return (
    <div className="container mx-auto px-4 py-24">
      <h1 className="mb-8 text-4xl font-bold">Virtual Care</h1>
      
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {/* Video Consultation */}
        <div className="bg-white dark:bg-black p-6 rounded-xl shadow-lg">
          <Video className="w-8 h-8 text-blue-500 mb-4" />
          <h2 className="text-xl font-semibold mb-2">Video Consultation</h2>
          <p className="text-gray-600 dark:text-gray-400 mb-4">
            Connect with healthcare providers through secure video calls
          </p>
          <Button>Schedule Call</Button>
        </div>

        {/* Other telemedicine features */}
      </div>
    </div>
  );
} 