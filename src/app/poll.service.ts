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
        {date: "7/21/2018", time: "5pm"},
        {date: "7/22/2018", time: "5pm"}
      ]
    }
  }
}
