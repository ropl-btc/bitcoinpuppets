import Image from "next/image";
import Link from "next/link";

export default function HeroSection() {
  return (
    <section className="grid items-center gap-8 lg:grid-cols-[1.1fr_0.9fr] relative">
      <div className="pixel-border bg-white/90 p-6 md:p-8 text-black">
        <div className="window-titlebar mb-4 flex items-center justify-between px-3 py-2">
          <span className="text-sm font-bold uppercase">Bitcoin Puppets</span>
        </div>
        <h1 className="text-3xl font-black uppercase tracking-tight md:text-5xl">
          <span className="rainbow-text inline-block">BJ</span> from the
          puppetverse
        </h1>
        <p className="mt-4 text-lg leading-relaxed">
          When you engage with the Puppets, leave behind the shackles of
          conventional thinking and surrender to the enchantment of the
          unconventional. Embrace the whimsy, relish in the absurd, and allow
          your imagination to roam freely. This is the sanctuary for the
          offbeat.
        </p>
        <div className="mt-6 flex flex-wrap gap-3">
          <Link
            href="/gallery"
            className="pixel-border bg-puppet-blue px-3 py-2 text-sm font-bold uppercase inline-block hover:-translate-y-0.5 hover:shadow-press transition"
          >
            Gallery
          </Link>
          <a
            href="https://x.com/BitcoinPuppets"
            target="_blank"
            rel="noopener noreferrer"
            className="pixel-border bg-puppet-pink px-3 py-2 text-sm font-bold uppercase inline-block hover:-translate-y-0.5 hover:shadow-press transition"
          >
            Community-Driven
          </a>
          <a
            href="https://youtu.be/NwKhK9-Jg20?si=nxixY_iMVben8FQv"
            target="_blank"
            rel="noopener noreferrer"
            className="pixel-border bg-puppet-purple px-3 py-2 text-sm font-bold uppercase inline-block hover:-translate-y-0.5 hover:shadow-press transition"
          >
            World Peace 🌎☮️
          </a>
        </div>
      </div>

      <div className="pixel-border bg-white/90 p-3 text-black">
        <div className="window-titlebar flex items-center justify-between px-3 py-2">
          <span className="text-sm font-bold uppercase">Bulla.gif</span>
        </div>
        <div className="bg-white p-3">
          <a
            href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
            target="_blank"
            rel="noopener noreferrer"
            className="block"
          >
            <Image
              src="/bulla.gif"
              alt="Bitcoin Puppets bulla preview"
              width={640}
              height={640}
              priority
              sizes="(max-width: 768px) 100vw, 52vw"
              className="h-auto w-full border-4 border-black"
              unoptimized
            />
          </a>
        </div>
      </div>
    </section>
  );
}
