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
      <DialogContent className="sm:max-w-3xl">

        <DialogHeader>

          <DialogTitle>
            Incident Details
          </DialogTitle>

          <DialogDescription>
            Emergency incident information.
          </DialogDescription>

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

        <DialogFooter>

          <Button
            variant="outline"
            onClick={() => onOpenChange(false)}
          >
            Close
          </Button>

        </DialogFooter>

      </DialogContent>
    </Dialog>
  );
}