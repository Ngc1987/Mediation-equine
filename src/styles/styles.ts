import { CSSProperties } from 'react';

export const parent:CSSProperties = {
	position: "relative",
	paddingBottom: "56.25%",
	overflow: "hidden"
}

export const lqip:CSSProperties = {
	position: "absolute",
	width: "100%",
	minHeight: "100%",
	zIndex: 10,
	transform: "translate(-50%, -50%) scale(1)",
	top: "50%",
	left: "50%",
	objectFit: "cover",
	filter: "blur(10px)",
	transitionDuration: "2500ms",
	transitionProperty: "opacity",
	transitionTimingFunction: "cubic-bezier(0.4, 0, 1, 1)"
}

export const main:CSSProperties = {
	position: "absolute",
	width: "100%",
	minHeight: "100%",
	transform: "translate(-50%, -50%) scale(1)",
	top: "50%",
	left: "50%",
	objectFit: "cover",
	filter: "blur(2px)",
	zIndex: 0
}
