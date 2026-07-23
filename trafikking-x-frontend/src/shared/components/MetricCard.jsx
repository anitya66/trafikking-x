import { TrendingUp } from "lucide-react";

import {
  Card,
  CardContent,
} from "@/components/ui/card";

export default function MetricCard({
  title,
  value,
  subtitle,
  icon: Icon,
  trend,
}) {
  return (
    <Card className="group relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

      <CardContent className="relative p-6">

        <div className="flex items-start justify-between">

          <div className="space-y-2">

            <p className="text-sm font-medium text-muted-foreground">
              {title}
            </p>

            <h2 className="text-4xl font-bold tracking-tight">
              {value}
            </h2>

            <p className="text-sm text-muted-foreground">
              {subtitle}
            </p>

          </div>

          <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary">

            <Icon className="h-6 w-6" />

          </div>

        </div>

        {trend && (
          <div className="mt-6 flex items-center gap-2 text-sm text-green-500">

            <TrendingUp className="h-4 w-4" />

            <span>{trend}</span>

          </div>
        )}

      </CardContent>
    </Card>
  );
}