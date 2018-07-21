import { Injectable } from '@angular/core';
import { EventModel } from '../models/EventModel';

@Injectable({
  providedIn: 'root'
})
export class EventsService {

  constructor() { }

  public getTestData(): EventModel[] {
    return [
      {name: "Hello World", description: "This is my first event"},
      {name: "Charlie is really cool", description: "This is my second event!"},
      {name: "Charlie Triplett is the coolest!", description: "This is my third event!"}
    ];
  }
}
