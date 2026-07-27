import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export default function GlassCard({
  className,
  children,
}) {
  return (
    <motion.div
      whileHover={{
        y: -4,
      }}
      transition={{
        duration: 0.22,
      }}
      className={cn(
        "group relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.05] backdrop-blur-2xl shadow-2xl shadow-blue-500/5 transition-all duration-300 hover:border-primary/20 hover:shadow-primary/10",
        className
      )}
    >
      {/* Top Glow */}

      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/30 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

      {/* Corner Glow */}

      <div className="pointer-events-none absolute -right-20 -top-20 h-40 w-40 rounded-full bg-primary/10 opacity-0 blur-3xl transition-opacity duration-300 group-hover:opacity-100" />

      <div className="relative">
        {children}
      </div>
    </motion.div>
  );
}