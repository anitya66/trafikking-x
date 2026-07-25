import { useState } from "react";

import { ClipboardList } from "lucide-react";

import { Button } from "@/components/ui/button";

import PageHeader from "@/shared/components/PageHeader";
import SearchInput from "@/shared/components/SearchInput";
import StatusBadge from "@/shared/components/StatusBadge";
import EmptyState from "@/shared/components/EmptyState";
import { formatRelativeDate } from "@/shared/utils/formatDate";
import { getIncidentIcon } from "../utils/getIncidentIcon";

import { useMyIncidents } from "../hooks/useMyIncidents";
import LoadingState from "@/shared/components/LoadingState";

import IncidentDetailsDialog from "../components/IncidentDetailsDialog";

export default function MyIncidentsPage() {

  const {
    data: incidents = [],
    isLoading,
    isError,
  } = useMyIncidents();

  const [search, setSearch] = useState("");

const [statusFilter, setStatusFilter] = useState("ALL");

  const [selectedIncident, setSelectedIncident] = useState(null);

  const filteredIncidents = incidents.filter((incident) => {

  const matchesSearch =
    incident.incidentNumber
      ?.toLowerCase()
      .includes(search.toLowerCase()) ||

    incident.incidentType
      ?.toLowerCase()
      .includes(search.toLowerCase());

  const matchesStatus =

    statusFilter === "ALL" ||

    incident.status === statusFilter;

  return matchesSearch && matchesStatus;

});

if (isLoading) {

  return (

    <LoadingState cards={4} />

  );

}

  if (isError) {
    return (
      <div className="py-20 text-center text-red-500">
        Failed to load incidents.
      </div>
    );
  }

  return (

    <div className="space-y-8">

      <PageHeader
        title="My Incidents"
        description="View all reported emergencies."
        actions={
          <SearchInput
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search incident..."
          />
        }
      />

      <div className="flex flex-wrap gap-3">

  {[
    "ALL",
    "PENDING",
    "DISPATCHED",
    "IN_PROGRESS",
    "RESOLVED",
  ].map((status) => (

    <Button
      key={status}
      size="sm"
      variant={
        statusFilter === status
          ? "default"
          : "outline"
      }
      onClick={() => setStatusFilter(status)}
    >
      {status.replaceAll("_", " ")}
    </Button>

  ))}

</div>

      {filteredIncidents.length === 0 ? (

        <EmptyState
  icon={
    <ClipboardList className="h-14 w-14 text-muted-foreground" />
  }
  title="No Incidents Found"
  description="You haven't reported any emergency yet."
/>

      ) : (

        <div className="grid gap-6 lg:grid-cols-2">

          {filteredIncidents.map((incident) => (

            <div
              key={incident.id}
              className="group rounded-3xl border border-border bg-card/70 p-6 backdrop-blur transition-all duration-300 hover:-translate-y-1 hover:border-primary/30 hover:shadow-2xl"
            >

              <div className="flex items-center justify-between">

                <div className="flex items-start gap-4">

  <div className="rounded-xl bg-primary/10 p-3">

    {getIncidentIcon(incident.incidentType)}

  </div>

  <div>

    <p className="text-sm text-muted-foreground">
      {incident.incidentNumber}
    </p>

    <h3 className="mt-1 text-xl font-semibold">
      {incident.incidentType.replaceAll("_", " ")}
    </h3>

  </div>

</div>

                <StatusBadge status={incident.status} />

              </div>

              <div className="mt-4 space-y-3">

  <p className="text-sm text-muted-foreground">

    📍 {incident.address}

  </p>

  <p className="text-sm text-muted-foreground">

    🕒 Reported {formatRelativeDate(incident.reportedAt)}

  </p>

  <p className="line-clamp-2 text-sm text-muted-foreground">

    {incident.description}

  </p>

</div>

              <div className="mt-6 flex justify-end">

                <Button
                  onClick={() => setSelectedIncident(incident)}
                >
                  View Details
                </Button>

              </div>

            </div>

          ))}

        </div>

      )}

      <IncidentDetailsDialog
        open={!!selectedIncident}
        incident={selectedIncident}
        onOpenChange={() => setSelectedIncident(null)}
      />

    </div>

  );

}