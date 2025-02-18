import { Status } from "@core/enums/Status";
import { Priority } from "@core/enums/Priority";
import { TagFactory } from "./factories/TagFactory";
import { TaskFactory } from "./factories/TaskFactory";
import type { Project } from "@core/models/Project";

const Gacela: Project = {
  id: 1,
  name: "Gacela",
  description: "Gacela es un sistema de gestión de proyectos de software diseñado para mejorar la organización, el seguimiento y la colaboración en equipos de desarrollo. Proporciona herramientas para la planificación de tareas, priorización y monitoreo del progreso en tiempo real.",
  priority: Priority.Mid,
  status: Status.Progress,
  created_at: new Date(new Date().setDate(new Date().getDate() - 90)),
  due_date: new Date(new Date().setDate(new Date().getDate() + 150)), 
  tasks: [
    TaskFactory.build({ id: 1, name: "Reestructuración de la base de datos para soporte multicliente" }),
    TaskFactory.build({ id: 2, name: "Implementación de un sistema de roles y permisos avanzados en Laravel" }),
    TaskFactory.build({ id: 3, name: "Desarrollo de un sistema de notificaciones en tiempo real con WebSockets en Vue" }),
    TaskFactory.build({ id: 4, name: "Optimización de rendimiento de consultas GraphQL y caching avanzado" }),
  ],
  tags: [
    TagFactory.build({ id: 1, name: "Larvel" }),
    TagFactory.build({ id: 2, name: "Vue" }),
    TagFactory.build({ id: 3, name: "GraphQL" }),
  ],
};

const Gesmia: Project = {
  id: 2,
  name: "Gesmia",
  description: "Gesmia es una aplicación móvil de seguridad diseñada para ayudar a las personas a monitorear la ubicación de sus seres queridos en tiempo real. Permite crear círculos de confianza, recibir alertas sobre posibles peligros cercanos, mejorando la seguridad y tranquilidad de los usuarios.",
  priority: Priority.High,
  status: Status.Progress,
  created_at: new Date(new Date().setDate(new Date().getDate() - 30)),
  due_date: new Date(new Date().setDate(new Date().getDate() + 190)),
  tasks: [
    TaskFactory.build({ id: 5, name: "Integración de geolocalización en tiempo real con React Native y Mapbox" }),
    TaskFactory.build({ id: 6, name: "Desarrollo de la API de notificaciones push para alertas de peligro usando ASP.NET" }),
    TaskFactory.build({ id: 7, name: "Implementación de un sistema de círculos de confianza con autenticación biométrica en la app" }),
  ],
  tags: [
    TagFactory.build({ id: 4, name: "React Native" }),
    TagFactory.build({ id: 5, name: "ASP.NET" }),
    TagFactory.build({ id: 6, name: "REST" }),
  ],
};

const Holdex = {
  id: 3,
  name: "Holdex",
  description: "Holdex es una aplicación web enfocada en el ecosistema blockchain. Ofrece herramientas para la gestión de activos digitales, seguimiento de transacciones y análisis de tendencias en el mercado cripto, proporcionando una experiencia intuitiva y segura para los usuarios.",
  priority: Priority.Low,
  status: Status.Completed,
  created_at: new Date(new Date().setDate(new Date().getDate() - 150)),
  due_date: new Date,
  tasks: [

  ],
  tags: [
    TagFactory.build({ id: 7, name: "Svelte" }),
    TagFactory.build({ id: 8, name: "Solidity" }),
  ],
};

const Nitel = {
  id: 4,
  name: "Nitel",
  description: "Nitel es un sistema de análisis y visualización de datos financieros basado en gráficos interactivos. Permite a los usuarios monitorear el rendimiento del mercado, realizar análisis técnicos y tomar decisiones informadas a través de herramientas avanzadas de charting y visualización de tendencias económicas.",
  priority: Priority.Low,
  status: Status.Pending,
  created_at: new Date,
  due_date: new Date(new Date().setDate(new Date().getDate() + 250)),
  tasks: [
    TaskFactory.build({ id: 8, name: "Configuración inicial del backend en Spring Boot" }),
    TaskFactory.build({ id: 9, name: "Desarrollo del Endpoint para consulta de datos financieros" }),
    TaskFactory.build({ id: 10, name: "Diseño básico de la interfaz de usuario con Angular" }),
  ],
  tags: [
    TagFactory.build({ id: 9, name: "Angular" }),
    TagFactory.build({ id: 10, name: "Spring Boot" }),
    TagFactory.build({ id: 11, name: "REST" }),
  ],
};

export const ProjectData: Project[] = [Gacela, Gesmia, Holdex, Nitel];