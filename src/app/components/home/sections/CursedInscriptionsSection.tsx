import { cursedInscriptions } from "../data";

export default function CursedInscriptionsSection() {
  return (
    <section className="pixel-border bg-white/95 p-6 text-black">
      <div className="window-titlebar mb-4 px-3 py-2 text-sm font-bold uppercase">
        Cursed Inscriptions
      </div>
      <div className="lg:hidden">
        <details className="pixel-border bg-white px-4 py-3">
          <summary className="cursor-pointer text-sm font-bold uppercase">
            Here be da list of cursed ordinal puppets
          </summary>
          <div className="mt-4 flex flex-wrap gap-2">
            {cursedInscriptions.map((item) => (
              <a
                key={item.href}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                className="pixel-border bg-white px-3 py-2 text-xs font-bold uppercase text-black hover:-translate-y-0.5 hover:shadow-press transition"
              >
                {item.label}
              </a>
            ))}
          </div>
        </details>
      </div>
      <div className="hidden lg:block">
        <p className="text-sm font-bold uppercase">
          Here be da list of cursed ordinal puppets:
        </p>
        <div className="mt-4 flex flex-wrap gap-2">
          {cursedInscriptions.map((item) => (
            <a
              key={item.href}
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
              className="pixel-border bg-white px-3 py-2 text-xs font-bold uppercase text-black hover:-translate-y-0.5 hover:shadow-press transition"
            >
              {item.label}
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
