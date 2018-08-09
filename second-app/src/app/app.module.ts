import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';


import { SkillsService } from './services/skills.service';
import { Contacts2Service } from './services/contacts2.service';



import { GreetingComponent } from './greeting/greeting.component';
import { ContactFormComponent } from './contact-form/contact-form.component';
import { AddContactsComponent } from './add-contacts/add-contacts.component';




import { SkillsModule } from './modules/skills/skills.module';
import { ContactsModule } from './modules/contacts/contacts.module';
import { AppRoutingModule } from './/app-routing.module';

import { MoviesModule } from './modules/movies/movies.module';
import { MusicModule } from './modules/music/music.module';


@NgModule({
  declarations: [
    AppComponent,
    GreetingComponent,
    ContactFormComponent,
    AddContactsComponent
  ],
  imports: [
    BrowserModule, FormsModule, SkillsModule, ContactsModule, AppRoutingModule, MoviesModule, MusicModule
  ],
  providers: [SkillsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
