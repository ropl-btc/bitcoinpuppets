import Image from "next/image";
import Link from "next/link";
import { cursedInscriptions, faq, funnyMedia, links } from "../../content";
import FunnyMediaGallery from "../FunnyMediaGallery";

export function HeroSection() {
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
          <a
            href="https://magiceden.io/ordinals/marketplace/bitcoin-puppets"
            target="_blank"
            rel="noopener noreferrer"
            className="pixel-border bg-puppet-green px-3 py-2 text-sm font-bold uppercase inline-block hover:-translate-y-0.5 hover:shadow-press transition"
          >
            Free Mint
          </a>
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
          <Link
            href="/gallery"
            className="pixel-border bg-puppet-blue px-3 py-2 text-sm font-bold uppercase inline-block hover:-translate-y-0.5 hover:shadow-press transition"
          >
            Gallery
          </Link>
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

export function ManifestoSection() {
  return (
    <a
      href="https://ordpuppetinuundoxxedmillionaires.com/The_Gospel_of_World_Peace.png"
      target="_blank"
      rel="noopener noreferrer"
      className="block"
    >
      <section className="pixel-border bg-white/90 p-6 text-black hover:-translate-y-0.5 hover:shadow-press transition">
        <div className="window-titlebar mb-4 px-3 py-2 text-sm font-bold uppercase">
          The Puppet Manifesto.txt
        </div>
        <p className="text-base leading-relaxed">
          Bitcoin Puppets is a 10,001-piece Ordinals collection and a
          community-led collective built on chaotic joy, freedom of imagination,
          and the belief that the internet should be weird again. Show up, post
          memes, say bj, and push world peace in every thread.
        </p>
      </section>
    </a>
  );
}

export function VideosSection() {
  return (
    <section className="grid gap-4 lg:grid-cols-2 items-start -mt-6">
      <div className="pixel-border bg-white/90 p-4 text-black">
        <div className="window-titlebar mb-3 px-3 py-2 text-sm font-bold uppercase">
          Opium Origins.mp4
        </div>
        <video
          className="pixel-border w-full bg-black relative z-[60]"
          src="/videos/opiumorigins.mp4"
          controls
          playsInline
          preload="metadata"
        />
      </div>
      <div className="pixel-border bg-white/90 p-4 text-black">
        <div className="window-titlebar mb-3 px-3 py-2 text-sm font-bold uppercase">
          Puppet Interview.mp4
        </div>
        <video
          className="pixel-border w-full bg-black relative z-[60]"
          src="/videos/interview.mp4"
          controls
          playsInline
          preload="metadata"
        />
      </div>
    </section>
  );
}

export function QuickLinksSection() {
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

export function FaqSection() {
  return (
    <section className="pixel-border bg-white/90 p-6 text-black">
      <div className="window-titlebar mb-4 px-3 py-2 text-sm font-bold uppercase">
        FAQ
      </div>
      <div className="grid gap-4 md:grid-cols-2">
        {faq.map((item) => (
          <div
            key={item.question}
            className="pixel-border bg-white px-4 py-3 text-black"
          >
            <h3 className="text-sm font-bold uppercase">{item.question}</h3>
            <p className="mt-2 text-sm leading-relaxed">{item.answer}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export function CursedInscriptionsSection() {
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

export function FunnyMediaSection() {
  return (
    <section className="pixel-border bg-white/95 p-6 text-black">
      <div className="window-titlebar mb-4 px-3 py-2 text-sm font-bold uppercase">
        Funny Pictures and Videos
      </div>
      <p className="text-sm font-bold uppercase">
        PUPPETIZE YOUR LIFE TODAY!!!!! PUPPETIZE YOUR LIFE TODAY!!!!! PUPPETIZE
        YOUR LIFE TODAY!!!!! PUPPETIZE YOUR LIFE TODAY!!!!!
      </p>
      <FunnyMediaGallery sources={funnyMedia} />
    </section>
  );
}

export function LicenseSection() {
  return (
    <section className="pixel-border bg-white/95 p-6 text-black">
      <div className="window-titlebar mb-4 px-3 py-2 text-sm font-bold uppercase">
        Viral Public License
      </div>
      <div className="pixel-border bg-white px-4 py-3 text-sm leading-relaxed">
        <p className="font-bold uppercase">Copyleft (ɔ) All Rights Reversed</p>
        <p className="mt-3">
          This WORK is hereby relinquished of all associated ownership,
          attribution, and copyrights, and redistribution or use of any kind,
          with or without modification, is permitted without restriction subject
          to the following conditions: Redistributions of this WORK or ANY work
          that makes use of ANY of the contents of this WORK by ANY kind of
          copying, dependency, linkage, or ANY other possible form of DERIVATION
          or COMBINATION, must retain the ENTIRETY of this license. No further
          restrictions of ANY kind may be applied.
        </p>
      </div>
    </section>
  );
}

export function NoCollabSection() {
  return (
    <section className="pixel-border bg-white/95 p-6 text-black">
      <div className="window-titlebar mb-4 px-3 py-2 text-sm font-bold uppercase">
        No-Collab Thesis
      </div>
      <div className="pixel-border bg-white px-4 py-3 text-sm leading-relaxed">
        <p>
          Art in its purest form is a manifestation of individuality. The
          no-collab thesis asserts that the very essence of Bitcoin
          Puppets&apos; unique vision and narrative is the expression of a
          single artist. Artistic expression flourishes unbridled by compromise
          or dilution. Collaborations in the ordinals/NFT ecosystem often
          devolve into attention-grabbing spectacles, where the collective
          effort overshadows the intrinsic value. The no-collab thesis liberates
          the project from the pressure to conform to trends or compromise on
          integrity for the sake of visibility.
        </p>
        <p className="mt-3">
          The allure of collaboration often masks a perilous reality (despite
          the often thought-of win-win scenario): the devaluation of the
          project. When art becomes a mere utility, a means to an end in a
          collaborative endeavor, its inherent value is compromised. The
          no-collab thesis acts as a guardian against such devaluation, ensuring
          the project is not reduced to a mere cog in a collective machine.
        </p>
        <p className="mt-3">
          Art forms a profound connection between the creator and the collector.
          By adhering to the no-collab thesis, we preserve the sanctity of this
          connection, undiluted by external influences. In an ecosystem that
          champions collaboration as the epitome of success, the no-collab
          thesis challenges the illusion of win-win scenarios. It contends that
          true success lies in the unwavering pursuit of a project untainted by
          compromise. In conclusion, the no-collab thesis is a defiance against
          the commodification of art.
        </p>
      </div>
    </section>
  );
}

export function LoreSection() {
  return (
    <section className="pixel-border bg-white/95 p-6 text-black">
      <div className="window-titlebar mb-4 px-3 py-2 text-sm font-bold uppercase">
        Full Lore (Click to Expand)
      </div>
      <details className="pixel-border bg-white px-4 py-3">
        <summary className="cursor-pointer text-sm font-bold uppercase">
          Read the absurd odyssey of Bitcoin Puppets + O.P.I.U.M.
        </summary>
        <div className="mt-4 grid gap-4 text-sm leading-relaxed">
          <p>
            Bitcoin Puppets represents one of the most chaotic, culturally
            resonant, and unapologetically absurd experiments in the Ordinals
            ecosystem—a collection of 10,001 hand-drawn profile pictures (PFPs)
            inscribed eternally on the Bitcoin blockchain. The Ordinals
            protocol, introduced by Casey Rodarmor in early 2023, made these
            “digital artifacts” possible on Bitcoin. Born from the fringes of
            digital art and counterculture, it expands on its predecessor,
            O.P.I.U.M. (Ord Puppet Inu Undoxxed Millionaire), a 777-piece series
            of esoteric hand puppets. Together, they form a narrative tapestry
            woven with whimsy, economic nihilism, and a rallying cry for world
            peace (🌎☮️). This isn’t just an NFT project; it’s a manifesto
            against corporate hype, a memetic rebellion, and a community-fueled
            lore that defies traditional roadmaps or utility promises.
          </p>
          <p>
            At its core, Bitcoin Puppets and O.P.I.U.M. were created by the
            pseudonymous artist Le Puppeteer Fou (The Puppetmaster), an undoxxed
            visionary inspired by Satoshi Nakamoto’s vanishing act. The mission?
            To spark emotional gravity through art—absurd, unpretentious, and
            free from expectations. As the ethos declares: “We like the art,
            world peace, and going to $0.”
          </p>

          <div className="grid gap-2">
            <h3 className="text-sm font-bold uppercase">
              The Artist: Le Puppeteer Fou
            </h3>
            <ul className="list-disc pl-5">
              <li>Undoxxed by design, echoing Bitcoin’s pseudonymous roots.</li>
              <li>
                Emerges from the Wassies community; that OG crew seeded the
                culture.
              </li>
              <li>
                Previous work: Lasogette (Ethereum, ~2021–2022), 7,777 whimsical
                portraits.
              </li>
              <li>
                Transitioned to Bitcoin in early 2023 for permanence and native
                absurdity.
              </li>
              <li>
                Creates with simple, raw paint tools and community-collab
                traits.
              </li>
              <li>
                Handmade 1-of-1 honoraries for community and ecosystem legends.
              </li>
            </ul>
          </div>

          <div className="grid gap-2">
            <h3 className="text-sm font-bold uppercase">
              O.P.I.U.M. — The Precursors
            </h3>
            <ul className="list-disc pl-5">
              <li>Launched March 25, 2023 as a 777-piece free mint.</li>
              <li>
                Esoteric hand puppets with community-submitted sign phrases.
              </li>
              <li>
                Name riffing on Ordinals, Inu meme coins, anon “undoxxed”
                culture, and “millionaire” mania.
              </li>
              <li>
                Whitepaper reads like poetic whimsy: “just art,” no roadmap, no
                promises.
              </li>
              <li>No roadmap, no utility promises — just art and attitude.</li>
              <li>Seeded $PUPS via a community-first airdrop.</li>
            </ul>
          </div>

          <div className="grid gap-2">
            <h3 className="text-sm font-bold uppercase">
              Bitcoin Puppets — The Main Act
            </h3>
            <ul className="list-disc pl-5">
              <li>Free mint Jan 3–4, 2024 on InscribeNow.</li>
              <li>10,001 PFPs with absurd traits and deep inside jokes.</li>
              <li>
                Lore traits like Coffee Time, Two Chairs, and Pink Pipe encode
                community stories.
              </li>
              <li>O.P.I.U.M. holders had priority for 5 Puppets each.</li>
              <li>
                Lore jokes about a “12-year-old artist,” but it’s Fou’s
                handiwork.
              </li>
              <li>
                Includes “Cursed Puppets” with glitched, horror-leaning
                variants.
              </li>
            </ul>
          </div>

          <div className="grid gap-2">
            <h3 className="text-sm font-bold uppercase">
              $PUPS — World Peace by Force
            </h3>
            <ul className="list-disc pl-5">
              <li>
                BRC-20 token launched shortly after O.P.I.U.M., 100% airdropped
                to holders.
              </li>
              <li>
                Originated in April 2023 before the PFP drop, born from the
                O.P.I.U.M. Discord.
              </li>
              <li>
                Migrated to Runes April 20, 2024: PUPS•WORLD•PEACE (Rune #13).
              </li>
              <li>
                Community lore says it briefly touched an almost $1B market cap
                during the April 2024 meme run; some aggregators record a lower
                ATH around ~$760–800M.
              </li>
              <li>22.3% allocated to Rune Pups; 77.7% to legacy holders.</li>
              <li>Slogan: “World peace by force.” Utility: vibes only.</li>
            </ul>
          </div>

          <div className="grid gap-2">
            <h3 className="text-sm font-bold uppercase">Manifesto & Mission</h3>
            <ul className="list-disc pl-5">
              <li>Culture &gt; companies. Memes &gt; roadmaps.</li>
              <li>No-collab thesis. Organic growth only.</li>
              <li>Embrace the void: “Send them to zero!”</li>
              <li>
                The “I was promised zero” joke is an anti-promise shield against
                price obsession.
              </li>
              <li>World peace (🌎☮️) and emotional gravity over hype.</li>
            </ul>
          </div>

          <div className="grid gap-2">
            <h3 className="text-sm font-bold uppercase">Community & Hubs</h3>
            <ul className="list-disc pl-5">
              <li>
                X:{" "}
                <a
                  className="underline"
                  href="https://x.com/BitcoinPuppets"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  @BitcoinPuppets
                </a>
              </li>
              <li>
                Telegram:{" "}
                <a
                  className="underline"
                  href="https://t.me/worldpeacegospel"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  worldpeacegospel
                </a>
              </li>
              <li>
                OPIUM HQ:{" "}
                <a
                  className="underline"
                  href="https://ordpuppetinuundoxxedmillionaires.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  ordpuppetinuundoxxedmillionaires.com
                </a>
              </li>
              <li>
                Viral Public License (VPL) lets the IP spread into
                community-made derivatives and merch.
              </li>
              <li>
                Holders organize IRL meetups at major conferences (ETH Denver,
                NFT.NYC, Bitcoin 2024).
              </li>
            </ul>
          </div>

          <div className="grid gap-2">
            <h3 className="text-sm font-bold uppercase">Recent Developments</h3>
            <p>
              In December 2025, Le Puppeteer Fou deleted socials, echoing the
              Satoshi mythos. The community rallied, reinforcing the core
              belief: the art and culture outlive the artist.
            </p>
          </div>
        </div>
      </details>
    </section>
  );
}

export function SiteFooter() {
  return (
    <footer className="mx-auto mt-16 flex w-full max-w-6xl flex-col gap-4 px-4 text-sm sm:px-6">
      <div className="pixel-border window-titlebar px-4 py-3 text-white">
        Website created with 🌍☮️ by Robin, CEO of Liquidium (
        <a
          href="https://x.com/robin_liquidium"
          target="_blank"
          rel="noopener noreferrer"
          className="underline"
        >
          @robin_liquidium
        </a>
        )
      </div>
      <div className="pixel-border bg-white/90 px-4 py-3 text-xs font-bold uppercase text-black">
        <span className="mr-2">Links:</span>
        <a
          href="https://x.com/BitcoinPuppets"
          target="_blank"
          rel="noopener noreferrer"
          className="underline"
        >
          X
        </a>
        <span className="mx-2">•</span>
        <a
          href="https://t.me/worldpeacegospel"
          target="_blank"
          rel="noopener noreferrer"
          className="underline"
        >
          Telegram
        </a>
        <span className="mx-2">•</span>
        <a
          href="https://magiceden.io/ordinals/marketplace/bitcoin-puppets"
          target="_blank"
          rel="noopener noreferrer"
          className="underline"
        >
          Magic Eden
        </a>
        <span className="mx-2">•</span>
        <a
          href="https://discord.gg/bitcoinpuppets"
          target="_blank"
          rel="noopener noreferrer"
          className="underline"
        >
          Discord
        </a>
        <span className="mx-2">•</span>
        <a
          href="https://github.com/ropl-btc/bitcoinpuppets"
          target="_blank"
          rel="noopener noreferrer"
          className="underline"
        >
          GitHub
        </a>
      </div>
      <div className="text-xs text-black/70">
        This is a community-led hub. Not financial advice. Just vibes.
      </div>
    </footer>
  );
}
