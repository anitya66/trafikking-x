import {
  BrainCircuit,
  Sparkles,
  ShieldCheck,
  Stethoscope,
  Route,
} from "lucide-react";

import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function AIEmergencyAssistantCard() {
  return (
    <Card className="group relative overflow-hidden">

      {/* Background Glow */}

      <div className="absolute inset-0 bg-gradient-to-br from-violet-500/10 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

      <CardHeader className="relative border-b border-border">

        <CardTitle className="flex items-center gap-3">

          <BrainCircuit className="h-6 w-6 text-violet-500" />

          <span>AI Emergency Assistant</span>

        </CardTitle>

      </CardHeader>

      <CardContent className="space-y-6 p-6">

        {/* Hero */}

        <div className="rounded-3xl border border-violet-500/20 bg-violet-500/5 p-6">

          <div className="flex items-center gap-4">

            <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-violet-500/10">

              <Sparkles className="h-7 w-7 text-violet-500" />

            </div>

            <div>

              <h3 className="text-xl font-bold">

                AI Ready

              </h3>

              <p className="mt-2 text-sm leading-6 text-muted-foreground">

                Your emergency assistant is ready to analyze
                incidents and provide intelligent guidance in
                real time.

              </p>

            </div>

          </div>

        </div>

        {/* Features */}

        <div className="grid gap-4 md:grid-cols-3">

          <div className="rounded-2xl border border-border bg-card/50 p-5">

            <ShieldCheck className="mb-4 h-7 w-7 text-green-500" />

            <h4 className="font-semibold">

              Safety Guidance

            </h4>

            <p className="mt-2 text-sm text-muted-foreground">

              Immediate first-response safety instructions.

            </p>

          </div>

          <div className="rounded-2xl border border-border bg-card/50 p-5">

            <Stethoscope className="mb-4 h-7 w-7 text-blue-500" />

            <h4 className="font-semibold">

              Medical Advice

            </h4>

            <p className="mt-2 text-sm text-muted-foreground">

              Basic emergency care recommendations before responders arrive.

            </p>

          </div>

          <div className="rounded-2xl border border-border bg-card/50 p-5">

            <Route className="mb-4 h-7 w-7 text-orange-500" />

            <h4 className="font-semibold">

              Smart Dispatch

            </h4>

            <p className="mt-2 text-sm text-muted-foreground">

              AI evaluates severity and recommends the fastest response.

            </p>

          </div>

        </div>

        {/* Footer */}

        <div className="flex items-center justify-between rounded-2xl border border-border bg-card/40 px-5 py-4">

          <div>

            <p className="text-sm font-medium">

              AI Status

            </p>

            <p className="text-xs text-muted-foreground">

              Connected to emergency intelligence engine

            </p>

          </div>

          <span className="rounded-full bg-green-500/10 px-4 py-2 text-xs font-semibold text-green-500">

            ONLINE

          </span>

        </div>

      </CardContent>

    </Card>
  );
}