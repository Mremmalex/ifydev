<script lang="ts">
	import { slide } from 'svelte/transition';
	import walking from '$lib/assets/images/walking.gif';
</script>

<div
	class=" pt-[6em] mx-auto flex flex-col justify-center items-center"
	id="home"
	in:slide={{ duration: 1000 }}
	out:slide={{ duration: 1000 }}
>
	<div>
		<img
			class="bg-gray-600 fill-accent-color overflow-hidden rounded-full w-[100px] h-[100px]"
			src={walking}
			alt="walking"
		/>
	</div>
	<div class="">
		<h1 class="text-[4em] font-extrabold">Hello!!!</h1>
	</div>
	<div class="mx-2">
		<h1 class="text-2xl md:text-3xl pb-3 lg:text-[3em] font-serif font-medium">
			I'm Ifeanyichukwu Sampson
		</h1>
		<h5 class="pt-2">A Fullstack Web and Mobile Developer.</h5>
		<h5>Helping Companies and Businesses develop large scale application that serves millions</h5>
	</div>
	<div class="pt-10">
		<a
			href="/contact"
			class="py-2 px-[2em] rounded-xl font-bold bg-accent-color hover:bg-purple-700 cursor-pointer"
			>Let's Connect</a
		>
	</div>
</div>
