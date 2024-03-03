<script lang="ts">
	import type { Card } from "$lib/models/card";
	import CardComponent from '$lib/components/Card.svelte';
	import { createEventDispatcher } from 'svelte';

	const dispatch = createEventDispatcher<{ addHand: Card }>();

	export let cards: Card[];

	const doubleClick = (discarded: boolean, card: Card) => {
		if (discarded) return;
		dispatch('addHand', card);
	}
</script>

<ul class="w-full flex gap-x-1">
	{#each cards as card}
		<button
			data-state={card.state === 'discarded' ? 'discarded' : 'hand'}
			class="data-discarded:opacity-50 hover:shadow-xl hover:scale-105"
			on:dblclick={() => doubleClick(card.state === 'discarded', card)}
		>
			<CardComponent {card} size="xs"/>
		</button>
	{/each}
</ul>