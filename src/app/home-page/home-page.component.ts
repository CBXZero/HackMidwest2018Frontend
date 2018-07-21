import { Component, OnInit } from '@angular/core';
import { auth } from 'firebase';
import { AngularFireAuth } from 'angularfire2/auth';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {
  
  user: any = null;
  ngOnInit(): void {
    
  }

  isAuthenticated: boolean;

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
}
