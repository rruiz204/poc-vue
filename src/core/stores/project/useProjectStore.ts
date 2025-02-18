import { ref, type Ref } from "vue";
import { defineStore } from "pinia";
import type { Project } from "@core/models/Project";
import { ProjectData } from "@core/data/ProjectData";

import type {
  CreateProjectPayload,
  RemoveProjectPayload,
  UpdateProjectPayload,
} from "./ProjectPayloads";

interface State {
  projects: Ref<Project[]>;
};

interface Actions {
  remove: (project: RemoveProjectPayload) => void;
  create: (project: CreateProjectPayload) => void;
  update: (project: UpdateProjectPayload) => void;
};

export const useProjectStore = defineStore("project", (): State & Actions => {
  const projects = ref<Project[]>(ProjectData);

  const remove = (project: RemoveProjectPayload): void => {
    projects.value = projects.value.filter((p) => p.id !== project.id);
  };

  const create = (project: CreateProjectPayload): void => {
    projects.value.push(project);
  };

  const update = (project: UpdateProjectPayload): void => {
    const index = projects.value.findIndex((p) => p.id == project.id);
    if (index !== -1) {
      projects.value[index] = { ...projects.value[index], ...project };
    };
  };

  return { projects, create, update, remove };
});