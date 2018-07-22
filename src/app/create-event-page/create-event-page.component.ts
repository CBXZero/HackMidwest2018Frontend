import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';
import { EventsService } from '../services/events.service';
import { AngularFireAuth } from 'angularfire2/auth';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-event-page',
  templateUrl: './create-event-page.component.html',
  styleUrls: ['./create-event-page.component.css']
})
export class CreateEventPageComponent implements OnInit {

  createEventForm = this.fb.group({
    title: '',
    description: '',
    location: '',
    website: '',
    startTime: '',
    endTime: '',
    visibility: '',
    guestOptions: '',
    dressCode: ''
  });
  user: string;

  constructor(private afAuth: AngularFireAuth, private fb: FormBuilder, private eventService: EventsService, private router: Router) {
    
  }

  ngOnInit() {
    this.afAuth.user.subscribe(r => {
      if(r){
        this.user = r.email;
      } else {
        // Redirect to home
      }
    });
  }

  submit() {
    this.eventService.addEvent(this.createEventForm.value, this.user).subscribe(r => {
      this.router.navigate([`invite-guests`, r.data.createEvent.eventId]);
    });
  }

}
