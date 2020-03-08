import { Project } from "./project";

export class App {
  
  projects: Project[] = [];
  currentProject!: Project;
  
  createProject(projectName: string) {
    let project = new Project(projectName);
    this.projects.push(project);
    this.currentProject = project;
    return project;
  }

  startTracking(activity: string) {
    this.currentProject.startTracking(activity);
  }

  endTracking() {
    return this.currentProject.endTracking();
  }
}
