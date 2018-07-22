import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import { EventsService } from '../services/events.service';
import { EventModel } from '../../models/EventModel';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css']
})
export class EventsComponent implements OnInit {

  events: any;

  // name
  // description

  constructor(public afAuth: AngularFireAuth, public eventService: EventsService) {

  }

  ngOnInit() {
    this.afAuth.user.subscribe(r => {
      if(r){
        this.eventService.getEventsForUser(r.email).subscribe(r => {
          var results = r.data as any;
          this.events = results.contact.ownedEvents;
        });
      } else {
        // Redirect to home
      }
    });
  }

}
