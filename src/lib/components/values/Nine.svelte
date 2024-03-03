<script lang="ts">
	import type { Suite } from "$lib/models/suite";
	import SuiteSymbol from "$lib/components/suites/SuiteSymbol.svelte";
	import type { Value } from "$lib/models/value";

	export let suite: Suite;
	export let value: Value;
</script>

<div data-value={value} class="relative grid size-full grid-cols-[repeat(2,39%)] content-between justify-between">
	<SuiteSymbol {suite} />
	<SuiteSymbol {suite} />
	<SuiteSymbol {suite} />
	<SuiteSymbol {suite} />
	<SuiteSymbol {suite} class="rotate-180" />
	<SuiteSymbol {suite} class="rotate-180" />
	<SuiteSymbol {suite} class="rotate-180" />
	<SuiteSymbol {suite} class="rotate-180" />

	<div class="absolute left-0 top-0 size-full flex flex-col items-center justify-center *:w-39/100 *:h-26/100">
		<SuiteSymbol {suite} />
	</div>
</div>