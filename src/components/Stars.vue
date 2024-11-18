<template>
    <canvas class="webgl h-screen"></canvas>
</template>

<script setup>
import { onMounted, ref } from "vue";
import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import * as random from "maath/random/dist/maath-random.esm";

let renderer, scene, camera;
const groupRef = ref(null);

onMounted(() => {
    const canvas = document.querySelector("canvas.webgl");
    if (!canvas) {
        console.error("Canvas element not found");
        return;
    }

    // Scene setup
    scene = new THREE.Scene();
    scene.background = new THREE.Color(0x000000);

    // Camera setup
    camera = new THREE.PerspectiveCamera(
        30,
        window.innerWidth / window.innerHeight,
        0.4,
        1000
    );
    camera.position.z = 1;

    // Controls setup
    const controls = new OrbitControls(camera, canvas);
    controls.enableDamping = true;

    // Points setup
    const sphere = random.inSphere(new Float32Array(5001 * 3), { radius: 1.2 });

    const geometry = new THREE.BufferGeometry();
    geometry.setAttribute(
        "position",
        new THREE.BufferAttribute(sphere, 3)
    );

    const material = new THREE.PointsMaterial({
        color: "#93e9fa",
        size: 0.003,
        transparent: true,
        sizeAttenuation: true,
        depthWrite: false,
    });

    const points = new THREE.Points(geometry, material);

    // Group setup for rotation
    const group = new THREE.Group();
    group.add(points);
    group.rotation.set(0, 0, Math.PI / 4);
    scene.add(group);
    groupRef.value = group;

    // Renderer setup
    renderer = new THREE.WebGLRenderer({
        canvas: canvas,
        antialias: true,
        alpha: true,
    });
    renderer.outputEncoding = THREE.sRGBEncoding;
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.setSize(window.innerWidth, window.innerHeight);

    // Animation loop
    const animate = () => {
        group.rotation.x -= 0.001;
        group.rotation.y -= 0.0015;

        controls.update();
        renderer.render(scene, camera);
        requestAnimationFrame(animate);
    };

    animate();

    // Add event listener for resizing
    window.addEventListener("resize", () => {
        camera.aspect = window.innerWidth / window.innerHeight;
        camera.updateProjectionMatrix();
        renderer.setSize(window.innerWidth, window.innerHeight);
    });
});
</script>

<style scoped>
canvas.webgl {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: -1;
}
</style>
