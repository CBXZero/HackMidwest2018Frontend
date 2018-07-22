import { Injectable } from '@angular/core';
import { EventModel } from '../../models/EventModel';
import { ApolloModule, Apollo } from 'apollo-angular';
import { HttpLinkModule, HttpLink } from 'apollo-angular-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';
import gql from 'graphql-tag';

@Injectable({
  providedIn: 'root'
})
export class EventsService {

  constructor(public apollo: Apollo, httpLink: HttpLink) {
    apollo.create({
      link: httpLink.create({
        uri: 'https://partyplanner.azurewebsites.net/graphql'
      }),
      cache: new InMemoryCache()
    });
  }

  public getEventsForUser(email: string) {
    return this.apollo.query({
      query: gql`
      {
        contact(email: "${email}") {
          ownedEvents {
            title
            description
          }
        }
      }`
    });
  }

  getEventById(eventId: string) {
    return this.apollo.query({
      query: gql`
        {
          event(id: ${eventId}){
            title
            description
          }
        }
      `
    });
  }

  addEvent(data: any, email: any): any {
    return this.apollo.mutate({
      mutation: gql`
        mutation{
          createEvent(event: {
            title: "${data.title}"
          }, email: "${email}") {
            title
            description,
            eventId
          }
        }
      `
    });
  }

  public getTestData(): EventModel[] {
    return [
      { name: "Hello World", description: "This is my first event" },
      { name: "Charlie is really cool", description: "This is my second event!" },
      { name: "Charlie Triplett is the coolest!", description: "This is my third event!" }
    ];
  }
}
