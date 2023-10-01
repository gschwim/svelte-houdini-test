<script lang='ts'>

	import type { PageData } from './$houdini'

	export let data

	$: ({ Char3a } = data)

</script>

<h1>qtest3</h1>

{$Char3a.data.character.name}
