"use client";

import { useDraggableStickers } from "./stickers/useDraggableStickers";
import { StickerItem } from "./stickers/StickerItem";
import { DebugOverlay } from "./stickers/DebugOverlay";

export default function DraggableStickers() {
  const {
    stickers,
    debugEnabled,
    containerRef,
    handlePointerDown,
    handleClick,
    handleDisableDebug,
  } = useDraggableStickers();

  return (
    <div ref={containerRef} className="absolute inset-0 pointer-events-none">
      {stickers.map((sticker) => (
        <StickerItem
          key={sticker.id}
          sticker={sticker}
          onPointerDown={handlePointerDown}
          onClick={handleClick}
        />
      ))}
      {debugEnabled && (
        <DebugOverlay stickers={stickers} onDisable={handleDisableDebug} />
      )}
    </div>
  );
}
