import { useState } from "react";

import { Button } from "@/components/ui/button";

import AcceptCaseDialog from "./AcceptCaseDialog";
import UpdateStatusDialog from "./UpdateStatusDialog";

export default function PoliceCaseActions({
  policeCase,
  acceptLoading,
  updateLoading,
  onAccept,
  onUpdate,
}) {

  const [acceptOpen, setAcceptOpen] = useState(false);

  const [updateOpen, setUpdateOpen] = useState(false);

  return (

    <>

      <div className="flex flex-wrap gap-4">

        {policeCase.status !== "ACCEPTED" && (

          <Button
            onClick={() => setAcceptOpen(true)}
          >
            Accept Case
          </Button>

        )}

        <Button
          variant="outline"
          onClick={() => setUpdateOpen(true)}
        >
          Update Status
        </Button>

      </div>

      <AcceptCaseDialog
        open={acceptOpen}
        onOpenChange={setAcceptOpen}
        loading={acceptLoading}
        onAccept={onAccept}
      />

      <UpdateStatusDialog
        open={updateOpen}
        onOpenChange={setUpdateOpen}
        loading={updateLoading}
        onUpdate={onUpdate}
      />

    </>

  );

}