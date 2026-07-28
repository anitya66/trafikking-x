import {
  Building2,
} from "lucide-react";

import HospitalCard from "./HospitalCard";

export default function HospitalList({

  hospitals,

}) {

  if (!hospitals.length) {

    return (

      <div className="rounded-3xl border border-dashed border-border bg-card/40 p-16">

        <div className="flex flex-col items-center text-center">

          <div className="mb-6 rounded-3xl bg-primary/10 p-6">

            <Building2 className="h-12 w-12 text-primary" />

          </div>

          <h3 className="text-2xl font-bold">

            No Hospitals Found

          </h3>

          <p className="mt-3 max-w-md text-muted-foreground">

            There are currently no hospitals
            available in the emergency response
            network.

          </p>

        </div>

      </div>

    );

  }

  return (

    <div className="grid gap-6 xl:grid-cols-2">

      {hospitals.map((hospital) => (

        <HospitalCard

          key={hospital.id}

          hospital={hospital}

        />

      ))}

    </div>

  );

}