<template>
  <footer class="border-t border-line">
    <div class="container-page flex flex-col items-center justify-between gap-4 py-8 text-sm text-muted sm:flex-row">
      <p>{{ profile.name }}. Built with Vue 3 &amp; Tailwind CSS.</p>

      <ul class="flex items-center gap-3">
        <li v-for="s in socials" :key="s.label">
          <a :href="s.href" class="icon-btn" :aria-label="s.label" :target="s.external ? '_blank' : undefined" :rel="s.external ? 'noopener noreferrer' : undefined">
            <font-awesome-icon :icon="s.icon" />
          </a>
        </li>
      </ul>
    </div>
  </footer>
</template>

<script setup lang="ts">
import { profile } from '../data/profile'
import { buildSocials } from '../data/socials'

const socials = buildSocials()
</script>
