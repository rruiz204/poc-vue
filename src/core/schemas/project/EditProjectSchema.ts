import * as yup from "yup";
import { Status } from "@core/enums/Status";
import { Priority } from "@core/enums/Priority";
import { yupResolver } from "@primevue/forms/resolvers/yup";

const schema = yup.object({
  name: yup.string()
    .required(),
  title: yup.string()
    .required(),
  description: yup.string()
    .required(),
  status: yup.string()
    .required()
    .oneOf(Object.values(Status)),
  priority: yup.string()
    .required()
    .oneOf(Object.values(Priority)),
});

export const EditProjectSchema = yupResolver(schema);