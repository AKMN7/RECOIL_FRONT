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
			<template #title>{{ service }}</template>
		</the-header>

		<div class="h-44 w-full br-test"></div>
	</section>
</template>

<script>
	import { useRoute } from "vue-router";
	import TheHeader from "./TheHeader.vue";
	export default {
		components: { TheHeader },
		setup() {
			const route = useRoute();

			const refactorName = (name) =>
				name.replace(/-/g, " ").replace(/(^\w|\s\w)(\S*)/g, (_, m1, m2) => m1.toUpperCase() + m2.toLowerCase());

			let service = refactorName(route.params.service);

			return { service };
		},
	};
</script>
