<script lang="ts" setup>
import { Dialog } from 'primevue';
import type { Task } from '@core/models/Task';
import TaskCard from '@components/common/atoms/TaskCard.vue';

defineProps<{
  tasks: Task[];
  visible: boolean;
}>();

const emit = defineEmits(["update:visible"]);
</script>

<template>
  <Dialog :visible="visible" @update:visible="emit('update:visible', $event)" modal header="Tareas del proyecto" class="w-[800px]">
    <div class="flex flex-col gap-3">
      <TaskCard v-if="tasks.length > 0" v-for="task in tasks" :key="task.id" :task="task" />
      <div v-else class="p-4">
        <p class="font-semibold text-center">Este proyecto no tiene tareas aún</p>
      </div>
    </div>
  </Dialog>
</template>