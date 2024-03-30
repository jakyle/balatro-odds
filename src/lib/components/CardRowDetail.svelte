<script lang="ts">
	import type { Card } from '$lib/models/card';
	import CardComponent from '$lib/components/Card.svelte';
	import { createEventDispatcher } from 'svelte';
	import HandIcon from './icons/HandIcon.svelte';

	type CardRowDetailEvents = {
		addHand: string;
		returnToDeck: string;
		discard: string;
		selectCard: string;
	};

	const dispatch = createEventDispatcher<CardRowDetailEvents>();

	export let cards: Card[];

	const click = ({
		currentTarget: { dataset }
	}: MouseEvent & {
		currentTarget: EventTarget & HTMLButtonElement;
	}) => {
		dispatch('selectCard', dataset.id!);
	};

</script>

<ul class="flex w-full gap-x-1">
	{#each cards as card}
		<li>
			<button
				on:click={click}
				data-state={card.state}
				data-id={card.id}
				class="group relative isolate hover:scale-105 hover:shadow-xl data-discarded:opacity-25 data-hand:opacity-80"
			>
				<div
					class="absolute left-0 top-0 z-10 hidden size-full items-center justify-center group-data-hand:flex"
				>
					<HandIcon class="size-full" />
				</div>

				<CardComponent {card} size="xs" />
			</button>
		</li>
	{/each}
</ul>
