<script lang="ts">
	import type { Suite } from "$lib/models/suite";
	import SuiteSymbol from "$lib/components/suites/SuiteSymbol.svelte";

	export let suite: Suite;
</script>

<div class="size-full flex items-center justify-center *:w-10/12">
	<SuiteSymbol {suite} />
</div>
