<script lang="ts">
	import DeckDetails from '$lib/components/DeckDetails.svelte';
	import Hand from '$lib/components/Hand.svelte';
	import type { Card, HandCard } from '$lib/models/card';
	import { getDeck } from '$lib/util/decks';

	let deck = getDeck('Red');

	let hand: HandCard[] = [];

	$: disabled = hand.filter(card => card.selected).length === 0;

	const addToHand = (card: CustomEvent<Card>) => {
		hand = [...hand, { card: card.detail, selected: false}];
	};

	const removeFromHand = (idx: CustomEvent<number>) => {
		hand = hand.filter((_, i) => i !== idx.detail);
	};

	const selectCard = (select: CustomEvent<{selected: boolean, idx: number}>) => {
		hand = hand.map((card, idx) => idx === select.detail.idx ? { ...card, selected: select.detail.selected } : card);
	};

	const discardHand = () => {
		deck.discard = [...deck.discard, ...hand.filter(card => card.selected).map(card => card.card)]
		hand = hand.filter(card => !card.selected);
		deck = deck;
	};
</script>

<div class="flex flex-col relative h-screen w-screen items-center justify-center bg-teal-500 gap-8">
	<DeckDetails on:addHand={addToHand} {deck} />

	<Hand on:selectCard={selectCard} on:removeCard={removeFromHand} cards={hand}/>

	<div class="flex gap-2">
		<button on:click={discardHand} {disabled} class="flex items-center justify-center px-6 py-3 text-4xl bg-red-700 disabled:bg-neutral-200/80 disabled:pointer-events-auto text-white rounded-lg">DISCARD</button>
	</div>
</div>
