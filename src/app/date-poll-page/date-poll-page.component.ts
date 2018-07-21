import { Component, OnInit } from '@angular/core';
import { PollService } from '../poll.service';

@Component({
  selector: 'app-date-poll-page',
  templateUrl: './date-poll-page.component.html',
  styleUrls: ['./date-poll-page.component.css']
})
export class DatePollPageComponent implements OnInit {
  dates: { startTime: Date; endTime: Date; }[];
  
  constructor(public pollService: PollService) {
    this.dates = this.pollService.GetTestDatePoll().options;
  }

  ngOnInit() {
  }

}
