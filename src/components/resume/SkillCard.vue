<template>
  <span class="skill">
    <font-awesome-icon :icon="icon ?? ['fas', 'code']" class="skill__icon" />
    <span class="skill__name">{{ name }}</span>
  </span>
</template>

<script setup lang="ts">
import type { IconProp } from '@fortawesome/fontawesome-svg-core'

defineProps<{
  name: string
  icon?: IconProp
}>()
</script>

<style scoped>
.skill {
  display: inline-flex;
  align-items: center;
  gap: 0.75rem;
  min-height: 3.25rem;
  padding: 0.6rem 1.1rem;
  background: var(--color-surface);
  border: 1px solid var(--color-line);
  border-radius: 0.75rem;
  font-weight: 500;
  transition: background-color 0.25s, border-color 0.25s;
}
.skill:hover { background: var(--color-surface-2); border-color: rgb(10 178 250 / 0.45); }
.skill__icon { font-size: 1.5rem; color: var(--color-fg); transition: color 0.25s; }
.skill:hover .skill__icon { color: var(--color-accent); }
</style>
