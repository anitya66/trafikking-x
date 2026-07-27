import PoliceCard from "./PoliceCard";

export default function PoliceList({

  stations,

}) {

  if (!stations.length) {

    return (

      <div className="rounded-xl border border-dashed p-12 text-center text-muted-foreground">

        No police stations found.

      </div>

    );

  }

  return (

    <div className="space-y-5">

      {stations.map((station) => (

        <PoliceCard

          key={station.id}

          station={station}

        />

      ))}

    </div>

  );

}