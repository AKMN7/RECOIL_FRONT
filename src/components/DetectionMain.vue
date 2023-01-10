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

		<div v-if="webcamService" id="video-stream" class="w-full h-fit flex items-center justify-center">
			<video id="video" class="rounded-xl" height="750" width="750" autoplay muted></video>
		</div>

		<image-selection v-else @pic-change="updatedPicture" />
	</section>
</template>

<script>
	import face from "../face";
	import TheHeader from "./TheHeader.vue";
	import ImageSelection from "./ImageSelection.vue";
	export default {
		components: { TheHeader, ImageSelection },
		data() {
			return {
				service: "",
				webcamService: false,
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

				console.log("Finished TRC/CATCH");
			} catch (error) {
				console.log("Error ->", error);
			}
		},
		methods: {
			async updatedPicture() {
				await face.initPicture(this.service);
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
