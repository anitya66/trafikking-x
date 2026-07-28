import {
  Ambulance,
  Mail,
  Globe,
} from "lucide-react";

import { FOOTER_LINKS } from "./footerLinks";
import FooterColumn from "./FooterColumn";

export default function FooterSection() {
  return (
    <footer className="relative overflow-hidden border-t border-white/10 bg-slate-950">

      {/* Top Glow */}
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent" />

      {/* Background Glow */}
      <div className="absolute left-1/2 top-0 h-64 w-64 -translate-x-1/2 rounded-full bg-primary/10 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-6 py-20">

        <div className="grid gap-14 lg:grid-cols-4">

          {/* Brand */}
          <div>

            <div className="flex items-center gap-3">

              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary text-white shadow-lg shadow-primary/30">

                <Ambulance className="h-6 w-6" />

              </div>

              <div>

                <h2 className="text-2xl font-black text-white">
                  TRAFIKKING X
                </h2>

                <p className="text-xs text-slate-500">
                  AI Emergency Platform
                </p>

              </div>

            </div>

            <p className="mt-6 leading-8 text-slate-400">
              AI-powered emergency response platform connecting
              citizens, dispatchers, hospitals, ambulances and
              police through one intelligent ecosystem.
            </p>

            <div className="mt-8 flex items-center gap-4">

              <button
                type="button"
                className="rounded-xl border border-white/10 p-3 text-slate-400 transition hover:border-primary/30 hover:text-primary"
              >
                <Globe className="h-5 w-5" />
              </button>

              <button
                type="button"
                className="rounded-xl border border-white/10 p-3 text-slate-400 transition hover:border-primary/30 hover:text-primary"
              >
                <Mail className="h-5 w-5" />
              </button>

            </div>

          </div>

          {Object.entries(FOOTER_LINKS).map(([title, links]) => (
            <FooterColumn
              key={title}
              title={title}
              links={links}
            />
          ))}

        </div>

        <div className="mt-16 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 text-sm text-slate-500 lg:flex-row">

          <p>
            © 2026 TRAFIKKING X. All rights reserved.
          </p>

          <p>
            Built with React • Spring Boot • WebSocket • AI
          </p>

        </div>

      </div>

    </footer>
  );
}