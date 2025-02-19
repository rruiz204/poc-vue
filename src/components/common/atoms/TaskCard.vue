<script lang="ts" setup>
import { Card } from 'primevue';
import type { Task } from '@core/models/Task';
import { FormatHelper } from "@core/helpers/FormatHelper";

defineProps<{
  task: Task;
}>();
</script>

<template>
  <Card class="border-2">
    <template #subtitle>
      <div class="flex justify-between mb-2">
        <p>{{ task.name }}</p>
        <p class="hidden md:block">Prioridad: {{ task.priority }}</p>
      </div>

      <div class="flex justify-between">
        <p>Finaliza: {{ FormatHelper.formatDate(task.due_date) }}</p>
        <p>Status: {{ task.status }}</p>
      </div>
    </template>
  </Card>
</template>