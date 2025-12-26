"use client";

import dynamic from "next/dynamic";

const DraggableStickers = dynamic(
  () => import("./DraggableStickers"),
  { ssr: false, loading: () => null }
);

export default function ClientOnlyStickers() {
  return <DraggableStickers />;
}
