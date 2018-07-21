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
  }
]

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    EventsComponent,
    DatePollComponent,
    PollPageComponent,
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
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true }
    )
  ],
  providers: [
    {provide: EventsService, useClass: EventsService}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
