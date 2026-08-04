<template>
  <div class="info-card">
    <span class="info-duration">{{ duration }}</span>
    <h3 class="info-title" :title="title">{{ title }}</h3>
    <div class="info-subtitle-wrapper">
      <span class="info-dot"></span>
      <span class="info-subtitle" :title="subtitle">{{ subtitle }}</span>
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  duration: string
  title: string
  subtitle: string
}>()
</script>

<style scoped>
.info-card {
  background-color: var(--color-bg-card, #232329);
  padding: 24px;
  border-radius: 12px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 8px;
  height: 180px;
  cursor: pointer;
  transition: background-color 0.3s;
}

.info-card:hover {
  background-color: var(--color-bg-card-hover, #2a2a32);
}

.info-duration {
  color: var(--color-primary, #0ab2fa);
  font-weight: 600;
  font-size: 18px;
}

.info-title {
  font-size: 20px;
  font-weight: bold;
  color: var(--color-text-primary, #ffffff);
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  margin-top: 4px;
}

.info-subtitle-wrapper {
  display: flex;
  align-items: center;
  gap: 8px;
  margin-top: 8px;
}

.info-dot {
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background-color: var(--color-primary, #0ab2fa);
}

.info-subtitle {
  color: var(--color-text-secondary, #9ca3af);
  font-size: 14px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
</style>