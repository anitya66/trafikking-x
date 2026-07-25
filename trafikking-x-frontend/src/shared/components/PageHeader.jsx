export default function PageHeader({

  title,

  description,

  actions,

}) {

  return (

    <div className="flex flex-col gap-4 border-b border-border pb-6 lg:flex-row lg:items-center lg:justify-between">

      <div>

        <h1 className="text-3xl font-bold tracking-tight">

          {title}

        </h1>

        {description && (

          <p className="mt-2 text-muted-foreground">

            {description}

          </p>

        )}

      </div>

      {actions && (

        <div className="flex items-center gap-3">

          {actions}

        </div>

      )}

    </div>

  );

}