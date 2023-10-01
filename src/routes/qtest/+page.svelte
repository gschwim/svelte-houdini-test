<script>

	/* @type { import('./$houdini').PageData } */
	export let data

	$: ({ Test1 } = data )
</script>

<h1>qtest</h1>

{$Test1.data.character.name}
