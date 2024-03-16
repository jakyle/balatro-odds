<script lang="ts">
	import type { Card } from "$lib/models/card";
	import CardComponent from '$lib/components/Card.svelte';
	import { createEventDispatcher } from 'svelte';
	import HandIcon from "./icons/HandIcon.svelte";

	type CardRowDetailEvents = {
		addHand: string;
		returnToDeck: string;
		discard: string;
	}

	const dispatch = createEventDispatcher<CardRowDetailEvents>();

	export let cards: Card[];

	const click = () => {
		console.log('clicked');
	}

	const doubleClick = ({ id, state }: Card) => {
		if (state === 'deck') {
			dispatch('addHand', id);
		}

		if (state === 'hand' || state === 'discarded') {
			dispatch('returnToDeck', id);
		}
	}
</script>

<ul class="w-full flex gap-x-1">
	{#each cards as card}
		<li>
			<div
				data-state={card.state}
				class="data-hand:opacity-80 group data-discarded:opacity-25 hover:shadow-xl hover:scale-105 relative isolate overflow-hidden"
			>
				<div class="group-data-hand:flex hidden absolute top-0 left-0 size-full items-center justify-center z-10">
					<HandIcon class="size-full" />
				</div>

				<!-- <button
					on:click|stopPropagation={() => dispatch('discard', card.id)}
					class="w-full absolute group-data-discarded:hidden -top-20 group-focus:top-0 left-0 group-hover:top-0 hover:bg-neutral-600 p-1 text-lg font-bold bg-neutral-600/50 z-50 transition-all"
				>
					DISCARD
				</button>

				<button
					on:click|stopPropagation={() => dispatch('addHand', card.id)}
					class="w-full absolute group-data-hand:hidden -bottom-20 group-data-discarded:bottom-auto group-data-discarded:-top-20 group-data-discarded:group-focus:top-0 group-focus:bottom-0 left-0 group-data-discarded:hover:top-0 group-hover:bottom-0 hover:bg-neutral-600 p-2 text-lg font-bold bg-neutral-600/50 z-20 transition-all"
				>
					HAND
				</button>

				<button
					on:click|stopPropagation={() => dispatch('returnToDeck', card.id)}
					class="w-full absolute group-data-deck:hidden -bottom-20 group-focus:bottom-0 left-0 group-hover:bottom-0 hover:bg-neutral-600 p-2 text-lg font-bold bg-neutral-600/50 z-20 transition-all"
				>
					DECK
				</button> -->

				<CardComponent {card} size="xs"/>
			</div>
		</li>
	{/each}
</ul>