import { Component, OnInit } from '@angular/core';
import { Skill } from '../models/skill';
import { Levl } from '../types/levl.enum';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {
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
  constructor() { }

  ngOnInit() {
  }

}
