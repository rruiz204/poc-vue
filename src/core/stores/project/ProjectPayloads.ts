import type { Project } from "@core/models/Project";

export type UpdateProjectPayload = Project;

export type CreateProjectPayload = Project;

export type RemoveProjectPayload = Pick<Project, "id">;