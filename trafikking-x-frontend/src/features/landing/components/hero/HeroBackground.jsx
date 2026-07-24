export default function HeroBackground() {
  return (
    <>
      {/* Base */}

      <div className="absolute inset-0 bg-[#060816]" />

      {/* Blue Glow */}

      <div className="absolute left-0 top-20 h-[500px] w-[500px] rounded-full bg-blue-600/20 blur-[160px]" />

      {/* Cyan */}

      <div className="absolute right-0 top-40 h-[450px] w-[450px] rounded-full bg-cyan-500/15 blur-[160px]" />

      {/* Red */}

      <div className="absolute bottom-0 left-1/2 h-[350px] w-[350px] -translate-x-1/2 rounded-full bg-red-500/10 blur-[140px]" />

      {/* Grid */}

      <div
        className="absolute inset-0 opacity-[0.06]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,.12) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.12) 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      />
    </>
  );
}