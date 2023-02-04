<script lang="ts">
	import logo from '$lib/assets/images/app_logo.png';
	import user from '$lib/assets/icon/user.png';
	import wallet from '$lib/assets/icon/portfolio.png';
	import house from '$lib/assets/icon/home.png';
	import contact from '$lib/assets/icon/contact.png';

	type Route = {
		name: string;
		path: string;
		icon: String;
	};

	const routes: Array<Route> = [
		{
			name: 'Home',
			path: '/',
			icon: house.toString()
		},
		{
			name: 'About',
			path: '/about',
			icon: user.toString()
		},
		{
			name: 'Contact',
			path: '/contact',
			icon: contact.toString()
		},
		{
			name: 'Blog',
			path: 'blog.ifydev.live',
			icon: wallet.toString()
		}
	];

	let IsNavOpen: boolean = false;
	const toggleNav = () => {
		IsNavOpen = !IsNavOpen;
	};
</script>

<div
	class="py-4 w-full flex items-center justify-between px-[4em] sticky top-0 bg-background-color"
>
	<div class="">
		<a href="/">
			<img src={logo} alt="logo" class="w-10 h-10" />
		</a>
	</div>

	<div class="hidden sm:flex">
		<!-- <a href="/" class="pl-[2em] hover:text-accent-color">Home</a>
		<a href="/about" class="pl-[2em] hover:text-accent-color">About</a>
		<a href="/contact" class="pl-[2em] hover:text-accent-color">Contact</a> -->
		{#each routes as route}
			<a href={route.path} class="pl-[2em] hover:text-accent-color"> {route.name}</a>
		{/each}
	</div>

	<div class="md:hidden flex">
		{#each routes as route}
			<a href={route.path} class="pl-3 fill-accent-color hover:bg-transparent">
				<img class="text-accent-colors w-6 h-6" src={route.icon} alt={route.name} />
			</a>
		{/each}
	</div>
</div>
