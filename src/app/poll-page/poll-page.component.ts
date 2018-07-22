import { Component, OnInit } from '@angular/core';
import { PollService } from '../services/poll.service';
import { AngularFireAuth } from 'angularfire2/auth';
import { Router } from '@angular/router';

@Component({
  selector: 'app-poll-page',
  templateUrl: './poll-page.component.html',
  styleUrls: ['./poll-page.component.css']
})
export class PollPageComponent implements OnInit {
  poll: { type: string; };

  constructor(public afAuth: AngularFireAuth, private pollService: PollService, private router: Router) { 
  }

  ngOnInit() {
    this.afAuth.user.subscribe(r => {
      if(r) {
        // Get Data
        this.poll = this.pollService.GetTestDatePoll();
      } else {
        // Redirect to home
        this.router.navigate(['']);
      }
    });
  }

}
