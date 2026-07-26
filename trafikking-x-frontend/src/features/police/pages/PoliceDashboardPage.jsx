import {
  Shield,
  Users,
  Car,
  AlertTriangle,
  Building2,
} from "lucide-react";

import MetricCard from "@/shared/components/MetricCard";

import { usePoliceDashboard } from "../hooks/usePoliceDashboard";

import AIRecommendationCard from "../components/dashboard/AIRecommendationCard";
import ActiveCasesCard from "../components/dashboard/ActiveCasesCard";
import RecentDispatchesCard from "../components/dashboard/RecentDispatchesCard";
import HighPriorityAlertsCard from "../components/dashboard/HighPriorityAlertsCard";
import { usePoliceCases } from "../hooks/usePoliceCases";

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

      <div className="rounded-xl border border-red-500/20 bg-red-500/10 p-6 text-red-400">

        Failed to load police dashboard.

      </div>

    );

  }

  return (

    <div className="space-y-8">

      <div>

        <h1 className="text-4xl font-bold tracking-tight">

          Police Dashboard

        </h1>

        <p className="mt-2 text-muted-foreground">

          Law Enforcement Command Center

        </p>

      </div>

      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">

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

          subtitle="Station"

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

          title="Station"

          value={isLoading ? "--" : data?.stationStatus}

          subtitle="Status"

          icon={Shield}

        />

      </div>

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