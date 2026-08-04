<template>
  <div class="resume-wrapper">
    <div class="resume-container">
      <div class="resume-sidebar">
        <div class="sidebar-header">
          <h2 class="sidebar-title">Why hire me?</h2>
          <p class="sidebar-desc">
            I am a fast learner with a strong work ethic and a genuine desire to contribute to the success of the company.
          </p>
        </div>

        <div class="tab-list" role="tablist">
          <button
            v-for="tab in tabs"
            :key="tab.value"
            @click="tabPosition = tab.value"
            class="tab-btn"
            :class="{ active: tabPosition === tab.value }"
            role="tab"
            :aria-selected="tabPosition === tab.value"
            :aria-controls="'tab-panel-' + tab.value"
          >
            {{ tab.label }}
          </button>
        </div>
      </div>

      <div class="resume-content">
        <Transition name="tab-fade" mode="out-in">
          <div v-if="tabPosition === TabPosition.Experience" class="tab-pane" id="tab-panel-experience" role="tabpanel">
            <div class="content-header">
              <h2 class="content-title">{{ experienceList.title }}</h2>
              <p class="content-desc">{{ experienceList.description }}</p>
            </div>
            <div class="scroll-container">
              <div class="grid-2-cols">
                <InfoCard
                  v-for="item in experienceList.info"
                  :key="item.company + item.position"
                  :duration="item.duration"
                  :title="item.position"
                  :subtitle="item.company"
                />
              </div>
            </div>
          </div>

          <div v-else-if="tabPosition === TabPosition.Education" class="tab-pane" id="tab-panel-education" role="tabpanel">
            <div class="content-header">
              <h2 class="content-title">{{ educationList.title }}</h2>
              <p class="content-desc">{{ educationList.description }}</p>
            </div>
            <div class="scroll-container">
              <div class="grid-2-cols">
                <InfoCard
                  v-for="item in educationList.info"
                  :key="item.institution + item.degree"
                  :duration="item.duration"
                  :title="item.degree"
                  :subtitle="item.institution"
                />
              </div>
            </div>
          </div>

          <div v-else-if="tabPosition === TabPosition.Skills" class="tab-pane" id="tab-panel-skills" role="tabpanel">
            <div class="content-header">
              <h2 class="content-title">{{ skill.title }}</h2>
              <p class="content-desc">{{ skill.description }}</p>
            </div>
            <div class="scroll-container skills-scroll">
              <div class="grid-4-cols">
                <SkillCard
                  v-for="item in skill.info"
                  :key="item.name"
                  :icon="item.icon"
                  :name="item.name"
                />
              </div>
            </div>
          </div>

          <div v-else-if="tabPosition === TabPosition.About" class="tab-pane" id="tab-panel-about" role="tabpanel">
            <div class="content-header">
              <h2 class="content-title">{{ aboutMe.title }}</h2>
              <p class="content-desc">{{ aboutMe.description }}</p>
            </div>
            <AboutGrid :items="aboutMe.info" />
          </div>
        </Transition>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useResumeData, TabPosition } from '../../composables/useResumeData'
import InfoCard from '../resume/InfoCard.vue'
import SkillCard from '../resume/SkillCard.vue'
import AboutGrid from '../resume/AboutGrid.vue'

const { tabPosition, aboutMe, experienceList, educationList, skill } = useResumeData()

const tabs = computed(() => [
  { label: 'Experience', value: TabPosition.Experience },
  { label: 'Education', value: TabPosition.Education },
  { label: 'Skills', value: TabPosition.Skills },
  { label: 'About me', value: TabPosition.About }
])
</script>

<style scoped>
.resume-wrapper {
  min-height: 100vh;
  background-color: var(--color-bg-primary, #1c1c22);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 48px 16px;
  color: var(--color-text-primary, #ffffff);
  box-sizing: border-box;
}

.resume-container {
  width: 100%;
  max-width: 1152px;
  display: grid;
  grid-template-columns: 1fr;
  gap: 48px;
  padding: 16px;
  background-color: var(--color-bg-secondary, #1c1b22);
  position: relative;
}

@media (min-width: 1024px) {
  .resume-container {
    grid-template-columns: repeat(12, 1fr);
  }
  .resume-sidebar {
    grid-column: span 4;
  }
  .resume-content {
    grid-column: span 8;
  }
}

.resume-sidebar {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.sidebar-header {
  text-align: left;
  margin-bottom: 20px;
}

.sidebar-title {
  font-size: 30px;
  font-weight: bold;
  margin-bottom: 16px;
}

.sidebar-desc {
  color: var(--color-text-secondary, #9ca3af);
  font-size: 14px;
  line-height: 1.625;
}

.tab-list {
  display: flex;
  flex-direction: column;
  gap: 20px;
  width: 100%;
  max-width: 380px;
  margin: 0 auto;
}

@media (min-width: 1280px) {
  .tab-list {
    margin: 0;
  }
}

.tab-btn {
  width: 100%;
  font-weight: bold;
  padding: 12px 0;
  background-color: var(--color-bg-tab, #28272c);
  color: var(--color-text-primary, #ffffff);
  border: none;
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.3s ease;
}

.tab-btn:hover {
  background-color: var(--color-bg-tab-hover, #2f2e33);
}

.tab-btn.active {
  background-color: var(--color-primary, #0ab2fa);
  color: var(--color-text-primary, #ffffff);
}

.resume-content {
  display: flex;
  flex-direction: column;
  text-align: left;
  min-height: 400px;
}

.tab-pane {
  width: 100%;
}

.content-header {
  min-height: 120px;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.content-title {
  font-size: 30px;
  font-weight: bold;
  margin-bottom: 16px;
}

.content-desc {
  color: var(--color-text-secondary, #9ca3af);
  font-size: 14px;
  line-height: 1.625;
  margin-bottom: 32px;
}

.scroll-container {
  max-height: 440px;
  overflow-y: auto;
  padding-right: 16px;
}

.skills-scroll {
  max-height: 480px;
}

.scroll-container::-webkit-scrollbar {
  width: 6px;
}

.scroll-container::-webkit-scrollbar-track {
  background: var(--color-bg-secondary, #1c1b22);
}

.scroll-container::-webkit-scrollbar-thumb {
  background-color: var(--color-primary, #0ab2fa);
  border-radius: 20px;
}

.grid-2-cols {
  display: grid;
  grid-template-columns: 1fr;
  gap: 24px;
}

@media (min-width: 768px) {
  .grid-2-cols {
    grid-template-columns: repeat(2, 1fr);
  }
}

.grid-4-cols {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 24px;
}

@media (min-width: 768px) {
  .grid-4-cols {
    grid-template-columns: repeat(4, 1fr);
  }
}

.tab-fade-enter-active,
.tab-fade-leave-active {
  transition: opacity 0.3s ease;
}

.tab-fade-enter-from,
.tab-fade-leave-to {
  opacity: 0;
}
</style>