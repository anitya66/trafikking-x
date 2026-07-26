import { Sparkles } from "lucide-react";

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
    <Card className="border-primary/20">

      <CardHeader>

        <CardTitle className="flex items-center gap-2">

          <Sparkles className="h-5 w-5 text-primary" />

          AI Recommendation

        </CardTitle>

      </CardHeader>

      <CardContent>

        {isLoading ? (

          <p className="text-muted-foreground">
            Analyzing...
          </p>

        ) : (

          <p className="leading-7 text-muted-foreground">

            {recommendation ||
              "No recommendations available."}

          </p>

        )}

      </CardContent>

    </Card>
  );
}