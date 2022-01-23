<script>
    export let name;
    let toggle = false;
    let fruits = ['Apple', 'Banana', 'Cherry'];
    const deleteFruit = () => {fruits = fruits.slice(1)};
</script>

<main>
    <h1>Hello {name}!</h1>
    <p>Visit the <a href="https://svelte.dev/tutorial">Svelte tutorial</a> to learn how to build Svelte apps.</p>
</main>
<label>
    <input type="text" bind:value={name}/>
</label>
<button on:click={()=> name = '메롱'}>
    메롱
</button>
<button on:click={() => {toggle = !toggle}}>
    토글
</button>
{#if toggle}
    <div>what?</div>
{:else}
    <div>what!</div>
{/if}
<ul>
    {#each fruits as fruit}
        <li>{fruit}</li>
    {/each}
</ul>
<button on:click={deleteFruit}>
    Eat it!
</button>
<style>
    main {
        text-align: center;
        padding: 1em;
        max-width: 240px;
        margin: 0 auto;
    }

    h1 {
        color: #ff3e00;
        text-transform: uppercase;
        font-size: 4em;
        font-weight: 100;
    }

    @media (min-width: 640px) {
        main {
            max-width: none;
        }
    }
</style>