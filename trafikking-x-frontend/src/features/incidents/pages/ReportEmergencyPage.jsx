import { useState } from "react";

import ReportEmergencyDialog from "../components/ReportEmergencyDialog";

export default function ReportEmergencyPage() {

  const [open, setOpen] = useState(true);

  return (

    <ReportEmergencyDialog
      open={open}
      onOpenChange={setOpen}
    />

  );

}