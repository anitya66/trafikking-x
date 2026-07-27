import AmbulanceCard from "./AmbulanceCard";

export default function AmbulanceList({

  ambulances,

}) {

  if (!ambulances.length) {

    return (

      <div className="rounded-xl border border-dashed p-12 text-center text-muted-foreground">

        No ambulances available.

      </div>

    );

  }

  return (

    <div className="space-y-5">

      {ambulances.map((ambulance) => (

        <AmbulanceCard

          key={ambulance.id}

          ambulance={ambulance}

        />

      ))}

    </div>

  );

}