<template>
	<section class="container m-auto p-4 space-y-14">
		<header class="w-full p-4 flex items-center justify-between">
			<button @click="$router.go(-1)" class="text-4xl text-white">&larr;</button>
			<router-link
				to="/generation"
				class="bg-darkGrey border border-grey rounded-lg py-2 px-4 text-white hover:border-white hover:bg-grey transition-all duration-300">
				Generation
			</router-link>
		</header>
		<div v-motion-slide-top :delay="400" class="w-full flex flex-col items-center justify-center">
			<h1 class="glowing text-7xl lg:text-9xl text-white font-bold tracking-normal">Detection</h1>
		</div>
		<div v-motion-slide-left :delay="800" class="w-full flex items-center justify-evenly flex-wrap text-white">
			<div
				@click="navigateTo('/detection/face-detection')"
				class="product-card-1 min-w-[300px] max-w-[600px] h-[200px] flex items-center justify-center space-y-3 p-6 m-4 rounded-lg border hover:border-4 hover:scale-105 hover:border-primary cursor-pointer transition-all duration-300">
				<div class="hidden md:block p-4 border-r-4 border-r-grey">
					<img src="../assets/thrid_illus.svg" alt="Generation" class="h-24" />
				</div>
				<div class="p-4 text-left space-y-2">
					<h4 class="text-black text-2xl font-bold leading-6">Face Detection</h4>
					<p class="w-full text-left text-lg text-darkGrey leading-5">Detect faces throught imported images of your choice.</p>
				</div>
			</div>
			<div
				@click="navigateTo('/detection/face-expression')"
				class="product-card-1 min-w-[300px] max-w-[600px] h-[200px] flex items-center justify-center space-y-3 p-6 m-4 rounded-lg border hover:border-4 hover:scale-105 hover:border-primary cursor-pointer transition-all duration-300">
				<div class="hidden md:block p-4 border-r-4 border-r-grey">
					<img src="../assets/fourth_illus.svg" alt="Generation" class="h-24" />
				</div>
				<div class="p-4 text-left space-y-2">
					<h4 class="text-black text-2xl font-bold leading-6">Face Expression Recognition</h4>
					<p class="w-full text-left text-lg text-darkGrey leading-5">
						Recgognitoin of the expressions of pictures imported from your device.
					</p>
				</div>
			</div>
			<div
				@click="navigateTo('/detection/webcam-face-detection')"
				class="product-card-1 min-w-[300px] max-w-[600px] h-[200px] flex items-center justify-center space-y-3 p-6 m-4 rounded-lg border hover:border-4 hover:scale-105 hover:border-primary cursor-pointer transition-all duration-300">
				<div class="hidden md:block p-4 border-r-4 border-r-grey">
					<img src="../assets/fifth_illus.svg" alt="Generation" class="h-24" />
				</div>
				<div class="p-4 text-left space-y-2">
					<h4 class="text-black text-2xl font-bold leading-6">Webcam Face Detection</h4>
					<p class="w-full text-left text-lg text-darkGrey leading-5">Detect faces through your webcame after in the browser!</p>
				</div>
			</div>
			<div
				@click="navigateTo('/detection/webcam-face-expression')"
				class="product-card-1 min-w-[300px] max-w-[600px] h-[200px] flex items-center justify-center space-y-3 p-6 m-4 rounded-lg border hover:border-4 hover:scale-105 hover:border-primary cursor-pointer transition-all duration-300">
				<div class="hidden md:block p-4 border-r-4 border-r-grey">
					<img src="../assets/sixith_illus.svg" alt="Generation" class="h-24 w-24" />
				</div>
				<div class="p-4 text-left space-y-2">
					<h4 class="text-black text-2xl font-bold leading-6">Webcam Face Expression Recognition</h4>
					<p class="w-full text-left text-lg text-darkGrey leading-5">Recgnition of face experssion throught your webcam.</p>
				</div>
			</div>
		</div>
	</section>
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
