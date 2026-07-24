import { motion } from "framer-motion";

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
      }}
      transition={{
        duration: 0.6,
      }}
      className={`mx-auto max-w-3xl ${
        align === "center"
          ? "text-center"
          : "text-left"
      }`}
    >
      {badge && (
        <div className="mb-4 inline-flex rounded-full border border-blue-500/20 bg-blue-500/10 px-4 py-2 text-sm font-medium text-blue-300">
          {badge}
        </div>
      )}

      <h2 className="text-4xl font-black leading-tight text-white md:text-5xl">
        {title}{" "}
        {highlight && (
          <span className="bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">
            {highlight}
          </span>
        )}
      </h2>

      {description && (
        <p className="mt-6 text-lg leading-8 text-slate-400">
          {description}
        </p>
      )}
    </motion.div>
  );
}