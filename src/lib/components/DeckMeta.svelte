<script lang="ts">
	import type { Deck } from "$lib/models/deck";
	import Kvp from "./Kvp.svelte";
	import Club from "./suites/Club.svelte";
	import Diamond from "./suites/Diamond.svelte";
	import Heart from "./suites/Heart.svelte";
	import Spade from "./suites/Spade.svelte";

	export let deck: Deck;

</script>

<div class="flex w-80 bg-slate-800 p-4 rounded-l-lg gap-x-2">
	<div class="flex-1 flex flex-col gap-y-2">

		<div class="p-4 bg-slate-600 rounded-lg flex flex-col gap-y-2 items-center">
			<h2 class="text-white font-bold">{deck.type} Deck</h2>
			<div class="bg-white text-xl font-semibold rounded-lg  p-4 text-center flex items-center justify-center text-wrap">{@html deck.description}</div>
		</div>

		<div class="border-4 border-slate-600 rounded-lg flex flex-col items-center pb-2">

			<h2 class="text-red-500 font-semibold">Base Cards</h2>

			<div class="flex flex-col px-2 py-1 gap-y-6 w-full">

				<div class="w-full flex justify-around">
					<Kvp>
						<span slot="key">A</span>
						<span slot="value">{deck.aceTotal}</span>
					</Kvp>

					<Kvp>
						<span slot="key">F</span>
						<span slot="value">{deck.faceTotal}</span>
					</Kvp>

					<Kvp>
						<span slot="key">#</span>
						<span slot="value">{deck.numberTotal}</span>
					</Kvp>
				</div>

				<div class="w-full grid grid-cols-[40px_40px] gap-x-8 gap-y-6 place-content-center">
					<Kvp>
						<Spade slot="key" class="size-8"/>
						<span slot="value">{deck.heartsTotal}</span>
					</Kvp>

					<Kvp>
						<Heart slot="key" class="size-8" />
						<span slot="value">{deck.heartsTotal}</span>
					</Kvp>

					<Kvp>
						<Club slot="key" class="size-8" />
						<span slot="value">{deck.heartsTotal}</span>
					</Kvp>

					<Kvp>
						<Diamond slot="key" class="size-8" />
						<span slot="value">{deck.heartsTotal}</span>
					</Kvp>
				</div>

			</div>
		</div>
	</div>

	<ul class="flex-none flex flex-col gap-1.5">
		{#each deck.valueTotals as [value, total]}
			<li class="flex flex-row gap-6 items-center">
				<span class="flex items-center justify-center rounded-3xl w-10 h-8 text-bold bg-slate-600 text-slate-200">{value}</span>
				<span class="text-white">{total}</span>
			</li>
		{/each}
	</ul>
</div>
