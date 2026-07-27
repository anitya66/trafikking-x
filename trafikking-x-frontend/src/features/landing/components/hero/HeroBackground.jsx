export default function HeroBackground() {
  return (
    <>
      {/* Base Background */}

      <div className="absolute inset-0 bg-[#060816]" />

      {/* Top Radial Gradient */}

      <div
        className="absolute inset-0 opacity-90"
        style={{
          background:
            "radial-gradient(circle at top center, rgba(59,130,246,.14), transparent 45%)",
        }}
      />

      {/* Left Primary Glow */}

      <div className="absolute -left-28 top-16 h-[34rem] w-[34rem] rounded-full bg-blue-500/18 blur-[180px]" />

      {/* Right Cyan Glow */}

      <div className="absolute -right-24 top-32 h-[30rem] w-[30rem] rounded-full bg-cyan-400/14 blur-[180px]" />

      {/* Bottom Accent */}

      <div className="absolute bottom-[-10rem] left-1/2 h-[26rem] w-[26rem] -translate-x-1/2 rounded-full bg-indigo-500/12 blur-[170px]" />

      {/* Soft Red Accent */}

      <div className="absolute bottom-10 left-12 h-64 w-64 rounded-full bg-red-500/8 blur-[140px]" />

      {/* Noise / Grid */}

      <div
        className="absolute inset-0 opacity-[0.045]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255,255,255,.12) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,.12) 1px, transparent 1px)
          `,
          backgroundSize: "42px 42px",
        }}
      />

      {/* Bottom Fade */}

      <div
        className="absolute inset-x-0 bottom-0 h-48"
        style={{
          background:
            "linear-gradient(to top, rgba(6,8,22,1), rgba(6,8,22,0))",
        }}
      />

      {/* Vignette */}

      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(circle at center, transparent 45%, rgba(6,8,22,.45) 100%)",
        }}
      />
    </>
  );
}