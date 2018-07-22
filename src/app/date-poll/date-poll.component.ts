import { Component, OnInit, Input } from '@angular/core';
import { PollService } from '../services/poll.service';

@Component({
  selector: 'app-date-poll',
  templateUrl: './date-poll.component.html',
  styleUrls: ['./date-poll.component.css']
})
export class DatePollComponent implements OnInit {
  @Input() poll: { type: string; options: { startTime: Date; endTime: Date; }[]; };
  dates: { startTime: Date; endTime: Date; }[];

  constructor(public pollService: PollService) {
  }

  ngOnInit() {
    if (this.poll) {
      this.dates = this.poll.options;
    }
  }

}
