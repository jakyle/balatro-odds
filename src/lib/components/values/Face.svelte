<script lang="ts">
	import type { Suite } from "$lib/models/suite";

	export let suite: Suite;
	export let value: 'K' | 'Q' | 'J';

	let royalMap: Record<'K' | 'Q' | 'J', string> = {
		'J': 'jack',
		'Q': 'queen',
		'K': 'king'
	};

	let altMap = {
		'K': 'King',
		'Q': 'Queen',
		'J': 'Jack'
	};
</script>

<div data-value={value} class="size-full">
	<img class="object-fill size-full" src="/{royalMap[value]}-of-{suite}.png" alt="{altMap[value]} of {suite}"/>
</div>