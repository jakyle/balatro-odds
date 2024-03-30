<script lang="ts">
	import type { Card } from '$lib/models/card';
	import type { Deck } from '$lib/models/deck';
	import { createEventDispatcher } from 'svelte';
	import CardComponent from './Card.svelte';
	import CardRowDetail from './CardRowDetail.svelte';
	import DeckMeta from './DeckMeta.svelte';

	type CardDetailsEvent = {
		addHand: string;
		returnToDeck: string;
		discard: string;
	}

	const dispatch = createEventDispatcher<CardDetailsEvent>();

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

	const handleDiscard = () => {
		if (selectedCard) {
			dispatch('discard', selectedCard.id);
		}
		resetHand();
	};

	const handleReturnToDeck = () => {
		if (selectedCard) {
			dispatch('returnToDeck', selectedCard.id);
		}
		resetHand();
	};

	const handleAddToHand = () => {
		if (selectedCard) {
			dispatch('addHand', selectedCard.id);
		}
		resetHand();
	};

	const resetHand = () => {
		selectedCard = undefined;
		dialogElement.close();
	}


</script>

<div class="flex bg-slate-600">
	<DeckMeta {deck} />

	<div class="flex flex-col gap-y-2 px-2 py-3">
		{#each suites as cards}
			<CardRowDetail
				on:selectCard={handleSelectCard}
				{cards}
			/>
		{/each}
	</div>
</div>

<dialog
	bind:this={dialogElement}
	class="rounded-lg border-8 border-slate-600 backdrop:bg-black/60"
>
	{#if selectedCard}
		<div class="flex w-full items-center flex-col gap-y-8 px-8 py-4 bg-teal-500">
			<CardComponent size="2xl" card={selectedCard} />

			<div data-state={selectedCard.state} class="flex group w-full gap-x-6 *:px-2 *:py-1 *:rounded *:text-white *:text-lg">

				<button class="bg-neutral-600 group-data-discarded:hidden" on:click={handleDiscard}>Discard</button>
				<button class="bg-neutral-600 group-data-hand:hidden" on:click={handleAddToHand}>To Hand</button>
				<button class="bg-neutral-600 group-data-deck:hidden" on:click={handleReturnToDeck}>To Deck</button>
				<button class="bg-red-600" on:click={resetHand}>Close</button>
			</div>
		</div>
	{/if}
</dialog>
