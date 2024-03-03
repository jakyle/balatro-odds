<script lang="ts">
	import type { Suite } from '$lib/models/suite';
	import type { Value } from '$lib/models/value';
	import SuiteSymbol from "$lib/components/suites/SuiteSymbol.svelte";

	export let suite: Suite;
	export let value: Value;
</script>

<div data-value={value} class="size-full flex flex-col *:w-39/100 *:h-26/100 items-center justify-between">
	<SuiteSymbol {suite} />
	<SuiteSymbol {suite} />
	<SuiteSymbol {suite} class="rotate-180" />
</div>
