import { motion } from "framer-motion";

import AuthBackground from "./AuthBackground";

export default function AuthLayout({
  title,
  subtitle,
  children,
}) {
  return (
    <div className="relative flex min-h-screen items-center justify-center overflow-hidden bg-background px-6 py-10">

      <AuthBackground />

      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.5,
          ease: "easeOut",
        }}
        className="relative z-10 w-full max-w-md"
      >
        <div className="rounded-3xl border border-white/10 bg-white/5 p-8 shadow-2xl backdrop-blur-2xl">

          <div className="mb-8 text-center">

            <div className="mb-4 inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-blue-500/10 ring-1 ring-blue-400/20">

              <span className="text-3xl">🚑</span>

            </div>

            <h1 className="text-3xl font-bold tracking-tight text-white">
              {title}
            </h1>

            <p className="mt-3 text-sm leading-6 text-slate-400">
              {subtitle}
            </p>

          </div>

          {children}

        </div>

        <p className="mt-8 text-center text-xs text-slate-500">
          TRAFIKKING X • AI Powered Intelligent Emergency Response Ecosystem
        </p>
      </motion.div>
    </div>
  );
}