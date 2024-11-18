<template>
	<section class="relative flex flex-col justify-center items-center z-10">
		<div class="p-4 md:p-8 w-full h-screen flex flex-col md:flex-row justify-center items-center gap-4">
			<div
				class="w-full md:w-1/2 h-full max-h-[800px] relative glow-capture bg-slate-800/50 rounded-xl"
			>
				<div
					class="w-full h-full flex flex-col justify-center items-center gap-4 border border-slate-700 rounded-xl glow glow:ring-1 glow:border-glow glow:ring-glow glow:bg-glow/[.25]"
				>
					<h1 class="text-4xl font-semibold text-white">Landing Page</h1>
					<button
						@click="goHome()"
						class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
					>
						Go Home
					</button>
				</div>
				<div class="glow-overlay" style="--glow-color: #2563eb"></div>
			</div>
            <div
                class="w-full md:w-1/2 h-full max-h-[800px] relative glow-capture bg-slate-800/50 rounded-xl"
            >
                <div
                    class="w-full h-full flex flex-col justify-center items-center gap-4 border border-slate-700 rounded-xl glow glow:ring-1 glow:border-glow glow:ring-glow glow:bg-glow/[.25]"
                >
                    <h2 class="text-4xl font-semibold text-white">Second Section</h2>
                </div>
                <div class="glow-overlay" style="--glow-color: #52f2a2"></div>
            </div>
		</div>
		<div class="p-4 md:p-8 w-full h-auto md:h-screen flex justify-center items-center gap-4">
			<div class="w-full md:w-2/3 h-full max-h-[800px] relative bg-slate-950/50 rounded-xl">
				<div
					class="absolute -inset-24 rounded-2xl bg-gradient-to-r from-cyan-600 to-blue-600 opacity-50 blur-3xl"
				></div>
				<div
					class="p-4 w-full h-full border border-white bg-white/40 rounded-2xl"
				>
					<div class="w-full h-full relative bg-slate-800 rounded-xl">
						<video
							src="../assets/terre.mp4"
							class="w-full h-full object-cover rounded-xl border border-slate-800"
							muted
							loop
							autoplay
						></video>
					</div>
				</div>
			</div>
		</div>
		<Caroussel />

		<Stars />
	</section>
</template>

<script setup>
import { onMounted } from "vue";
import Stars from "../components/Stars.vue";
import Caroussel from "../components/Caroussel.vue";
import router from "../router";

const goHome = () => {
	router.push({ name: "Home" });
};

onMounted(() => {
	const captures = document.querySelectorAll(".glow-capture");

	captures.forEach((capture) => {
		const cloneChild = capture.children[0].cloneNode(true);
		const overlay = capture.querySelector(".glow-overlay");

		overlay.appendChild(cloneChild);

		capture.addEventListener("mousemove", (e) => {
			const x = e.pageX - capture.offsetLeft;
			const y = e.pageY - capture.offsetTop;

			overlay.style.setProperty("--glow-x", `${x}px`);
			overlay.style.setProperty("--glow-y", `${y}px`);
			overlay.style.setProperty("--glow-opacity", "1");
		});

		capture.addEventListener("mouseleave", (e) => {
			overlay.style.setProperty("--glow-opacity", "0");
		});
	});
});
</script>

<style scoped>
.glow-overlay {
	--glow-size: 25rem;
	position: absolute;
	inset: 0;
	pointer-events: none;
	user-select: none;
	opacity: var(--glow-opacity, 0);
	mask: radial-gradient(
		var(--glow-size) var(--glow-size) at var(--glow-x) var(--glow-y),
		var(--glow-color) 1%,
		transparent 40%
	);
	transition: 800ms mask ease-in-out;
	will-change: mask;
}
</style>
