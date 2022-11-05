<script>
	// Library Imports
	import { setScene } from '$lib/ThreeObject.js';
	// import { fade } from 'svelte/transition';
	import { onMount } from 'svelte';

    // Create a new wavy sphere scene
	let ThreeObject;

	// On Site Load
	onMount(async () => await setScene(ThreeObject));
</script>

<!-- The 3D Wave Sphere -->
<canvas bind:this={ThreeObject} style="top: 0px; right: 0px; z-index: -1; position: fixed;"/>
