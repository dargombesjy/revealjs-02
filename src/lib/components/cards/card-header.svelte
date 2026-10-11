<script>
    let {
      class: className = "card-header",
      Icon = null,
      children
    } = $props();
</script>

<div class="header {className}">
    <div class="title">{@render children()}</div>
    <div class="image">
        <Icon size={40} />
    </div>
</div>

<style>
    .header {
        display: flex;
    }

    .title {
        display: flex;
        flex: 0 0 85%;
    }
    .image {
        display: flex;
        flex: 0 0 15%;
        /*padding: 0.5rem;*/
    }
</style>
