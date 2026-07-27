import { motion } from "framer-motion";

export default function SectionDivider({
  title,
}) {
  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 20,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
      }}
      viewport={{
        once: true,
      }}
      transition={{
        duration: 0.45,
      }}
      className="flex items-center justify-center py-6 lg:py-8"
    >
      {/* Left Line */}

      <div className="h-px w-full max-w-40 bg-gradient-to-r from-transparent via-white/10 to-primary/20" />

      {/* Center */}

      <div className="mx-6 flex flex-col items-center">

        <div className="relative">

          <span className="absolute inset-0 animate-ping rounded-full bg-primary/20" />

          <span className="relative block h-3 w-3 rounded-full bg-primary shadow-[0_0_20px_rgba(59,130,246,.7)]" />

        </div>

        {title && (
          <p className="mt-3 whitespace-nowrap text-xs font-semibold uppercase tracking-[0.25em] text-slate-500">
            {title}
          </p>
        )}

      </div>

      {/* Right Line */}

      <div className="h-px w-full max-w-40 bg-gradient-to-l from-transparent via-white/10 to-primary/20" />
    </motion.div>
  );
}