<script lang="ts">
	import type { Card } from '$lib/models/card';
	import type { Deck } from '$lib/models/deck';
	import CardRowDetail from './CardRowDetail.svelte';
	import DeckMeta from './DeckMeta.svelte';

	export let deck: Deck;

	$: discards = deck.discard;
	$: suites = [
		{
			row: 'row-start-1',
			cards: deck.cardsBySuite('spades')
		},
		{
			row: 'row-start-2',
			cards: deck.cardsBySuite('hearts')
		},
		{
			row: 'row-start-3',
			cards: deck.cardsBySuite('clubs')
		},
		{
			row: 'row-start-4',
			cards: deck.cardsBySuite('diamonds')
		} 
	];
</script>


<div class="grid  gap-x-4 grid-cols-[auto_1fr] grid-rows-4 text-2xl bg-slate-600">
	<div class="col-start-1 row-span-4 row-start-1">
		<DeckMeta {deck} />
	</div>

	{#each suites as { row, cards }}
		<div  class="col-start-2 bg-slate-800 p-1 {row}">
			<CardRowDetail on:discard on:returnToDeck on:addHand {cards} />
		</div>
	{/each}
</div>
