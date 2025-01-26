<script setup>
import { GitHubIcon } from 'vue3-simple-icons'

const { title, github } = useAppConfig()
</script>

<template>
  <section class="md:pt-6">
    <div class="container flex flex-col items-center py-8 mx-auto sm:flex-row">
      <a
        href="/"
        class="text-xl font-black leading-none dark:text-foreground select-none dark:hover:text-accent logo"
        :title="title"
      >{{ title }}</a>
      <span
        class="inline-flex justify-center mt-4 space-x-5 sm:ml-auto sm:mt-0 sm:justify-start"
      >
        <a
          v-if="github"
          :href="github"
          target="_blank"
          title="GitHub"
          class="text-primary hover:text-primary"
        >
          <span class="sr-only">GitHub</span>
          <GitHubIcon
            class="w-6 h-6"
          />
        </a>
      </span>
    </div>
  </section>
</template>
