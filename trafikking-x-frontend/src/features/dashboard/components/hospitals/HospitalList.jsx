import HospitalCard from "./HospitalCard";

export default function HospitalList({

  hospitals,

}) {

  if (!hospitals.length) {

    return (

      <div className="rounded-xl border border-dashed p-12 text-center text-muted-foreground">

        No hospitals found.

      </div>

    );

  }

  return (

    <div className="space-y-5">

      {hospitals.map((hospital) => (

        <HospitalCard

          key={hospital.id}

          hospital={hospital}

        />

      ))}

    </div>

  );

}