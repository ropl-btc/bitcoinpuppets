import { Sticker } from "./types";

interface DebugOverlayProps {
  stickers: Sticker[];
  onDisable: () => void;
}

export const DebugOverlay = ({ stickers, onDisable }: DebugOverlayProps) => {
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

  return (
    <div className="pointer-events-auto fixed bottom-4 right-4 z-[999] max-w-[90vw] bg-[#f7f0d2] text-[11px] text-black pixel-border">
      <div className="flex items-center justify-between gap-2 border-b-2 border-black px-2 py-1">
        <span className="font-bold">Sticker coords</span>
        <button type="button" className="px-1 text-[10px]" onClick={onDisable}>
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
  );
};
