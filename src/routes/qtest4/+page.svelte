<script lang='ts'>

	/* @type { import('./$houdini').PageData } */

	export let data

	$: ({ Char3a, Char4 } = data)
	$: (c3 = $Char3a.data.character.name)
	$: (c4 = $Char4.data.character.name)

</script>

<h1>qtest4</h1>
<p>lyra</p>

{$Char3a.data.character.name}<br>
{$Char4.data.character.name}<br>
{c3} is the daughter of {c4}
