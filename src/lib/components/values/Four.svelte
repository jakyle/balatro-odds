<script lang="ts">
	import type { Suite } from "$lib/models/suite";
	import SuiteSymbol from "$lib/components/suites/SuiteSymbol.svelte";

	export let suite: Suite;
</script>

<div class="grid size-full grid-cols-[repeat(2,39%)] content-between justify-between">
	<SuiteSymbol {suite} />
	<SuiteSymbol {suite} />
	<SuiteSymbol {suite} class="rotate-180" />
	<SuiteSymbol {suite} class="rotate-180" />
</div>