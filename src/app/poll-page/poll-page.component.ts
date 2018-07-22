import { Component, OnInit } from '@angular/core';
import { PollService } from '../services/poll.service';
import { AngularFireAuth } from 'angularfire2/auth';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { AngularFireDatabase } from '../../../node_modules/angularfire2/database';

@Component({
  selector: 'app-poll-page',
  templateUrl: './poll-page.component.html',
  styleUrls: ['./poll-page.component.css']
})
export class PollPageComponent implements OnInit {

  eventId: any;
  pollData: { type: string; options: { startTime: Date; endTime: Date; }[]; };
  data: string[] = [];

  constructor(public afDb: AngularFireDatabase, public afAuth: AngularFireAuth, private pollService: PollService, private router: Router, private route: ActivatedRoute) {
    this.route.paramMap.subscribe(r => {
      this.afDb.object(r.get('id')).valueChanges().subscribe(x => {
        this.data = (x as any).contributions;
      });
    })
  }
  

  ngOnInit() {
    this.route.paramMap.subscribe(r => {
      this.eventId = r.get('id');
      this.pollData = this.pollService.GetTestDatePoll();
    });
  }
}

