<script>
    let { class: className = "grid-rows-[4rem_auto_2rem]", children } =
        $props();
</script>

<div class="grid h-full w-full grid-cols-12 p-6 mb-3 {className}">
    {@render children()}
</div>
