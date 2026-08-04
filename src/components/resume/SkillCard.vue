<template>
  <div class="skill-card">
    <font-awesome-icon :icon="icon" class="skill-icon" />
    <span class="skill-name">{{ name }}</span>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  icon: string[]
  name: string
}>()
</script>

<style scoped>
.skill-card {
  background-color: var(--color-bg-card, #232329);
  height: 150px;
  border-radius: 12px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 16px;
  transition: background-color 0.3s;
}

.skill-card:hover {
  background-color: var(--color-bg-card-hover, #2a2a32);
}

.skill-icon {
  font-size: 48px;
  color: var(--color-text-primary, #ffffff);
  transition: color 0.3s;
}

.skill-card:hover .skill-icon {
  color: var(--color-primary, #0ab2fa);
}

.skill-name {
  font-weight: 600;
  letter-spacing: 0.05em;
  text-transform: capitalize;
}
</style>