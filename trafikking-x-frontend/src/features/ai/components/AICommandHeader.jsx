import { BrainCircuit } from "lucide-react";

export default function AICommandHeader() {

  return (

    <div className="flex items-center justify-between">

      <div>

        <div className="flex items-center gap-3">

          <div className="rounded-xl bg-primary/10 p-3">

            <BrainCircuit className="h-7 w-7 text-primary" />

          </div>

          <div>

            <h1 className="text-4xl font-bold tracking-tight">

              AI Command Center

            </h1>

            <p className="text-muted-foreground">

              Intelligent emergency resource recommendation engine.

            </p>

          </div>

        </div>

      </div>

    </div>

  );

}