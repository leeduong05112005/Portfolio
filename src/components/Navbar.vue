<template>
  <header class="sticky top-0 z-50 border-b border-line bg-bg/85 backdrop-blur-md">
    <nav class="container-page flex h-16 items-center justify-between sm:h-20" aria-label="Main navigation">
      <router-link to="/" class="flex shrink-0 items-center" aria-label="Le Duong – Home">
        <img src="/fulllogo.png" alt="Le Duong" width="2000" height="367" class="h-7 w-auto sm:h-8" />
      </router-link>

      <ul class="hidden items-center gap-10 md:flex">
        <li v-for="link in links" :key="link.to">
          <router-link :to="link.to" class="nav-link">{{ link.label }}</router-link>
        </li>
      </ul>

      <button
        type="button"
        class="inline-flex h-11 w-11 items-center justify-center rounded-lg border border-line text-fg transition-colors hover:border-accent hover:text-accent md:hidden"
        :aria-expanded="open"
        aria-controls="mobile-menu"
        :aria-label="open ? 'Close menu' : 'Open menu'"
        @click="open = !open"
      >
        <font-awesome-icon :icon="open ? ['fas', 'xmark'] : ['fas', 'bars']" class="text-xl" />
      </button>
    </nav>

    <Transition name="menu">
      <ul
        v-if="open"
        id="mobile-menu"
        class="container-page flex flex-col gap-1 border-t border-line pb-4 pt-2 md:hidden"
      >
        <li v-for="link in links" :key="link.to">
          <router-link :to="link.to" class="mobile-link">{{ link.label }}</router-link>
        </li>
      </ul>
    </Transition>
  </header>
</template>

<script setup lang="ts">
import { ref, watch, onMounted, onUnmounted } from 'vue'
import { useRoute } from 'vue-router'

const links = [
  { label: 'Home', to: '/' },
  { label: 'Projects', to: '/projects' },
  { label: 'Resume', to: '/experience' },
  { label: 'Contact', to: '/contact' }
]

const open = ref(false)
const route = useRoute()

// Đóng menu khi chuyển trang hoặc nhấn Escape
watch(() => route.fullPath, () => { open.value = false })

const onKey = (e: KeyboardEvent) => { if (e.key === 'Escape') open.value = false }
onMounted(() => window.addEventListener('keydown', onKey))
onUnmounted(() => window.removeEventListener('keydown', onKey))
</script>

<style scoped>
.nav-link {
  position: relative;
  padding-block: 0.25rem;
  font-size: 1.05rem;
  color: #e5e7eb;
  transition: color 0.3s;
}
.nav-link:hover { color: #fff; }
.nav-link::after {
  content: "";
  position: absolute;
  left: 0;
  bottom: -2px;
  width: 0;
  height: 2px;
  background-color: var(--color-accent);
  transition: width 0.3s ease-in-out;
}
.nav-link:hover::after,
.nav-link.router-link-exact-active::after { width: 100%; }
.nav-link.router-link-exact-active { color: var(--color-accent); }

.mobile-link {
  display: block;
  padding: 0.85rem 0.75rem;
  border-radius: 0.5rem;
  font-size: 1.1rem;
  color: #e5e7eb;
}
.mobile-link:hover { background: var(--color-surface); }
.mobile-link.router-link-exact-active { color: var(--color-accent); background: var(--color-surface); }

.menu-enter-active,
.menu-leave-active { transition: opacity 0.2s ease, transform 0.2s ease; }
.menu-enter-from,
.menu-leave-to { opacity: 0; transform: translateY(-6px); }
</style>
