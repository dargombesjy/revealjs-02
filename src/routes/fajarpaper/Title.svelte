<script>
    import Soltius from "$lib/assets/soltius_logo_small.png";
    let { text } = $props();
</script>

<h3 class="col-start-1 col-span-10 self-start justify-self-start">
    {text}
</h3>
<div class="col-start-11 col-span-1 self-center justify-self-center">
    <img src={Soltius} alt="" width="90%" />
</div>
<!-- <div class="col-start-10 col-span-2 self-center justify-self-center">
    <img
        src="https://suryapertiwi.co.id/wp-content/themes/suryapertiwitheme/images/logo.svg?v=1"
        alt=""
    />
</div> -->

<style>
    img {
        margin-top: 0;
    }
</style>