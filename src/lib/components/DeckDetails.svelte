<script lang="ts">
	import type { Deck } from '$lib/models/deck';
	import type { Value } from '$lib/models/value';

	export let deck: Deck;

	$: valueTotals = Object.entries(deck.cards.reduce((acc, curr) => {
		acc[curr.value] = (acc[curr.value] ?? 0) + 1;
		return acc;
	}, {} as Record<Value, number>));

</script>


<div class="grid w-3/4 grid-cols-[auto_1fr] grid-rows-4 text-xl">
    <div class="flex col-start-1 row-span-4 row-start-1 w-72 bg-slate-800 p-4">
		<div class="flex-1 flex flex-col"></div>
		<ul class="flex-none flex flex-col gap-2">
			{#each valueTotals as [value, total]}
				<li class="flex flex-row gap-4 items-center">
					<span class="flex items-center justify-center rounded-3xl w-8 h-6 text-bold bg-slate-500 text-slate-200">{value}</span>
					<span class="text-white">{total}</span>
				</li>
			{/each}
		</ul>
	</div>
    <div class="col-start-2 row-start-1 bg-stone-200 border"></div>
    <div class="col-start-2 row-start-2 bg-stone-200 border"></div>
    <div class="col-start-2 row-start-3 bg-stone-200 border"></div>
    <div class="col-start-2 row-start-4 bg-stone-200 border"></div>
</div>