import { Injectable } from '@angular/core';

import { Skill } from '../models/skill';
import { Levl } from '../types/levl.enum';

@Injectable({
    providedIn: 'root'
})
export class SkillsService {
    skills: Skill[] = [
      {
        id: 0,
        name: 'Angular',
        level: Levl.Beginner
      },
      {
        id: 1,
        name: 'CSS',
        level: Levl.Beginner
      },
      {
        id: 2,
        name: 'HTML',
        level: Levl.Beginner
      }
    ];

    constructor() {}
}