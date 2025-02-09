export function MedicationReminder() {
  return (
    <div className="bg-white dark:bg-black p-6 rounded-xl shadow-lg">
      <h2 className="text-xl font-semibold mb-4">Medication Schedule</h2>
      <div className="space-y-4">
        {medications.map((med) => (
          <div key={med.id} className="flex items-center justify-between">
            <div>
              <p className="font-medium">{med.name}</p>
              <p className="text-sm text-gray-600">{med.schedule}</p>
            </div>
            <Button variant="outline" size="sm">
              Mark as Taken
            </Button>
          </div>
        ))}
      </div>
    </div>
  );
} 