import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PollService {

  constructor() { }

  public GetTestDatePoll() {
    return {
      type: "Date"
    }
  }
}
