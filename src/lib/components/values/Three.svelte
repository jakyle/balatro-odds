<script lang="ts">
	import type { Suite } from '$lib/models/suite';
	import SuiteSymbol from "$lib/components/suites/SuiteSymbol.svelte";

	export let suite: Suite;
</script>

<div class="size-full flex flex-col *:w-39/100 *:h-26/100 items-center justify-between">
	<SuiteSymbol {suite} />
	<SuiteSymbol {suite} />
	<SuiteSymbol {suite} class="rotate-180" />
</div>
