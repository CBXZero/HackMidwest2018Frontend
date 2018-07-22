import { Component, OnInit, ViewChildren } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AngularFireAuth } from 'angularfire2/auth';
import { ContactsService } from '../services/contacts.service';
import { TextingService } from '../services/texting.service';
import { EventsService } from '../services/events.service';
import { FormBuilder, FormArray } from '../../../node_modules/@angular/forms';

@Component({
  selector: 'app-invite-guest-page',
  templateUrl: './invite-guest-page.component.html',
  styleUrls: ['./invite-guest-page.component.css']
})
export class InviteGuestPageComponent implements OnInit {
  eventId: string;
  @ViewChildren('contacts') domContacts: ViewChildren;

  form = this.fb.group({
    contacts: this.fb.array([
      this.fb.control('')
    ])
  });

  constructor(private afAuth: AngularFireAuth, private route: ActivatedRoute, 
    private contactsService: ContactsService, private textingService: TextingService, private eventService: EventsService, 
    private fb: FormBuilder, private router: Router) { }

  ngOnInit() {
    this.route.paramMap.subscribe(r => this.eventId = r.get('id'));
  }

  get contacts() {
    return this.form.get('contacts') as FormArray;
  }

  addContact() {
    if (this.contacts.at(this.contacts.length - 1).value != "") {
      setTimeout(() => {
        var element = (this.domContacts as any).last.nativeElement;
        element.focus();
      }, 0);
      var newField = this.fb.control('');
      this.contacts.push(newField);
    }  
  }

  sendTexts() {
    this.eventService.getEventById(this.eventId).subscribe(r => {
      var eventId = this.eventId;
      var name = (r.data as any).title;
      this.textingService.sendMessages(name, eventId, this.contacts.value).subscribe(r => {
        this.router.navigate(['/events'])
      })
    });
  }

  onEnter() {
    this.addContact();
  }

  delete(entry) {
    this.contacts.removeAt(entry);
  }

}
