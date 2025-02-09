import { useEffect, useState } from 'react';
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';

export default function OngoingTreatments() {
  const [treatments, setTreatments] = useState([]);

  useEffect(() => {
    // Fetch ongoing treatments from your API
    // setTreatments(data);
  }, []);

  return (
    <div className="space-y-4">
      <h2 className="text-2xl font-bold">Ongoing Treatments</h2>
      <div className="grid gap-4">
        {treatments.map((treatment: any) => (
          <Card key={treatment.id}>
            <CardHeader>
              <CardTitle>{treatment.name}</CardTitle>
            </CardHeader>
            <CardContent>
              <p>Started: {treatment.startDate}</p>
              <p>Expected Duration: {treatment.duration}</p>
              <div className="mt-2">
                <p>Progress</p>
                <Progress value={treatment.progress} />
              </div>
              <p className="mt-2">Next Steps: {treatment.nextSteps}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
} 