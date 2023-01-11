<template>
	<section class="container m-auto p-4 space-y-14">
		<the-header>
			<template #redirector>
				<router-link
					to="/detection"
					class="bg-darkGrey border border-grey rounded-lg py-2 px-4 text-white hover:border-white hover:bg-grey transition-all duration-300">
					Detection
				</router-link>
			</template>
			<template #title>Generation</template>
		</the-header>
	</section>
</template>

<script>
	import TheHeader from "../components/TheHeader.vue";
	export default {
		components: { TheHeader },
		setup() {},
	};
</script>
