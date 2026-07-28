import {
  AlertTriangle,
  Building2,
  Car,
  Shield,
  Users,
} from "lucide-react";

import MetricCard from "@/shared/components/MetricCard";

import { usePoliceDashboard } from "../hooks/usePoliceDashboard";
import { usePoliceCases } from "../hooks/usePoliceCases";

import AIRecommendationCard from "../components/dashboard/AIRecommendationCard";
import ActiveCasesCard from "../components/dashboard/ActiveCasesCard";
import RecentDispatchesCard from "../components/dashboard/RecentDispatchesCard";
import HighPriorityAlertsCard from "../components/dashboard/HighPriorityAlertsCard";

export default function PoliceDashboardPage() {

  const {

    data,

    isLoading,

    isError,

  } = usePoliceDashboard();

  const {

    data: activeCases = [],

    isLoading: isCasesLoading,

  } = usePoliceCases();

  if (isError) {

    return (

      <div className="rounded-3xl border border-red-500/20 bg-red-500/5 p-12 text-center">

        <AlertTriangle className="mx-auto mb-5 h-12 w-12 text-red-500" />

        <h3 className="text-2xl font-bold">

          Unable To Load Police Dashboard

        </h3>

        <p className="mt-3 text-muted-foreground">

          Please refresh the page and try again.

        </p>

      </div>

    );

  }

  return (

    <div className="space-y-8">

      {/* Header */}

      <div className="flex flex-col gap-6 rounded-3xl border border-primary/10 bg-card/60 p-6 backdrop-blur lg:flex-row lg:items-center lg:justify-between">

        <div className="flex items-center gap-4">

          <div className="rounded-2xl bg-primary/10 p-4">

            <Shield className="h-8 w-8 text-primary" />

          </div>

          <div>

            <h1 className="text-3xl font-bold tracking-tight lg:text-4xl">

              Police Dashboard

            </h1>

            <p className="mt-2 text-muted-foreground">

              Law Enforcement Command Center &
              Real-Time Emergency Coordination

            </p>

          </div>

        </div>

        <div className="rounded-2xl bg-primary/5 px-6 py-4 text-center">

          <p className="text-xs uppercase tracking-wider text-muted-foreground">

            Active Cases

          </p>

          <p className="mt-1 text-3xl font-black text-primary">

            {isLoading ? "--" : data?.activeCases}

          </p>

        </div>

      </div>

      {/* Metrics */}

      <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-4">

        <MetricCard
          title="Active Cases"
          value={isLoading ? "--" : data?.activeCases}
          subtitle="Open Incidents"
          icon={Shield}
        />

        <MetricCard
          title="Available Officers"
          value={isLoading ? "--" : data?.availableOfficers}
          subtitle="Ready"
          icon={Users}
        />

        <MetricCard
          title="Patrol Units"
          value={isLoading ? "--" : data?.patrolUnits}
          subtitle="On Duty"
          icon={Car}
        />

        <MetricCard
          title="High Priority"
          value={isLoading ? "--" : data?.highPriorityCases}
          subtitle="Critical"
          icon={AlertTriangle}
        />

        <MetricCard
          title="Total Officers"
          value={isLoading ? "--" : data?.totalOfficers}
          subtitle="Station Strength"
          icon={Users}
        />

        <MetricCard
          title="Vehicles"
          value={isLoading ? "--" : data?.availableVehicles}
          subtitle="Available"
          icon={Car}
        />

        <MetricCard
          title="Investigations"
          value={isLoading ? "--" : data?.pendingInvestigations}
          subtitle="Pending"
          icon={Building2}
        />

        <MetricCard
          title="Station Status"
          value={isLoading ? "--" : data?.stationStatus}
          subtitle="Operational"
          icon={Shield}
        />

      </div>

      {/* Dashboard Content */}

      <div className="grid gap-6 xl:grid-cols-3">

        <div className="space-y-6 xl:col-span-2">

          <ActiveCasesCard

            cases={activeCases}

            isLoading={isCasesLoading}

          />

          <RecentDispatchesCard />

        </div>

        <div className="space-y-6">

          <AIRecommendationCard

            recommendation={data?.aiRecommendation}

            isLoading={isLoading}

          />

          <HighPriorityAlertsCard

            count={data?.highPriorityCases}

            isLoading={isLoading}

          />

        </div>

      </div>

    </div>

  );

}