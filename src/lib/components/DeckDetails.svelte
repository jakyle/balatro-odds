<script lang="ts">
	import type { Deck } from '$lib/models/deck';
	import CardRowDetail from './CardRowDetail.svelte';
	import DeckMeta from './DeckMeta.svelte';

	export let deck: Deck;

	$: discards = deck.discard;
	$: suites = [
		deck.cardsBySuite('spades'),
		deck.cardsBySuite('hearts'),
		deck.cardsBySuite('clubs'),
		deck.cardsBySuite('diamonds')
	];
</script>


<div class="flex bg-slate-600">
	<DeckMeta {deck} />

	<div  class="flex flex-col gap-y-2 px-2 py-3">
		{#each suites as  cards }
			<CardRowDetail on:discard on:returnToDeck on:addHand {cards} />
		{/each}
	</div>
</div>
