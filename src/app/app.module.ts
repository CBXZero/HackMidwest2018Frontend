import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { HomePageComponent } from './home-page/home-page.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { AngularFireModule } from 'angularfire2';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { EventsComponent } from './events/events.component';
import { firebaseConfig } from './config';
import { EventsService } from './events.service';
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
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

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
    path: 'poll',
    component: PollPageComponent
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
  ],
  imports: [
    BrowserModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireAuthModule,
    MatCardModule,
    FlexLayoutModule,
    MatInputModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
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
