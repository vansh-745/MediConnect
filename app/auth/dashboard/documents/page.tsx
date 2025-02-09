export default function HealthDocuments() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Health Documents</h1>
      
      <div className="grid gap-6 md:grid-cols-2">
        {/* Document upload section */}
        <div className="bg-white dark:bg-black p-6 rounded-xl shadow-lg">
          <h2 className="text-xl font-semibold mb-4">Upload Documents</h2>
          {/* Add document upload component */}
        </div>

        {/* Document categories */}
        <div className="bg-white dark:bg-black p-6 rounded-xl shadow-lg">
          <h2 className="text-xl font-semibold mb-4">Categories</h2>
          {/* Add document categories */}
        </div>
      </div>
    </div>
  );
} 