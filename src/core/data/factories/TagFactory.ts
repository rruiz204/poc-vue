import { faker } from "@faker-js/faker";
import type { Tag } from "@core/models/Tag";

interface FactoryArgs {
  id: number;
  name: string;
};

export class TagFactory {
  public static build({ id, name }: FactoryArgs): Tag {
    return {
      id: id, name: name,
      color: faker.color.rgb(),
    };
  };
};