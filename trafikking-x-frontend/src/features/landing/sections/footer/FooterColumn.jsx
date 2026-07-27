export default function FooterColumn({
  title,
  links,
}) {
  return (
    <div>

      <h3 className="mb-6 text-sm font-semibold uppercase tracking-[0.2em] text-slate-300">

        {title}

      </h3>

      <div className="space-y-4">

        {links.map((link) => (

          <button
            key={link}
            type="button"
            className="block text-left text-slate-400 transition-all duration-200 hover:translate-x-1 hover:text-white"
          >

            {link}

          </button>

        ))}

      </div>

    </div>
  );
}