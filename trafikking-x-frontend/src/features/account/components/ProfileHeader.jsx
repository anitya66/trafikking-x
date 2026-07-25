import { BadgeCheck, Mail, ShieldCheck } from "lucide-react";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";

export default function ProfileHeader({ profile }) {

  return (

    <div className="overflow-hidden rounded-3xl border border-border bg-card">

      {/* Banner */}

      <div className="h-32 bg-gradient-to-r from-primary/30 via-primary/10 to-transparent" />

      <div className="relative px-8 pb-8">

        {/* Avatar */}

        <Avatar className="-mt-16 h-32 w-32 border-4 border-background shadow-xl">

          <AvatarImage
  src={
    profile?.profileImage
      ? `http://localhost:8080${profile.profileImage}`
      : undefined
  }
/>

          <AvatarFallback className="text-4xl font-bold">

            {profile?.fullName?.charAt(0)}

          </AvatarFallback>

        </Avatar>

        {/* User Info */}

        <div className="mt-5 flex flex-col gap-3 lg:flex-row lg:items-center lg:justify-between">

          <div>

            <h1 className="text-4xl font-bold tracking-tight">

              {profile?.fullName}

            </h1>

            <div className="mt-2 flex flex-wrap items-center gap-3">

              <Badge>

                {profile?.role}

              </Badge>

              <div className="flex items-center gap-2 text-muted-foreground">

                <Mail className="h-4 w-4" />

                {profile?.email}

              </div>

            </div>

          </div>

          <div className="flex flex-wrap gap-3">

            <Badge
              variant="secondary"
              className="gap-2"
            >
              <BadgeCheck className="h-4 w-4" />

              Verified

            </Badge>

            <Badge
              variant="secondary"
              className="gap-2"
            >
              <ShieldCheck className="h-4 w-4" />

              Secure Account

            </Badge>

          </div>

        </div>

      </div>

    </div>

  );

}