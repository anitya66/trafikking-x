import AppButton from "@/shared/components/AppButton";

export default function DesignSystemPage() {
  return (
    <main className="page-container section-spacing">
      <div className="content-spacing">
        <h1 className="text-4xl font-bold tracking-tight">
          TRAFIKKING X Design System
        </h1>

        <p className="text-muted-foreground">
          Internal component showcase.
        </p>

        <div className="glass-card rounded-xl p-8">
          <div className="flex flex-wrap gap-4">
            <AppButton>
              Primary Button
            </AppButton>

            <AppButton variant="secondary">
              Secondary
            </AppButton>

            <AppButton loading>
              Loading
            </AppButton>

            <AppButton disabled>
              Disabled
            </AppButton>
          </div>
        </div>
      </div>
    </main>
  );
}