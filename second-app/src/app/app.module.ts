import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SkillsComponent } from './skills/skills.component';

import { SkillsService } from './services/skills.service';

import { Contacts2Service } from './services/contacts2.service';


import { ContactsComponent } from './contacts/contacts.component';


@NgModule({
  declarations: [
    AppComponent,
    SkillsComponent,
    ContactsComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [SkillsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
