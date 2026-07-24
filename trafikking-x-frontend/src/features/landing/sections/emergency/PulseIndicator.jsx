import { motion } from "framer-motion";

export default function PulseIndicator() {
  return (
    <div className="relative flex h-4 w-4 items-center justify-center">

      <motion.span
        animate={{
          scale: [1, 2.2],
          opacity: [0.8, 0],
        }}
        transition={{
          repeat: Infinity,
          duration: 1.8,
        }}
        className="absolute h-4 w-4 rounded-full bg-red-500"
      />

      <div className="relative h-3 w-3 rounded-full bg-red-500" />

    </div>
  );
}