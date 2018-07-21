import { Component, OnInit } from '@angular/core';
import { PollService } from '../poll.service';

@Component({
  selector: 'app-date-poll',
  templateUrl: './date-poll.component.html',
  styleUrls: ['./date-poll.component.css']
})
export class DatePollComponent implements OnInit {
  
  dates: { date: string; time: string; }[];

  constructor(public pollService: PollService) {
    this.dates = this.pollService.GetTestDatePoll().options;
  }

  ngOnInit() {
  }

}
