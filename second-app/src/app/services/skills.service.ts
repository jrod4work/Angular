import { Injectable } from '@angular/core';

import { Skill2class } from '../models/skill';
import { Levl } from '../types/levl.enum';
import { Observable, of } from 'rxjs';


@Injectable({
    providedIn: 'root'
})
export class SkillsService {
    skills: Skill2class[] = [
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

    getSkills = (): Observable<Skill2class[]> => {
      return of(this.skills);
};
}