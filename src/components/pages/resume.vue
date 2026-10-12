<template>
  <section class="container-page py-12 sm:py-16" aria-labelledby="resume-title">
    <div class="grid gap-10 lg:grid-cols-12 lg:gap-14">
      <!-- Sidebar -->
      <div class="lg:col-span-4">
        <p class="eyebrow">Resume</p>
        <h1 id="resume-title" class="page-title mt-2">Why hire me?</h1>
        <p class="mt-4 text-muted">
          I am a fast learner with a strong work ethic and a genuine desire to contribute to the success of the company.
        </p>

        <div class="mt-8 grid grid-cols-2 gap-3 lg:grid-cols-1" role="tablist" aria-label="Resume sections" aria-orientation="vertical">
          <button
            v-for="(tab, i) in tabs"
            :id="'tab-' + tab.value"
            :key="tab.value"
            type="button"
            role="tab"
            class="tab-btn"
            :class="{ 'tab-btn--active': tabPosition === tab.value }"
            :aria-selected="tabPosition === tab.value"
            :aria-controls="'tab-panel-' + tab.value"
            :tabindex="tabPosition === tab.value ? 0 : -1"
            @click="select(tab.value)"
            @keydown="onKeydown($event, i)"
          >
            {{ tab.label }}
          </button>
        </div>
      </div>

      <!-- Content -->
      <div class="min-w-0 lg:col-span-8">
        <Transition name="tab-fade" mode="out-in">
          <div
            :id="'tab-panel-' + tabPosition"
            :key="tabPosition"
            role="tabpanel"
            :aria-labelledby="'tab-' + tabPosition"
            tabindex="0"
          >
            <template v-if="tabPosition === TabPosition.Experience">
              <h2 class="section-title">{{ experienceList.title }}</h2>
              <p class="section-desc">{{ experienceList.description }}</p>
              <div class="grid gap-5 md:grid-cols-2">
                <InfoCard v-for="item in experienceList.info" :key="item.subtitle + item.title" v-bind="item" />
              </div>
            </template>

            <template v-else-if="tabPosition === TabPosition.Education">
              <h2 class="section-title">{{ educationList.title }}</h2>
              <p class="section-desc">{{ educationList.description }}</p>
              <div class="grid gap-5 md:grid-cols-2">
                <InfoCard v-for="item in educationList.info" :key="item.subtitle + item.title" v-bind="item" />
              </div>
            </template>

            <template v-else-if="tabPosition === TabPosition.Skills">
              <h2 class="section-title">{{ skill.title }}</h2>
              <p class="section-desc">{{ skill.description }}</p>
              <div class="space-y-7">
                <div v-for="group in skill.groups" :key="group.title">
                  <h3 class="mb-3 font-mono text-base uppercase tracking-widest text-accent">{{ group.title }}</h3>
                  <ul class="flex flex-wrap gap-3">
                    <li v-for="item in group.items" :key="item.name">
                      <SkillCard :name="item.name" :icon="item.icon" />
                    </li>
                  </ul>
                </div>
              </div>
            </template>

            <template v-else>
              <h2 class="section-title">{{ aboutMe.title }}</h2>
              <p class="section-desc">{{ aboutMe.description }}</p>
              <AboutGrid :items="aboutMe.info" />
            </template>
          </div>
        </Transition>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { nextTick, watch } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { useResumeData, TabPosition } from '../../composables/useResumeData'
import InfoCard from '../resume/InfoCard.vue'
import SkillCard from '../resume/SkillCard.vue'
import AboutGrid from '../resume/AboutGrid.vue'

const { tabPosition, aboutMe, experienceList, educationList, skill } = useResumeData()

const tabs = [
  { label: 'Experience', value: TabPosition.Experience },
  { label: 'Education', value: TabPosition.Education },
  { label: 'Skills', value: TabPosition.Skills },
  { label: 'About me', value: TabPosition.About }
]

const route = useRoute()
const router = useRouter()

const isTab = (v: unknown): v is TabPosition => Object.values(TabPosition).includes(v as TabPosition)

// Hỗ trợ deep-link: /experience?tab=education (cũng là đích của redirect từ /education)
const fromQuery = route.query.tab
if (isTab(fromQuery)) tabPosition.value = fromQuery

watch(() => route.query.tab, (v) => { if (isTab(v)) tabPosition.value = v })

function select(value: TabPosition) {
  tabPosition.value = value
  router.replace({ query: { tab: value } })
}

// Điều hướng bàn phím theo chuẩn WAI-ARIA tabs
async function onKeydown(e: KeyboardEvent, index: number) {
  const last = tabs.length - 1
  let next = -1
  if (e.key === 'ArrowDown' || e.key === 'ArrowRight') next = index === last ? 0 : index + 1
  else if (e.key === 'ArrowUp' || e.key === 'ArrowLeft') next = index === 0 ? last : index - 1
  else if (e.key === 'Home') next = 0
  else if (e.key === 'End') next = last
  if (next < 0) return

  e.preventDefault()
  select(tabs[next]!.value)
  await nextTick()
  document.getElementById('tab-' + tabs[next]!.value)?.focus()
}
</script>

<style scoped>
.tab-btn {
  width: 100%;
  min-height: 3rem;
  padding: 0.75rem 1rem;
  border-radius: 0.6rem;
  border: 1px solid transparent;
  background: #28272c;
  color: var(--color-fg);
  font-weight: 600;
  cursor: pointer;
  transition: background-color 0.25s, color 0.25s;
}
.tab-btn:hover { background: #34333a; }
.tab-btn--active,
.tab-btn--active:hover { background: var(--color-accent); color: var(--color-accent-ink); }

.section-title { font-size: clamp(1.5rem, 3vw, 1.875rem); font-weight: 700; line-height: 1.2; }
.section-desc { margin: 0.75rem 0 2rem; max-width: 36rem; color: var(--color-muted); }

.tab-fade-enter-active,
.tab-fade-leave-active { transition: opacity 0.25s ease; }
.tab-fade-enter-from,
.tab-fade-leave-to { opacity: 0; }
</style>
