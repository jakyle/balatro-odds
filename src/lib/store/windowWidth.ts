import { derived, writable } from "svelte/store";

export const windowWidth = writable(0);

export const screen = derived(windowWidth, ($windowWidth) => {
	if ($windowWidth < 640) {
		return "xs";
	} else if ($windowWidth >= 640 && $windowWidth < 768) {
		return "sm";
	} else if ($windowWidth >= 768 && $windowWidth < 1024) {
		return "md";
	} else if ($windowWidth >= 1024 && $windowWidth < 1280) {
		return "lg";
	} else if ($windowWidth >= 1280 && $windowWidth < 1536) {
		return "xl";
	} else if ($windowWidth >= 1536) {
		return "2xl";
	}
})