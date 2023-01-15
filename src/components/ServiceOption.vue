<template>
	<div v-motion-slide-left :delay="800" class="w-full flex items-center justify-evenly flex-wrap text-white">
		<div
			v-for="service in services"
			:key="service.name"
			@click="navigateTo(service.url)"
			class="product-card-1 min-w-[300px] max-w-[600px] h-[200px] flex items-center justify-center space-y-3 p-6 m-4 rounded-lg border hover:border-4 hover:scale-105 hover:border-primary cursor-pointer transition-all duration-300">
			<div class="hidden md:block p-4 border-r-2 border-r-zinc">
				<img :src="stringToImageUrl(service.image)" alt="Generation" class="h-24" />
			</div>
			<div class="p-4 text-left space-y-2">
				<h4 class="text-black text-2xl font-bold leading-6">{{ service.name }}</h4>
				<p class="w-full text-left text-lg text-darkGrey leading-5">{{ service.desc }}</p>
			</div>
		</div>
	</div>
</template>

<script>
	import { useRouter } from "vue-router";
	export default {
		props: ["services"],
		setup() {
			const router = useRouter();

			function stringToImageUrl(str) {
				return `https://akmn-s3.s3.ap-northeast-1.amazonaws.com/imgs/${str}`;
			}
			const navigateTo = (str) => router.push(str);
			return { navigateTo, stringToImageUrl };
		},
	};
</script>
