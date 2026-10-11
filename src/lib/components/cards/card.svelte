<script>
    // import Header from "./card-header.svelte";
    let {
      class: className = "card-container",
      children } = $props();
</script>

<div class="container {className}">
    {@render children()}
    <!-- <div class="header">
        <div class="title">{@render title()}</div>
        <div class="image">
            <Icon size={40} />
        </div>
    </div> -->

    <!-- {#if content}
        <div class="content">{@render content()}</div>
    {/if} -->
</div>

<style>
    .container {
        display: flex;
        flex-direction: column;
    }
</style>
