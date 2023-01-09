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

		<div id="video-stream" class="w-full h-fit flex items-center justify-center">
			<video id="video" class="rounded-xl" height="750" width="750" autoplay muted></video>
		</div>
	</section>
</template>

<script>
	import face from "../face";
	import TheHeader from "./TheHeader.vue";
	export default {
		components: { TheHeader },
		data() {
			return {
				service: "",
			};
		},
		async created() {
			const refactorName = (name) =>
				name.replace(/-/g, " ").replace(/(^\w|\s\w)(\S*)/g, (_, m1, m2) => m1.toUpperCase() + m2.toLowerCase());
			this.service = refactorName(this.$route.params.service);

			try {
				await face.initVideo(this.$route.params.service);
				console.log("Video Fired");
			} catch (error) {
				console.log("Error ->", error);
			}
		},
		beforeUnmount() {
			console.log("Unmouunted");
			face.killInterval();
		},
	};
</script>
