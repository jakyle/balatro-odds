<script lang="ts">
	import type { ComponentType } from "svelte";
	import Spade from "./suites/Spade.svelte";
	import Club from "./suites/Club.svelte";
	import Heart from "./suites/Heart.svelte";
	import Diamond from "./suites/Diamond.svelte";

	export let suite: 'spades' | 'hearts' | 'diamonds' | 'clubs';
	export let value: '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9' | '10' | 'J' | 'Q' | 'K' | 'A';

	const suiteColor: Record<typeof suite, string> = {
		spades: 'text-black',
		clubs: 'text-black',
		hearts: 'text-red-500',
		diamonds: 'text-red-500'
	};

	const suiteSymbol: Record<typeof suite, ComponentType> = {
		spades: Spade,
		clubs: Club,
		hearts: Heart,
		diamonds: Diamond
	};
</script>

<div class="flex py-4 w-96 aspect-2/3 bg-white rounded-xl shadow hover:shadow-xl transition-all hover:scale-105 {suiteColor[suite]}">
	<div class="size-full flex py-2 justify-center items-center relative">

		<div class="absolute left-4 top-0 flex items-center flex-col text-3xl font-bold gap-0.5">
			<span>{value}</span>
			<span>
				<svelte:component this={suiteSymbol[suite]} class="size-8" />
			</span>
		</div>

		<div class="flex justify-center items-center aspect-2/3 w-5/6">

			{#if value === 'A'}
				<svelte:component this={suiteSymbol[suite]} class="size-2/6" />
			{:else if value === '4'}
				<div class="size-full grid grid-cols-[auto_auto] justify-between content-between">
					{#each Array.from({length: 4}) as _}
						<svelte:component this={suiteSymbol[suite]} class="size-20"/>
					{/each}
				</div>
			{:else}
				<svelte:component this={suiteSymbol[suite]} class="size-2/3" />
			{/if}

		</div>
		

		<div class="absolute right-4 bottom-0 rotate-180 flex items-center flex-col text-3xl font-bold gap-0.5">
			<span>{value}</span>
			<span><svelte:component this={suiteSymbol[suite]} class="size-8" /></span>
		</div>

	</div>
</div>
