import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AngularFireAuth } from 'angularfire2/auth';
import { ContactsService } from '../services/contacts.service';

@Component({
  selector: 'app-invite-guest-page',
  templateUrl: './invite-guest-page.component.html',
  styleUrls: ['./invite-guest-page.component.css']
})
export class InviteGuestPageComponent implements OnInit {
  eventId: string;
  contacts: { firstname: string; lastname: string; phoneNumber: string; }[];

  constructor(private afAuth: AngularFireAuth, private route: ActivatedRoute, private contactsService: ContactsService) { }

  ngOnInit() {
    this.afAuth.user.subscribe(u => {
      if (u) {
        this.contacts = this.contactsService.getContacts();
      } else {
        // Navigate back home
      }
    })

  }

}
