<script>
    let { x = "", y = "", dx = "", dy = "", class: className = "", children } = $props();
</script>

<tspan class={className} x={x} y={y} dx={dx} dy={dy} >
    {@render children()}
</tspan>

<style>
    .lg {
        font-size: 1.1em;
    }
    .md {
        font-size: 1em;
    }
    .sm {
        font-size: 0.8em;
    }
    .bold {
        font-weight: bold;
    }
</style>
