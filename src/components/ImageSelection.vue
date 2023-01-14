<template>
	<div id="image-container" class="w-full h-fit flex flex-col items-center justify-center space-y-4 relative">
		<input id="image-select" type="file" accept="image/*" ref="file" @change="onFileSelected" class="hidden" />

		<div class="w-full h-fit flex items-center justify-center">
			<img
				id="image"
				:src="selectedFile"
				alt="image"
				class="w-[80%] md:w-[60%] object-cover object-top rounded-lg border-2 border-primary" />
			<canvas id="overlay" class="w-[80%] md:w-[60%]"></canvas>
		</div>

		<button
			@click="browse"
			class="w-[80%] md:w-[65%] bg-darkGrey border border-grey rounded-lg py-2 px-4 text-white hover:border-white hover:bg-grey transition-all duration-300">
			Choose Image
		</button>
	</div>
</template>

<script>
	export default {
		emits: ["picChange"],
		data() {
			return {
				selectedFile: "/assets/bbt1.jpg",
			};
		},
		methods: {
			async onFileSelected(event) {
				this.$emit("picChange");
			},
			browse() {
				this.$refs.file.click();
			},
		},
	};
</script>
