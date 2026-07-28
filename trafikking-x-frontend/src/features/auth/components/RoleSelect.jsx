import {
  Ambulance,
  Building2,
  Headphones,
  Shield,
  User,
} from "lucide-react";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const ROLES = [
  {
    value: "CITIZEN",
    label: "Citizen",
    icon: User,
  },
  {
    value: "POLICE",
    label: "Police",
    icon: Shield,
  },
  {
    value: "AMBULANCE",
    label: "Ambulance",
    icon: Ambulance,
  },
  {
    value: "HOSPITAL",
    label: "Hospital",
    icon: Building2,
  },
  {
    value: "DISPATCHER",
    label: "Dispatcher",
    icon: Headphones,
  },
];

export default function RoleSelect({
  value,
  onChange,
}) {
  return (
    <Select
      value={value}
      onValueChange={onChange}
    >
      <SelectTrigger className="h-12 w-full rounded-xl border-white/10 bg-white/5 backdrop-blur-sm transition-all hover:border-primary/40 focus:ring-primary/30">
        <SelectValue placeholder="Select your role" />
      </SelectTrigger>

      <SelectContent className="rounded-xl border-white/10 bg-background/95 backdrop-blur-xl">
        {ROLES.map((role) => {
          const Icon = role.icon;

          return (
            <SelectItem
              key={role.value}
              value={role.value}
              className="cursor-pointer rounded-lg py-3"
            >
              <div className="flex items-center gap-3">

                <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary/10">

                  <Icon className="h-4 w-4 text-primary" />

                </div>

                <span>{role.label}</span>

              </div>
            </SelectItem>
          );
        })}
      </SelectContent>
    </Select>
  );
}