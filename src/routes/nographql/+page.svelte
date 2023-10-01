<script>
	export let data;
</script>

<h1>nographql</h1>

<ul>
	{#each data.summaries as { slug, title }}
		<li><a href="/nographql/{slug}">{title}</a></li>
	{/each}
</ul>
