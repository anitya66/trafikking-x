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
    <Card className="group relative h-full overflow-hidden border-border transition-all duration-300 hover:border-primary/20 hover:shadow-xl hover:shadow-primary/5">

      {/* Hover Glow */}

      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

      {/* Top Glow */}

      <div className="absolute left-0 top-0 h-px w-full bg-gradient-to-r from-transparent via-primary/40 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

      <CardContent className="relative flex h-full flex-col p-6">

        {/* Header */}

        <div className="flex items-start justify-between">

          <div>

            <p className="text-sm font-medium uppercase tracking-wide text-muted-foreground">

              {title}

            </p>

            <h2 className="mt-3 text-4xl font-black tracking-tight">

              {value}

            </h2>

          </div>

          <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10 text-primary transition-transform duration-300 group-hover:scale-110">

            <Icon className="h-7 w-7" />

          </div>

        </div>

        {/* Subtitle */}

        <p className="mt-3 text-sm text-muted-foreground">

          {subtitle}

        </p>

        {/* Footer */}

        <div className="mt-auto pt-6">

          <div className="flex items-center justify-between border-t border-border pt-4">

            {trend ? (

              <div className="flex items-center gap-2 text-sm text-green-500">

                <TrendingUp className="h-4 w-4" />

                <span>{trend}</span>

              </div>

            ) : (

              <span className="text-xs uppercase tracking-[0.18em] text-muted-foreground">

                Live Status

              </span>

            )}

            <span className="text-xs font-medium text-primary">

              Updated

            </span>

          </div>

        </div>

      </CardContent>

    </Card>
  );
}