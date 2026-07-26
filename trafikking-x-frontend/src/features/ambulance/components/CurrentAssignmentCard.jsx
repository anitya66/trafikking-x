import {
  AlertTriangle,
  User,
  Ambulance,
  ClipboardList,
  MapPin,
  ShieldAlert,
} from "lucide-react";

import { Button } from "@/components/ui/button";

import { useAcceptAssignment } from "@/features/assignment/hooks/useAcceptAssignment";
import { useRejectAssignment } from "@/features/assignment/hooks/useRejectAssignment";
import { useStartJourney } from "@/features/assignment/hooks/useStartJourney";
import { useMarkArrived } from "@/features/assignment/hooks/useMarkArrived";
import { useCompleteAssignment } from "@/features/assignment/hooks/useCompleteAssignment";

export default function CurrentAssignmentCard({
  assignment,
}) {

  const acceptMutation =
    useAcceptAssignment();

  const rejectMutation =
    useRejectAssignment();

  const startMutation =
    useStartJourney();

  const arrivedMutation =
    useMarkArrived();

  const completeMutation =
    useCompleteAssignment();

  function handleAccept() {

    acceptMutation.mutate({

      assignmentId:
        assignment.assignmentId,

      remarks:
        "Assignment accepted."

    });

  }

  function handleReject() {

    rejectMutation.mutate({

      assignmentId:
        assignment.assignmentId,

      remarks:
        "Assignment rejected."

    });

  }

  function handleStart() {

    startMutation.mutate({

      assignmentId:
        assignment.assignmentId,

      remarks:
        "Journey started."

    });

  }

  function handleArrived() {

    arrivedMutation.mutate({

      assignmentId:
        assignment.assignmentId,

      remarks:
        "Reached destination."

    });

  }

  function handleComplete() {

    completeMutation.mutate({

      assignmentId:
        assignment.assignmentId,

      remarks:
        "Mission completed."

    });

  }

  const statusColors = {

    PENDING:
      "bg-amber-500/15 text-amber-400 border-amber-500/30",

    ACCEPTED:
      "bg-sky-500/15 text-sky-400 border-sky-500/30",

    EN_ROUTE:
      "bg-violet-500/15 text-violet-400 border-violet-500/30",

    ARRIVED:
      "bg-emerald-500/15 text-emerald-400 border-emerald-500/30",

    COMPLETED:
      "bg-green-500/15 text-green-400 border-green-500/30",

    REJECTED:
      "bg-red-500/15 text-red-400 border-red-500/30",

  };

  if (!assignment) {

    return (

      <div className="rounded-3xl border border-border bg-card p-8">

        <h2 className="text-2xl font-bold">

          Current Assignment

        </h2>

        <p className="mt-3 text-muted-foreground">

          No active mission available.

        </p>

      </div>

    );

  }
  return (

  <div className="space-y-6">

    <div className="relative overflow-hidden rounded-3xl border border-blue-500/20 bg-gradient-to-br from-slate-950 via-slate-900 to-blue-950 p-8 shadow-2xl">

      <div className="absolute -right-10 -top-10 h-52 w-52 rounded-full bg-blue-500/10 blur-3xl" />

      <div className="absolute -bottom-10 -left-10 h-52 w-52 rounded-full bg-cyan-500/10 blur-3xl" />

      <div className="relative flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">

        <div>

          <div className="mb-4 inline-flex items-center rounded-full border border-cyan-500/30 bg-cyan-500/10 px-4 py-2">

            <Ambulance className="mr-2 h-5 w-5 text-cyan-400" />

            <span className="text-xs font-bold tracking-[0.3em] text-cyan-300">

              ACTIVE MISSION

            </span>

          </div>

          <h1 className="text-4xl font-black tracking-tight text-white">

            {assignment.incidentNumber}

          </h1>

          <p className="mt-3 text-xl font-semibold capitalize text-slate-200">

            {assignment.emergencyType?.replaceAll("_", " ")}

          </p>

          <p className="mt-2 text-slate-400">

            Emergency reported by

            <span className="ml-2 font-semibold text-white">

              {assignment.citizenName}

            </span>

          </p>

        </div>

        <div
          className={`rounded-2xl border px-8 py-6 text-center backdrop-blur-xl ${statusColors[assignment.status]}`}
        >

          <p className="text-xs uppercase tracking-[0.3em]">

            Mission Status

          </p>

          <h2 className="mt-2 text-3xl font-black">

            {assignment.status}

          </h2>

        </div>

      </div>

    </div>

    <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">

      <div className="rounded-2xl border border-white/10 bg-card/60 p-6 backdrop-blur-xl transition-all hover:-translate-y-1 hover:shadow-xl">

        <ClipboardList className="mb-4 h-8 w-8 text-cyan-400" />

        <p className="text-sm text-muted-foreground">

          Incident

        </p>

        <h3 className="mt-2 text-xl font-bold">

          {assignment.incidentNumber}

        </h3>

      </div>

      <div className="rounded-2xl border border-white/10 bg-card/60 p-6 backdrop-blur-xl transition-all hover:-translate-y-1 hover:shadow-xl">

        <User className="mb-4 h-8 w-8 text-green-400" />

        <p className="text-sm text-muted-foreground">

          Citizen

        </p>

        <h3 className="mt-2 text-xl font-bold">

          {assignment.citizenName}

        </h3>

      </div>

      <div className="rounded-2xl border border-white/10 bg-card/60 p-6 backdrop-blur-xl transition-all hover:-translate-y-1 hover:shadow-xl">

        <ShieldAlert className="mb-4 h-8 w-8 text-red-400" />

        <p className="text-sm text-muted-foreground">

          Emergency

        </p>

        <h3 className="mt-2 text-xl font-bold capitalize">

          {assignment.emergencyType?.replaceAll("_", " ")}

        </h3>

      </div>

      <div className="rounded-2xl border border-white/10 bg-card/60 p-6 backdrop-blur-xl transition-all hover:-translate-y-1 hover:shadow-xl">

        <MapPin className="mb-4 h-8 w-8 text-yellow-400" />

        <p className="text-sm text-muted-foreground">

          Vehicle

        </p>

        <h3 className="mt-2 text-xl font-bold">

          {assignment.vehicleNumber}

        </h3>

      </div>

    </div>
    <div className="space-y-8">

  <div>

    <div className="mb-6 flex items-center justify-between">

      {[
        "PENDING",
        "ACCEPTED",
        "EN_ROUTE",
        "ARRIVED",
        "COMPLETED",
      ].map((step, index) => {

        const currentIndex = [
          "PENDING",
          "ACCEPTED",
          "EN_ROUTE",
          "ARRIVED",
          "COMPLETED",
        ].indexOf(assignment.status);

        const active = index <= currentIndex;

        return (

          <div
            key={step}
            className="flex flex-1 items-center"
          >

            <div className="flex flex-col items-center">

              <div
                className={`flex h-12 w-12 items-center justify-center rounded-full border-2 font-bold transition-all duration-300 ${
                  active
                    ? "border-cyan-400 bg-cyan-500 text-white shadow-lg shadow-cyan-500/40"
                    : "border-border bg-background text-muted-foreground"
                }`}
              >

                {index + 1}

              </div>

              <p className="mt-3 text-xs font-medium">

                {step.replaceAll("_", " ")}

              </p>

            </div>

            {index !== 4 && (

              <div
                className={`mx-3 h-1 flex-1 rounded-full ${
                  active
                    ? "bg-cyan-400"
                    : "bg-border"
                }`}
              />

            )}

          </div>

        );

      })}

    </div>

  </div>

  <div className="flex flex-wrap gap-4">

    {assignment.status === "PENDING" && (

      <>

        <Button
          size="lg"
          className="flex-1"
          onClick={handleAccept}
          disabled={acceptMutation.isPending}
        >

          {acceptMutation.isPending
            ? "Accepting..."
            : "✅ Accept Mission"}

        </Button>

        <Button
          size="lg"
          variant="destructive"
          className="flex-1"
          onClick={handleReject}
          disabled={rejectMutation.isPending}
        >

          {rejectMutation.isPending
            ? "Rejecting..."
            : "❌ Reject Mission"}

        </Button>

      </>

    )}

    {assignment.status === "ACCEPTED" && (

      <Button
        size="lg"
        className="w-full"
        onClick={handleStart}
        disabled={startMutation.isPending}
      >

        {startMutation.isPending
          ? "Starting..."
          : "🚑 Start Journey"}

      </Button>

    )}

    {assignment.status === "EN_ROUTE" && (

      <Button
        size="lg"
        className="w-full"
        onClick={handleArrived}
        disabled={arrivedMutation.isPending}
      >

        {arrivedMutation.isPending
          ? "Updating..."
          : "📍 Mark Arrived"}

      </Button>

    )}

    {assignment.status === "ARRIVED" && (

      <Button
        size="lg"
        className="w-full"
        onClick={handleComplete}
        disabled={completeMutation.isPending}
      >

        {completeMutation.isPending
          ? "Completing..."
          : "🏁 Complete Mission"}

      </Button>

    )}

    {assignment.status === "COMPLETED" && (

      <div className="w-full rounded-2xl border border-green-500/30 bg-green-500/10 p-8 text-center">

        <h2 className="text-3xl font-black text-green-400">

          🎉 Mission Completed

        </h2>

        <p className="mt-2 text-muted-foreground">

          Waiting for the next emergency assignment...

        </p>

      </div>

    )}

  </div>

</div>

    </div>

  );

}
