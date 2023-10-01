<script lang='ts'>

	import type { PageData } from './$houdini'

	export let data: PageData

	$: ({ char3 } = data)

</script>

<h1>qtest3</h1>

{$char3.data.character.name}
