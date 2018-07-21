import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '../../../node_modules/angularfire2/auth';
import { EventsService } from '../events.service';
import { EventModel } from '../../models/EventModel';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css']
})
export class EventsComponent implements OnInit {

  events: EventModel[];

  // name
  // description

  constructor(public afAuth: AngularFireAuth, public eventService: EventsService) {

  }

  ngOnInit() {
    this.afAuth.user.subscribe(r => {
      if(r){
        this.events = this.eventService.getTestData();
      } else {
        // Redirect to home
      }
    });
  }

}
