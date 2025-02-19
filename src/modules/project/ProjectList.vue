<script lang="ts" setup>
import { useProjectStore } from '@core/stores/project/useProjectStore';
import ProjectCard from './ProjectCard.vue';

const store = useProjectStore();
</script>

<template>
  <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
    <ProjectCard v-for="project in store.projects" :project="project" :key="project.id" />
  </div>
</template>