import { HeartHandshake, Phone } from "lucide-react";

import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function EmergencyContactsWidget() {
  return (
    <Card className="group relative overflow-hidden">

      <div className="absolute inset-0 bg-gradient-to-br from-red-500/10 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

      <CardHeader className="relative">
        <CardTitle className="flex items-center gap-2">
          <HeartHandshake className="h-5 w-5 text-red-500" />
          Emergency Contacts
        </CardTitle>
      </CardHeader>

      <CardContent className="relative">

        <div className="rounded-xl border border-dashed p-8 text-center">

          <Phone className="mx-auto mb-4 h-10 w-10 text-muted-foreground" />

          <h3 className="text-lg font-semibold">
            No Contacts Added
          </h3>

          <p className="mt-2 text-sm text-muted-foreground">
            Add trusted emergency contacts to notify them quickly during an emergency.
          </p>

        </div>

      </CardContent>

    </Card>
  );
}