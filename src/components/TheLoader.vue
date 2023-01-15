<template>
	<div class="w-full flex flex-col items-center justify-center space-y-3 pt-12">
		<span class="loader mt-20"></span>
		<span class="text-white">{{ text }}</span>
	</div>
</template>

<script>
	export default {
		props: ["text"],
	};
</script>

<style scoped>
	.loader {
		width: 96px;
		height: 96px;
		border: 10px solid #fff;
		border-radius: 50%;
		display: inline-block;
		position: relative;
		box-sizing: border-box;
		animation: rotation 1s linear infinite;
	}

	.loader::after {
		content: "";
		box-sizing: border-box;
		position: absolute;
		left: 50%;
		top: 50%;
		transform: translate(-50%, -50%);
		width: 90px;
		height: 90px;
		border-radius: 50%;
		border: 3px solid transparent;
		border-bottom-color: #9484f7;
	}

	@keyframes rotation {
		0% {
			transform: rotate(0deg);
		}
		100% {
			transform: rotate(360deg);
		}
	}
</style>
