import { Radio } from "lucide-react";

import { useDispatchQueue } from "../hooks/useDispatchQueue";

import DispatchCard from "./DispatchCard";

import { Card, CardContent } from "@/components/ui/card";

export default function DispatchQueue() {
  const {
    data: dispatches = [],
    isLoading,
    isError,
  } = useDispatchQueue();

  let content;

  if (isLoading) {
    content = (
      <Card>
        <CardContent className="p-6">
          Loading dispatch queue...
        </CardContent>
      </Card>
    );
  } else if (isError) {
    content = (
      <Card>
        <CardContent className="p-6 text-red-500">
          Failed to load dispatch queue.
        </CardContent>
      </Card>
    );
  } else if (dispatches.length === 0) {
    content = (
      <Card>
        <CardContent className="flex min-h-[250px] flex-col items-center justify-center">
          <Radio className="mb-4 h-10 w-10 text-primary" />

          <p className="text-muted-foreground">
            No active dispatches.
          </p>
        </CardContent>
      </Card>
    );
  } else {
    content = (
      <div className="space-y-4">
        {dispatches.map((dispatch) => (
          <DispatchCard
            key={dispatch.id}
            dispatch={dispatch}
          />
        ))}
      </div>
    );
  }

  return (
    <section className="space-y-5">
      <div>
        <h2 className="text-xl font-semibold">
          📡 Dispatch Queue
        </h2>

        <p className="mt-1 text-sm text-muted-foreground">
          Latest dispatch assignments.
        </p>
      </div>

      {content}
    </section>
  );
}