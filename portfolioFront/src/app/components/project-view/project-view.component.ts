import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Projects } from 'src/app/interfaces/projects';
import { ProjectService } from 'src/app/services/project.service';
import { NgbCarouselModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-project-view',
  templateUrl: './project-view.component.html',
  styleUrls: ['./project-view.component.css']
})
export class ProjectViewComponent {

  projects: Projects | null
  images: any

  constructor(
    private activatedRoute: ActivatedRoute,
    private projectService: ProjectService
  ) {
    this.projects = null,
      this.images = ''
  }

  ngOnInit() {
    this.activatedRoute.params.subscribe(data => {
      const projectId = parseInt(data['projectId']);
      console.log(projectId)
      this.projects = this.projectService.getById(projectId)
    });

    this.images = this.projects?.images.map((n) => `/assets/images/${n}.png`);
  }
}
