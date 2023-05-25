import { Injectable } from '@angular/core';
import { Projects } from '../interfaces/projects';
import { PROJECTS } from '../db/projects.db';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {

  projects: Projects[]

  constructor() {
    this.projects = PROJECTS
  }

  getAll() {
    return this.projects
  }

  getById(projectId: number): Projects | null {
    for (let project of PROJECTS) {
      console.log(project.id)
      if (project.id === projectId) {
        return project
      }
    }
    return null
  }
}
