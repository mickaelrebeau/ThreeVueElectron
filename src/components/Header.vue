<template>
  <div class="w-screen">
    <nav class="py-6 flex justify-center items-center gap-4">
      <router-link to="/home" class="text-lg font-semibold">Home</router-link>
      <router-link to="/convert" class="text-lg font-semibold">Convert</router-link>
      <router-link to="/about" class="text-lg font-semibold">About</router-link>
      <router-link to="/" class="text-lg font-semibold">Logout</router-link>
      <button @click="toggleDarkMode()" class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Switch Theme</button>
    </nav>
  </div>
</template>

<script setup>
import { useDarkMode } from "../utils/useDarkMode";

const { isDarkMode, toggleDarkMode } = useDarkMode();
</script>