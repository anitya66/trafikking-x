import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export default function SectionHeading({
  badge,
  title,
  highlight,
  description,
  align = "center",
}) {
  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 30,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
      }}
      viewport={{
        once: true,
        amount: 0.3,
      }}
      transition={{
        duration: 0.55,
      }}
      className={cn(
        "mx-auto max-w-3xl",
        align === "center" ? "text-center" : "text-left"
      )}
    >
      {/* Badge */}

      {badge && (
        <div className="mb-5 inline-flex items-center rounded-full border border-primary/20 bg-primary/10 px-5 py-2 text-sm font-semibold tracking-wide text-blue-300 backdrop-blur-xl">
          {badge}
        </div>
      )}

      {/* Heading */}

      <h2 className="text-3xl font-black leading-tight tracking-tight text-white sm:text-4xl lg:text-5xl xl:text-6xl">
        {title}{" "}

        {highlight && (
          <span className="bg-gradient-to-r from-blue-400 via-cyan-300 to-blue-500 bg-clip-text text-transparent">
            {highlight}
          </span>
        )}
      </h2>

      {/* Description */}

      {description && (
        <p className="mx-auto mt-7 max-w-2xl text-base leading-8 text-slate-400 sm:text-lg">
          {description}
        </p>
      )}
    </motion.div>
  );
}