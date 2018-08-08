import { Component, OnInit } from '@angular/core';
import { Skill2class } from '../models/skill';
import { Levl } from '../types/levl.enum';

import { SkillsService } from '../services/skills.service';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {
  skills: Skill2class[];
  // second one is the model
  dataService: SkillsService;

  constructor(private skillsService: SkillsService) {
    this.dataService = this.skillsService;
  }

  ngOnInit() {
    this.skills = this.dataService.skills;
  }
}