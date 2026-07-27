
import { BrainCircuit } from "lucide-react";

import { Card, CardContent } from "@/components/ui/card";

export default function AIEmptyState() {

  return (

    <Card>

      <CardContent className="flex h-[400px] flex-col items-center justify-center space-y-5">

        <BrainCircuit className="h-16 w-16 text-primary" />

        <div className="space-y-2 text-center">

          <h2 className="text-2xl font-bold">

            AI Recommendation Engine

          </h2>

          <p className="max-w-md text-muted-foreground">

            Select an incident from the list to generate intelligent
            recommendations for Hospital, Ambulance and Police resources.

          </p>

        </div>

      </CardContent>

    </Card>

  );

}