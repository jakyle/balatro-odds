<script lang="ts">
	import type { Card } from '$lib/models/card';
	import type { Suite } from '$lib/models/suite';
	import SuiteSymbol from './suites/SuiteSymbol.svelte';
	import ValueComponent from './values/Value.svelte';

	export let card: Card;
	let { suite, value } = card;

	const suiteColor: Record<Suite, string> = {
		spades: 'text-black',
		clubs: 'text-blue-600',
		hearts: 'text-red-600',
		diamonds: 'text-yellow-600'
	};
</script>

<div
	class="flex @container aspect-2/3 w-36 rounded-lg bg-white shadow transition-all hover:shadow-xl hover:scale-105 {suiteColor[suite]}"
>
	<div class="flex size-full py-0 @4xs:py-1 @3xs:py-2 @2xs:py-2.5 @sm:py-4">
		<div class="w-3/10 @sm:w-1/6 @4xs:w-3/12 @3xs:w-1/5 flex flex-none flex-col items-center gap-0.5 pl-3 font-bold text-base @4xs:text-lg @3xs:text-2xl @sm:text-4xl">
			<span>{value}</span>
			<SuiteSymbol {suite} class="w-full" />
		</div>

		<div class="flex-1 py-6 @4xs:py-5">
			<ValueComponent {card} />
		</div>

		<div class="w-3/10 @sm:w-1/6 @4xs:w-3/12 @3xs:w-1/5 flex flex-none rotate-180 flex-col items-center gap-0.5 pl-3 text-base @4xs:text-lg @3xs:text-2xl @sm:text-4xl font-bold">
			<span>{card.value}</span>
			<SuiteSymbol {suite} class="w-full" />
		</div>
	</div>
</div>
