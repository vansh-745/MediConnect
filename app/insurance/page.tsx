export default function InsuranceManagement() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Insurance Management</h1>
      
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {/* Insurance card */}
        <div className="bg-white dark:bg-black p-6 rounded-xl shadow-lg">
          <h2 className="text-xl font-semibold mb-4">Insurance Details</h2>
          {/* Add insurance information */}
        </div>

        {/* Claims history */}
        <div className="bg-white dark:bg-black p-6 rounded-xl shadow-lg">
          <h2 className="text-xl font-semibold mb-4">Claims History</h2>
          {/* Add claims history */}
        </div>
      </div>
    </div>
  );
} 