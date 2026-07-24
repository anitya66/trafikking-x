import { motion } from "framer-motion";

const stats = [
  {
    value: "98%",
    label: "AI Accuracy",
  },
  {
    value: "24K+",
    label: "Emergencies",
  },
  {
    value: "2.4 min",
    label: "Avg Response",
  },
];

export default function HeroStats() {
  return (
    <div className="mt-12 grid grid-cols-3 gap-5">

      {stats.map((stat, index) => (

        <motion.div
          key={stat.label}
          initial={{
            opacity: 0,
            y: 25,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            delay: .6 + index * .15,
          }}
          className="rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur-xl"
        >

          <h3 className="text-2xl font-black text-white">

            {stat.value}

          </h3>

          <p className="mt-2 text-sm text-slate-400">

            {stat.label}

          </p>

        </motion.div>

      ))}

    </div>
  );
}