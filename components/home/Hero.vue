<script setup>
import heroImg from '@/assets/images/hero.png'
import { AreaChart } from 'lucide-vue-next'
import { GitHubIcon } from 'vue3-simple-icons'

const { title, description, github } = useAppConfig()
</script>

<template>
  <main
    class="grid pt-8 pb-8 lg:grid-cols-2 place-items-center md:py-12"
  >
    <div>
      <h1
        class="text-5xl font-bold lg:text-6xl xl:text-7xl lg:tracking-tight xl:tracking-tighter"
      >
        {{ title }}
      </h1>
      <p class="max-w-xl mt-4 text-lg dark:text-accent">
        {{ description }}
      </p>
      <div class="flex flex-row gap-3 mt-6"> <!-- Removed sm:flex-row and flex-col -->
        <!-- Dashboard Button -->
        <HomeLink
          href="/dashboard"
          type="outline"
          title="Dashboard"
          class="flex items-center justify-center gap-1 px-6 py-3 rounded-full transition-colors bg-transparent text-primary border border-primary hover:bg-primary hover:text-primary-foreground

          dark:bg-primary-foreground dark:text-card dark:border-primary-foreground dark:hover:bg-accent dark:hover:border-accent"
          rel="noopener"
        >
          <AreaChart
            class="w-5 h-5"
          />
          Dashboard
        </HomeLink>
        <!-- GitHub Repo Button -->
        <HomeLink
          size="lg"
          type="outline"
          rel="noopener"
          :href="github"
          title="Github"
          class="flex items-center justify-center gap-1 px-6 py-3 rounded-full transition-colors bg-transparent text-primary border border-primary hover:bg-primary hover:text-primary-foreground

          dark:bg-transparent dark:text-primary-foreground dark:border-primary-foreground dark:hover:bg-primary dark:hover:border-primary dark:hover:text-background"
        >
          <GitHubIcon
            class="w-5 h-5"
          />
          GitHub Repo
        </HomeLink>
      </div>
    </div>
    <div class="hidden py-6 md:block">
      <img
        :src="heroImg"
        alt="Hero Image"
        class="w-[512px]"
      >
    </div>
  </main>
</template>
