import { links } from "../data";

export default function QuickLinksSection() {
  return (
    <section className="grid gap-4 lg:grid-cols-2 items-start">
      <div className="pixel-border bg-white/90 p-6 text-black lg:-mt-32">
        <div className="window-titlebar mb-4 px-3 py-2 text-sm font-bold uppercase">
          Quick Links.lnk
        </div>
        <div className="grid gap-3">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="pixel-border bg-white px-4 py-3 text-sm font-bold uppercase text-black hover:-translate-y-0.5 hover:shadow-press transition"
            >
              <div className="text-base">{link.label}</div>
              <div className="text-xs font-normal normal-case">{link.note}</div>
            </a>
          ))}
        </div>
      </div>

      <div className="pixel-border bg-white/90 p-6 text-black">
        <div className="window-titlebar mb-4 px-3 py-2 text-sm font-bold uppercase">
          Community Checklist.doc
        </div>
        <ul className="grid gap-3 text-sm font-bold uppercase">
          <li className="pixel-border bg-white/90 px-4 py-3 text-black">
            Say bj when you arrive.
          </li>
          <li className="pixel-border bg-white/90 px-4 py-3 text-black">
            Post art, memes, and offbeat ideas.
          </li>
          <li className="pixel-border bg-white/90 px-4 py-3 text-black">
            Protect the free culture. Send it to zero.
          </li>
          <li className="pixel-border bg-white/90 px-4 py-3 text-black">
            World peace above all.
          </li>
        </ul>
      </div>
    </section>
  );
}
