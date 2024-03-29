<script lang="ts">
	import DeckDetails from '$lib/components/DeckDetails.svelte';
	import Hand from '$lib/components/Hand.svelte';
	import type { HandCard } from '$lib/models/card';
	import { getDeck } from '$lib/util/decks';

	let deck = getDeck('Red');

	let hand: HandCard[] = [];

	$: disabled = hand.filter((card) => card.selected).length === 0;

	const addToHand = (event: CustomEvent<string>) => {
		const card = deck.cards.find((c) => c.id === event.detail)!;
		card.state = 'hand';
		deck = deck;
		hand = [...hand, { card, selected: false }];
	};

	const removeFromHand = ({detail: id}: CustomEvent<string>) => {
		deck.cards.find((card) => card.id === id)!.state = 'deck';
		hand = hand.filter(({card}) => card.id !== id);
		deck = deck;
	};

	const selectCard = ({detail: { selected, id }}: CustomEvent<{ selected: boolean; id: string }>) => {
		hand = hand.map((cardHand) =>
			cardHand.card.id === id ? { ...cardHand, selected: selected } : cardHand
		);
	};

	const discardCard = ({detail: id}: CustomEvent<string>) => {
		const card = deck.cards.find((c) => c.id === id)!;
		card.state = 'discarded';
		deck = deck;
		hand = hand.filter((card) => card.card.id !== id);
	}

	const discardHand = () => {
		const discarded = hand.filter((card) => card.selected).map((card) => card.card);

		deck.cards.forEach((card) => {
			if (discarded.some((d) => d.id === card.id)) {
				card.state = 'discarded';
			}
		});

		hand = hand.filter((card) => !card.selected);
		deck = deck;
	};

	const resetHand = () => { 
		hand.forEach((card) => card.selected = false);
		hand = hand;
	}
</script>

<div class="relative flex h-screen w-screen flex-col items-center justify-center gap-4 bg-teal-500 overflow-y-auto">
	<DeckDetails on:addHand={addToHand} on:discard={discardCard} on:returnToDeck={removeFromHand} {deck} />

	
	<div class="left-x flex gap-2 items-center">
		<Hand on:selectCard={selectCard} on:discard={discardHand} on:removeCard={removeFromHand} cards={hand} />
		<div data-display={hand.length > 0 ? 'flex' : 'hidden'} class="data-flex:flex data-hidden:hidden flex-col gap-y-2">
			<button
				on:click={discardHand}
				{disabled}
				class="flex flex-none items-center justify-center rounded-lg bg-red-600 px-6 py-4 text-lg text-white disabled:pointer-events-auto disabled:bg-neutral-200/80">
					DISCARD
			</button>

			<button
				on:click={resetHand}
				{disabled}
				class="flex flex-none items-center justify-center rounded-lg bg-yellow-600 px-6 py-4 text-lg text-white disabled:pointer-events-auto disabled:bg-neutral-200/80">
					RESET
			</button>
		</div>
	</div>
</div>
