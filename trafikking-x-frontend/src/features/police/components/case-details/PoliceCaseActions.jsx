import { useState } from "react";

import {
  CheckCircle2,
  RefreshCcw,
  Shield,
} from "lucide-react";

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

    <div className="rounded-3xl border bg-card p-6">

      {/* Header */}

      <div className="mb-6 flex items-center gap-3">

        <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10">

          <Shield className="h-6 w-6 text-primary" />

        </div>

        <div>

          <h2 className="text-xl font-semibold">

            Police Actions

          </h2>

          <p className="text-sm text-muted-foreground">

            Manage this police case workflow.

          </p>

        </div>

      </div>

      {/* Action Buttons */}

      <div className="flex flex-col gap-4 sm:flex-row">

        {policeCase.status !== "ACCEPTED" && (

          <Button
            className="flex-1 gap-2"
            disabled={acceptLoading}
            onClick={() => setAcceptOpen(true)}
          >

            <CheckCircle2 className="h-4 w-4" />

            {acceptLoading
              ? "Accepting..."
              : "Accept Case"}

          </Button>

        )}

        <Button
          variant="outline"
          className="flex-1 gap-2"
          disabled={updateLoading}
          onClick={() => setUpdateOpen(true)}
        >

          <RefreshCcw className="h-4 w-4" />

          {updateLoading
            ? "Updating..."
            : "Update Status"}

        </Button>

      </div>

      {/* Dialogs */}

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

    </div>

  );

}