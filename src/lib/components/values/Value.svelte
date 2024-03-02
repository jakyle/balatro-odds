<script lang="ts">
	import type { Value } from "$lib/models/value";
	import type { Card } from "$lib/models/card";
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

	export let card: Card
	let { value, suite } = card;

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

<svelte:component this={valueMap[value]} suite={suite} />