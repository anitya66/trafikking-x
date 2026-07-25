import { Edit3, Mail, Phone, MapPin, Building2, FileText } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { useState } from "react";

import EditProfileDialog from "./EditProfileDialog";

export default function PersonalInfoCard({ profile }) {

    const [open, setOpen] = useState(false);

  const rows = [
    {
      icon: Mail,
      label: "Email",
      value: profile?.email || "-",
    },
    {
      icon: Phone,
      label: "Phone",
      value: profile?.phoneNumber || "-",
    },
    {
      icon: Building2,
      label: "Organization",
      value: profile?.organization || "Not provided",
    },
    {
      icon: MapPin,
      label: "Address",
      value: profile?.address || "Not provided",
    },
    {
      icon: FileText,
      label: "Bio",
      value: profile?.bio || "No bio added yet.",
    },
  ];

  return (
    <div className="rounded-3xl border border-border bg-card p-6">

      <div className="mb-6 flex items-center justify-between">

        <div>

          <h2 className="text-xl font-semibold">
            Personal Information
          </h2>

          <p className="text-sm text-muted-foreground">
            Manage your personal details.
          </p>

        </div>

       <Button
  onClick={() => setOpen(true)}
>
          <Edit3 className="mr-2 h-4 w-4" />
          Edit
        </Button>

      </div>

      <Separator className="mb-6" />

      <div className="space-y-6">

        {rows.map((row) => {

          const Icon = row.icon;

          return (
            <div
              key={row.label}
              className="flex items-start gap-4"
            >

              <div className="rounded-xl border border-border bg-background p-3">

                <Icon className="h-5 w-5 text-primary" />

              </div>

              <div>

                <p className="text-sm text-muted-foreground">
                  {row.label}
                </p>

                <p className="mt-1 font-medium">
                  {row.value}
                </p>

              </div>

            </div>
          );

        })}

      </div>

      <EditProfileDialog
  open={open}
  onOpenChange={setOpen}
  profile={profile}
/>

    </div>
  );

}