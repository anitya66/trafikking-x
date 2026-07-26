import HospitalHistoryCard
  from "./HospitalHistoryCard";

export default function HospitalHistoryList({

  history,

}) {

  if (!history.length) {

    return (

      <div className="rounded-xl border border-dashed p-12 text-center text-muted-foreground">

        No completed hospital cases.

      </div>

    );

  }

  return (

    <div className="space-y-5">

      {history.map((item) => (

        <HospitalHistoryCard

          key={item.id}

          history={item}

        />

      ))}

    </div>

  );

}