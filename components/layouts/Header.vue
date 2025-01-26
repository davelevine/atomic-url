<script setup>
import { ref } from 'vue'
import { Ellipsis, X } from 'lucide-vue-next'
import { GitHubIcon } from 'vue3-simple-icons'
import SwitchTheme from '../SwitchTheme.vue'

const showMenu = ref(false)
const { title, github } = useAppConfig()
</script>

<template>
  <section class="pb-6">
    <nav class="container relative z-50 h-24 select-none">
      <div
        class="container relative flex flex-wrap items-center justify-between h-24 px-0 mx-auto overflow-hidden font-medium border-b border-border md:overflow-visible lg:justify-center"
      >
        <!-- Main header title -->
        <div class="flex items-center justify-start w-1/4 h-full pr-4">
          <a
            href="/"
            :title="title"
            class="flex items-center py-4 space-x-2 text-xl font-black dark:hover:text-accent text-foreground md:py-0 whitespace-nowrap"
          >
            <span
              class="flex items-center justify-center w-8 h-8 rounded-full bg-primary"
            >
              <img
                src="/sink.png"
                :alt="title"
                class="w-full h-full rounded-full"
              >
            </span>
            <span class="mx-2">{{ title }}</span>
          </a>
        </div>

        <!-- Mobile theme switcher -->
        <div class="flex items-center md:hidden">
          <SwitchTheme />
        </div>

        <!-- Desktop menu -->
        <div
          class="hidden md:flex top-0 left-0 items-start w-full h-full p-4 text-sm bg-background md:items-center md:w-3/4 md:absolute lg:text-base md:bg-transparent md:p-0 md:relative"
        >
          <div
            class="flex-col w-full h-auto overflow-hidden rounded-lg bg-background md:overflow-visible md:rounded-none md:relative md:flex md:flex-row"
          >
            <div class="w-full mx-4" />
            <div
              class="flex flex-col items-start justify-end w-full pt-4 md:items-center md:w-1/3 md:flex-row md:py-0"
            >
              <a
                class="w-full px-6 py-2 mr-0 text-foreground cursor-pointer dark:hover:text-accent md:px-3 md:mr-2 lg:mr-3 md:w-auto"
                href="/dashboard"
                :title="`${title} Dashboard`"
              >Dashboard</a>
              <a
                :href="github"
                target="_blank"
                title="Github"
                class="inline-flex items-center w-full px-6 py-3 text-sm font-medium leading-4 text-foreground bg-muted md:px-3 md:w-auto md:rounded-full hover:bg-primary hover:text-background dark:hover:text-background focus:outline-none md:focus:ring-2 focus:ring-accent focus:ring-offset-2"
              >
                <GitHubIcon
                  class="w-5 h-5 mr-1"
                />
                GitHub</a>
              <span class="ml-1 hidden md:block">
                <SwitchTheme />
              </span>
            </div>
          </div>
        </div>
      </div>
    </nav>
  </section>
</template>
