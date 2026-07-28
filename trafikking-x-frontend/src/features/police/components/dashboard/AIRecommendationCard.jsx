import {
  BrainCircuit,
  Sparkles,
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

  isLoading,

}) {

  return (

    <Card className="overflow-hidden rounded-3xl border-primary/20">

      {/* Top Accent */}

      <div className="h-1 bg-gradient-to-r from-primary via-cyan-500 to-violet-500" />

      <CardHeader>

        <CardTitle className="flex items-center gap-3">

          <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-primary/10">

            <BrainCircuit className="h-6 w-6 text-primary" />

          </div>

          <div>

            <h3 className="text-lg font-semibold">

              AI Recommendation

            </h3>

            <p className="text-sm font-normal text-muted-foreground">

              Intelligent operational insights

            </p>

          </div>

        </CardTitle>

      </CardHeader>

      <CardContent>

        {isLoading ? (

          <div className="flex h-40 flex-col items-center justify-center text-center">

            <Sparkles className="mb-4 h-8 w-8 animate-pulse text-primary" />

            <p className="font-medium">

              AI is analyzing...

            </p>

            <p className="mt-2 text-sm text-muted-foreground">

              Generating the best recommendation.

            </p>

          </div>

        ) : recommendation ? (

          <div className="space-y-5">

            <div className="rounded-2xl border border-primary/20 bg-primary/5 p-5">

              <div className="mb-3 flex items-center gap-2">

                <Sparkles className="h-5 w-5 text-primary" />

                <span className="font-semibold">

                  Recommended Action

                </span>

              </div>

              <p className="leading-7 text-muted-foreground">

                {recommendation}

              </p>

            </div>

            <div className="flex items-center gap-2 rounded-xl bg-emerald-500/10 px-4 py-3">

              <BrainCircuit className="h-5 w-5 text-emerald-500" />

              <span className="text-sm font-medium text-emerald-600 dark:text-emerald-400">

                AI Confidence: High

              </span>

            </div>

          </div>

        ) : (

          <div className="flex h-40 flex-col items-center justify-center text-center">

            <TriangleAlert className="mb-4 h-8 w-8 text-muted-foreground" />

            <h3 className="font-semibold">

              No Recommendation Available

            </h3>

            <p className="mt-2 text-sm text-muted-foreground">

              The AI engine has no operational
              recommendation at this time.

            </p>

          </div>

        )}

      </CardContent>

    </Card>

  );

}