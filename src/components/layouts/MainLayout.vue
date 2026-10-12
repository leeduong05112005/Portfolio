<template>
  <div class="flex min-h-svh flex-col">
    <a href="#main" class="skip-link">Skip to content</a>
    <Navbar />

    <main id="main" class="flex-1" tabindex="-1">
      <router-view v-slot="{ Component }">
        <Transition name="page" mode="out-in">
          <component :is="Component" />
        </Transition>
      </router-view>
    </main>

    <AppFooter />
  </div>
</template>

<script setup lang="ts">
import Navbar from '../Navbar.vue'
import AppFooter from '../AppFooter.vue'
</script>
