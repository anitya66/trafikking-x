export default function FooterColumn({
  title,
  links,
}) {
  return (
    <div>

      <h3 className="mb-5 font-bold text-white">

        {title}

      </h3>

      <div className="space-y-3">

        {links.map((link) => (

          <p
            key={link}
            className="cursor-pointer text-slate-400 transition hover:text-white"
          >

            {link}

          </p>

        ))}

      </div>

    </div>
  );
}