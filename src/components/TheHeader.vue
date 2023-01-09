<template>
	<div class="space-y-14">
		<header class="w-full p-4 flex items-center justify-between">
			<button @click="$router.go(-1)" class="text-4xl text-white">&larr;</button>
			<slot name="redirector">
				<router-link
					to="/generation"
					class="bg-darkGrey border border-grey rounded-lg py-2 px-4 text-white hover:border-white hover:bg-grey transition-all duration-300">
					Generation
				</router-link>
			</slot>
		</header>
		<div class="w-full flex flex-col items-center justify-center">
			<h1 class="glowing text-7xl lg:text-9xl text-white font-bold tracking-normal text-center">
				<slot name="title">---</slot>
			</h1>
		</div>
	</div>
</template>
