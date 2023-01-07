<template>
	<section class="container m-auto p-4 space-y-14">
		<header class="w-full p-4 flex items-center justify-between">
			<div class="">
				<img src="./assets/logo.png" alt="Logo" class="h-6 md:h-8" />
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
		<div v-motion-slide-left :delay="400" class="w-full flex items-center justify-center flex-wrap text-white">
			<div
				class="product-card w-[45%] min-w-[350px] max-w-[600px] flex flex-col items-center justify-center space-y-3 p-6 m-4 rounded-lg border hover:border-4 hover:scale-105 hover:border-primary cursor-pointer transition-all duration-300">
				<img src="./assets/first_illus.svg" alt="Generation" class="h-44 w-44" />
				<h4 class="text-black text-3xl font-semibold">Detection</h4>
				<p class="w-[85%] text-center text-lg text-darkGrey">
					Here you can play around with face detection, expression recogintion, and much more utilizing face-api.js which a layer
					of tensorflow.js
				</p>
			</div>
			<div
				class="product-card w-[45%] min-w-[350px] max-w-[600px] flex flex-col items-center justify-center space-y-3 p-6 m-4 rounded-lg border hover:border-4 hover:scale-105 hover:border-primary cursor-pointer transition-all duration-300">
				<img src="./assets/second_illus.svg" alt="Generation" class="h-44 w-44" />
				<h4 class="text-black text-3xl font-semibold">Generation</h4>
				<p class="w-[90%] text-center text-lg text-darkGrey">
					Here you can genearte any image in mind with text. Using OpenAI's API, you can free the beast inside you and get
					creative!
				</p>
			</div>
		</div>
	</section>
</template>
