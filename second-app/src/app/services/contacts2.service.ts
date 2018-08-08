import { Injectable } from '@angular/core';
import { Contacts3 } from '../models/contact';

@Injectable({
  providedIn: 'root'
})
export class Contacts2Service {
  contact4: Contacts3 [] = [
    {
      id: 0,
      firstName: 'jrod',
      lastName: 'the second',
      phoneNumber: 123,
      email: 'jrod@woz.com'
    },
    {
      id: 1,
      firstName: 'jrod2',
      lastName: 'the second2',
      phoneNumber: 1232,
      email: 'jrod@woz.com2'
    },
    {
      id: 2,
      firstName: 'jrod3',
      lastName: 'the second3',
      phoneNumber: 12323,
      email: 'jrod@woz.com3'
    }
  ];
  constructor() { }
}
