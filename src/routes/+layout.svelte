<script>
	import "./layout.css";
	import favicon from "$lib/assets/favicon.png";
	import { onMount } from "svelte";
	import { mountReveal } from "$lib/reveal.js";

	let { children } = $props();
	let deckElement;

	onMount(() => {
		let deck;
		let disposed = false;

		mountReveal(deckElement).then((instance) => {
			if (disposed) {
				instance.destroy();
			} else {
				deck = instance;
			}
		});

		return () => {
			disposed = true;
			deck?.destroy();
		};
	});
</script>

<svelte:head><link rel="icon" href={favicon} /></svelte:head>
<div class="reveal" bind:this={deckElement}>
	{@render children()}
</div>
