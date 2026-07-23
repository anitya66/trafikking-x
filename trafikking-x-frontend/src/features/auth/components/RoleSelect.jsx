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
    icon: "🧑",
  },
  {
    value: "POLICE",
    label: "Police",
    icon: "👮",
  },
  {
    value: "AMBULANCE",
    label: "Ambulance",
    icon: "🚑",
  },
  {
    value: "HOSPITAL",
    label: "Hospital",
    icon: "🏥",
  },
  {
    value: "DISPATCHER",
    label: "Dispatcher",
    icon: "🎧",
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
      <SelectTrigger className="h-11 w-full">
        <SelectValue placeholder="Select your role" />
      </SelectTrigger>

      <SelectContent>
        {ROLES.map((role) => (
          <SelectItem
            key={role.value}
            value={role.value}
          >
            <span className="flex items-center gap-2">
              <span>{role.icon}</span>

              {role.label}
            </span>
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
}