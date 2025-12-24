"use client";

import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";

type Sticker = {
  id: string;
  src: string;
  x: number;
  y: number;
  mobileLeft?: number;
  mobileRight?: number;
  mobileY?: number;
  rotate: number;
  height: number;
  link?: string;
};

const STICKER_MARGIN = 16;
const STICKER_MAX_SCALE = 1.1;
const STICKER_MOBILE_BREAKPOINT = 768;

const clamp = (value: number, min: number, max: number) =>
  Math.min(Math.max(value, min), max);

const clampStickerX = (
  x: number,
  height: number,
  viewportWidth: number,
  containerLeft: number
) => {
  const effectiveSize = height * STICKER_MAX_SCALE;
  const minX = STICKER_MARGIN - containerLeft;
  const maxX = Math.max(
    minX,
    viewportWidth - effectiveSize - STICKER_MARGIN - containerLeft
  );
  return clamp(x, minX, maxX);
};

const getIsMobileViewport = () => {
  if (typeof window === "undefined") return false;
  const viewportWidth = Math.min(
    window.innerWidth || 0,
    document.documentElement.clientWidth || 0
  );
  return viewportWidth <= STICKER_MOBILE_BREAKPOINT;
};

const buildResponsiveStickers = (
  mobile: boolean,
  viewportWidth: number,
  containerLeft: number
) =>
  initialStickers.map((sticker) => {
    if (!mobile) {
      return sticker;
    }
    const x =
      sticker.mobileLeft != null
        ? sticker.mobileLeft
        : sticker.mobileRight != null
        ? viewportWidth - containerLeft - sticker.height - sticker.mobileRight
        : sticker.x;
    const y = sticker.mobileY != null ? sticker.mobileY : sticker.y;
    return {
      ...sticker,
      x,
      y,
    };
  });

const initialStickers: Sticker[] = [
  {
    id: "head-2",
    src: "/puppets_heads/head-2.avif",
    x: -20,
    y: 200,
    mobileLeft: 156,
    mobileY: -3,
    rotate: -10,
    height: 96,
  },
  {
    id: "head-11",
    src: "/puppets_heads/head-11.avif",
    x: 500,
    y: 310,
    mobileRight: 28,
    mobileY: 443,
    rotate: -8,
    height: 120,
  },
  {
    id: "head-5",
    src: "/puppets_heads/head-5.avif",
    x: 1060,
    y: 40,
    mobileRight: 27,
    mobileY: 40,
    rotate: 12,
    height: 112,
  },
  {
    id: "head-7",
    src: "/puppets_heads/head-7.avif",
    x: -30,
    y: 610,
    mobileLeft: 16,
    mobileY: 1009,
    rotate: 10,
    height: 96,
  },
  {
    id: "head-9",
    src: "/puppets_heads/head-9.avif",
    x: 1050,
    y: 740,
    mobileRight: 27,
    mobileY: 693,
    rotate: 9,
    height: 110,
  },
  {
    id: "head-12",
    src: "/puppets_heads/head-12.avif",
    x: 760,
    y: 520,
    mobileLeft: 92,
    mobileY: 649,
    rotate: 14,
    height: 104,
    link: "https://youtu.be/xvFZjo5PgG0?si=5lTg3z5hLa3r8n3k",
  },
  {
    id: "head-4",
    src: "/puppets_heads/head-4.avif",
    x: 540,
    y: 720,
    mobileRight: 25,
    mobileY: 989,
    rotate: -12,
    height: 88,
  },
  {
    id: "head-15",
    src: "/puppets_heads/head-15.avif",
    x: 820,
    y: 1315,
    mobileRight: 26,
    mobileY: 1384,
    rotate: 6,
    height: 96,
  },
  {
    id: "head-18",
    src: "/puppets_heads/head-18.avif",
    x: 460,
    y: 1240,
    mobileRight: 27,
    mobileY: 1089,
    rotate: -10,
    height: 108,
  },
  {
    id: "head-6",
    src: "/puppets_heads/head-6.avif",
    x: 620,
    y: 1770,
    mobileRight: 28,
    mobileY: 1662,
    rotate: 8,
    height: 120,
  },
  {
    id: "head-3",
    src: "/puppets_heads/head-3.avif",
    x: 900,
    y: 1850,
    mobileRight: 32,
    mobileY: 2043,
    rotate: 12,
    height: 160,
  },
  {
    id: "head-13",
    src: "/puppets_heads/head-13.avif",
    x: 105,
    y: 2280,
    mobileRight: 26,
    mobileY: 2685,
    rotate: -8,
    height: 96,
  },
  {
    id: "head-8",
    src: "/puppets_heads/head-8.avif",
    x: 820,
    y: 2120,
    mobileRight: 26,
    mobileY: 2366,
    rotate: 10,
    height: 96,
  },
  {
    id: "head-10",
    src: "/puppets_heads/head-10.avif",
    x: 760,
    y: 2140,
    mobileLeft: 16,
    mobileY: 2090,
    rotate: -12,
    height: 110,
  },
  {
    id: "head-16",
    src: "/puppets_heads/head-16.avif",
    x: 260,
    y: 2800,
    mobileRight: 27,
    mobileY: 3584,
    rotate: 6,
    height: 112,
  },
  {
    id: "head-14",
    src: "/puppets_heads/head-14.avif",
    x: -20,
    y: 3120,
    mobileLeft: 16,
    mobileY: 3163,
    rotate: 8,
    height: 100,
  },
  {
    id: "head-17",
    src: "/puppets_heads/head-17.avif",
    x: 1080,
    y: 3780,
    mobileRight: 27,
    mobileY: 4016,
    rotate: 14,
    height: 108,
  },
  {
    id: "head-1",
    src: "/puppets_heads/head-1.avif",
    x: -50,
    y: 4320,
    mobileLeft: 16,
    mobileY: 4600,
    rotate: -6,
    height: 112,
  },
  {
    id: "head-3c",
    src: "/puppets_heads/head-3.avif",
    x: 1080,
    y: 4860,
    mobileRight: 26,
    mobileY: 4811,
    rotate: 9,
    height: 104,
  },
  {
    id: "head-6c",
    src: "/puppets_heads/head-6.avif",
    x: -40,
    y: 5020,
    mobileRight: 26,
    mobileY: 4956,
    rotate: 12,
    height: 100,
  },
  {
    id: "head-9b",
    src: "/puppets_heads/head-9.avif",
    x: 920,
    y: 5660,
    mobileRight: 28,
    mobileY: 5917,
    rotate: -10,
    height: 120,
  },
];

export default function DraggableStickers() {
  const [stickers, setStickers] = useState<Sticker[]>(initialStickers);
  const [debugEnabled, setDebugEnabled] = useState(false);
  const containerRef = useRef<HTMLDivElement | null>(null);
  const stickersRef = useRef<Sticker[]>(initialStickers);
  const bruhAudioRef = useRef<HTMLAudioElement | null>(null);
  const dragIndexRef = useRef<number | null>(null);
  const activeElementRef = useRef<HTMLAnchorElement | null>(null);
  const offsetRef = useRef<{ x: number; y: number }>({ x: 0, y: 0 });
  const startPosRef = useRef<{ x: number; y: number }>({ x: 0, y: 0 });
  const movedRef = useRef(false);
  const pendingPosRef = useRef<{ x: number; y: number } | null>(null);
  const latestPosRef = useRef<{ x: number; y: number } | null>(null);
  const rafRef = useRef<number | null>(null);
  const viewportWidthRef = useRef<number>(0);
  const containerLeftRef = useRef<number>(0);
  const hasDraggedRef = useRef(false);

  const applyPositionToElement = useCallback(
    (element: HTMLAnchorElement, x: number, y: number) => {
      element.style.setProperty("--x", `${x}px`);
      element.style.setProperty("--y", `${y}px`);
    },
    []
  );

  const onPointerMove = useCallback(
    (event: PointerEvent) => {
      const index = dragIndexRef.current;
      const activeElement = activeElementRef.current;
      if (index === null || !activeElement) return;
      const viewportWidth =
        viewportWidthRef.current || document.documentElement.clientWidth;
      const containerLeft = containerLeftRef.current;
      const sticker = stickersRef.current[index] ?? null;
      if (!sticker) return;
      const nextX = clampStickerX(
        event.pageX - containerLeft - offsetRef.current.x,
        sticker.height,
        viewportWidth,
        containerLeft
      );
      const nextY = event.pageY - offsetRef.current.y;
      if (
        Math.abs(event.pageX - startPosRef.current.x) > 4 ||
        Math.abs(event.pageY - startPosRef.current.y) > 4
      ) {
        movedRef.current = true;
      }
      pendingPosRef.current = { x: nextX, y: nextY };
      if (rafRef.current !== null) return;
      rafRef.current = window.requestAnimationFrame(() => {
        rafRef.current = null;
        const pending = pendingPosRef.current;
        if (!pending) return;
        latestPosRef.current = pending;
        applyPositionToElement(activeElement, pending.x, pending.y);
      });
    },
    [applyPositionToElement]
  );

  const onPointerUp = useCallback(() => {
    const index = dragIndexRef.current;
    const latest = latestPosRef.current;
    if (index !== null && latest) {
      if (movedRef.current) {
        hasDraggedRef.current = true;
      }
      setStickers((prev) => {
        if (!prev[index]) return prev;
        const next = [...prev];
        next[index] = { ...next[index], x: latest.x, y: latest.y };
        return next;
      });
    }
    dragIndexRef.current = null;
    activeElementRef.current = null;
    pendingPosRef.current = null;
    latestPosRef.current = null;
  }, []);

  useEffect(() => {
    stickersRef.current = stickers;
  }, [stickers]);

  useEffect(() => {
    bruhAudioRef.current = new Audio("/sfx/bruh.mp3");
    return () => {
      bruhAudioRef.current = null;
    };
  }, []);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const params = new URLSearchParams(window.location.search);
    const debugParam = params.get("stickersDebug");
    if (debugParam === "1" || debugParam === "true") {
      window.localStorage.setItem("stickersDebug", "1");
      setDebugEnabled(true);
      return;
    }
    if (debugParam === "0" || debugParam === "false") {
      window.localStorage.removeItem("stickersDebug");
      setDebugEnabled(false);
      return;
    }
    if (window.localStorage.getItem("stickersDebug") === "1") {
      setDebugEnabled(true);
    }
  }, []);

  useEffect(() => {
    const updateViewport = () => {
      viewportWidthRef.current = document.documentElement.clientWidth;
      const containerLeft =
        containerRef.current?.getBoundingClientRect().left ?? 0;
      containerLeftRef.current = containerLeft;
      setStickers((prev) =>
        (hasDraggedRef.current
          ? prev
          : buildResponsiveStickers(
              getIsMobileViewport(),
              viewportWidthRef.current,
              containerLeft
            )
        ).map((sticker) => ({
          ...sticker,
          x: clampStickerX(
            sticker.x,
            sticker.height,
            viewportWidthRef.current,
            containerLeft
          ),
        }))
      );
    };
    updateViewport();
    window.addEventListener("resize", updateViewport);
    window.addEventListener("pointermove", onPointerMove);
    window.addEventListener("pointerup", onPointerUp);
    window.addEventListener("pointercancel", onPointerUp);
    return () => {
      window.removeEventListener("resize", updateViewport);
      window.removeEventListener("pointermove", onPointerMove);
      window.removeEventListener("pointerup", onPointerUp);
      window.removeEventListener("pointercancel", onPointerUp);
      if (rafRef.current !== null) {
        window.cancelAnimationFrame(rafRef.current);
        rafRef.current = null;
      }
    };
  }, [onPointerMove, onPointerUp]);

  const copyText = (text: string) => {
    if (typeof navigator !== "undefined" && navigator.clipboard?.writeText) {
      void navigator.clipboard.writeText(text);
      return;
    }
    if (typeof window !== "undefined") {
      window.prompt("Copy sticker coords:", text);
    }
  };

  const handleCopySticker = (sticker: Sticker) => {
    const x = Math.round(sticker.x);
    const y = Math.round(sticker.y);
    copyText(`{ id: "${sticker.id}", mobileLeft: ${x}, mobileY: ${y} }`);
  };

  const handleCopyAllMobile = () => {
    const lines = stickers
      .map((sticker) => {
        const x = Math.round(sticker.x);
        const y = Math.round(sticker.y);
        return `\t{ id: "${sticker.id}", mobileLeft: ${x}, mobileY: ${y} },`;
      })
      .join("\n");
    copyText(lines);
  };

  const handleDisableDebug = () => {
    if (typeof window !== "undefined") {
      window.localStorage.removeItem("stickersDebug");
    }
    setDebugEnabled(false);
  };

  const handlePointerDown = (
    event: React.PointerEvent<HTMLImageElement>,
    sticker: Sticker
  ) => {
    event.preventDefault();
    const element = event.currentTarget.closest("a");
    if (!(element instanceof HTMLAnchorElement)) return;
    const index = stickersRef.current.findIndex(
      (item) => item.id === sticker.id
    );
    dragIndexRef.current = index >= 0 ? index : null;
    activeElementRef.current = element;
    movedRef.current = false;
    startPosRef.current = { x: event.pageX, y: event.pageY };
    const currentSticker = stickersRef.current[index] ?? sticker;
    const containerLeft = containerLeftRef.current;
    offsetRef.current = {
      x: event.pageX - containerLeft - currentSticker.x,
      y: event.pageY - currentSticker.y,
    };
    latestPosRef.current = { x: currentSticker.x, y: currentSticker.y };
    event.currentTarget.setPointerCapture(event.pointerId);
  };

  const handleClick = (event: React.MouseEvent, sticker: Sticker) => {
    if (movedRef.current) {
      event.preventDefault();
      event.stopPropagation();
      return;
    }

    if (sticker.id !== "head-12") {
      const audio = bruhAudioRef.current;
      if (audio) {
        audio.currentTime = 0;
        void audio.play().catch(() => {});
      }
    }
  };

  return (
    <div ref={containerRef} className="absolute inset-0 pointer-events-none">
      {stickers.map((sticker) => (
        <a
          key={sticker.id}
          href={sticker.link}
          target={sticker.link ? "_blank" : undefined}
          rel={sticker.link ? "noopener noreferrer" : undefined}
          onClick={(event) => handleClick(event, sticker)}
          className="sticker pointer-events-auto select-none"
          style={
            {
              "--x": `${sticker.x}px`,
              "--y": `${sticker.y}px`,
              "--r": `${sticker.rotate}deg`,
              "--size": `${sticker.height}px`,
            } as React.CSSProperties
          }
        >
          <Image
            src={sticker.src}
            alt=""
            width={sticker.height}
            height={sticker.height}
            sizes={`${sticker.height}px`}
            onPointerDown={(event) => handlePointerDown(event, sticker)}
            className="block h-full w-full object-contain"
            draggable={false}
          />
          {sticker.id === "head-11" && (
            <div className="absolute -top-4 left-1/2 -translate-x-1/2 pointer-events-none z-10">
              <div className="relative bg-white text-black text-xs font-bold px-2 py-1 rounded border-2 border-black whitespace-nowrap shadow-[2px_2px_0px_rgba(0,0,0,1)]">
                drag me
                <div className="absolute top-full left-1/2 -translate-x-1/2 w-0 h-0 border-l-[8px] border-l-transparent border-r-[8px] border-r-transparent border-t-[8px] border-t-black"></div>
                <div className="absolute top-full left-1/2 -translate-x-1/2 -translate-y-[0.5px] w-0 h-0 border-l-[6px] border-l-transparent border-r-[6px] border-r-transparent border-t-[6px] border-t-white"></div>
              </div>
            </div>
          )}
          {sticker.id === "head-9" && (
            <div className="absolute -top-4 left-1/2 -translate-x-1/2 pointer-events-none z-10">
              <div className="relative bg-white text-black text-xs font-bold px-2 py-1 rounded border-2 border-black whitespace-nowrap shadow-[2px_2px_0px_rgba(0,0,0,1)]">
                click me
                <div className="absolute top-full left-1/2 -translate-x-1/2 w-0 h-0 border-l-[8px] border-l-transparent border-r-[8px] border-r-transparent border-t-[8px] border-t-black"></div>
                <div className="absolute top-full left-1/2 -translate-x-1/2 -translate-y-[0.5px] w-0 h-0 border-l-[6px] border-l-transparent border-r-[6px] border-r-transparent border-t-[6px] border-t-white"></div>
              </div>
            </div>
          )}
        </a>
      ))}
      {debugEnabled ? (
        <div className="pointer-events-auto fixed bottom-4 right-4 z-[999] max-w-[90vw] bg-[#f7f0d2] text-[11px] text-black pixel-border">
          <div className="flex items-center justify-between gap-2 border-b-2 border-black px-2 py-1">
            <span className="font-bold">Sticker coords</span>
            <button
              type="button"
              className="px-1 text-[10px]"
              onClick={handleDisableDebug}
            >
              Disable
            </button>
          </div>
          <div className="flex flex-col gap-1 px-2 py-2">
            <button
              type="button"
              className="px-2 py-1 text-[10px] font-bold text-black"
              onClick={handleCopyAllMobile}
            >
              Copy all mobile coords
            </button>
            <div className="max-h-64 overflow-auto pr-1">
              {stickers.map((sticker) => (
                <div
                  key={sticker.id}
                  className="flex items-center justify-between gap-2 py-0.5"
                >
                  <span className="min-w-[72px]">{sticker.id}</span>
                  <span className="tabular-nums">
                    {Math.round(sticker.x)}, {Math.round(sticker.y)}
                  </span>
                  <button
                    type="button"
                    className="px-1 text-[10px]"
                    onClick={() => handleCopySticker(sticker)}
                  >
                    Copy
                  </button>
                </div>
              ))}
            </div>
            <div className="text-[9px] opacity-70">
              Tip: add ?stickersDebug=1 to keep this on.
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
}
