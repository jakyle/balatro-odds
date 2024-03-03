<script lang="ts">
	import type { HandCard } from "$lib/models/card";
	import CardComponent from '$lib/components/Card.svelte';
	import { createEventDispatcher } from 'svelte';

	type HandEvents = { 
		removeCard: number, 
		selectCard: { selected: boolean, 
			idx: number 
		}
	}

	const dispatch = createEventDispatcher<HandEvents>();

	export let cards: HandCard[] = [];
</script>

<div class="flex items-center justify-center bg-teal-800 rounded-lg px-4 py-2 min-w-5/10 max-w-screen-2xl flex-wrap gap-2 relative">
	{#each cards as { card, selected }, idx}
		<button 
			on:click={() => dispatch('selectCard', { selected: !selected, idx })} 
			data-state={selected ? 'selected' : 'unselected'}
			class="hover:z-10 relative group hover:shadow-xl data-selected:bottom-10 data-selected:scale-105 data-unselected:hover:scale-105 data-selected:hover:scale-110"
		>
			<button 
				data-state={selected ? 'selected' : 'unselected'}
				on:click={() => dispatch('removeCard', idx)}
				class="data-selected:group-hover:hidden absolute data-unselected:group-hover:block hidden -top-4 -right-4 rounded-full p-2 text-lg bg-red-200 z-10">
				❌
			</button>
			<CardComponent {card} size="sm"/>
		</button>
	{:else} 
		<p class="text-6xl text-center text-white animate-pulse py-3">No cards in hand, double click card above to add to hand</p>
	{/each}
</div>