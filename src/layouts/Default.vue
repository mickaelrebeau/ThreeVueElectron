<template>
  <main :class="{ dark: isDarkMode }" class="min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100">
    <Header />
    <router-view />
  </main>
</template>

<script setup>
import Header from "../components/Header.vue";
import { useDarkMode } from "../utils/useDarkMode";

const { isDarkMode, toggleDarkMode } = useDarkMode();
</script>