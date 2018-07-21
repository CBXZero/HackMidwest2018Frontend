import { Component } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import { auth } from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  user: any = null;

  constructor(public afAuth: AngularFireAuth) {
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
  
  login() {
    this.afAuth.auth.signInWithPopup(new auth.GoogleAuthProvider());
  }

  logout() {
    this.afAuth.auth.signOut();
  }
}
