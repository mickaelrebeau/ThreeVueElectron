<template>
  <div class="p-8 mt-12 min-h-screen flex flex-col items-center">
    <h2 class="text-2xl font-semibold mb-4">File Converter</h2>
    <div class="w-full max-w-lg bg-white dark:bg-slate-800 shadow-md rounded p-8">
      <input
        type="file"
        lang="en"
        @change="onFileSelected"
        class="block w-full text-sm text-gray-600 dark:text-white file:mr-4 file:py-2 file:px-4 file:rounded file:border-0 file:bg-blue-500 file:text-white hover:file:bg-blue-600"
      />
      <select v-model="selectedFormat" class="mt-4 w-full p-2 dark:text-black border rounded">
        <option value="png">Convert to PNG</option>
        <option value="jpg">Convert to JPG</option>
        <option value="pdf">Convert to PDF</option>
      </select>
      <button
        @click="convertFile"
        class="mt-4 w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600"
      >
        Convert
      </button>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";

const selectedFile = ref(null);
const selectedFormat = ref("png");

const onFileSelected = (event) => {
  selectedFile.value = event.target.files[0];
};

const convertFile = () => {
  if (!selectedFile.value) {
    alert("Please select a file.");
    return;
  }
  console.log(`Converting ${selectedFile.value.name} to ${selectedFormat.value} format.`);
  alert(`File will be converted to ${selectedFormat.value}.`);
};
</script>

<style scoped>
input[type="file"]::file-selector-button {
  background-color: #2563eb; 
  color: white;
  padding: 0.5rem 1rem;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 0.875rem; 
}

input[type="file"]::file-selector-button:hover {
  background-color: #1d4ed8;
}
</style>
