<script>
    import Grid12 from "$lib/components/Grid-12.svelte";
    import Title from "./Title.svelte";
</script>

<svelte:head>
    <title>Fajar Paper</title>
</svelte:head>

<div class="slides">
    <section class="w-screen h-screen">
        <Grid12 class="grid-rows-[4rem_auto_auto_2rem]">
            <Title text="ATC result Overview" />
        </Grid12>
    </section>
    <section class="w-screen h-screen">
        <Grid12 class="grid-rows-[4rem_auto_auto_2rem]">
            <Title text="Future mapping" />
        </Grid12>
    </section>
    <section class="w-screen h-screen">
        <Grid12>
            <Title text="Approach grade for selected Objects" />
        </Grid12>
    </section>
    <section class="w-screen h-screen">
        <Grid12 class="grid-rows-[4rem_auto_auto_2rem]">
            <Title text="Approach at a glance" />
        </Grid12>
    </section>
    <section class="w-screen h-screen">
        <Grid12 class="grid-rows-[4rem_auto_auto_2rem]">
            <Title text="Effort estimation" />
        </Grid12>
    </section>
</div>
