import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ContactsService {

  constructor() { }

  getContacts() {
    return [
      { firstname: "Charlie", lastname: "Leverett", phoneNumber: "5735646424" },
      { firstname: "Teddy", lastname: "Ivanov", phoneNumber: "2246781353"}
    ]
  }
}
