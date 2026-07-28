import CitizenCard from "./CitizenCard";

import CitizenEmpty from "./CitizenEmpty";

export default function CitizenList({

  citizens,

}) {

  if (!citizens.length) {

    return <CitizenEmpty />;

  }

  return (

    <div className="grid gap-6 xl:grid-cols-2">

      {citizens.map((citizen) => (

        <CitizenCard

          key={citizen.id}

          citizen={citizen}

        />

      ))}

    </div>

  );

}