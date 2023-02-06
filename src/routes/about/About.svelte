<script lang="ts">
	import { fly, slide } from 'svelte/transition';
	import img from '$lib/assets/images/hero_image.jpg';
</script>

<div id="about" class="text-center" in:slide={{ duration: 1000 }} out:slide={{ duration: 500 }}>
	<div class="flex flex-col container justify-center mx-auto items-center md:flex-row">
		<div class="w-[20em] md:w-[40em] md:px-2">
			<h3 class="font-bold text-4xl pb-6">About Me</h3>
			<p class="text-left pb-2">
				I am a Fullstack Web and Mobile Developer, Mentor, Tutor, Technical Writer and Community
				Builder, Based in Lagos, Nigeria
			</p>
			<p class="text-left pb-2">
				Building Cross platform application using Flutter, and <span>Maybe React Native 😜😜</span>
			</p>
			<p class="text-left pb-2">
				Building Native IOS application using SwiftUi, and <span> Android coming soon 🕺🏽🕺🏽</span>
			</p>
			<p class="text-left">
				Helping Organization build beautiful and functional web and mobile applications.Has been a
				journey i love to embark all the time. If you want to Collaborate ? <a
					href="/contact"
					class="text-accent-color">Let's Talk</a
				>
			</p>
		</div>
		<div class="w-[25em] md:w-[40em] overflow-hidden rounded-full">
			<img src={img} alt="ifeanyichukwu" class="overflow-hidden rounded-full" />
		</div>
	</div>
</div>
