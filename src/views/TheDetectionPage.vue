<template>
	<section class="container m-auto p-4 space-y-14">
		<the-header>
			<template #redirector>
				<router-link
					to="/generation"
					class="bg-darkGrey border border-grey rounded-lg py-2 px-4 text-white hover:border-white hover:bg-grey transition-all duration-300">
					Generation
				</router-link>
			</template>
			<template #title>Detection</template>
		</the-header>

		<service-option :services="services" />
	</section>

	<the-footer />
</template>

<script>
	import ServiceOption from "../components/ServiceOption.vue";
	import TheFooter from "../components/TheFooter.vue";
	import TheHeader from "../components/TheHeader.vue";
	export default {
		components: { TheHeader, ServiceOption, TheFooter },
		setup() {
			const services = [
				{
					name: "Face Detection",
					desc: "Automatically detect faces through imported images of your choice.",
					image: "thrid_illus.svg",
					url: "/detection/face-detection",
				},
				{
					name: "Face Expression Recognition",
					desc: "Automatically recognize expressions made by faces detected on images chosen.",
					image: "fourth_illus.svg",
					url: "/detection/face-expression",
				},
				{
					name: "Webcam Face Detection",
					desc: "Automatically detect faces through webcam in the browser!",
					image: "fifth_illus.svg",
					url: "/detection/webcam-face-detection",
				},
				{
					name: "Webcam Face Expression Recognition",
					desc: "Automatically recognize face experssions made through your webcam!",
					image: "sixith_illus.svg",
					url: "/detection/webcam-face-expression-recognition",
				},
			];

			return { services };
		},
	};
</script>
