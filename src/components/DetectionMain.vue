<template>
	<section class="container m-auto p-4 space-y-14 relative">
		<!-- Header -->
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

		<!-- Loader -->
		<the-loader v-if="loading" :text="'Loading Models'" />

		<!-- Webcam Service -->
		<div
			v-if="webcamService"
			id="video-stream"
			class="w-full h-fit flex items-center justify-center"
			:class="{ hidden: loading }">
			<video id="video" class="rounded-xl border-2 border-primary" height="650" width="650" autoplay muted></video>
		</div>

		<!-- Image Service -->
		<image-selection v-else @pic-change="updatedPicture" :class="{ hidden: loading }" />
	</section>

	<the-footer />
</template>

<script>
	import face from "../face";
	import TheHeader from "./TheHeader.vue";
	import TheFooter from "./TheFooter.vue";
	import ImageSelection from "./ImageSelection.vue";
	import TheLoader from "./TheLoader.vue";
	export default {
		components: { TheHeader, ImageSelection, TheLoader, TheFooter },
		data() {
			return {
				service: "",
				webcamService: false,
				loading: true,
			};
		},
		async created() {
			this.service = this.refactorName(this.$route.params.service);
			this.webcamService = this.service.startsWith("Webcam");

			try {
				await face.loadModels();
				console.log("Loaded Models");

				if (this.webcamService) {
					await face.initVideo(this.service);
				} else {
					await face.initPicture(this.service);
				}

				this.loading = false;
			} catch (error) {
				console.log("Error ->", error);
			}
		},
		methods: {
			async updatedPicture() {
				this.loading = true;
				await face.updateImg(this.service);
				this.loading = false;
			},
			refactorName(name) {
				return name.replace(/-/g, " ").replace(/(^\w|\s\w)(\S*)/g, (_, m1, m2) => m1.toUpperCase() + m2.toLowerCase());
			},
		},
		beforeUnmount() {
			console.log("Unmouunted");
			face.killInterval();
		},
	};
</script>
