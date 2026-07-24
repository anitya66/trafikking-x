import { FOOTER_LINKS } from "./footerLinks";
import FooterColumn from "./FooterColumn";

export default function FooterSection() {
  return (
    <footer className="border-t border-white/10 bg-slate-950">

      <div className="mx-auto max-w-7xl px-6 py-20">

        <div className="grid gap-12 lg:grid-cols-4">

          <div>

            <h2 className="text-3xl font-black text-white">

              TRAFIKKING
              <span className="text-blue-400">
                X
              </span>

            </h2>

            <p className="mt-6 leading-8 text-slate-400">

              AI Powered Emergency Response Platform
              connecting citizens, responders, hospitals
              and government agencies in real time.

            </p>

          </div>

          {Object.entries(FOOTER_LINKS).map(
            ([title, links]) => (
              <FooterColumn
                key={title}
                title={title}
                links={links}
              />
            )
          )}

        </div>

        <div className="mt-20 border-t border-white/10 pt-8 text-center text-slate-500">

          © 2026 TRAFIKKING X • Built with React, Spring Boot, WebSocket & AI

        </div>

      </div>

    </footer>
  );
}