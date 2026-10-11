<script>
    import { draw } from "svelte/transition";
    let {
        w,
        h,
        box,
        d,
        fill = "none",
        stroke = "blue",
        width = "0.25",
    } = $props();
    // let show = $state(false);
</script>

<svg width={w} height={h} viewBox="0 0 {box} {box}">
    <g transform="translate(0 {box}) scale(1 -1)">
        <path
            transition:draw={{ duration: 1500 }}
            d={d}
            {fill}
            {stroke}
            stroke-width={width}
        />
    </g>
</svg>

<style>

</style>
