<script lang="ts">
	import type { Suite, Value } from "$lib/models/suite";
	import type { ComponentType } from "svelte";
	import Four from "./Four.svelte";
	import Two from "./Two.svelte";
	import Ace from "./Ace.svelte";
	import Three from "./Three.svelte";
	import Five from "./Five.svelte";
	import Six from "./Six.svelte";
	import Seven from "./Seven.svelte";
	import Eight from "./Eight.svelte";
	import Nine from "./Nine.svelte";
	import Ten from "./Ten.svelte";

	export let value: Value;
	export let suite: Suite

	const valueMap: Record<Value, ComponentType> = {
		'2': Two,
		'3': Three,
		'4': Four,
		'5': Five,
		'6': Six,
		'7': Seven,
		'8': Eight,
		'9': Nine,
		'10': Ten,
		'J': Two,
		'Q': Two,
		'K': Two,
		'A': Ace
	};
</script>

<svelte:component this={valueMap[value]} {value} {suite} />