import { useState } from "react";

import {
  ShieldCheck,
  FileText,
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

      <DialogContent className="sm:max-w-xl rounded-3xl overflow-hidden">

        {/* Top Accent */}

        <div className="h-1 bg-gradient-to-r from-primary via-cyan-500 to-blue-500" />

        <DialogHeader className="space-y-4">

          <div className="flex items-center gap-4">

            <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10">

              <ShieldCheck className="h-7 w-7 text-primary" />

            </div>

            <div>

              <DialogTitle className="text-2xl">

                Accept Police Case

              </DialogTitle>

              <DialogDescription>

                Confirm this assignment and notify
                your response team.

              </DialogDescription>

            </div>

          </div>

        </DialogHeader>

        <div className="space-y-5 py-2">

          <div>

            <label className="mb-3 flex items-center gap-2 text-sm font-medium">

              <FileText className="h-4 w-4 text-primary" />

              Officer Notes

            </label>

            <Textarea
              rows={5}
              placeholder="Add deployment notes, officer instructions, checkpoints or any operational remarks..."
              value={notes}
              onChange={(e) =>
                setNotes(e.target.value)
              }
              className="resize-none rounded-2xl"
            />

            <p className="mt-2 text-xs text-muted-foreground">

              These notes will be visible to the
              responding officers and dispatcher.

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
            onClick={handleAccept}
            className="min-w-[170px]"
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