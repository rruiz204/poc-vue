import type { Tag } from "./Tag";
import type { Task } from "./Task";

import { Status } from "@core/enums/Status";
import { Priority } from "@core/enums/Priority";

export interface Project {
  id: number;
  name: string;
  title: string;
  status: Status;
  priority: Priority;
  description: string;
  created_at: Date;
  due_date: Date;
  tasks: Task[];
  tags: Tag[];
};