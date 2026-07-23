import { Radio } from "lucide-react";

import { Card, CardContent } from "@/components/ui/card";

export default function DispatchQueue() {
  return (
    <section className="space-y-5">

      <div>
        <h2 className="text-xl font-semibold">
          📡 Dispatch Queue
        </h2>

        <p className="mt-1 text-sm text-muted-foreground">
          Incoming emergency assignments.
        </p>
      </div>

      <Card>

        <CardContent className="flex min-h-[520px] items-center justify-center">

          <div className="text-center">

            <Radio className="mx-auto mb-4 h-12 w-12 text-primary" />

            <h3 className="text-lg font-semibold">
              Dispatch Queue
            </h3>

            <p className="mt-2 text-sm text-muted-foreground">
              This panel will display real-time ambulance,
              police and hospital dispatch assignments.
            </p>

          </div>

        </CardContent>

      </Card>

    </section>
  );
}