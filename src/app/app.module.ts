import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { HomePageComponent } from './home-page/home-page.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { AngularFireModule } from 'angularfire2';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { EventsComponent } from './events/events.component';
import { firebaseConfig } from './config';
import { EventsService } from './services/events.service';
import { MatCardModule } from '@angular/material/card';
import { FlexLayoutModule } from '@angular/flex-layout';
import { DatePollComponent } from './date-poll/date-poll.component';
import { PollPageComponent } from './poll-page/poll-page.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { DateItemComponent } from './date-item/date-item.component';
import { ItemPollComponent } from './item-poll/item-poll.component';
import { ContributionComponent } from './contribution/contribution.component';
import { CreateEventPageComponent } from './create-event-page/create-event-page.component';
import { EditContributionsPageComponent } from './edit-contributions-page/edit-contributions-page.component';
import { DynamicListComponent } from './dynamic-list/dynamic-list.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { InviteGuestPageComponent } from './invite-guest-page/invite-guest-page.component';
import { ViewEventComponent } from './view-event/view-event.component';
import { EditEventPageComponent } from './edit-event-page/edit-event-page.component';
import { EventInfoBoxComponent } from './event-info-box/event-info-box.component';
import { HttpClientModule } from '@angular/common/http';
import { ApolloModule } from 'apollo-angular';
import { HttpLinkModule } from 'apollo-angular-link-http';
import { HttpModule } from '../../node_modules/@angular/http';
import { AngularFireDatabaseModule } from 'angularfire2/database';

const appRoutes : Routes = [
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    component: HomePageComponent
  },
  {
    path: 'events',
    component: EventsComponent
  },
  {
    path: 'poll/:id',
    component: PollPageComponent
  },
  {
    path: 'create-event',
    component: CreateEventPageComponent
  },
  {
    path: 'edit-contributions/:id',
    component: EditContributionsPageComponent
  },
  {
    path: 'invite-guests/:id',
    component: InviteGuestPageComponent
  },
  {
    path: 'edit-event',
    component: EditEventPageComponent
  }
]

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    EventsComponent,
    DatePollComponent,
    PollPageComponent,
    DateItemComponent,
    ItemPollComponent,
    ContributionComponent,
    CreateEventPageComponent,
    EditContributionsPageComponent,
    DynamicListComponent,
    InviteGuestPageComponent,
    ViewEventComponent,
    EditEventPageComponent,
    EventInfoBoxComponent,
  ],
  imports: [
    BrowserModule,
    MatToolbarModule,
    MatButtonModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireAuthModule,
    MatCardModule,
    FlexLayoutModule,
    MatInputModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    AngularFireDatabaseModule,
    HttpClientModule,
    ApolloModule,
    HttpLinkModule,
    HttpModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true }
    ),
    ServiceWorkerModule.register('/ngsw-worker.js', { enabled: environment.production })
  ],
  providers: [
    {provide: EventsService, useClass: EventsService}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
