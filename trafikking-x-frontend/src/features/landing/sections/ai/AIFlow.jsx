import { BrainCircuit } from "lucide-react";

const flow = [
  "Emergency",
  "AI Analysis",
  "Prediction",
  "Dispatch",
  "Tracking",
  "Resolved",
];

export default function AIFlow() {
  return (
    <div className="my-16 hidden items-center justify-center xl:flex">

      {flow.map((item, index) => {

        const active = item === "AI Analysis";

        return (
          <div
            key={item}
            className="flex items-center"
          >

            {/* Node */}

            <div
              className={`relative flex min-w-[150px] flex-col items-center`}

            >
              {active && (
                <div className="absolute -top-10 flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-3 py-1">

                  <BrainCircuit className="h-4 w-4 text-primary" />

                  <span className="text-xs font-semibold uppercase tracking-wider text-primary">
                    AI Core
                  </span>

                </div>
              )}

              <div
                className={`flex h-14 w-14 items-center justify-center rounded-full border transition-all duration-300 ${
                  active
                    ? "border-primary/30 bg-primary/10 shadow-[0_0_30px_rgba(59,130,246,.35)]"
                    : "border-white/10 bg-white/[0.04]"
                }`}
              >

                <span className="text-sm font-bold text-white">
                  {index + 1}
                </span>

              </div>

              <p className="mt-4 whitespace-nowrap text-sm font-medium text-slate-300">
                {item}
              </p>

            </div>

            {/* Connector */}

            {index !== flow.length - 1 && (
              <div className="mx-4 h-px w-20 bg-gradient-to-r from-primary/30 to-white/10" />
            )}

          </div>
        );
      })}

    </div>
  );
}