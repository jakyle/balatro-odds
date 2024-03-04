<script lang="ts">
	import type { HandCard } from "$lib/models/card";
	import CardComponent from '$lib/components/Card.svelte';
	import { createEventDispatcher } from 'svelte';

	type HandEvents = { 
		removeCard: string, 
		selectCard: { selected: boolean, 
			id: string 
		}
	}

	const dispatch = createEventDispatcher<HandEvents>();

	export let cards: HandCard[] = [];
</script>

<div class="flex items-center justify-center bg-teal-800 rounded-lg px-4 py-2 min-w-5/10 max-w-screen-2xl flex-wrap gap-2 relative">
	{#each cards as { card, selected } }
		<button 
			on:click={() => dispatch('selectCard', { selected: !selected, id: card.id })} 
			data-state={selected ? 'selected' : 'unselected'}
			class="hover:z-10 focus:z-10 relative group hover:shadow-xl focus:shadow-xl data-selected:bottom-10 data-selected:scale-105 data-unselected:hover:scale-105 data-selected:hover:scale-110 overflow-hidden"
		>
			<button 
				data-state={selected ? 'selected' : 'unselected'}
				on:click|stopPropagation={() => dispatch('removeCard', card.id)}
				class="text-white data-selected:group-hover:hidden w-full absolute data-unselected:group-hover:block data-unselected:group-focus:block hidden -bottom-20 group-focus:bottom-0 group-hover:bottom-0 hover:bg-neutral-600 p-2 text-xl font-bold bg-neutral-600/65 z-10">
				TO DECK
			</button>
			<CardComponent {card} size="sm"/>
		</button>
	{:else} 
		<p class="text-6xl text-center text-white animate-pulse py-3">No cards in hand, double click card above to add to hand</p>
	{/each}
</div>