import { faker } from "@faker-js/faker";
import { Status } from "@core/enums/Status";
import type { Task } from "@core/models/Task";
import { Priority } from "@core/enums/Priority";

interface FactoryArgs {
  id: number;
  name: string;
};

export class TaskFactory {
  public static build({ id, name }: FactoryArgs): Task {
    const createdAt = faker.date.between({
      from: new Date(Date.now() - 30 * 24 * 60 * 60 * 1000),
      to: new Date(),
    });

    const dueDate = faker.date.between({
      from: createdAt,
      to: new Date(createdAt.getTime() + 60 * 24 * 60 * 60 * 1000),
    });

    return {
      id: id, name: name,
      status: faker.helpers.enumValue(Status),
      priority: faker.helpers.enumValue(Priority),
      created_at: createdAt,
      due_date: dueDate,
    };
  };
};