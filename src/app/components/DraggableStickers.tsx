"use client";

import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";

type Sticker = {
	id: string;
	src: string;
	x: number;
	y: number;
	rotate: number;
	height: number;
	link?: string;
};

const STICKER_MARGIN = 16;
const STICKER_MAX_SCALE = 1.1;

const clamp = (value: number, min: number, max: number) => Math.min(Math.max(value, min), max);

const clampStickerX = (x: number, height: number, viewportWidth: number, containerLeft: number) => {
	const effectiveSize = height * STICKER_MAX_SCALE;
	const minX = STICKER_MARGIN - containerLeft;
	const maxX = Math.max(minX, viewportWidth - effectiveSize - STICKER_MARGIN - containerLeft);
	return clamp(x, minX, maxX);
};

const initialStickers: Sticker[] = [
	{ id: "head-2", src: "/puppets_heads/head-2.avif", x: 40, y: 220, rotate: -10, height: 96 },
	{ id: "head-5", src: "/puppets_heads/head-5.avif", x: 760, y: 280, rotate: 12, height: 112 },
	{ id: "head-7", src: "/puppets_heads/head-7.avif", x: 20, y: 640, rotate: 10, height: 96 },
	{ id: "head-9", src: "/puppets_heads/head-9.avif", x: 820, y: 860, rotate: 9, height: 110 },
	{
		id: "head-12",
		src: "/puppets_heads/head-12.avif",
		x: 760,
		y: 520,
		rotate: 14,
		height: 104,
		link: "https://youtu.be/xvFZjo5PgG0?si=5lTg3z5hLa3r8n3k",
	},
	{ id: "head-15", src: "/puppets_heads/head-15.avif", x: 820, y: 1160, rotate: 6, height: 96 },
	{ id: "head-18", src: "/puppets_heads/head-18.avif", x: 60, y: 1440, rotate: -10, height: 108 },
	{ id: "head-11", src: "/puppets_heads/head-11.avif", x: 360, y: 320, rotate: -8, height: 120 },
	{ id: "head-4", src: "/puppets_heads/head-4.avif", x: 120, y: 980, rotate: -12, height: 88 },
	{ id: "head-6", src: "/puppets_heads/head-6.avif", x: 40, y: 1780, rotate: 8, height: 96 },
	{ id: "head-3", src: "/puppets_heads/head-3.avif", x: 860, y: 2000, rotate: 12, height: 96 },
	{ id: "head-13", src: "/puppets_heads/head-13.avif", x: 80, y: 2280, rotate: -8, height: 96 },
	{ id: "head-8", src: "/puppets_heads/head-8.avif", x: 840, y: 2580, rotate: 10, height: 96 },
	{ id: "head-16", src: "/puppets_heads/head-16.avif", x: 40, y: 3000, rotate: 6, height: 112 },
	{
		id: "head-10",
		src: "/puppets_heads/head-10.avif",
		x: 780,
		y: 2600,
		rotate: -12,
		height: 110,
	},
	{ id: "head-14", src: "/puppets_heads/head-14.avif", x: 120, y: 3520, rotate: 8, height: 100 },
	{ id: "head-17", src: "/puppets_heads/head-17.avif", x: 820, y: 3780, rotate: 14, height: 108 },
	{ id: "head-1", src: "/puppets_heads/head-1.avif", x: 60, y: 4020, rotate: -6, height: 112 },
	{ id: "head-3c", src: "/puppets_heads/head-3.avif", x: 760, y: 4260, rotate: 9, height: 104 },
	{ id: "head-6c", src: "/puppets_heads/head-6.avif", x: 140, y: 4520, rotate: 12, height: 100 },
	{ id: "head-9b", src: "/puppets_heads/head-9.avif", x: 820, y: 4800, rotate: -10, height: 110 },
];

export default function DraggableStickers() {
	const [stickers, setStickers] = useState<Sticker[]>(initialStickers);
	const containerRef = useRef<HTMLDivElement | null>(null);
	const stickersRef = useRef<Sticker[]>(initialStickers);
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

	const applyPositionToElement = useCallback((element: HTMLAnchorElement, x: number, y: number) => {
		element.style.setProperty("--x", `${x}px`);
		element.style.setProperty("--y", `${y}px`);
	}, []);

	const onPointerMove = useCallback(
		(event: PointerEvent) => {
			const index = dragIndexRef.current;
			const activeElement = activeElementRef.current;
			if (index === null || !activeElement) return;
			const viewportWidth = viewportWidthRef.current || document.documentElement.clientWidth;
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
			if (Math.abs(event.pageX - startPosRef.current.x) > 4 || Math.abs(event.pageY - startPosRef.current.y) > 4) {
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
		const updateViewport = () => {
			viewportWidthRef.current = document.documentElement.clientWidth;
			const containerLeft = containerRef.current?.getBoundingClientRect().left ?? 0;
			containerLeftRef.current = containerLeft;
			setStickers((prev) =>
				prev.map((sticker) => ({
					...sticker,
					x: clampStickerX(sticker.x, sticker.height, viewportWidthRef.current, containerLeft),
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

	const handlePointerDown = (event: React.PointerEvent<HTMLImageElement>, sticker: Sticker) => {
		event.preventDefault();
		const element = event.currentTarget.closest("a");
		if (!(element instanceof HTMLAnchorElement)) return;
		const index = stickersRef.current.findIndex((item) => item.id === sticker.id);
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

	const handleClick = (event: React.MouseEvent) => {
		if (movedRef.current) {
			event.preventDefault();
			event.stopPropagation();
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
					onClick={handleClick}
					className="sticker pointer-events-auto select-none"
					style={{
						"--x": `${sticker.x}px`,
						"--y": `${sticker.y}px`,
						"--r": `${sticker.rotate}deg`,
						"--size": `${sticker.height}px`,
					} as React.CSSProperties}
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
				</a>
			))}
		</div>
	);
}
