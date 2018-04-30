import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {AngularFireAuth} from 'angularfire2/auth';

@Component({
  selector: 'bs-navbar',
  templateUrl: './bs-navbar.component.html',
  styleUrls: ['./bs-navbar.component.css']
})
export class BsNavbarComponent implements OnInit {
  private isLoggedIn: Boolean;
  private user_displayName: String;

  constructor(public angularauth: AngularFireAuth, private router: Router) {
    this.angularauth.auth.onAuthStateChanged((user) => {
        if (user != null) {
          this.isLoggedIn = true;
          this.user_displayName = user.displayName;
        } else {
          console.log('Logged out');
          this.isLoggedIn = false;
          this.user_displayName = 'User Name';
        }
      }
    );
  }

  ngOnInit() {
  }

}
