<script lang="ts">
	import Twitter from '$lib/icons/Twitter.svelte';
	import Instagram from '$lib/icons/Instagram.svelte';
	import Mail from '$lib/icons/Mail.svelte';
	import GitHub from '$lib/icons/GitHub.svelte';
	import Music from '$lib/icons/Music.svelte';
	import LinkedIn from '$lib/icons/LinkedIn.svelte';
</script>

<footer
	class="py-6 w-full flex flex-col gap-6 border-t border-t-slate-900 dark:border-t-white text-slate-900 dark:text-white"
>
	<span class="text-center"
		>Powered by
		<a href="https://kit.svelte.dev/" class="text-blue-400">SvelteKit</a>,
		styled by
		<a href="https://tailwindcss.com/" class="text-blue-400">tailwindcss</a
		></span
	>
	<div class="flex gap-6 justify-center">
		<a href="https://twitter.com/damitzi__">
			<Twitter />
		</a>
		<a href="https://www.instagram.com/damitzi__/">
			<Instagram />
		</a>
		<a href="https://music.apple.com/profile/damitzi__">
			<Music />
		</a>
		<a href="mailto:damian.tziamtzis@gmail.com">
			<Mail />
		</a>
		<a href="https://github.com/damtzi">
			<GitHub />
		</a>
		<a href="https://www.linkedin.com/in/damian-tziamtzis/">
			<LinkedIn />
		</a>
	</div>
	<span class="text-center"
		>Damian Tziamtzis &copy; {new Date().getFullYear()} Made in
		<span
			class="font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-800 to-yellow-400"
			>Gdynia</span
		>,
		<span
			class="font-bold text-transparent bg-clip-text bg-gradient-to-b from-white to-red-700"
			>PL</span
		>
	</span>
</footer>
