<script>

	export let data

	$: ({ AllCharacters } = data )
</script>



<h1>All Characters</h1>

<main>
{#each $AllCharacters.data.characters.results as character (character.id)}
	<section style={`background-image: url(${character.image})`}>
		<h2>{character.name}</h2>
	</section>
{/each}
</main>


<style>
    h1, h2 { 
        font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    }

    main { 
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
        grid-template-rows: repeat(4, 200px);
        row-gap: 10px;
        column-gap: 10px;
    }

    section { 
        position: relative;
        background-size: cover;
    }

    h2 { 
        display: none;
        position: absolute;
        bottom: 0px;
        margin: 0px;
        padding: 10px;
        background: rgba(255, 255, 255, .5);
        width: 100%;
        font-weight: bold;
    }

    section:hover > h2 { 
        display: block;
    }
</style>
