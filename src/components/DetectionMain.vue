<template>
	<section class="container m-auto p-4 space-y-14">
		<header class="w-full p-4 flex items-center justify-between">
			<button @click="$router.go(-1)" class="text-4xl text-white">&larr;</button>
			<router-link
				to="/detection"
				class="bg-darkGrey border border-grey rounded-lg py-2 px-4 text-white hover:border-white hover:bg-grey transition-all duration-300">
				Detection
			</router-link>
		</header>
		<div v-motion-slide-top :delay="400" class="w-full flex flex-col items-center justify-center text-center">
			<h1 class="glowing text-7xl lg:text-9xl text-white font-bold tracking-normal">{{ service }}</h1>
		</div>

		<div class="h-44 w-full br-test"></div>
	</section>
</template>

<script>
	import { useRoute } from "vue-router";
	export default {
		setup() {
			const route = useRoute();

			const refactorName = (name) =>
				name.replace(/-/g, " ").replace(/(^\w|\s\w)(\S*)/g, (_, m1, m2) => m1.toUpperCase() + m2.toLowerCase());

			let service = refactorName(route.params.service);

			return { service };
		},
	};
</script>
