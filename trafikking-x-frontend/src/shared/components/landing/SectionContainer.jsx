export default function SectionContainer({
  id,
  className = "",
  children,
}) {
  return (
    <section
      id={id}
      className={`relative overflow-hidden py-28 ${className}`}
    >
      <div className="mx-auto w-full max-w-7xl px-6">
        {children}
      </div>
    </section>
  );
}