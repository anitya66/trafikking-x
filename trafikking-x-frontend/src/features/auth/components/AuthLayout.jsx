import { motion } from "framer-motion";
import { Activity, ShieldCheck } from "lucide-react";

import AuthBackground from "./AuthBackground";

export default function AuthLayout({

  title,

  subtitle,

  children,

}) {

  return (

    <div className="relative flex min-h-screen items-center justify-center overflow-hidden bg-background px-4 py-8 sm:px-6 lg:px-8">

      <AuthBackground />

      <motion.div
        initial={{ opacity: 0, y: 30, scale: 0.98 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{
          duration: 0.6,
          ease: "easeOut",
        }}
        className="relative z-10 w-full max-w-md"
      >

        <div className="overflow-hidden rounded-[32px] border border-white/10 bg-white/5 shadow-[0_20px_80px_rgba(0,0,0,0.45)] backdrop-blur-3xl">

          {/* Top Accent */}

          <div className="h-1 bg-gradient-to-r from-blue-500 via-cyan-400 to-blue-600" />

          <div className="p-8 sm:p-10">

            {/* Logo */}

            <div className="mb-8 flex flex-col items-center">

              <motion.div
                animate={{
                  boxShadow: [
                    "0 0 0 rgba(59,130,246,0.2)",
                    "0 0 40px rgba(59,130,246,0.45)",
                    "0 0 0 rgba(59,130,246,0.2)",
                  ],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                }}
                className="flex h-20 w-20 items-center justify-center rounded-3xl border border-primary/20 bg-primary/10"
              >

                <Activity className="h-10 w-10 text-primary" />

              </motion.div>

              <div className="mt-6 text-center">

                <h1 className="text-3xl font-bold tracking-tight text-white">

                  {title}

                </h1>

                <p className="mt-3 text-sm leading-6 text-slate-400">

                  {subtitle}

                </p>

              </div>

            </div>

            {/* Form */}

            {children}

            {/* Footer */}

            <div className="mt-8 rounded-2xl border border-primary/10 bg-primary/5 p-4">

              <div className="flex items-center gap-3">

                <ShieldCheck className="h-5 w-5 text-primary" />

                <div>

                  <p className="text-sm font-medium text-white">

                    Secure Authentication

                  </p>

                  <p className="text-xs text-slate-400">

                    Protected with JWT authentication and
                    role-based access control.

                  </p>

                </div>

              </div>

            </div>

          </div>

        </div>

        {/* Footer */}

        <p className="mt-8 text-center text-xs tracking-wider text-slate-500">

          TRAFIKKING X • AI Powered Intelligent Emergency Response Ecosystem

        </p>

      </motion.div>

    </div>

  );

}