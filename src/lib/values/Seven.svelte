<script lang="ts">
	import type { Suite } from "$lib/models/suite";
	import SuiteSymbol from "$lib/suites/SuiteSymbol.svelte";

	export let suite: Suite;
</script>

<div class="relative grid size-full grid-cols-[auto_auto] content-between justify-between">
	<SuiteSymbol {suite} class="size-24" />
	<SuiteSymbol {suite} class="size-24" />
	<SuiteSymbol {suite} class="size-24" />
	<SuiteSymbol {suite} class="size-24" />
	<SuiteSymbol {suite} class="size-24 rotate-180" />
	<SuiteSymbol {suite} class="size-24 rotate-180" />

	<div class="absolute left-0 top-0 size-full flex flex-col items-center justify-around">
		<SuiteSymbol {suite} class="size-24" />
		<SuiteSymbol {suite} class="size-24 invisible" />
	</div>
</div>