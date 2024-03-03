<script lang="ts">
	import type { Suite } from "$lib/models/suite";
	import SuiteSymbol from "$lib/components/suites/SuiteSymbol.svelte";
	import type { Value } from "$lib/models/value";

	export let suite: Suite;
	export let value: Value;
</script>

<div data-value={value} class="flex flex-col size-full *:w-39/100 *:h-26/100 items-center justify-between">
	<SuiteSymbol {suite} />
	<SuiteSymbol {suite} class="rotate-180" />
</div>