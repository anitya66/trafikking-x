import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

import IncidentTimeline from "./IncidentTimeline";
import { Siren } from "lucide-react";

import IncidentHeader from "./IncidentHeader";
import IncidentLocationCard from "./IncidentLocationCard";
import IncidentDescriptionCard from "./IncidentDescriptionCard";
import IncidentMetaCard from "./IncidentMetaCard";



import { Button } from "@/components/ui/button";
import { useIncident } from "../hooks/useIncident";

export default function IncidentDetailsDialog({
  open,
  onOpenChange,
  incident,
}) {

 const {
  data,
  isLoading,
  isError,
} = useIncident(incident?.id);

if (!incident) return null;

if (isLoading) {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent>
        <div className="py-10 text-center">
          Loading incident...
        </div>
      </DialogContent>
    </Dialog>
  );
}



if (isError) {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent>
        <div className="py-10 text-center text-red-500">
          Failed to load incident.
        </div>
      </DialogContent>
    </Dialog>
  );
}



  return (
    <Dialog
      open={open}
      onOpenChange={onOpenChange}
    >
      <DialogContent className="max-h-[92vh] overflow-y-auto sm:max-w-4xl">
<DialogHeader className="space-y-6 border-b border-border pb-6">

  <div className="flex items-start justify-between">

    <div>

      <div className="mb-4 inline-flex rounded-full bg-primary/10 px-3 py-1">

        <span className="text-xs font-semibold uppercase tracking-wider text-primary">

          Live Emergency

        </span>

      </div>

      <DialogTitle className="text-3xl font-bold">

        Incident Command Center

      </DialogTitle>

      <DialogDescription className="mt-3 max-w-2xl leading-7">

        View live emergency information,
        AI recommendations and dispatch
        progress for this incident.

      </DialogDescription>

    </div>

    <div className="hidden rounded-2xl bg-primary/10 p-5 lg:block">

      🚨

    </div>

  </div>

</DialogHeader>

       <div className="space-y-6">

  <IncidentHeader incident={data} />

  <div className="rounded-xl border p-5">

    <div className="flex items-center gap-3">

      <Siren className="h-5 w-5 text-primary" />

      <h3 className="font-semibold">

        {data?.incidentType?.replaceAll("_", " ")}

      </h3>

    </div>

  </div>

  <IncidentLocationCard incident={data} />

  <IncidentDescriptionCard incident={data} />

  <IncidentMetaCard incident={data} />

  <IncidentTimeline incident={data} />

</div>

       <DialogFooter className="border-t border-border pt-6">

  <Button
    variant="outline"
    size="lg"
    onClick={() => onOpenChange(false)}
  >
    Close Incident
  </Button>

</DialogFooter>

      </DialogContent>
    </Dialog>
  );
}