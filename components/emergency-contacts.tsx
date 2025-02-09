export function EmergencyContacts() {
  return (
    <div className="bg-white dark:bg-black p-6 rounded-xl shadow-lg">
      <h2 className="text-xl font-semibold mb-4">Emergency Contacts</h2>
      <div className="space-y-4">
        {contacts.map((contact) => (
          <div key={contact.id} className="flex items-center justify-between">
            <div>
              <p className="font-medium">{contact.name}</p>
              <p className="text-sm text-gray-600">{contact.relationship}</p>
              <p className="text-sm text-gray-600">{contact.phone}</p>
            </div>
            <div className="flex gap-2">
              <Button variant="outline" size="sm">Edit</Button>
              <Button variant="outline" size="sm">Call</Button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
} 