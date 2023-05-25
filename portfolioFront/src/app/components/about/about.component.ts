import { Component } from '@angular/core';
import { Skills } from 'src/app/interfaces/skills';
import { SkillService } from 'src/app/services/skill.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent {

  skills: Skills[]

  constructor(private skillService: SkillService) {
    this.skills = []
  }

  ngOnInit() {
    this.skills = this.skillService.getAll()
  }
}
