import MissionHistoryCard from "./MissionHistoryCard";

export default function MissionHistoryList({

  assignments = [],

}) {

  if (assignments.length === 0) {

    return (

      <div className="rounded-2xl border border-dashed p-16 text-center">

        <h3 className="text-lg font-semibold">

          No Mission History

        </h3>

        <p className="mt-2 text-sm text-muted-foreground">

          Completed and rejected missions will appear here.

        </p>

      </div>

    );

  }

  return (

    <div className="space-y-6">

      {assignments.map((assignment) => (

        <MissionHistoryCard

          key={assignment.assignmentId}

          assignment={assignment}

        />

      ))}

    </div>

  );

}