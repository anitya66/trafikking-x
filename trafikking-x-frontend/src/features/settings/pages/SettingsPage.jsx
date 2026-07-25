import PageHeader from "@/shared/components/PageHeader";

import EmptyState from "@/shared/components/EmptyState";

import {
  Settings,
} from "lucide-react";

export default function SettingsPage() {

  return (

    <div className="space-y-8">

      <PageHeader

        title="Settings"

        description="Manage your account preferences."

      />

      <EmptyState

        icon={<Settings className="h-14 w-14" />}

        title="Settings Coming Soon"

        description="Account preferences and application settings will be available in an upcoming update."

      />

    </div>

  );

}