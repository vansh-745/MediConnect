import { useEffect, useState } from 'react';
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';

export default function MedicalHistory() {
  const [history, setHistory] = useState([]);

  useEffect(() => {
    // Fetch medical history from your API
    // setHistory(data);
  }, []);

  return (
    <div className="space-y-4">
      <h2 className="text-2xl font-bold">Medical History</h2>
      <div className="grid gap-4">
        {history.map((record: any) => (
          <Card key={record.id}>
            <CardHeader>
              <CardTitle>{record.diagnosis}</CardTitle>
            </CardHeader>
            <CardContent>
              <p>Date: {record.date}</p>
              <p>Doctor: {record.doctor}</p>
              <p>Treatment: {record.treatment}</p>
              <p>Notes: {record.notes}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
} 