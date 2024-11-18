<template>
	<div
		class="p-4 md:p-8 w-full h-full mb:h-screen flex flex-col justify-center items-center gap-12"
	>
		<Tilt :options="tiltOptions" class="mx-auto w-auto h-auto max-h-[600px] border border-slate-700 rounded-xl">
			<transition name="fade" mode="out-in">
				<img
					:key="selectedImage"
					:src="selectedImage"
					alt=""
					class="w-auto h-full max-h-[600px] object-cover rounded-xl"
				/>
			</transition>
		</Tilt>
		<div class="w-full h-full grid grid-cols-2 sm:grid-cols-3 md:flex md:flex-auto justify-center items-center gap-4">
			<div
				v-for="(image, index) in images"
				:key="index"
				class="w-full h-full rounded-xl cursor-pointer"
				@click="changeImage(image)"
			>
				<img
					:src="image"
					alt=""
					class="w-full h-full object-cover border border-slate-700 rounded-xl"
				/>
			</div>
		</div>
	</div>
</template>

<script setup>
import { ref } from "vue";
import Tilt from "vanilla-tilt-vue";
import venus from "@/assets/venus.jpg";
import terre from "@/assets/terre.jpg";
import moon from "@/assets/moon.jpg";
import mars from "@/assets/mars.jpg";
import jupiter from "@/assets/jupiter.jpg";
import saturne from "@/assets/saturne.jpg";
import uranus from "@/assets/uranus.jpg";
import neptune from "@/assets/neptune.jpg";

const images = [venus, terre, moon, mars, jupiter, saturne, uranus, neptune];

const tiltOptions = {
	reverse: false,
	max: 15,
	startX: 0,
	startY: 0,
	perspective: 1000,
	scale: 1,
	speed: 150,
	transition: true,
	axis: null,
	reset: true,
	easing: "cubic-bezier(.03,.98,.52,.99)",
	glare: false,
	"max-glare": 1,
	"glare-prerender": false,
	"mouse-event-element": null,
	gyroscope: true,
	gyroscopeMinAngleX: -45,
	gyroscopeMaxAngleX: 45,
	gyroscopeMinAngleY: -45,
	gyroscopeMaxAngleY: 45,
};

const selectedImage = ref(images[1]);

const changeImage = (image) => {
	selectedImage.value = image;
};
</script>

<style>
.fade-enter-active, .fade-leave-active {
	transition: opacity 200ms ease-in-out;
}
.fade-enter-from, .fade-leave-to {
	opacity: 0;
}
</style>
