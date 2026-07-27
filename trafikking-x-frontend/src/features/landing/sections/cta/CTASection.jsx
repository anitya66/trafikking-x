import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";

import SectionContainer from "@/shared/components/landing/SectionContainer";

import CTAButtons from "./CTAButtons";
import CTAStats from "./CTAStats";

export default function CTASection() {
  return (
    <SectionContainer>

      <motion.div
        initial={{
          opacity: 0,
          y: 40,
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
        className="relative overflow-hidden rounded-[40px] border border-primary/20 bg-gradient-to-br from-slate-950 via-[#081425] to-slate-950 px-8 py-20 text-center lg:px-16 lg:py-24"
      >

        {/* Glow */}

        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(59,130,246,.18),transparent_60%)]" />

        <div className="absolute -left-32 top-0 h-72 w-72 rounded-full bg-primary/10 blur-3xl" />

        <div className="absolute -right-32 bottom-0 h-72 w-72 rounded-full bg-cyan-500/10 blur-3xl" />

        <div className="relative">

          {/* Badge */}

          <div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-5 py-2">

            <Sparkles className="h-4 w-4 text-primary" />

            <span className="text-xs font-semibold uppercase tracking-[0.25em] text-blue-300">
              The Future of Emergency Response
            </span>

          </div>

          {/* Heading */}

          <h2 className="mx-auto mt-8 max-w-4xl text-4xl font-black leading-tight text-white md:text-6xl lg:text-7xl">

            Ready To Save

            <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              {" "}Lives{" "}
            </span>

            With AI?

          </h2>

          {/* Description */}

          <p className="mx-auto mt-8 max-w-3xl text-lg leading-8 text-slate-400">

            Join the next generation of intelligent emergency response.
            Connect citizens, dispatchers, ambulances, hospitals and police
            through one AI-powered real-time ecosystem.

          </p>

          <CTAButtons />

          <CTAStats />

        </div>

      </motion.div>

    </SectionContainer>
  );
}