<script lang="ts">
	import '../app.css';
	import { windowWidth } from '$lib/store/windowWidth'

	let innerWidth = 0;
	$: windowWidth.set(innerWidth);
</script>

<svelte:window bind:innerWidth />

<slot />