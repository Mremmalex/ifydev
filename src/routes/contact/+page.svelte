<script lang="ts">
	import { fly, slide } from 'svelte/transition';
</script>

<svelte:head>
	<title>Ify | ifydev | ifeanyi | ifeanyichukwu</title>
</svelte:head>

<section
	class="mx-auto pt-[7em] justify-center  items-center"
	in:slide={{ duration: 1000 }}
	out:slide={{ duration: 1000 }}
>
	<h1>Say Hello</h1>
</section>
