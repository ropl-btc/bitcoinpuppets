'use client';

import Image from 'next/image';
import { useEffect, useState } from 'react';

type FunnyMediaGalleryProps = {
  sources: string[];
};

export default function FunnyMediaGallery({ sources }: FunnyMediaGalleryProps) {
  const [selectedSrc, setSelectedSrc] = useState<string | null>(null);

  useEffect(() => {
    if (!selectedSrc) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setSelectedSrc(null);
      }
    };

    document.addEventListener('keydown', onKeyDown);
    return () => document.removeEventListener('keydown', onKeyDown);
  }, [selectedSrc]);

  return (
    <>
      <div className="mt-4 grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
        {sources.map((src) => (
          <button
            key={src}
            type="button"
            onClick={() => setSelectedSrc(src)}
            className="pixel-border bg-white p-2 text-left hover:-translate-y-0.5 hover:shadow-press transition"
          >
            <div className="relative h-32 w-full">
              <Image
                src={src}
                alt="Funny puppet media"
                fill
                sizes="(min-width: 1024px) 200px, (min-width: 640px) 160px, 120px"
                className="object-contain"
                unoptimized
              />
            </div>
          </button>
        ))}
      </div>

      {selectedSrc ? (
        <div
          className="fixed inset-0 z-[80] flex items-center justify-center bg-black/70 px-4 py-8"
          onClick={() => setSelectedSrc(null)}
        >
          <div
            className="pixel-border bg-white/95 p-4 text-black max-w-[92vw]"
            onClick={(event) => event.stopPropagation()}
          >
            <div className="window-titlebar mb-3 flex items-center justify-between px-3 py-2 text-sm font-bold uppercase">
              <span>Funny Pictures and Videos</span>
              <button
                type="button"
                onClick={() => setSelectedSrc(null)}
                className="pixel-border bg-puppet-pink px-2 py-1 text-xs font-bold uppercase text-black hover:-translate-y-0.5 hover:shadow-press transition"
              >
                Close
              </button>
            </div>
            <div className="pixel-border bg-white p-3">
              <div className="relative h-[70vh] w-[85vw] max-w-[85vw]">
                <Image
                  src={selectedSrc}
                  alt="Funny puppet media enlarged"
                  fill
                  sizes="85vw"
                  className="object-contain"
                  unoptimized
                />
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
}
