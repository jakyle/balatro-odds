<script lang="ts">
	import type { Suite } from "$lib/models/suite";
	import SuiteSymbol from "$lib/suites/SuiteSymbol.svelte";

	export let suite: Suite;
</script>

<div class="size-full flex items-center justify-center">
	<SuiteSymbol {suite} class="size-2/6" />
</div>
