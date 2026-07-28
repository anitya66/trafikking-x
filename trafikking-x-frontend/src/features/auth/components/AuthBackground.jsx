import { motion } from "framer-motion";

export default function AuthBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden">

      {/* Base Background */}

      <div className="absolute inset-0 bg-[#050912]" />

      {/* Radial Gradient */}

      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.10),transparent_70%)]" />

      {/* Grid */}

      <div
        className="absolute inset-0 opacity-[0.08]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255,255,255,0.06) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.06) 1px, transparent 1px)
          `,
          backgroundSize: "48px 48px",
        }}
      />

      {/* Left Glow */}

      <motion.div
        animate={{
          scale: [1, 1.15, 1],
          opacity: [0.28, 0.55, 0.28],
        }}
        transition={{
          repeat: Infinity,
          duration: 9,
          ease: "easeInOut",
        }}
        className="absolute -left-48 -top-48 h-[500px] w-[500px] rounded-full bg-blue-600 blur-[150px] md:h-[700px] md:w-[700px]"
      />

      {/* Right Glow */}

      <motion.div
        animate={{
          scale: [1.1, 0.95, 1.1],
          opacity: [0.18, 0.42, 0.18],
        }}
        transition={{
          repeat: Infinity,
          duration: 10,
          ease: "easeInOut",
        }}
        className="absolute -bottom-52 -right-40 h-[450px] w-[450px] rounded-full bg-cyan-500 blur-[150px] md:h-[650px] md:w-[650px]"
      />

      {/* Pulse Rings */}

      {[0, 1, 2].map((delay) => (

        <motion.div
          key={delay}
          animate={{
            scale: [0.8, 1.8],
            opacity: [0.35, 0],
          }}
          transition={{
            repeat: Infinity,
            duration: 4,
            delay: delay * 1.3,
            ease: "easeOut",
          }}
          className="absolute left-1/2 top-1/2 h-60 w-60 -translate-x-1/2 -translate-y-1/2 rounded-full border border-primary/30"
        />

      ))}

      {/* Floating Particles */}

      {[...Array(14)].map((_, index) => (

        <motion.div
          key={index}
          className="absolute h-1.5 w-1.5 rounded-full bg-cyan-300/60"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            y: [-12, 12, -12],
            opacity: [0.2, 1, 0.2],
          }}
          transition={{
            duration: 4 + Math.random() * 4,
            repeat: Infinity,
            delay: Math.random() * 3,
          }}
        />

      ))}

      {/* Vignette */}

      <div className="absolute inset-0 bg-[radial-gradient(circle,transparent_55%,rgba(0,0,0,0.6)_100%)]" />

    </div>
  );
}