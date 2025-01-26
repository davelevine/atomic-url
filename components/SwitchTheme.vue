<script setup>
import { Moon, Sun } from 'lucide-vue-next'

const colorMode = useColorMode()

// Function to toggle between light and dark modes
function toggleTheme() {
  colorMode.preference = colorMode.preference === 'dark' ? 'light' : 'dark'
}
</script>

<template>
  <button
    class="relative flex items-center justify-center w-10 h-10 rounded-full transition-all hover:bg-muted"
    title="Toggle theme"
    @click="toggleTheme"
  >
    <Sun
      class="absolute w-5 h-5 transition-all scale-100 dark:scale-0"
    />
    <Moon
      class="w-5 h-5 transition-all scale-0 dark:scale-100"
    />
    <span class="sr-only">Toggle theme</span>
  </button>
</template>
