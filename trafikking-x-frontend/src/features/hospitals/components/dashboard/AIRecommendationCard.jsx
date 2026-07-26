import {
  Brain,
  Lightbulb,
  TriangleAlert,
} from "lucide-react";

import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function AIRecommendationCard({

  recommendation,

}) {

  return (

    <Card>

      <CardHeader>

        <CardTitle className="flex items-center gap-2">

          <Brain className="h-5 w-5 text-primary" />

          AI Recommendation

        </CardTitle>

      </CardHeader>

      <CardContent className="space-y-4">

        <div className="rounded-xl border border-cyan-500/20 bg-cyan-500/5 p-4">

          <div className="flex items-center gap-2">

            <Lightbulb className="h-4 w-4 text-cyan-500" />

            <span className="font-medium">

              {recommendation?.title ?? "AI Recommendation"}

            </span>

          </div>

          <p className="mt-3 text-sm text-muted-foreground">

            {recommendation?.recommendation ??
              "No recommendation available."}

          </p>

        </div>

        <div className="rounded-xl border border-amber-500/20 bg-amber-500/5 p-4">

          <div className="flex items-center gap-2">

            <TriangleAlert className="h-4 w-4 text-amber-500" />

            <span className="font-medium">

              Priority

            </span>

          </div>

          <p className="mt-3 text-sm font-semibold">

            {recommendation?.priority ?? "--"}

          </p>

        </div>

      </CardContent>

    </Card>

  );

}