<script lang="ts">
	import type { ComponentType } from 'svelte';
	import Spade from './Spade.svelte';
	import Club from './Club.svelte';
	import Heart from './Heart.svelte';
	import Diamond from './Diamond.svelte';
	import type { Suite } from '$lib/models/suite';

	let suite: Suite
	let classes: string = ""

	const suiteSymbol: Record<Suite, ComponentType> = {
		spades: Spade,
		clubs: Club,
		hearts: Heart,
		diamonds: Diamond
	};

	export { classes as class, suite }
</script>

<svelte:component this={suiteSymbol[suite]} class={classes} />