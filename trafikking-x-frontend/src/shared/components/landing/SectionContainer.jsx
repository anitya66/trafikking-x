import { cn } from "@/lib/utils";

export default function SectionContainer({
  id,
  className,
  children,
}) {
  return (
    <section
      id={id}
      className={cn(
        "relative overflow-hidden py-20 sm:py-24 lg:py-28",
        className
      )}
    >
      <div className="page-container">
        {children}
      </div>
    </section>
  );
}