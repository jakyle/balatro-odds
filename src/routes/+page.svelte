<script lang="ts">
	import CardComponent from '$lib/components/Card.svelte';
	import DeckDetails from '$lib/components/DeckDetails.svelte';
	import type { Card } from '$lib/models/card';
	import { getDeck } from '$lib/util/decks';

	const deck = getDeck('standard');

	let cards: Card[] = [
		{ suite: 'spades', value: '10' },
		{ suite: 'hearts', value: '10' },
		{ suite: 'diamonds', value: '10' },
		{ suite: 'clubs', value: '10' }
	];
</script>

<div class="flex relative h-screen w-screen items-center justify-center bg-teal-500 gap-1">

	<DeckDetails {deck} />

</div>
