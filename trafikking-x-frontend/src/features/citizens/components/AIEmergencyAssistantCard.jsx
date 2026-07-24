import { BrainCircuit, Sparkles } from "lucide-react";

import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function AIEmergencyAssistantCard() {
  return (
    <Card className="group relative overflow-hidden">

      <div className="absolute inset-0 bg-gradient-to-br from-violet-500/10 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

      <CardHeader className="relative">
        <CardTitle className="flex items-center gap-2">
          <BrainCircuit className="h-5 w-5 text-violet-500" />
          AI Emergency Assistant
        </CardTitle>
      </CardHeader>

      <CardContent className="relative">

        <div className="rounded-xl border border-dashed p-8 text-center">

          <Sparkles className="mx-auto mb-4 h-10 w-10 text-violet-500" />

          <h3 className="text-lg font-semibold">
            AI Ready
          </h3>

          <p className="mt-2 text-sm text-muted-foreground">
            AI will analyze your emergency and provide first-response guidance,
            safety instructions, and dispatch recommendations.
          </p>

        </div>

      </CardContent>

    </Card>
  );
}