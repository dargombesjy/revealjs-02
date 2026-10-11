<script>
    let {
        w,
        h,
        box,
        pos = "",
        class: className = "",
        style: st = "",
        children,
    } = $props();

</script>

<svg
    width={w}
    height={h}
    viewBox="0 0 {box} {box}"
    class={className}
    style={st}
>
    {@render children()}
</svg>

<style>
</style>
