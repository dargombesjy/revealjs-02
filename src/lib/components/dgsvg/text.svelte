<script>
    let { x = "0", y = "0", class: className = "", children } = $props();
</script>

<text class={className} style="transform: translate({x}, {y});">
    {@render children()}
</text>

<style>
    text {
        fill: rgb(51, 51, 51);
        font-size: 0.8rem;
        white-space: pre;
    }
</style>
