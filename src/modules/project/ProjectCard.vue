<script lang="ts" setup>
import { ref } from "vue";
import { Tag } from "primevue";
import { Card } from "primevue";
import { Button } from "primevue";
import type { Project } from "@core/models/Project";
import TasksDialog from "@components/common/molecules/TasksDialog.vue";
import ProjectEdit from "./ProjectEdit.vue";
import { FormatHelper } from "@core/helpers/FormatHelper";

defineProps<{
  project: Project;
}>();

const isTasking = ref<boolean>(false);
const isEditing = ref<boolean>(false);
</script>

<template>
  <Card>
    <template #title>
      <p class="font-semibold">{{ project.name }}</p>
    </template>

    <template #subtitle>
      <div class="flex justify-between">
        <p>{{ project.title }}</p>
        <p class="hidden md:block">Prioridad: {{ project.priority }}</p>
      </div>

      <div class="flex justify-between">
        <p>Finaliza: {{ FormatHelper.formatDate(project.due_date) }}</p>
        <p class="hidden md:block">Status: {{ project.status }}</p>
      </div>
    </template>

    <template #content>
      <div class="flex flex-col gap-5 mb-3">
        <p class="line-clamp-3">{{ project.description }}</p>

        <div class="flex gap-2">
          <Tag v-for="tag in project.tags" :key="tag.id" :value="tag.name" />
        </div>

        <Button label="Tareas" severity="secondary" class="w-full" icon="pi pi-list-check" @click="isTasking = true" />
      </div>
    </template>

    <template #footer>
      <div class="flex gap-4 mt-1">
        <Button label="Edit" severity="secondary" class="w-full" icon="pi pi-pencil" @click="isEditing = true" />
        <Button label="Remove" class="w-full" icon="pi pi-trash" />
      </div>
    </template>
  </Card>

  <TasksDialog :visible="isTasking" @update:visible="isTasking = false" :tasks="project.tasks" />
  <ProjectEdit :visible="isEditing" @update:visible="isEditing = false" :project="project" />
</template>