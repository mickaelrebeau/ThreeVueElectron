import { ref } from "vue";

const isDarkMode = ref(false);

function toggleDarkMode() {
	isDarkMode.value = !isDarkMode.value;
	if (isDarkMode.value) {
		document.documentElement.classList.add("dark");
	} else {
		document.documentElement.classList.remove("dark");
	}
}

export function useDarkMode() {
	return { isDarkMode, toggleDarkMode };
}
