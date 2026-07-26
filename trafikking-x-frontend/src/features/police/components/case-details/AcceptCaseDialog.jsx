import { useState } from "react";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from "@/components/ui/dialog";

import { Button } from "@/components/ui/button";

import { Textarea } from "@/components/ui/textarea";

export default function AcceptCaseDialog({
  open,
  onOpenChange,
  loading,
  onAccept,
}) {

  const [notes, setNotes] = useState("");

  function handleAccept() {

    onAccept(notes);

    setNotes("");

    onOpenChange(false);

  }

  return (

    <Dialog
      open={open}
      onOpenChange={onOpenChange}
    >

      <DialogContent>

        <DialogHeader>

          <DialogTitle>

            Accept Police Case

          </DialogTitle>

        </DialogHeader>

        <div className="space-y-4">

          <Textarea
            placeholder="Enter notes..."
            value={notes}
            onChange={(e) =>
              setNotes(e.target.value)
            }
          />

        </div>

        <DialogFooter>

          <Button
            variant="outline"
            onClick={() =>
              onOpenChange(false)
            }
          >
            Cancel
          </Button>

          <Button
            disabled={loading}
            onClick={handleAccept}
          >
            {loading
              ? "Accepting..."
              : "Accept Case"}
          </Button>

        </DialogFooter>

      </DialogContent>

    </Dialog>

  );

}