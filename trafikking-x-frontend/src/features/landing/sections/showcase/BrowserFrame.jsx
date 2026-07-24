export default function BrowserFrame({
  title,
  children,
}) {
  return (
    <div className="overflow-hidden rounded-3xl border border-white/10 bg-[#0b1120] shadow-2xl">

      {/* Browser Header */}

      <div className="flex items-center justify-between border-b border-white/10 px-5 py-3">

        <div className="flex gap-2">

          <div className="h-3 w-3 rounded-full bg-red-500" />

          <div className="h-3 w-3 rounded-full bg-yellow-500" />

          <div className="h-3 w-3 rounded-full bg-green-500" />

        </div>

        <span className="text-xs text-slate-400">

          {title}

        </span>

      </div>

      <div className="p-6">

        {children}

      </div>

    </div>
  );
}