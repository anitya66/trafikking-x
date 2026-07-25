import { useState } from "react";

import {

  Shield,

  Lock,

} from "lucide-react";

import { Button } from "@/components/ui/button";

import ChangePasswordDialog from "./ChangePasswordDialog";

export default function SecurityCard() {

  const [open, setOpen] = useState(false);

  return (

    <>

      <div className="rounded-3xl border border-border bg-card p-6">

        <div className="flex items-center justify-between">

          <div>

            <h2 className="text-xl font-semibold">

              Security

            </h2>

            <p className="text-sm text-muted-foreground">

              Protect your account credentials.

            </p>

          </div>

          <Shield className="h-7 w-7 text-primary" />

        </div>

        <div className="mt-8 rounded-2xl border border-border bg-background p-5">

          <div className="flex items-center justify-between">

            <div>

              <div className="flex items-center gap-2">

                <Lock className="h-5 w-5" />

                <span className="font-semibold">

                  Password

                </span>

              </div>

              <p className="mt-2 text-sm text-muted-foreground">

                Last changed recently

              </p>

            </div>

            <Button
              onClick={() => setOpen(true)}
            >
              Change Password
            </Button>

          </div>

        </div>

      </div>

      <ChangePasswordDialog
        open={open}
        onOpenChange={setOpen}
      />

    </>

  );

}