import Link from "next/link";
import { links } from "../data";

export default function QuickLinksSection() {
  return (
    <section className="grid gap-4 lg:grid-cols-2 items-start">
      <div className="pixel-border bg-white/90 p-6 text-black lg:-mt-32">
        <div className="window-titlebar mb-4 px-3 py-2 text-sm font-bold uppercase">
          Quick Links.lnk
        </div>
        <div className="grid gap-3">
          {links.map((link) => {
            const isInternal = link.href.startsWith("/");
            const LinkComponent = isInternal ? Link : "a";
            const externalProps = isInternal
              ? {}
              : { target: "_blank", rel: "noopener noreferrer" };

            return (
              <LinkComponent
                key={link.href}
                href={link.href}
                {...externalProps}
                className="pixel-border bg-white px-4 py-3 text-sm font-bold uppercase text-black hover:-translate-y-0.5 hover:shadow-press transition flex items-center gap-4"
              >
                {link.iconUrl && (
                  <div className="relative h-10 w-10 shrink-0">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={link.iconUrl}
                      alt={`${link.label} icon`}
                      className="h-full w-full object-cover"
                    />
                  </div>
                )}
                <div>
                  <div className="text-base leading-tight mb-0.5">
                    {link.label}
                  </div>
                  <div className="text-xs font-normal normal-case leading-tight text-gray-600">
                    {link.note}
                  </div>
                </div>
              </LinkComponent>
            );
          })}
        </div>
      </div>

      <div className="pixel-border bg-white/90 p-6 text-black">
        <div className="window-titlebar mb-4 px-3 py-2 text-sm font-bold uppercase">
          Community Checklist.doc
        </div>
        <ul className="grid gap-3 text-sm font-bold uppercase">
          <li className="pixel-border bg-white/90 px-4 py-3 text-black">
            1. Say bj when you arrive.
          </li>
          <li className="pixel-border bg-white/90 px-4 py-3 text-black">
            2. Post art, memes, and offbeat ideas.
          </li>
          <li className="pixel-border bg-white/90 px-4 py-3 text-black">
            3. Protect the culture.
          </li>
          <li className="pixel-border bg-white/90 px-4 py-3 text-black">
            4. Send it to zero.
          </li>
          <li className="pixel-border bg-white/90 px-4 py-3 text-black">
            5. World peace above all. 🌍☮️
          </li>
        </ul>
      </div>
    </section>
  );
}
