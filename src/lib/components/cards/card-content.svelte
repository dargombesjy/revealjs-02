<script>
    let {
      class: className = "card-content",
      children
    } = $props();
</script>

<div class="content {className}">
    {@render children()}
</div>

<style>
    .content {
        display: flex;
        flex-direction: column;
        flex: 0 0 0%;
    }
</style>
