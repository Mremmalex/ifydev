<script lang="ts">
	import Navbar from '$lib/Navbar.svelte';
	import '../styles/global.css';
</script>

<svelte:head>
	<title>Ify | Developer</title>
</svelte:head>

<div class="bg-background-color text-white  min-h-screen ">
	<Navbar />
	<slot />
</div>
