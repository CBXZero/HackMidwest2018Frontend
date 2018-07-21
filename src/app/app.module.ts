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
import { DatePollPageComponent } from './date-poll-page/date-poll-page.component';
import { PollPageComponent } from './poll-page/poll-page.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { DateItemComponent } from './date-item/date-item.component';
import { ItemPollPageComponent } from './item-poll-page/item-poll-page.component';
import { ContributionComponent } from './contribution/contribution.component';

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
    DatePollPageComponent,
    PollPageComponent,
    DateItemComponent,
    ItemPollPageComponent,
    ContributionComponent,
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
    ),
    ServiceWorkerModule.register('/ngsw-worker.js', { enabled: environment.production })
  ],
  providers: [
    {provide: EventsService, useClass: EventsService}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
