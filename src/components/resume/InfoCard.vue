<template>
  <div class="card flex h-full flex-col gap-2 p-6">
    <span class="font-mono text-lg font-semibold tracking-wide text-accent">{{ duration }}</span>
    <h3 class="text-xl font-semibold leading-snug">{{ title }}</h3>
    <p class="flex items-center gap-2 text-sm text-muted">
      <span class="h-1.5 w-1.5 shrink-0 rounded-full bg-accent" aria-hidden="true"></span>
      {{ subtitle }}
    </p>

    <ul v-if="highlights?.length" class="mt-2 space-y-1.5 text-sm text-muted">
      <li v-for="h in highlights" :key="h" class="flex gap-2">
        <span class="mt-2 h-1 w-1 shrink-0 rounded-full bg-muted" aria-hidden="true"></span>
        <span>{{ h }}</span>
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  duration: string
  title: string
  subtitle: string
  highlights?: string[]
}>()
</script>
