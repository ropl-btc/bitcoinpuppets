"use client";

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

const initialStickers: Sticker[] = [
	{ id: "head-2", src: "/puppets_heads/head-2.png", x: 40, y: 220, rotate: -10, height: 96 },
	{ id: "head-5", src: "/puppets_heads/head-5.png", x: 760, y: 280, rotate: 12, height: 112 },
	{ id: "head-7", src: "/puppets_heads/head-7.png", x: 20, y: 640, rotate: 10, height: 96 },
	{ id: "head-9", src: "/puppets_heads/head-9.png", x: 820, y: 860, rotate: 9, height: 110 },
	{
		id: "head-12",
		src: "/puppets_heads/head-12.png",
		x: 760,
		y: 520,
		rotate: 14,
		height: 104,
		link: "https://youtu.be/xvFZjo5PgG0?si=5lTg3z5hLa3r8n3k",
	},
	{ id: "head-15", src: "/puppets_heads/head-15.png", x: 820, y: 1160, rotate: 6, height: 96 },
	{ id: "head-18", src: "/puppets_heads/head-18.png", x: 60, y: 1440, rotate: -10, height: 108 },
	{ id: "head-11", src: "/puppets_heads/head-11.png", x: 360, y: 320, rotate: -8, height: 120 },
	{ id: "head-4", src: "/puppets_heads/head-4.png", x: 120, y: 980, rotate: -12, height: 88 },
	{ id: "head-6", src: "/puppets_heads/head-6.png", x: 40, y: 1780, rotate: 8, height: 96 },
	{ id: "head-3", src: "/puppets_heads/head-3.png", x: 860, y: 2000, rotate: 12, height: 96 },
	{ id: "head-13", src: "/puppets_heads/head-13.png", x: 80, y: 2280, rotate: -8, height: 96 },
	{ id: "head-8", src: "/puppets_heads/head-8.png", x: 840, y: 2580, rotate: 10, height: 96 },
	{ id: "head-16", src: "/puppets_heads/head-16.png", x: 40, y: 3000, rotate: 6, height: 112 },
	{
		id: "head-10",
		src: "/puppets_heads/head-10.png",
		x: 780,
		y: 2600,
		rotate: -12,
		height: 110,
	},
	{ id: "head-14", src: "/puppets_heads/head-14.png", x: 120, y: 3520, rotate: 8, height: 100 },
	{ id: "head-17", src: "/puppets_heads/head-17.png", x: 820, y: 3780, rotate: 14, height: 108 },
	{ id: "head-1", src: "/puppets_heads/head-1.png", x: 60, y: 4020, rotate: -6, height: 112 },
	{ id: "head-3c", src: "/puppets_heads/head-3.png", x: 760, y: 4260, rotate: 9, height: 104 },
	{ id: "head-6c", src: "/puppets_heads/head-6.png", x: 140, y: 4520, rotate: 12, height: 100 },
	{ id: "head-9b", src: "/puppets_heads/head-9.png", x: 820, y: 4800, rotate: -10, height: 110 },
];

export default function DraggableStickers() {
	const [stickers, setStickers] = useState<Sticker[]>(initialStickers);
	const stickersRef = useRef<Sticker[]>(initialStickers);
	const dragIdRef = useRef<string | null>(null);
	const offsetRef = useRef<{ x: number; y: number }>({ x: 0, y: 0 });
	const startPosRef = useRef<{ x: number; y: number }>({ x: 0, y: 0 });
	const movedRef = useRef(false);

	const onPointerMove = useCallback((event: PointerEvent) => {
		const id = dragIdRef.current;
		if (!id) return;
		const current = stickersRef.current.find((sticker) => sticker.id === id);
		if (!current) return;
		const nextX = event.pageX - offsetRef.current.x;
		const nextY = event.pageY - offsetRef.current.y;
		if (Math.abs(event.pageX - startPosRef.current.x) > 4 || Math.abs(event.pageY - startPosRef.current.y) > 4) {
			movedRef.current = true;
		}
		setStickers((prev) =>
			prev.map((sticker) =>
				sticker.id === id ? { ...sticker, x: nextX, y: nextY } : sticker
			)
		);
	}, []);

	const onPointerUp = useCallback(() => {
		dragIdRef.current = null;
	}, []);

	useEffect(() => {
		window.addEventListener("pointermove", onPointerMove);
		window.addEventListener("pointerup", onPointerUp);
		return () => {
			window.removeEventListener("pointermove", onPointerMove);
			window.removeEventListener("pointerup", onPointerUp);
		};
	}, [onPointerMove, onPointerUp]);

	useEffect(() => {
		stickersRef.current = stickers;
	}, [stickers]);

	const handlePointerDown = (event: React.PointerEvent<HTMLImageElement>, sticker: Sticker) => {
		event.preventDefault();
		dragIdRef.current = sticker.id;
		movedRef.current = false;
		startPosRef.current = { x: event.pageX, y: event.pageY };
		offsetRef.current = {
			x: event.pageX - sticker.x,
			y: event.pageY - sticker.y,
		};
		event.currentTarget.setPointerCapture(event.pointerId);
	};

	const handleClick = (event: React.MouseEvent) => {
		if (movedRef.current) {
			event.preventDefault();
			event.stopPropagation();
		}
	};

	return (
		<div className="absolute inset-0 pointer-events-none">
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
						height: `${sticker.height}px`,
					} as React.CSSProperties}
				>
					<img
						src={sticker.src}
						alt=""
						onPointerDown={(event) => handlePointerDown(event, sticker)}
						className="block h-full w-auto"
						draggable={false}
					/>
				</a>
			))}
		</div>
	);
}
