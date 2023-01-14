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

		<div class="w-full h-fit flex items-center justify-center">
			<div class="relative w-4/5">
				<input
					class="appearance-none border-2 pl-10 border-gray-300 hover:border-gray-400 transition-colors rounded-md w-full py-3 px-3 text-gray-800 leading-tight focus:outline-none focus:ring-primary focus:border-primary focus:shadow-outline"
					id="prompt"
					type="text"
					placeholder="What's on your mind..."
					v-model="userPrompt" />

				<div class="absolute right-0 inset-y-0 flex items-center" @click="generateImage">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						class="h-6 w-6 -ml-1 mr-3 text-gray-400 hover:text-primary hover:scale-105 cursor-pointer"
						fill="none"
						viewBox="0 0 24 24"
						stroke="currentColor">
						<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
					</svg>
				</div>
			</div>
		</div>

		<div class="w-full h-fit flex items-center justify-center">
			<img
				v-if="imgURL"
				:src="imgURL"
				alt="result"
				class="w-[80%] max-h-[512px] max-w-[512px] object-cover object-top rounded-lg border-2 border-primary"
				:class="{ hidden: isLoading }" />

			<the-loader v-if="isLoading" />
		</div>
	</section>
	<the-footer />
</template>

<script>
	import { ref } from "@vue/reactivity";
	import axios from "axios";
	import TheHeader from "../components/TheHeader.vue";
	import TheLoader from "../components/TheLoader.vue";
	import TheFooter from "../components/TheFooter.vue";
	export default {
		components: { TheHeader, TheLoader, TheFooter },
		setup() {
			let isLoading = ref(false);
			let imgURL = ref(null);
			let userPrompt = ref("");

			async function generateImage() {
				isLoading.value = true;

				const response = await axios
					.post("https://ruby-muddy-coral.cyclic.app/api/v1/generate", {
						prompt: userPrompt.value,
					})
					.catch((error) => {
						console.log(error);
						alert("Unable to generate image at the moment!");
					});

				isLoading.value = false;
				imgURL.value = response.data.data;
			}

			return { isLoading, imgURL, userPrompt, generateImage };
		},
	};
</script>
