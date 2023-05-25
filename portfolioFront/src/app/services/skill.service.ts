import { Injectable } from '@angular/core';
import { Skills } from '../interfaces/skills';
import { SKILLS } from '../db/skills.db';

@Injectable({
  providedIn: 'root'
})
export class SkillService {

  skills: Skills[]

  constructor() {
    this.skills = SKILLS
  }

  getAll() {
    return this.skills
  }
}
