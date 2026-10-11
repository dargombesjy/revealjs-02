<script>
	import { onMount } from "svelte";
	import { mountReveal } from "$lib/reveal.js";
	import Grid12 from "$lib/components/Grid-12.svelte";
	// import Title from "$lib/components/Title.svelte";

	// let deckElement;

	// onMount(() => {
	// 	let deck;
	// 	let disposed = false;

	// 	mountReveal(deckElement).then((instance) => {
	// 		if (disposed) {
	// 			instance.destroy();
	// 		} else {
	// 			deck = instance;
	// 		}
	// 	});

	// 	return () => {
	// 		disposed = true;
	// 		deck?.destroy();
	// 	};
	// });
</script>

<svelte:head>
	<title>Reveal.js Slides</title>
</svelte:head>

<!-- <div class="reveal" bind:this={deckElement}> -->
<div class="slides">
	<section class="w-screen h-screen">
		<Grid12 class="grid-rows-[4rem_auto_auto_2rem]">
			<!-- <Title text="Objective: Reduce Digital Access consumption" /> -->
		</Grid12>
	</section>
	<section>
		<h1>Second slide</h1>
	</section>
</div>
<!-- </div> -->
