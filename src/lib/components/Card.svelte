<script lang="ts">
	import type { Card } from '$lib/models/card';
	import type { Suite } from '$lib/models/suite';
	import CornerValue from './CornerValue.svelte';
	import SuiteSymbol from './suites/SuiteSymbol.svelte';
	import ValueComponent from './values/Value.svelte';

	export let card: Card;
	export let size: '2xs' | 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' = 'sm';
	let { suite } = card;

	const suiteColor: Record<Suite, string> = {
		spades: 'text-black',
		clubs: 'text-blue-600',
		hearts: 'text-red-600',
		diamonds: 'text-yellow-600'
	};

</script>

<div
	role="img"
	aria-label="{card.value} of {suite}"
	data-size={size}
	class="group flex justify-center items-center @container aspect-2/3 w-8 data-xs:w-16 data-sm:w-24 data-md:w-32 data-lg:w-40 data-xl:w-48 data-2xl:w-56 rounded-lg bg-white shadow transition-all {suiteColor[suite]}"
>

	<div class="flex @8xs:hidden flex-col justify-center items-center">
		<span class="text-xl font-bold">{card.value}</span>
		<SuiteSymbol {suite} class="size-4 @8xs:hidden" />
	</div>

	<div class="hidden @8xs:flex size-full py-0 @4xs:py-1 @3xs:py-2 @2xs:py-2.5 @sm:py-4">

		<CornerValue {card} {suite} />

		<div class="flex-1 py-4 @4xs:py-5">
			<ValueComponent {card} />
		</div>

		<CornerValue {card} {suite} isReverse={true} />

	</div>

</div>
