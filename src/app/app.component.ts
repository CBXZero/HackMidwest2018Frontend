import { Component } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import { auth } from 'firebase';
import { PwaService } from './services/pwa.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  user: any = null;

  constructor(public afAuth: AngularFireAuth, public pwa: PwaService) {
    afAuth.user.subscribe(r => {
      if(r){
        this.user = {};
        this.user.email = r.email;
        this.user.displayName = r.displayName;
        this.user.uid = r.uid;
      } else {
        this.user = null;
      }
    });
  }

  installPwa() {
    this.pwa.promptEvent.prompt();
  }
  
  login() {
    this.afAuth.auth.signInWithPopup(new auth.GoogleAuthProvider());
  }

  logout() {
    this.afAuth.auth.signOut();
  }
}
