"use client";

import { CalendarDays, FileText, Pill, Activity, Clock, AlertCircle } from "lucide-react";

function PatientDashboardContent() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 dark:from-black dark:to-black">
      <div className="container mx-auto px-4 py-8">
        {/* Header section with gradient underline */}
        <div className="mb-8 relative pb-3">
          <h1 className="text-4xl font-bold bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent">
            Welcome, Vansh
          </h1>
          <p className="text-gray-600 dark:text-gray-400 mt-2">Manage your health information</p>
          <div className="absolute bottom-0 left-0 h-1 w-32 bg-gradient-to-r from-primary to-blue-600"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Upcoming Appointments */}
          <div className="bg-white dark:bg-black p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 dark:border-gray-800">
            <div className="flex items-center mb-4">
              <CalendarDays className="w-6 h-6 text-blue-500 dark:text-blue-400 mr-2" />
              <h2 className="text-xl font-semibold">Upcoming Appointments</h2>
            </div>
            <div className="space-y-3">
              <div className="p-4 bg-blue-50 dark:bg-black/40 rounded-lg hover:bg-blue-100 dark:hover:bg-black/60 transition-colors duration-200">
                <p className="font-medium">Dr. Amrendra Kumar</p>
                <p className="text-sm text-gray-600 dark:text-gray-400">Tomorrow at 10:00 AM</p>
                <span className="inline-block px-2 py-1 text-xs bg-blue-200 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full mt-2">
                  Confirmed
                </span>
              </div>
            </div>
          </div>

          {/* Recent Prescriptions */}
          <div className="bg-white dark:bg-black p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 dark:border-gray-800">
            <div className="flex items-center mb-4">
              <Pill className="w-6 h-6 text-green-500 dark:text-green-400 mr-2" />
              <h2 className="text-xl font-semibold">Current Medications</h2>
            </div>
            <div className="space-y-3">
              <div className="p-4 bg-green-50 dark:bg-black/40 rounded-lg hover:bg-green-100 dark:hover:bg-black/60 transition-colors duration-200">
                <p className="font-medium">Amoxicillin</p>
                <p className="text-sm text-gray-600 dark:text-gray-400">3 times daily - 7 days left</p>
                <span className="inline-block px-2 py-1 text-xs bg-green-200 dark:bg-green-900 text-green-800 dark:text-green-200 rounded-full mt-2">
                  Active
                </span>
              </div>
            </div>
          </div>

          {/* Medical Records */}
          <div className="bg-white dark:bg-black p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 dark:border-gray-800">
            <div className="flex items-center mb-4">
              <FileText className="w-6 h-6 text-purple-500 dark:text-purple-400 mr-2" />
              <h2 className="text-xl font-semibold">Recent Medical Records</h2>
            </div>
            <div className="space-y-3">
              <div className="p-4 bg-purple-50 dark:bg-black/40 rounded-lg hover:bg-purple-100 dark:hover:bg-black/60 transition-colors duration-200">
                <p className="font-medium">Blood Test Results</p>
                <p className="text-sm text-gray-600 dark:text-gray-400">Reviewed on 9 Feb, 2025</p>
                <span className="inline-block px-2 py-1 text-xs bg-purple-200 dark:bg-purple-900 text-purple-800 dark:text-purple-200 rounded-full mt-2">
                  Complete
                </span>
              </div>
            </div>
          </div>

          {/* Vital Statistics */}
          <div className="bg-white dark:bg-black p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 dark:border-gray-800">
            <div className="flex items-center mb-4">
              <Activity className="w-6 h-6 text-red-500 dark:text-red-400 mr-2" />
              <h2 className="text-xl font-semibold">Vital Statistics</h2>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="p-4 bg-red-50 dark:bg-black/40 rounded-lg hover:bg-red-100 dark:hover:bg-black/60 transition-colors duration-200">
                <p className="text-sm text-gray-600 dark:text-gray-400">Blood Pressure</p>
                <p className="font-medium text-lg">120/80</p>
                <span className="inline-block px-2 py-1 text-xs bg-green-200 dark:bg-green-900 text-green-800 dark:text-green-200 rounded-full mt-2">
                  Normal
                </span>
              </div>
              <div className="p-4 bg-red-50 dark:bg-black/40 rounded-lg hover:bg-red-100 dark:hover:bg-black/60 transition-colors duration-200">
                <p className="text-sm text-gray-600 dark:text-gray-400">Heart Rate</p>
                <p className="font-medium text-lg">72 BPM</p>
                <span className="inline-block px-2 py-1 text-xs bg-green-200 dark:bg-green-900 text-green-800 dark:text-green-200 rounded-full mt-2">
                  Normal
                </span>
              </div>
            </div>
          </div>

          {/* Upcoming Tests */}
          <div className="bg-white dark:bg-black p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 dark:border-gray-800">
            <div className="flex items-center mb-4">
              <Clock className="w-6 h-6 text-orange-500 dark:text-orange-400 mr-2" />
              <h2 className="text-xl font-semibold">Scheduled Tests</h2>
            </div>
            <div className="space-y-3">
              <div className="p-4 bg-orange-50 dark:bg-black/40 rounded-lg hover:bg-orange-100 dark:hover:bg-black/60 transition-colors duration-200">
                <p className="font-medium">Annual Physical</p>
                <p className="text-sm text-gray-600 dark:text-gray-400">June 1, 2024</p>
                <span className="inline-block px-2 py-1 text-xs bg-orange-200 dark:bg-orange-900 text-orange-800 dark:text-orange-200 rounded-full mt-2">
                  Scheduled
                </span>
              </div>
            </div>
          </div>

          {/* Alerts & Reminders */}
          <div className="bg-white dark:bg-black p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 dark:border-gray-800">
            <div className="flex items-center mb-4">
              <AlertCircle className="w-6 h-6 text-yellow-500 dark:text-yellow-400 mr-2" />
              <h2 className="text-xl font-semibold">Reminders</h2>
            </div>
            <div className="space-y-3">
              <div className="p-4 bg-yellow-50 dark:bg-black/40 rounded-lg hover:bg-yellow-100 dark:hover:bg-black/60 transition-colors duration-200">
                <p className="font-medium">Medication Refill</p>
                <p className="text-sm text-gray-600 dark:text-gray-400">Refill needed in 5 days</p>
                <span className="inline-block px-2 py-1 text-xs bg-yellow-200 dark:bg-yellow-900 text-yellow-800 dark:text-yellow-200 rounded-full mt-2">
                  Urgent
                </span>
              </div>
            </div>
          </div>

          {/* Health Trends */}
          <div className="bg-white dark:bg-black p-6 rounded-xl shadow-lg">
            <div className="flex items-center mb-4">
              <Activity className="w-6 h-6 text-indigo-500 dark:text-indigo-400 mr-2" />
              <h2 className="text-xl font-semibold">Health Trends</h2>
            </div>
            <div className="space-y-4">
              {/* Add weight tracking */}
              <div className="p-4 bg-indigo-50 dark:bg-black/40 rounded-lg">
                <p className="text-sm text-gray-600 dark:text-gray-400">Weight Tracking</p>
                {/* Add chart component here */}
              </div>
              {/* Add sleep tracking */}
              <div className="p-4 bg-indigo-50 dark:bg-black/40 rounded-lg">
                <p className="text-sm text-gray-600 dark:text-gray-400">Sleep Pattern</p>
                {/* Add sleep tracking visualization */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function PatientDashboard() {
  return <PatientDashboardContent />;
}