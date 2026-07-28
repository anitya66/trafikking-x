import { Settings } from "lucide-react";

import PageHeader from "@/shared/components/PageHeader";
import EmptyState from "@/shared/components/EmptyState";

export default function SettingsPage() {

  return (

    <div className="space-y-10">

      <PageHeader

        title="Settings"

        description="Manage your account preferences, notifications, security, and application configuration."

        icon={Settings}

      />

      <EmptyState

        icon={

          <div className="flex h-24 w-24 items-center justify-center rounded-3xl bg-primary/10">

            <Settings className="h-12 w-12 text-primary" />

          </div>

        }

        title="Settings Coming Soon"

        description="Advanced account preferences, notification controls, security options, appearance customization, and application settings will be available in an upcoming release."

      />

    </div>

  );

}