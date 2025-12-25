import type { Metadata } from "next";
import Image from "next/image";
import DraggableStickers from "./components/DraggableStickers";
import {
  CommunityChecklist,
  CursedInscriptionsSection,
  FaqSection,
  FunnyMediaSection,
  HeroSection,
  LicenseSection,
  LoreSection,
  ManifestoSection,
  NoCollabSection,
  OpiumOrigins,
  PuppetInterview,
  QuickLinksSection,
  SiteFooter,
} from "./components/home";

export const metadata: Metadata = {
  title: "Community Hub",
  description:
    "A community-led hub for the Bitcoin Puppets Ordinals collection. Good vibes, world peace, and pure chaos.",
  alternates: {
    canonical: "/",
  },
};

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
        <Image
          src="/smile.avif"
          alt="Bitcoin Puppets favicon"
          width={96}
          height={96}
          priority
          className="pointer-events-none absolute -left-2 top-4 h-24 w-auto rotate-[-8deg] z-[60]"
        />
        <DraggableStickers />
        <HeroSection />
        <ManifestoSection />

        <div className="grid gap-4 lg:grid-cols-2 items-start">
          <div className="flex flex-col gap-4">
            <QuickLinksSection />
            <CursedInscriptionsSection />
          </div>
          <div className="flex flex-col gap-4">
            <OpiumOrigins />
            <PuppetInterview />
            <CommunityChecklist />
          </div>
        </div>

        <FaqSection />
        <FunnyMediaSection />

        <LicenseSection />
        <NoCollabSection />
        <LoreSection />
      </main>
      <SiteFooter />
    </div>
  );
}
