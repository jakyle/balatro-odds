<script lang="ts">
	import type { Suite, Value } from './models/suite';
	import SuiteSymbol from './suites/SuiteSymbol.svelte';
	import ValueComponent from './values/Value.svelte';

	export let suite: Suite;
	export let value: Value;

	const suiteColor: Record<typeof suite, string> = {
		spades: 'text-black',
		clubs: 'text-black',
		hearts: 'text-red-500',
		diamonds: 'text-red-500'
	};
</script>

<div
	class="flex aspect-2/3 w-96 rounded-xl bg-white py-2 shadow transition-all hover:scale-105 hover:shadow-xl {suiteColor[
		suite
	]}"
>
	<div class="flex size-full py-2">
		<div class="flex flex-none flex-col items-center gap-0.5 pl-3 text-3xl font-bold">
			<span>{value}</span>
			<SuiteSymbol {suite} class="size-8" />
		</div>

		<div class="flex-1 py-4">
			<ValueComponent {value} {suite} />
		</div>

		<div class="flex flex-none rotate-180 flex-col items-center gap-0.5 pl-3 text-3xl font-bold">
			<span>{value}</span>
			<SuiteSymbol {suite} class="size-8" />
		</div>
	</div>
</div>
