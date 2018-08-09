import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';


import { ContactFormComponent } from './contact-form/contact-form.component';
import { SkillsComponent } from './skills/skills.component';
import { GreetingComponent } from './greeting/greeting.component';
import { AddContactsComponent } from './add-contacts/add-contacts.component';
import { ContactsComponent } from './contacts/contacts.component';

const routes: Routes = [
  
  {
    path: 'list-contacts',
    component: ContactsComponent
  },
  
  {
    path: 'add-contacts',
    component: AddContactsComponent
  },
    {
      path: 'contact-form',
      component: ContactFormComponent
    },
    {
      path: 'skills',
      component: SkillsComponent
    },
    {
      path: 'greeting',
      component: GreetingComponent
    },
    {
      path: 'greeting',
      component: GreetingComponent
    },
    {
      path: '',
      redirectTo: '/greeting',
      pathMatch: 'full'
    }
	
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
