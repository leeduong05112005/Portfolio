<template>
  <div class="about-grid">
    <div v-for="item in items" :key="item.fieldName" class="about-item">
      <span class="about-label">{{ item.fieldName }}</span>
      <span class="about-value">{{ item.fieldValue }}</span>
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  items: Array<{ fieldName: string; fieldValue: string }>
}>()
</script>

<style scoped>
.about-grid {
  display: grid;
  grid-template-columns: 1fr;
  row-gap: 24px;
  column-gap: 40px;
}

@media (min-width: 768px) {
  .about-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

.about-item {
  display: flex;
  align-items: center;
  gap: 20px;
}

.about-label {
  color: var(--color-text-secondary, #9ca3af);
  font-size: 14px;
  font-weight: 500;
  width: max-content;
}

.about-value {
  font-size: 20px;
  font-weight: bold;
  color: var(--color-text-primary, #ffffff);
}
</style>