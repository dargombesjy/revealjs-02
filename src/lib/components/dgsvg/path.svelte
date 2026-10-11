<script>
    import { draw } from "svelte/transition";
    let {
        class: className = "d-path-blue-05",
        d,
    } = $props();
</script>

<path
    class="path {className}"
    transition:draw={{ duration: 1500 }}
    {d}
/>

<style>
    .path {
        fill: none;
        paint-order: fill;
    }
</style>
