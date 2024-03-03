<script lang="ts">
	import type { Suite } from "$lib/models/suite";
	import SuiteSymbol from "$lib/components/suites/SuiteSymbol.svelte";
	import type { Value } from "$lib/models/value";

	export let suite: Suite;
	export let value: Value;
</script>

<div data-value={value} class="size-full flex items-center justify-center *:w-10/12">
	<SuiteSymbol {suite} />
</div>
