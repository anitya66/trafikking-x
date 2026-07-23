import { motion } from "framer-motion";

export default function AuthBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-[#060b14]" />

      {/* Grid */}
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px)
          `,
          backgroundSize: "50px 50px",
        }}
      />

      {/* Blue Glow */}
      <motion.div
        animate={{
          scale: [1, 1.25, 1],
          opacity: [0.35, 0.55, 0.35],
        }}
        transition={{
          repeat: Infinity,
          duration: 8,
          ease: "easeInOut",
        }}
        className="absolute left-[-200px] top-[-200px] h-[550px] w-[550px] rounded-full bg-blue-600 blur-[180px]"
      />

      {/* Cyan Glow */}
      <motion.div
        animate={{
          scale: [1.1, 0.9, 1.1],
          opacity: [0.2, 0.45, 0.2],
        }}
        transition={{
          repeat: Infinity,
          duration: 10,
          ease: "easeInOut",
        }}
        className="absolute bottom-[-220px] right-[-180px] h-[520px] w-[520px] rounded-full bg-cyan-500 blur-[180px]"
      />

      {/* Emergency Pulse */}
      <motion.div
        animate={{
          scale: [0.8, 1.4],
          opacity: [0.4, 0],
        }}
        transition={{
          repeat: Infinity,
          duration: 2.8,
          ease: "easeOut",
        }}
        className="absolute left-1/2 top-1/2 h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full border border-blue-500/40"
      />

      <motion.div
        animate={{
          scale: [0.9, 1.6],
          opacity: [0.25, 0],
        }}
        transition={{
          repeat: Infinity,
          duration: 2.8,
          delay: 1,
          ease: "easeOut",
        }}
        className="absolute left-1/2 top-1/2 h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full border border-cyan-400/30"
      />
    </div>
  );
}