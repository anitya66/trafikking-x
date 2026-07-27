import { motion } from "framer-motion";
import {
  Monitor,
  Wifi,
  Bell,
} from "lucide-react";

export default function BrowserFrame({
  title,
  children,
}) {
  return (
    <motion.div
      whileHover={{
        y: -6,
      }}
      transition={{
        duration: 0.25,
      }}
      className="group h-full"
    >
      <div className="overflow-hidden rounded-3xl border border-white/10 bg-[#0b1120] shadow-[0_20px_60px_rgba(0,0,0,.35)] transition-all duration-300 group-hover:border-primary/20">

        {/* Browser Header */}

        <div className="flex items-center justify-between border-b border-white/10 px-5 py-4">

          <div className="flex items-center gap-2">

            <div className="h-3 w-3 rounded-full bg-red-500" />

            <div className="h-3 w-3 rounded-full bg-yellow-500" />

            <div className="h-3 w-3 rounded-full bg-green-500" />

          </div>

          <div className="flex items-center gap-2">

            <Monitor className="h-4 w-4 text-primary" />

            <span className="text-sm font-semibold text-slate-300">
              {title}
            </span>

          </div>

          <div className="flex items-center gap-3">

            <Wifi className="h-4 w-4 text-green-400" />

            <Bell className="h-4 w-4 text-slate-500" />

          </div>

        </div>

        <div className="p-6">

          {children}

        </div>

      </div>
    </motion.div>
  );
}