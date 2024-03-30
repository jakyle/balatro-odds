<script lang="ts">
	import type { Card } from '$lib/models/card';
	import type { Suite } from '$lib/models/suite';
	import SuiteSymbol from './suites/SuiteSymbol.svelte';

	export let card: Card;
	export let suite: Suite;
	export let isReverse: boolean = false;

</script>

<div
	class:rotate-180={isReverse}
	class="w-28/100 @7xs:w-25/100 @6xs:w-1/4 @4xs:w-3/12 @3xs:w-1/5 @sm:w-1/6 flex flex-none flex-col items-center gap-0.5 pl-1 pr-1 @7xs:pl-2 text-sm @6xs:text-base @4xs:text-lg @3xs:text-2xl @sm:text-4xl font-bold">
	<span>{card.value}</span>
	<SuiteSymbol {suite} class="w-full" />
</div>