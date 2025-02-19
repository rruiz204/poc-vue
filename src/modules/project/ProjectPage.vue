<script lang="ts" setup>
import PageLayout from "@components/layouts/PageLayout.vue";
import ProjectList from "./ProjectList.vue";
</script>

<template>
  <PageLayout>
    <div class="flex-1 flex-col py-9 px-12">
      <div class="mb-8">
        <h1 class="text-3xl font-semibold text-center">FluX</h1>
        <p class="text-center">Calidad y Eficiente en un solo lugar</p>
      </div>
      <ProjectList />
    </div>
  </PageLayout>
</template>