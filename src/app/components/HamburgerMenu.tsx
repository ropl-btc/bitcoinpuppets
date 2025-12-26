"use client";

import { useState, useEffect } from "react";

const LINKS = [
  { name: "X", href: "https://x.com/BitcoinPuppets" },
  { name: "Telegram", href: "https://t.me/worldpeacegospel" },
  {
    name: "Magic Eden",
    href: "https://magiceden.io/ordinals/marketplace/bitcoin-puppets",
  },
  { name: "Discord", href: "https://discord.gg/bitcoinpuppets" },
  { name: "GitHub", href: "https://github.com/ropl-btc/bitcoinpuppets" },
  {
    name: "Feedback",
    href: "https://github.com/ropl-btc/bitcoinpuppets/issues",
  },
  { name: "Liquidium.WTF", href: "https://liquidium.wtf" },
];

export default function HamburgerMenu() {
  const [isOpen, setIsOpen] = useState(false);

  // Close menu when clicking outside
  useEffect(() => {
    if (!isOpen) return;
    const handleDown = (e: MouseEvent) => {
      if (!(e.target as HTMLElement).closest(".hamburger-container")) {
        setIsOpen(false);
      }
    };
    window.addEventListener("mousedown", handleDown);
    return () => window.removeEventListener("mousedown", handleDown);
  }, [isOpen]);

  // Close menu on escape key
  useEffect(() => {
    if (!isOpen) return;
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setIsOpen(false);
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [isOpen]);

  return (
    <div className="hamburger-container fixed top-1.5 right-4 z-[100]">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="pixel-border bg-white p-1.5 hover:bg-gray-100 transition-colors shadow-none active:translate-y-0.5"
        aria-label="Menu"
      >
        <div className="w-6 h-5 flex flex-col justify-between p-0.5">
          <span
            className={`block w-full h-1 bg-black transition-all duration-200 ${isOpen ? "rotate-45 translate-y-1.5" : ""}`}
          ></span>
          <span
            className={`block w-full h-1 bg-black transition-all duration-200 ${isOpen ? "opacity-0" : ""}`}
          ></span>
          <span
            className={`block w-full h-1 bg-black transition-all duration-200 ${isOpen ? "-rotate-45 -translate-y-1.5" : ""}`}
          ></span>
        </div>
      </button>

      {isOpen && (
        <div className="absolute right-0 mt-2 w-56 pixel-border bg-white overflow-hidden shadow-2xl animate-in fade-in slide-in-from-top-2 duration-200">
          <div className="window-titlebar px-3 py-1.5 text-xs font-bold uppercase tracking-wider">
            Puppet Menu
          </div>
          <div className="flex flex-col bg-white">
            {LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-between px-4 py-2.5 text-sm font-bold uppercase text-black hover:bg-black hover:text-white border-b-2 border-black/10 last:border-b-0 transition-colors"
                onClick={() => setIsOpen(false)}
              >
                <span>{link.name}</span>
                <span className="opacity-0 group-hover:opacity-100 transition-opacity">
                  →
                </span>
              </a>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
