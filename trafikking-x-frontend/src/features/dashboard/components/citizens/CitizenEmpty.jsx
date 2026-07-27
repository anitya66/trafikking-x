import { Users } from "lucide-react";

export default function CitizenEmpty() {

  return (

    <div className="flex flex-col items-center justify-center rounded-xl border border-dashed p-16 text-center">

      <Users className="mb-4 h-12 w-12 text-muted-foreground" />

      <h3 className="text-lg font-semibold">

        No Citizens Found

      </h3>

      <p className="mt-2 text-sm text-muted-foreground">

        There are no registered citizens.

      </p>

    </div>

  );

}