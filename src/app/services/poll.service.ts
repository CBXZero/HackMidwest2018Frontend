import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PollService {

  constructor() { }

  public GetTestDatePoll() {
    return {
      type: "Date",
      options: [
        {startTime: new Date(2018, 7, 21, 17), endTime: new Date(2018, 7, 21, 19)},
        {startTime: new Date(2018, 7, 25, 17), endTime: new Date(2018, 7, 22, 19)}
      ]
    }
  }
}
