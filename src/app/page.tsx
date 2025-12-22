import Image from "next/image";
import DraggableStickers from "./components/DraggableStickers";
import FunnyMediaGallery from "./components/FunnyMediaGallery";

const links = [
  {
    label: "Official OPIUM Site",
    href: "https://ordpuppetinuundoxxedmillionaires.com/",
    note: "The chaotic masterpiece that started it all.",
  },
  {
    label: "Manifesto (Gospel of World Peace)",
    href: "https://ordpuppetinuundoxxedmillionaires.com/The_Gospel_of_World_Peace.png",
    note: "Official manifesto image.",
  },
  {
    label: "Whitepaper",
    href: "https://ordpuppetinuundoxxedmillionaires.com/whitepaper.txt",
    note: "Text whitepaper.",
  },
  {
    label: "Puppet Hash List JSON",
    href: "https://ordpuppetinuundoxxedmillionaires.com/puppethashlist.json",
    note: "On-chain hash list data.",
  },
  {
    label: "Magic Eden Marketplace",
    href: "https://magiceden.io/ordinals/marketplace/bitcoin-puppets",
    note: "Scroll, trade, vibe.",
  },
  {
    label: "Satflow Marketplace",
    href: "https://www.satflow.com/ordinals/bitcoin-puppets",
    note: "Another portal into the puppetverse.",
  },
  {
    label: "Community Twitter",
    href: "https://x.com/BitcoinPuppets",
    note: "Memes, updates, and raw puppet energy.",
  },
  {
    label: "Community Telegram",
    href: "https://t.me/worldpeacegospel",
    note: "World peace hotline. bj.",
  },
  {
    label: "Memes (memedepot)",
    href: "https://memedepot.com/d/btcpuppets",
    note: "Community meme vault.",
  },
  {
    label: "Liquidium.WTF (Puppet Loans)",
    href: "https://app.liquidium.wtf/ordinals/bitcoin-puppets",
    note: "Loans against Bitcoin Puppets.",
  },
];

const faq = [
  {
    question: "What are Bitcoin Puppets?",
    answer:
      "A 10,001-piece Ordinals collection that celebrates the absurd, the handcrafted, and the wildly imaginative. No roadmaps. No guarantees. Just vibes.",
  },
  {
    question: "What does “bj” mean?",
    answer:
      "It’s the puppet greeting. Like gm, but weirder. Say it with love and world peace energy. 🌎☮️",
  },
  {
    question: "What is O.P.I.U.M.?",
    answer:
      "O.P.I.U.M. (Ord Puppet Inu Undoxxed Millionaire) is the 777-piece precursor collection that seeded the entire puppetverse.",
  },
  {
    question: "Who created the Puppets?",
    answer:
      "The collections were created by the pseudonymous artist Le Puppeteer Fou, who stays undoxxed by design.",
  },
  {
    question: "Was the mint fair?",
    answer:
      "Yes. The Puppets were a free and fair mint. Community first, always.",
  },
  {
    question: "What’s the vibe?",
    answer:
      "World peace, absurdity, and emotional art over speculation. The community is the project.",
  },
];

const cursedInscriptions = [
  {
    label: "Inscription -3465",
    href: "https://ordinals.com/inscription/dbd322f774dd7d98ec0985a8f47a43526ef363f3353e5033adf2408176c81ed6i0",
  },
  {
    label: "Inscription -3923",
    href: "https://ordinals.com/inscription/4f3145c75cf2c5251fc6748f9d9358bb9fd3510029b2f59cc531c94c71bfca97i0",
  },
  {
    label: "Inscription -4417",
    href: "https://ordinals.com/inscription/299954c3aad9c65f8a692441138fd8204908f3fcde6912b825488fb6caf4e954i0",
  },
  {
    label: "Inscription -4418",
    href: "https://ordinals.com/inscription/a274db9f154a2ecdaaaf34ef6776dea303733ac385c2d52b170656041da0e023i0",
  },
  {
    label: "Inscription -4843",
    href: "https://ordinals.com/inscription/97404a7d2f16c8dacae7a0a99f609ccf9768f6c9784f16bed203e2180e79ec63i0",
  },
  {
    label: "Inscription -5397",
    href: "https://ordinals.com/inscription/6892b8b65e3265cb8719f94f617019d928483c2d3b3d8462ea8d188c3fdad0cei0",
  },
  {
    label: "Inscription -5471",
    href: "https://ordinals.com/inscription/bdb2456773d1a65c7d47f70116f058dec9ae9dfaf56a0cd6ea530d76124b7107i0",
  },
  {
    label: "Inscription -5500",
    href: "https://ordinals.com/inscription/916373d8d4a816fdf925cd333a2f4e4cd8269676589bc0a61ebce6b1727d8eeei0",
  },
  {
    label: "Inscription -5913",
    href: "https://ordinals.com/inscription/6e0e536fc611254cf7d3bad7103aac41c9cac88819f7200616584879752b98e1i0",
  },
  {
    label: "Inscription -6662",
    href: "https://ordinals.com/inscription/f68e2252eed08db750ac1d8ea1d06baa58e1b786dc87c197a514edbef4e6408bi0",
  },
  {
    label: "Inscription -6789",
    href: "https://ordinals.com/inscription/552eb6311b64307f96e516c9c4ce798c7a8a913ef449b4abaeac3e6e1c4b3812i0",
  },
  {
    label: "Inscription -10760",
    href: "https://ordinals.com/inscription/a33f33e31352474d4e5bdd66f6dc1e01a3b041ae1c63fd486edc1df9b175096di0",
  },
  {
    label: "Inscription -9917",
    href: "https://ordinals.com/inscription/42423013bc1ce4aa2f2a6758b23db945cf1d94472834a046d5bc13231fd141d8i0",
  },
  {
    label: "Inscription -10646",
    href: "https://ordinals.com/inscription/80ba3449b2e72261e1775a0e611a08645e6b98322c892be5523a1cc6cffcf7f6i0",
  },
  {
    label: "Inscription -30053",
    href: "https://ordinals.com/inscription/47df7d37aac97ac3cdc3ff4311545f418504f665d0031af3cf219a55eee16270i0",
  },
  {
    label: "Inscription -39382",
    href: "https://ordinals.com/inscription/c709d1b2bdc3524a888b1f16eaa7fc3b5ef3159c5b570fafeb16a968572defd5i0",
  },
  {
    label: "Inscription -40221",
    href: "https://ordinals.com/inscription/8ed2ad82d6186c635f7192ee270a0f49551aa151d09382d34e9aba915e2eeec4i0",
  },
  {
    label: "Inscription -40228",
    href: "https://ordinals.com/inscription/6f30f90f8ca3e3152c3f3e0d2faed1a62f27150366c14170dd19516fda93ad39i0",
  },
  {
    label: "Inscription -41030",
    href: "https://ordinals.com/inscription/76c35ac8e3ae7baab689b94f13e31e8270f077d9270bdc6849787e734a498fc8i0",
  },
  {
    label: "Inscription -44209",
    href: "https://ordinals.com/inscription/a7bb4e60aec3038e04370b84b84257c83b8fbd3273e69950dd620badb1a2a433i0",
  },
  {
    label: "Inscription -46373",
    href: "https://ordinals.com/inscription/4244009516dceacdf323c76936272e9f610aa22b7f45474bee7edc86416e9493i0",
  },
];

const funnyMedia = [
  "https://ordpuppetinuundoxxedmillionaires.com/funnypictures/IMG_2183.jpeg",
  "https://ordpuppetinuundoxxedmillionaires.com/funnypictures/IMG_2215.png",
  "https://ordpuppetinuundoxxedmillionaires.com/funnypictures/IMG_2221.png",
  "https://ordpuppetinuundoxxedmillionaires.com/funnypictures/IMG_2222.png",
  "https://ordpuppetinuundoxxedmillionaires.com/funnypictures/kek.jpeg",
  "https://ordpuppetinuundoxxedmillionaires.com/funnypictures/opiumden.png",
  "https://ordpuppetinuundoxxedmillionaires.com/funnypictures/IMG_2226.png",
  "https://ordpuppetinuundoxxedmillionaires.com/funnypictures/mbga.png",
  "https://ordpuppetinuundoxxedmillionaires.com/funnypictures/IMG_2191.png",
  "https://ordpuppetinuundoxxedmillionaires.com/funnypictures/20230516_075928.jpeg",
  "https://ordpuppetinuundoxxedmillionaires.com/funnypictures/pupsi.jpeg",
  "https://ordpuppetinuundoxxedmillionaires.com/funnypictures/IMG_2127.png",
  "https://ordpuppetinuundoxxedmillionaires.com/funnypictures/IMG_0012.jpeg",
  "https://ordpuppetinuundoxxedmillionaires.com/funnypictures/IMG_2167.png",
  "https://ordpuppetinuundoxxedmillionaires.com/funnypictures/sellopium.png",
  "https://ordpuppetinuundoxxedmillionaires.com/funnypictures/IMG_2173.png",
  "https://ordpuppetinuundoxxedmillionaires.com/funnypictures/IMG_2176.png",
  "https://ordpuppetinuundoxxedmillionaires.com/funnypictures/IMG_2193.png",
  "https://ordpuppetinuundoxxedmillionaires.com/funnypictures/IMG_3348.jpeg",
  "https://ordpuppetinuundoxxedmillionaires.com/funnypictures/pizza.png",
  "https://ordpuppetinuundoxxedmillionaires.com/funnypictures/fees.png",
  "https://ordpuppetinuundoxxedmillionaires.com/funnypictures/currentthing.png",
  "https://ordpuppetinuundoxxedmillionaires.com/funnypictures/popular.png",
  "https://ordpuppetinuundoxxedmillionaires.com/funnypictures/based.png",
  "https://ordpuppetinuundoxxedmillionaires.com/funnypictures/itiswhatitis.png",
  "https://ordpuppetinuundoxxedmillionaires.com/funnypictures/npcs.png",
  "https://ordpuppetinuundoxxedmillionaires.com/funnypictures/whorehouse.png",
  "https://ordpuppetinuundoxxedmillionaires.com/funnypictures/IMG_3347.jpeg",
  "https://ordpuppetinuundoxxedmillionaires.com/funnypictures/craig.png",
  "https://ordpuppetinuundoxxedmillionaires.com/funnypictures/autism.png",
  "https://ordpuppetinuundoxxedmillionaires.com/funnypictures/marketchin.png",
  "https://ordpuppetinuundoxxedmillionaires.com/funnypictures/army.png",
  "https://ordpuppetinuundoxxedmillionaires.com/funnypictures/pep.png",
  "https://ordpuppetinuundoxxedmillionaires.com/funnypictures/opiumgang.png",
  "https://ordpuppetinuundoxxedmillionaires.com/funnypictures/jameslintin.jpeg",
  "https://ordpuppetinuundoxxedmillionaires.com/funnypictures/prototype.jpg",
  "https://ordpuppetinuundoxxedmillionaires.com/funnypictures/basement.png",
  "https://ordpuppetinuundoxxedmillionaires.com/funnypictures/pupsinit.png",
  "https://ordpuppetinuundoxxedmillionaires.com/funnypictures/alena.jpeg",
  "https://ordpuppetinuundoxxedmillionaires.com/funnypictures/bossup.png",
  "https://ordpuppetinuundoxxedmillionaires.com/funnypictures/heat.png",
  "https://ordpuppetinuundoxxedmillionaires.com/funnypictures/ehh.png",
  "https://ordpuppetinuundoxxedmillionaires.com/funnypictures/president.png",
  "https://ordpuppetinuundoxxedmillionaires.com/funnypictures/cons.jpeg",
  "https://ordpuppetinuundoxxedmillionaires.com/funnypictures/hex.jpeg",
  "https://ordpuppetinuundoxxedmillionaires.com/funnypictures/run.png",
  "https://ordpuppetinuundoxxedmillionaires.com/funnypictures/casino.png",
  "https://ordpuppetinuundoxxedmillionaires.com/funnypictures/nyaan.gif",
  "https://ordpuppetinuundoxxedmillionaires.com/funnypictures/brr.gif",
  "https://ordpuppetinuundoxxedmillionaires.com/funnypictures/clorox.jpeg",
  "https://ordpuppetinuundoxxedmillionaires.com/funnypictures/diem.jpeg",
  "https://ordpuppetinuundoxxedmillionaires.com/funnypictures/et.jpeg",
];

export default function Home() {
  return (
    <div className="min-h-screen pb-20">
      <div className="window-titlebar marquee border-b-4 border-black">
        <span className="text-sm md:text-base font-bold tracking-wide">
          bj bj bj ✦ WORLD PEACE ONLY ✦ FREE MINT ✦ COMMUNITY-LED ✦ CHAOTIC
          PIXEL ENERGY ✦ WHERE ART TRANSCENDS LIMITS ✦ bj bj bj
        </span>
      </div>

      <main className="mx-auto flex w-full max-w-6xl flex-col gap-10 px-4 pt-10 sm:px-6 relative">
        <img
          src="/favicon.png"
          alt="Bitcoin Puppets favicon"
          className="pointer-events-none absolute -left-2 top-4 h-24 w-auto rotate-[-8deg] z-[60]"
        />
        <DraggableStickers />
        <section className="grid items-center gap-8 lg:grid-cols-[1.1fr_0.9fr] relative">
          <div className="pixel-border bg-white/90 p-6 md:p-8 text-black">
            <div className="window-titlebar mb-4 flex items-center justify-between px-3 py-2">
              <span className="text-sm font-bold uppercase">
                Bitcoin Puppets
              </span>
            </div>
            <h1 className="text-3xl font-black uppercase tracking-tight md:text-5xl">
              <span className="rainbow-text inline-block">BJ</span> from the
              puppetverse
            </h1>
            <p className="mt-4 text-lg leading-relaxed">
              When you engage with the Puppets, leave behind the shackles of
              conventional thinking and surrender to the enchantment of the
              unconventional. Embrace the whimsy, relish in the absurd, and
              allow your imagination to roam freely. This is the sanctuary for
              the offbeat.
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
            </div>
          </div>

          <div className="pixel-border bg-white/90 p-3 text-black">
            <div className="window-titlebar flex items-center justify-between px-3 py-2">
              <span className="text-sm font-bold uppercase">Bulla.gif</span>
            </div>
            <div className="bg-white p-3">
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
            </div>
          </div>
        </section>

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
              community-led collective built on chaotic joy, freedom of
              imagination, and the belief that the internet should be weird
              again. Show up, post memes, say bj, and push world peace in every
              thread.
            </p>
          </section>
        </a>

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
              preload="auto"
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
              preload="auto"
            />
          </div>
        </section>

        <section className="grid gap-4 lg:grid-cols-2 items-start">
          <div className="pixel-border bg-white/90 p-6 text-black lg:-mt-40">
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
                  <div className="text-xs font-normal normal-case">
                    {link.note}
                  </div>
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
                Protect the free + fair culture.
              </li>
              <li className="pixel-border bg-white/90 px-4 py-3 text-black">
                World peace above all.
              </li>
            </ul>
          </div>
        </section>

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

        <section className="pixel-border bg-white/95 p-6 text-black">
          <div className="window-titlebar mb-4 px-3 py-2 text-sm font-bold uppercase">
            Funny Pictures and Videos
          </div>
          <p className="text-sm font-bold uppercase">
            PUPPETIZE YOUR LIFE TODAY!!!!! PUPPETIZE YOUR LIFE TODAY!!!!!
            PUPPETIZE YOUR LIFE TODAY!!!!! PUPPETIZE YOUR LIFE TODAY!!!!!
          </p>
          <FunnyMediaGallery sources={funnyMedia} />
        </section>

        <section className="pixel-border bg-white/95 p-6 text-black">
          <div className="window-titlebar mb-4 px-3 py-2 text-sm font-bold uppercase">
            Viral Public License
          </div>
          <div className="pixel-border bg-white px-4 py-3 text-sm leading-relaxed">
            <p className="font-bold uppercase">
              Copyleft (ɔ) All Rights Reversed
            </p>
            <p className="mt-3">
              This WORK is hereby relinquished of all associated ownership,
              attribution, and copyrights, and redistribution or use of any
              kind, with or without modification, is permitted without
              restriction subject to the following conditions: Redistributions
              of this WORK or ANY work that makes use of ANY of the contents of
              this WORK by ANY kind of copying, dependency, linkage, or ANY
              other possible form of DERIVATION or COMBINATION, must retain the
              ENTIRETY of this license. No further restrictions of ANY kind may
              be applied.
            </p>
          </div>
        </section>

        <section className="pixel-border bg-white/95 p-6 text-black">
          <div className="window-titlebar mb-4 px-3 py-2 text-sm font-bold uppercase">
            No-Collab Thesis
          </div>
          <div className="pixel-border bg-white px-4 py-3 text-sm leading-relaxed">
            <p>
              Art in its purest form is a manifestation of individuality. The
              no-collab thesis asserts that the very essence of Bitcoin
              Puppets&apos; unique vision and narrative is the expression of a
              single artist. Artistic expression flourishes unbridled by
              compromise or dilution. Collaborations in the ordinals/NFT
              ecosystem often devolve into attention-grabbing spectacles, where
              the collective effort overshadows the intrinsic value. The
              no-collab thesis liberates the project from the pressure to
              conform to trends or compromise on integrity for the sake of
              visibility.
            </p>
            <p className="mt-3">
              The allure of collaboration often masks a perilous reality
              (despite the often thought-of win-win scenario): the devaluation
              of the project. When art becomes a mere utility, a means to an end
              in a collaborative endeavor, its inherent value is compromised.
              The no-collab thesis acts as a guardian against such devaluation,
              ensuring the project is not reduced to a mere cog in a collective
              machine.
            </p>
            <p className="mt-3">
              Art forms a profound connection between the creator and the
              collector. By adhering to the no-collab thesis, we preserve the
              sanctity of this connection, undiluted by external influences. In
              an ecosystem that champions collaboration as the epitome of
              success, the no-collab thesis challenges the illusion of win-win
              scenarios. It contends that true success lies in the unwavering
              pursuit of a project untainted by compromise. In conclusion, the
              no-collab thesis is a defiance against the commodification of art.
            </p>
          </div>
        </section>

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
                resonant, and unapologetically absurd experiments in the
                Ordinals ecosystem—a collection of 10,001 hand-drawn profile
                pictures (PFPs) inscribed eternally on the Bitcoin blockchain.
                Born from the fringes of digital art and counterculture, it
                expands on its predecessor, O.P.I.U.M. (Ord Puppet Inu Undoxxed
                Millionaire), a 777-piece series of esoteric hand puppets.
                Together, they form a narrative tapestry woven with whimsy,
                economic nihilism, and a rallying cry for world peace (🌎☮️).
                This isn’t just an NFT project; it’s a manifesto against
                corporate hype, a memetic rebellion, and a community-fueled lore
                that defies traditional roadmaps or utility promises.
              </p>
              <p>
                At its core, Bitcoin Puppets and O.P.I.U.M. were created by the
                pseudonymous artist Le Puppeteer Fou (The Puppetmaster), an
                undoxxed visionary inspired by Satoshi Nakamoto’s vanishing act.
                The mission? To spark emotional gravity through art—absurd,
                unpretentious, and free from expectations. As the ethos
                declares: “We like the art, world peace, and going to $0.”
              </p>

              <div className="grid gap-2">
                <h3 className="text-sm font-bold uppercase">
                  The Artist: Le Puppeteer Fou
                </h3>
                <ul className="list-disc pl-5">
                  <li>
                    Undoxxed by design, echoing Bitcoin’s pseudonymous roots.
                  </li>
                  <li>
                    Emerges from the Wassies community; that OG crew seeded the
                    culture.
                  </li>
                  <li>
                    Previous work: Lasogette (Ethereum, ~2021–2022), 7,777
                    whimsical portraits.
                  </li>
                  <li>
                    Transitioned to Bitcoin in early 2023 for permanence and
                    native absurdity.
                  </li>
                  <li>
                    Creates with simple, raw paint tools and community-collab
                    traits.
                  </li>
                  <li>
                    Handmade 1-of-1 honoraries for community and ecosystem
                    legends.
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
                    No roadmap, no utility promises — just art and attitude.
                  </li>
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
                  <li>O.P.I.U.M. holders had priority for 5 Puppets each.</li>
                  <li>
                    Lore jokes about a “12-year-old artist,” but it’s Fou’s
                    handiwork.
                  </li>
                </ul>
              </div>

              <div className="grid gap-2">
                <h3 className="text-sm font-bold uppercase">
                  $PUPS — World Peace by Force
                </h3>
                <ul className="list-disc pl-5">
                  <li>
                    BRC-20 token launched days after O.P.I.U.M., 100% airdropped
                    to holders.
                  </li>
                  <li>
                    Migrated to Runes April 20, 2024: PUPS•WORLD•PEACE (Rune
                    #13).
                  </li>
                  <li>
                    Community lore says it briefly touched a ~$1B market cap
                    during the April 2024 meme run; some aggregators record a
                    lower ATH around ~$760–800M.
                  </li>
                  <li>
                    22.3% allocated to Rune Pups; 77.7% to legacy holders.
                  </li>
                  <li>Slogan: “World peace by force.” Utility: vibes only.</li>
                </ul>
              </div>

              <div className="grid gap-2">
                <h3 className="text-sm font-bold uppercase">
                  Manifesto & Mission
                </h3>
                <ul className="list-disc pl-5">
                  <li>Culture &gt; companies. Memes &gt; roadmaps.</li>
                  <li>No-collab thesis. Organic growth only.</li>
                  <li>Embrace the void: “Send them to zero!”</li>
                  <li>World peace (🌎☮️) and emotional gravity over hype.</li>
                </ul>
              </div>

              <div className="grid gap-2">
                <h3 className="text-sm font-bold uppercase">
                  Community & Hubs
                </h3>
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
                </ul>
              </div>

              <div className="grid gap-2">
                <h3 className="text-sm font-bold uppercase">
                  Recent Developments
                </h3>
                <p>
                  In December 2025, Le Puppeteer Fou deleted socials, echoing
                  the Satoshi mythos. The community rallied, reinforcing the
                  core belief: the art and culture outlive the artist.
                </p>
              </div>
            </div>
          </details>
        </section>
      </main>

      <footer className="mx-auto mt-16 flex w-full max-w-6xl flex-col gap-4 px-4 text-sm sm:px-6">
        <div className="pixel-border window-titlebar px-4 py-3 text-white">
          Created by Robin, CEO of Liquidium (
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
        <div className="text-xs text-black/70">
          This is a community-led hub. Not financial advice. Just vibes.
        </div>
      </footer>
    </div>
  );
}
