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

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export default function UpdateStatusDialog({
  open,
  onOpenChange,
  loading,
  onUpdate,
}) {

  const [status, setStatus] =
    useState("EN_ROUTE");

  const [notes, setNotes] =
    useState("");

  function handleSubmit() {

    onUpdate({
      status,
      notes,
    });

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

            Update Police Case

          </DialogTitle>

        </DialogHeader>

        <div className="space-y-4">

          <Select
            value={status}
            onValueChange={setStatus}
          >

            <SelectTrigger>

              <SelectValue />

            </SelectTrigger>

            <SelectContent>

              <SelectItem value="EN_ROUTE">
                En Route
              </SelectItem>

              <SelectItem value="ON_SCENE">
                On Scene
              </SelectItem>

              <SelectItem value="INVESTIGATION_STARTED">
                Investigation Started
              </SelectItem>

              <SelectItem value="CASE_CLOSED">
                Case Closed
              </SelectItem>

            </SelectContent>

          </Select>

          <Textarea
            placeholder="Update notes..."
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
            onClick={handleSubmit}
          >
            {loading
              ? "Updating..."
              : "Update"}
          </Button>

        </DialogFooter>

      </DialogContent>

    </Dialog>

  );

}