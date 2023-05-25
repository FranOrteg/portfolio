import { Component } from '@angular/core';
import { Projects } from 'src/app/interfaces/projects';
import { ProjectService } from 'src/app/services/project.service';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent {

  arrProjects: Projects[]

  constructor(private projectService: ProjectService) {
    this.arrProjects = []
  }

  ngOnInit() {
    this.arrProjects = this.projectService.getAll()
    console.log(this.arrProjects)
  }
}
