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
  poll: { type: string; };
  eventId: any;

  constructor(public afAuth: AngularFireAuth, private pollService: PollService, private router: Router, private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.afAuth.user.subscribe(r => {
      if (r) {
        // Get Data
        
      } else {
        // Redirect to home
        this.router.navigate(['']);
      }
    });
  }
}

