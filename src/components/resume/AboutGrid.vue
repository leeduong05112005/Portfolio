<template>
  <dl class="grid gap-x-10 gap-y-5 sm:grid-cols-2">
    <div v-for="item in items" :key="item.fieldName" class="flex min-w-0 flex-col gap-1 border-b border-line pb-4">
      <dt class="text-sm text-muted">{{ item.fieldName }}</dt>
      <dd class="min-w-0 break-words text-lg font-semibold">
        <a v-if="item.href" :href="item.href" class="hover:text-accent hover:underline underline-offset-4" :target="item.href.startsWith('http') ? '_blank' : undefined" rel="noopener noreferrer">{{ item.fieldValue }}</a>
        <template v-else>{{ item.fieldValue }}</template>
      </dd>
    </div>
  </dl>
</template>

<script setup lang="ts">
defineProps<{
  items: Array<{ fieldName: string; fieldValue: string; href?: string }>
}>()
</script>
