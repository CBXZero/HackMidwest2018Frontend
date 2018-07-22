import { Component, OnInit } from '@angular/core';
import { PollService } from '../services/poll.service';
import { AngularFireAuth } from 'angularfire2/auth';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-poll-page',
  templateUrl: './poll-page.component.html',
  styleUrls: ['./poll-page.component.css']
})
export class PollPageComponent implements OnInit {

  eventId: any;
  pollData: { type: string; options: { startTime: Date; endTime: Date; }[]; };

  constructor(public afAuth: AngularFireAuth, private pollService: PollService, private router: Router, private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.route.paramMap.subscribe(r => {
      this.eventId = r.get('id');
      this.pollData = this.pollService.GetTestDatePoll();
    });
  }
}

