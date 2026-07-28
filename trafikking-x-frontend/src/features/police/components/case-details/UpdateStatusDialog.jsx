import { useState } from "react";

import {
  RefreshCcw,
  FileText,
  Shield,
} from "lucide-react";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
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

      <DialogContent className="overflow-hidden rounded-3xl sm:max-w-xl">

        {/* Gradient Accent */}

        <div className="h-1 bg-gradient-to-r from-primary via-cyan-500 to-violet-500" />

        <DialogHeader className="space-y-4">

          <div className="flex items-center gap-4">

            <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10">

              <RefreshCcw className="h-7 w-7 text-primary" />

            </div>

            <div>

              <DialogTitle className="text-2xl">

                Update Police Case

              </DialogTitle>

              <DialogDescription>

                Update the current police operation
                and notify command center.

              </DialogDescription>

            </div>

          </div>

        </DialogHeader>

        <div className="space-y-6 py-2">

          {/* Status */}

          <div>

            <label className="mb-3 flex items-center gap-2 text-sm font-medium">

              <Shield className="h-4 w-4 text-primary" />

              Case Status

            </label>

            <Select
              value={status}
              onValueChange={setStatus}
            >

              <SelectTrigger className="rounded-2xl">

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

          </div>

          {/* Notes */}

          <div>

            <label className="mb-3 flex items-center gap-2 text-sm font-medium">

              <FileText className="h-4 w-4 text-primary" />

              Officer Notes

            </label>

            <Textarea
              rows={5}
              value={notes}
              placeholder="Add investigation updates, field observations, officer remarks, evidence details..."
              className="resize-none rounded-2xl"
              onChange={(e) =>
                setNotes(e.target.value)
              }
            />

            <p className="mt-2 text-xs text-muted-foreground">

              These updates will be visible to
              dispatchers and other authorized personnel.

            </p>

          </div>

        </div>

        <DialogFooter className="flex-col-reverse gap-3 sm:flex-row sm:justify-end">

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
            className="min-w-[170px] gap-2"
            onClick={handleSubmit}
          >

            <RefreshCcw className="h-4 w-4" />

            {loading
              ? "Updating..."
              : "Update Status"}

          </Button>

        </DialogFooter>

      </DialogContent>

    </Dialog>

  );

}