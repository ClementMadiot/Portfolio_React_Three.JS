import { projects } from "../constants";

export function getProject() {
  const projectList = projects;
  return projectList;
}
export function filterProjects(proType) {
  let filterProjects = getProject().filter(type => type.value === proType);
  return filterProjects;
}