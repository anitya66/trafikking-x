import { Button } from "@/components/ui/button";

export default function EmptyState({

  icon,

  title,

  description,

  action,

}) {

  return (

    <div className="rounded-3xl border border-dashed bg-card/30 py-20 text-center">

      {icon && (

        <div className="mb-6 flex justify-center">

          {icon}

        </div>

      )}

      <h3 className="text-2xl font-semibold">

        {title}

      </h3>

      {description && (

        <p className="mx-auto mt-3 max-w-md text-muted-foreground">

          {description}

        </p>

      )}

      {action && (

        <div className="mt-8">

          {action}

        </div>

      )}

    </div>

  );

}