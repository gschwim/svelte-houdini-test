<nav>

	<a href="/">home</a>
	<a href="/qtest">qtest</a>
	<a href="/qtest2">qtest2</a>
	<a href="/qtest3">qtest3</a>
	<a href="/qtest3a">qtest3a</a>
	<a href="/qtest4">qtest4</a>
	<a href="/allcharacters">All Characters</a>
	<a href="/nographql">No Graphql</a>


</nav>

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
<slot />
