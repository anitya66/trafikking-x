import { motion } from "framer-motion";

import SectionContainer from "@/shared/components/landing/SectionContainer";

import CTAButtons from "./CTAButtons";
import CTAStats from "./CTAStats";

export default function CTASection() {

  return (

    <SectionContainer>

      <motion.div
        initial={{
          opacity: 0,
          y: 50,
        }}
        whileInView={{
          opacity: 1,
          y: 0,
        }}
        viewport={{
          once: true,
        }}
        transition={{
          duration: 0.7,
        }}
        className="relative overflow-hidden rounded-[40px] border border-blue-500/20 bg-gradient-to-br from-blue-950/60 via-slate-900 to-slate-950 px-10 py-24 text-center"
      >

        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(59,130,246,.18),transparent_60%)]" />

        <div className="relative">

          <p className="mb-5 text-sm font-semibold uppercase tracking-[0.3em] text-blue-400">

            The Future of Emergency Response

          </p>

          <h2 className="mx-auto max-w-4xl text-5xl font-black leading-tight text-white lg:text-7xl">

            Ready To Save
            <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              {" "}Lives{" "}
            </span>
            With AI?

          </h2>

          <p className="mx-auto mt-8 max-w-3xl text-lg leading-8 text-slate-400">

            Join the next generation of intelligent emergency response.
            Connect citizens, responders, hospitals, and AI into one
            unified real-time platform.

          </p>

          <CTAButtons />

          <CTAStats />

        </div>

      </motion.div>

    </SectionContainer>

  );

}