import { Component, OnInit } from '@angular/core';
import { Contacts } from '../models/contact';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css']
})
export class ContactsComponent implements OnInit {
    contact: Contacts [] = [
      {
        firstName: 'jrod',
        lastName: 'the second',
        phoneNumber: 123,
        email: 'jrod@woz.com'
      },
      {
        firstName: 'jrod2',
        lastName: 'the second2',
        phoneNumber: 1232,
        email: 'jrod@woz.com2'
      },
      {
        firstName: 'jrod3',
        lastName: 'the second3',
        phoneNumber: 12323,
        email: 'jrod@woz.com3'
      }
    ];
  constructor() { }


  ngOnInit() {}

}
