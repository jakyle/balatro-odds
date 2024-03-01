<script lang="ts">
	import type { Suite } from '$lib/models/suite';
	import SuiteSymbol from '$lib/suites/SuiteSymbol.svelte';

	export let suite: Suite;
</script>

<div class="grid size-full grid-cols-[auto] content-between justify-center">
	<SuiteSymbol {suite} class="size-28" />
	<SuiteSymbol {suite} class="size-28" />
	<SuiteSymbol {suite} class="size-28 rotate-180" />
</div>
