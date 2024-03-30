<script lang="ts">
	import type { Card } from '$lib/models/card';
	import type { Deck } from '$lib/models/deck';
	import CardComponent from './Card.svelte';
	import CardRowDetail from './CardRowDetail.svelte';
	import DeckMeta from './DeckMeta.svelte';

	export let deck: Deck;
	let dialogElement: HTMLDialogElement;
	let selectedCard: Card | undefined;

	$: discards = deck.discard;
	$: suites = [
		deck.cardsBySuite('spades'),
		deck.cardsBySuite('hearts'),
		deck.cardsBySuite('clubs'),
		deck.cardsBySuite('diamonds')
	];

	const handleSelectCard = ({ detail }: CustomEvent<string>) => {
		selectedCard = deck.getById(detail);

		if (selectedCard) {
			console.log(selectedCard);
			dialogElement.showModal();
		}
	};
</script>

<div class="flex bg-slate-600">
	<DeckMeta {deck} />

	<div class="flex flex-col gap-y-2 px-2 py-3">
		{#each suites as cards}
			<CardRowDetail
				on:discard
				on:returnToDeck
				on:addHand
				on:selectCard={handleSelectCard}
				{cards}
			/>
		{/each}
	</div>
</div>

<dialog
	bind:this={dialogElement}
	class="w-2/3 rounded-lg border-2 border-neutral-500 backdrop:bg-black/60"
>
	{#if selectedCard}
		<div class="flex w-full flex-col gap-y-8 px-4 py-2">
			<CardComponent size="2xl" card={selectedCard} />

			<form class="flex w-full justify-between">
				<button class="" on:click={() => dialogElement.close()}>Close</button>
			</form>
		</div>
	{/if}
</dialog>
