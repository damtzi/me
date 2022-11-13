<script lang="ts">
	import { page } from '$app/stores';
	import ThemeToggle from './ThemeToggle.svelte';
</script>

<header class="sticky top-0 w-full py-6 flex justify-between items-center">
	<nav
		class="hidden sm:flex sm:flex-row sm:items-center space-x-10 text-slate-900 dark:text-white"
	>
		<a href="/" class={`${$page.url.pathname === '/' ? 'font-bold' : ''}`}
			>Home</a
		>
		<a
			href="/library"
			class={`${$page.url.pathname === '/library' ? 'font-bold' : ''}`}
		>
			Library
		</a>
		<a
			href="/dashboard"
			class={`${$page.url.pathname === '/dashboard' ? 'font-bold' : ''}`}
		>
			Dashboard
		</a>
	</nav>
	<ThemeToggle />
</header>
