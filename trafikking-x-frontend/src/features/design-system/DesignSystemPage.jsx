import {
  Ambulance,
  Bell,
  BrainCircuit,
  Building2,
  HeartPulse,
  Shield,
  Siren,
  Users,
} from "lucide-react";

import AppButton from "@/shared/components/AppButton";

export default function DesignSystemPage() {

  const cards = [

    {
      title: "Citizen",
      icon: Users,
      color: "text-cyan-500",
    },

    {
      title: "Dispatcher",
      icon: Siren,
      color: "text-orange-500",
    },

    {
      title: "Hospital",
      icon: Building2,
      color: "text-emerald-500",
    },

    {
      title: "Ambulance",
      icon: Ambulance,
      color: "text-red-500",
    },

    {
      title: "Police",
      icon: Shield,
      color: "text-blue-500",
    },

    {
      title: "AI Engine",
      icon: BrainCircuit,
      color: "text-violet-500",
    },

  ];

  return (

    <main className="space-y-10">

      {/* Hero */}

      <section className="overflow-hidden rounded-3xl border border-primary/10 bg-card/60 p-8 backdrop-blur">

        <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">

          <div>

            <div className="mb-4 inline-flex rounded-full bg-primary/10 px-4 py-2 text-sm font-semibold text-primary">

              TRAFIKKING X UI Kit

            </div>

            <h1 className="text-4xl font-black tracking-tight lg:text-5xl">

              Design System

            </h1>

            <p className="mt-4 max-w-2xl text-muted-foreground">

              Internal component showcase used across
              Citizen, Dispatcher, Hospital, Police,
              Ambulance and AI dashboards.

            </p>

          </div>

          <div className="rounded-3xl bg-primary/10 p-8">

            <BrainCircuit className="h-24 w-24 text-primary" />

          </div>

        </div>

      </section>

      {/* Buttons */}

      <section className="rounded-3xl border bg-card p-8">

        <h2 className="mb-6 text-2xl font-bold">

          Buttons

        </h2>

        <div className="flex flex-wrap gap-4">

          <AppButton>

            Primary

          </AppButton>

          <AppButton variant="secondary">

            Secondary

          </AppButton>

          <AppButton loading>

            Loading

          </AppButton>

          <AppButton disabled>

            Disabled

          </AppButton>

        </div>

      </section>

      {/* Module Cards */}

      <section>

        <h2 className="mb-6 text-2xl font-bold">

          Modules

        </h2>

        <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">

          {cards.map((card) => {

            const Icon = card.icon;

            return (

              <div
                key={card.title}
                className="group overflow-hidden rounded-3xl border bg-card p-6 transition-all duration-300 hover:-translate-y-1 hover:border-primary/30 hover:shadow-xl"
              >

                <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-primary/10">

                  <Icon className={`h-8 w-8 ${card.color}`} />

                </div>

                <h3 className="text-xl font-bold">

                  {card.title}

                </h3>

                <p className="mt-2 text-sm text-muted-foreground">

                  Premium responsive UI components
                  following the TRAFIKKING X design
                  language.

                </p>

              </div>

            );

          })}

        </div>

      </section>

      {/* Status Cards */}

      <section>

        <h2 className="mb-6 text-2xl font-bold">

          Status Examples

        </h2>

        <div className="grid gap-6 md:grid-cols-3">

          <div className="rounded-3xl border border-emerald-500/20 bg-emerald-500/10 p-6">

            <HeartPulse className="mb-4 h-8 w-8 text-emerald-500" />

            <h3 className="font-semibold">

              System Healthy

            </h3>

            <p className="mt-2 text-sm text-muted-foreground">

              All emergency services operational.

            </p>

          </div>

          <div className="rounded-3xl border border-orange-500/20 bg-orange-500/10 p-6">

            <Bell className="mb-4 h-8 w-8 text-orange-500" />

            <h3 className="font-semibold">

              Active Alerts

            </h3>

            <p className="mt-2 text-sm text-muted-foreground">

              Real-time emergency notifications.

            </p>

          </div>

          <div className="rounded-3xl border border-cyan-500/20 bg-cyan-500/10 p-6">

            <BrainCircuit className="mb-4 h-8 w-8 text-cyan-500" />

            <h3 className="font-semibold">

              AI Engine

            </h3>

            <p className="mt-2 text-sm text-muted-foreground">

              Intelligent emergency recommendations.

            </p>

          </div>

        </div>

      </section>

    </main>

  );

}