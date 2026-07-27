import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

export default function SuccessBadge() {
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
      className="inline-flex items-center gap-3 rounded-full border border-green-500/20 bg-green-500/10 px-6 py-3 backdrop-blur-xl"
    >
      <div className="relative flex h-6 w-6 items-center justify-center">

        <span className="absolute h-6 w-6 animate-ping rounded-full bg-green-500/20" />

        <CheckCircle2 className="relative h-5 w-5 text-green-400" />

      </div>

      <span className="text-sm font-semibold tracking-wide text-green-300">
        Emergency Successfully Resolved
      </span>
    </motion.div>
  );
}