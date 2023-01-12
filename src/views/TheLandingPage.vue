<template>
	<section class="container m-auto p-4 space-y-14">
		<header class="w-full p-4 flex items-center justify-between">
			<div class="">
				<img src="../assets/logo.png" alt="Logo" class="h-6 md:h-8" />
			</div>
			<a
				href="https://www.linkedin.com/in/anas-nassar-a164ab211/"
				target="_blank"
				rel="noopener noreferrer"
				class="bg-darkGrey border border-grey rounded-lg py-2 px-4 text-white hover:border-white hover:bg-grey transition-all duration-300">
				Contact Developer
			</a>
		</header>
		<div v-motion-slide-top :delay="400" class="w-full flex flex-col items-center justify-center space-y-4">
			<h1 class="glowing text-7xl lg:text-9xl text-white font-bold tracking-normal">Recoil.</h1>
			<p class="text-4xl lg:text-6xl w-4/5 lg:w-2/3 text-center text-white font-semibold tracking-tight">
				A silmple to use playground, Ustilising AI capabilites!
			</p>
		</div>
		<div v-motion-slide-left :delay="800" class="w-full flex items-center justify-center flex-wrap text-white">
			<div
				@click="navigateTo('/detection')"
				class="product-card w-[45%] min-w-[350px] max-w-[600px] flex flex-col items-center justify-center space-y-3 p-6 m-4 rounded-lg border hover:border-4 hover:scale-105 hover:border-primary cursor-pointer transition-all duration-300">
				<img src="../assets/first_illus.svg" alt="Generation" class="h-44 w-44" />
				<h4 class="text-black text-3xl font-semibold">Detection</h4>
				<p class="w-[85%] text-center text-lg text-darkGrey">
					Here you can play around with face detection, expression recogintion, and much more utilizing face-api.js which a layer
					of tensorflow.js
				</p>
			</div>
			<div
				@click="navigateTo('/generation')"
				class="product-card w-[45%] min-w-[350px] max-w-[600px] flex flex-col items-center justify-center space-y-3 p-6 m-4 rounded-lg border hover:border-4 hover:scale-105 hover:border-primary cursor-pointer transition-all duration-300">
				<img src="../assets/second_illus.svg" alt="Generation" class="h-44 w-44" />
				<h4 class="text-black text-3xl font-semibold">Generation</h4>
				<p class="w-[90%] text-center text-lg text-darkGrey">
					Here you can genearte any image in mind with text. Using OpenAI's API, you can free the beast inside you and get
					creative!
				</p>
			</div>
		</div>
	</section>
	<footer class="mt-10">
		<div class="container flex flex-col items-center justify-between p-6 mx-auto space-y-4 sm:space-y-0 sm:flex-row">
			<img src="../assets/logo.png" alt="Logo" class="h-4 md:h-6" />

			<p class="text-sm text-gray-600 dark:text-gray-300">© Copyright 2023. All Rights Reserved.</p>

			<div class="flex -mx-2">
				<a
					href="https://github.com/AKMN7"
					target="_blank"
					rel="noopener noreferrer"
					class="mx-2 text-gray-600 transition-colors duration-300 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400"
					aria-label="Github">
					<svg class="w-5 h-5 fill-current" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
						<path
							d="M12.026 2C7.13295 1.99937 2.96183 5.54799 2.17842 10.3779C1.395 15.2079 4.23061 19.893 8.87302 21.439C9.37302 21.529 9.55202 21.222 9.55202 20.958C9.55202 20.721 9.54402 20.093 9.54102 19.258C6.76602 19.858 6.18002 17.92 6.18002 17.92C5.99733 17.317 5.60459 16.7993 5.07302 16.461C4.17302 15.842 5.14202 15.856 5.14202 15.856C5.78269 15.9438 6.34657 16.3235 6.66902 16.884C6.94195 17.3803 7.40177 17.747 7.94632 17.9026C8.49087 18.0583 9.07503 17.99 9.56902 17.713C9.61544 17.207 9.84055 16.7341 10.204 16.379C7.99002 16.128 5.66202 15.272 5.66202 11.449C5.64973 10.4602 6.01691 9.5043 6.68802 8.778C6.38437 7.91731 6.42013 6.97325 6.78802 6.138C6.78802 6.138 7.62502 5.869 9.53002 7.159C11.1639 6.71101 12.8882 6.71101 14.522 7.159C16.428 5.868 17.264 6.138 17.264 6.138C17.6336 6.97286 17.6694 7.91757 17.364 8.778C18.0376 9.50423 18.4045 10.4626 18.388 11.453C18.388 15.286 16.058 16.128 13.836 16.375C14.3153 16.8651 14.5612 17.5373 14.511 18.221C14.511 19.555 14.499 20.631 14.499 20.958C14.499 21.225 14.677 21.535 15.186 21.437C19.8265 19.8884 22.6591 15.203 21.874 10.3743C21.089 5.54565 16.9181 1.99888 12.026 2Z"></path>
					</svg>
				</a>
			</div>
		</div>
	</footer>
</template>

<script>
	import { useRouter } from "vue-router";
	export default {
		setup() {
			const router = useRouter();
			const navigateTo = (str) => router.push(str);
			return { navigateTo };
		},
	};
</script>
