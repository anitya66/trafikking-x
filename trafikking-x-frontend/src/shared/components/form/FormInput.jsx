import { Input } from "@/components/ui/input";

import FormError from "./FormError";

export default function FormInput({
  label,
  error,
  className = "",
  ...props
}) {
  return (
    <div className={className}>
      <label className="mb-2 block text-sm font-medium text-slate-300">
        {label}
      </label>

      <Input {...props} />

      <FormError error={error} />
    </div>
  );
}