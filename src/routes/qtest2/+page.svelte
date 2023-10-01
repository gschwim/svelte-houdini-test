<script>


	export let data

	$: ({ Test2 } = data )
</script>

<h1>qtest2</h1>

{$Test2.data.character.name}
