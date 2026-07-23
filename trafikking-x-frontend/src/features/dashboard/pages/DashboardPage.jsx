import {
  Activity,
  Ambulance,
  Building2,
  Shield,
} from "lucide-react";

import { useQueryClient } from "@tanstack/react-query";
import { toast } from "sonner";
import EmergencyMap from "@/features/map/components/EmergencyMap";
import { useDashboardSocket } from "@/hooks/realtime/useDashboardSocket";

import DispatchQueue from "../components/DispatchQueue";
import LiveIncidentFeed from "../components/LiveIncidentFeed";

import MetricCard from "@/shared/components/MetricCard";
import SeverityBadge from "@/shared/components/SeverityBadge";
import StatusBadge from "@/shared/components/StatusBadge";

import { useDashboardSummary } from "../hooks/useDashboardSummary";

export default function DashboardPage() {

  const {
    data,
    isLoading,
    isError,
  } = useDashboardSummary();

  const queryClient = useQueryClient();

  useDashboardSocket((event) => {

    console.log("Dashboard Event", event);

    toast.warning("🚨 New Emergency Incident Reported", {
      description: `Incident No: ${event.incidentNumber}`,
      duration: 5000,
    });

    queryClient.invalidateQueries({
      queryKey: ["dashboard-summary"],
    });

    queryClient.invalidateQueries({
      queryKey: ["incidents"],
    });

    queryClient.invalidateQueries({
      queryKey: ["map-overview"],
    });

  });

  if (isError) {
    return (
      <div className="rounded-xl border border-red-500/20 bg-red-500/10 p-6 text-red-400">
        Failed to load dashboard summary.
      </div>
    );
  }

  return (
    <div className="space-y-8">

      {/* Header */}

      <div>
        <h1 className="text-4xl font-bold tracking-tight">
          Dashboard
        </h1>

        <p className="mt-2 text-muted-foreground">
          Emergency Command Center
        </p>
      </div>

      {/* Metrics */}

      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">

        <MetricCard
          title="Active Incidents"
          value={isLoading ? "--" : data?.activeIncidents}
          subtitle="+12 today"
          trend="+8%"
          icon={Activity}
        />

        <MetricCard
          title="Ambulances Ready"
          value={isLoading ? "--" : data?.ambulancesReady}
          subtitle="92% Available"
          trend="+2%"
          icon={Ambulance}
        />

        <MetricCard
          title="Hospital Capacity"
          value={
            isLoading
              ? "--"
              : `${data?.hospitalCapacity}%`
          }
          subtitle="18 Beds Free"
          trend="+4%"
          icon={Building2}
        />

        <MetricCard
          title="Police Units"
          value={isLoading ? "--" : data?.policeUnits}
          subtitle="58 Active"
          trend="+6%"
          icon={Shield}
        />

      </div>

      {/* Incident Feed + Dispatch */}

      <div className="grid gap-6 xl:grid-cols-3">

        <div className="xl:col-span-2">
          <LiveIncidentFeed />
        </div>

        <DispatchQueue />

      </div>

      {/* Emergency Map */}

      <EmergencyMap />

      {/* Severity Samples */}

      <div className="flex gap-3">

        <SeverityBadge severity="LOW" />
        <SeverityBadge severity="MEDIUM" />
        <SeverityBadge severity="HIGH" />
        <SeverityBadge severity="CRITICAL" />

      </div>

      {/* Status Samples */}

      <div className="flex flex-wrap gap-3">

        <StatusBadge status="REPORTED" />
        <StatusBadge status="ASSIGNED" />
        <StatusBadge status="IN_PROGRESS" />
        <StatusBadge status="RESOLVED" />
        <StatusBadge status="CANCELLED" />

      </div>

    </div>
  );
}