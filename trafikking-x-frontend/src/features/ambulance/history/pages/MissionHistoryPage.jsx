import { useMemo, useState } from "react";
import { Search } from "lucide-react";

import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import MissionHistoryList from "../components/MissionHistoryList";
import MissionHistorySkeleton from "../components/MissionHistorySkeleton";
import { useMissionHistory } from "../hooks/useMissionHistory";

export default function MissionHistoryPage() {

  const {

    data = [],

    isLoading,

    isError,

  } = useMissionHistory();

  const [

    search,

    setSearch,

  ] = useState("");

  const [

    status,

    setStatus,

  ] = useState("ALL");

  const filteredAssignments = useMemo(() => {

    return data.filter((assignment) => {

      const matchesSearch =

        assignment.incidentNumber
          ?.toLowerCase()
          .includes(search.toLowerCase()) ||

        assignment.citizenName
          ?.toLowerCase()
          .includes(search.toLowerCase()) ||

        assignment.emergencyType
          ?.toLowerCase()
          .includes(search.toLowerCase());

      const matchesStatus =

        status === "ALL" ||

        assignment.status === status;

      return matchesSearch && matchesStatus;

    });

  }, [

    data,

    search,

    status,

  ]);

  if (isLoading) {

    return <MissionHistorySkeleton />;

  }

  if (isError) {

    return (

      <div className="rounded-2xl border border-red-500/20 bg-red-500/5 p-10 text-center">

        Failed to load mission history.

      </div>

    );

  }

  return (

    <div className="space-y-8">

      <div>

        <h1 className="text-4xl font-bold">

          Mission History

        </h1>

        <p className="mt-2 text-muted-foreground">

          View all completed, rejected and historical emergency assignments.

        </p>

      </div>

      <div className="grid gap-4 lg:grid-cols-[1fr_220px]">

        <div className="relative">

          <Search className="absolute left-3 top-3.5 h-4 w-4 text-muted-foreground" />

          <Input

            value={search}

            onChange={(e) =>
              setSearch(e.target.value)
            }

            placeholder="Search incident, citizen or emergency..."

            className="pl-10"

          />

        </div>

        <Select

          value={status}

          onValueChange={setStatus}

        >

          <SelectTrigger>

            <SelectValue />

          </SelectTrigger>

          <SelectContent>

            <SelectItem value="ALL">
              All Status
            </SelectItem>

            <SelectItem value="COMPLETED">
              Completed
            </SelectItem>

            <SelectItem value="REJECTED">
              Rejected
            </SelectItem>

            <SelectItem value="ASSIGNED">
              Assigned
            </SelectItem>

            <SelectItem value="ACCEPTED">
              Accepted
            </SelectItem>

            <SelectItem value="STARTED">
              Started
            </SelectItem>

            <SelectItem value="ARRIVED">
              Arrived
            </SelectItem>

          </SelectContent>

        </Select>

      </div>

      <MissionHistoryList

        assignments={filteredAssignments}

      />

    </div>

  );

}