<script>
	import Nav from '$lib/components/Nav.svelte';
	import Footer from '$lib/components/Footer.svelte';
	import '../app.css';
</script>

<main class="h-screen flex flex-col px-6 sm:px-60 md:px-80">
	<Nav />
	<div class="flex-grow">
		<slot />
	</div>
	<Footer />
</main>
