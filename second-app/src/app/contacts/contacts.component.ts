import { Component, OnInit } from '@angular/core';
import { Contacts3 } from '../models/contact';

import { Contacts2Service } from '../services/contacts2.service';


@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css']
})
export class ContactsComponent implements OnInit {
  contact4: Contacts3 [];
  dataService: Contacts2Service;

  constructor(private Contacts2Service: Contacts2Service) {this.dataService = this.Contacts2Service }
  

  ngOnInit(): void {
    this.dataService.getContacts5().subscribe(contact4 => this.contact4 = contact4);
  }

}


