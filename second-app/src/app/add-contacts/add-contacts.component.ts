import { Component, OnInit } from '@angular/core';
import { Pluscontact } from '../models/pluscontact';

@Component({
  selector: 'app-add-contacts',
  templateUrl: './add-contacts.component.html',
  styleUrls: ['./add-contacts.component.css']
})
export class AddContactsComponent implements OnInit {
  model: Pluscontact = new Pluscontact();
  constructor() { }

  ngOnInit() {
  }

  onSubmit() {
    console.log('Submit Successful: ', this.model);
}

}
