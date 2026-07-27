import DispatchCard from "./DispatchCard";

export default function DispatchList({

  dispatches,

}) {

  if (!dispatches.length) {

    return (

      <div className="rounded-xl border border-dashed p-12 text-center text-muted-foreground">

        No dispatches found.

      </div>

    );

  }

  return (

    <div className="space-y-5">

      {dispatches.map((dispatch) => (

        <DispatchCard

          key={dispatch.id}

          dispatch={dispatch}

        />

      ))}

    </div>

  );

}