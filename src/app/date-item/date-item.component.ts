import { Component, OnInit, Input } from '@angular/core';
import * as moment from 'moment';

@Component({
  selector: 'app-date-item',
  templateUrl: './date-item.component.html',
  styleUrls: ['./date-item.component.css']
})
export class DateItemComponent implements OnInit {

  @Input() option: { startTime: Date; endTime: Date; };
  startDayOfWeek: string;
  startMonth: string;
  startDayOfMonth: string;
  startTime: string;
  startAmPm: string;
  endTime: string;
  endAmPm: string;
  constructor() { }

  ngOnInit() {
    const startTime = moment(this.option.startTime);
    this.startDayOfWeek = startTime.format('dddd');
    this.startMonth = startTime.format('MMMM');
    this.startDayOfMonth = startTime.format('Do');
    this.startTime = startTime.format('h:mm');
    this.startAmPm = startTime.format('a');

    const endTime = moment(this.option.endTime);
    this.endTime = endTime.format('h:mm');
    this.endAmPm = endTime.format('a');
  }

}
