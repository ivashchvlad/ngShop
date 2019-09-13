import { Injectable, NgZone } from '@angular/core';
import { Router } from '@angular/router';
import * as firebase from 'firebase';
import { AngularFireAuth } from '@angular/fire/auth';


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private userDetail: firebase.User = null;
  constructor(
    private router: Router,
    private ngzone: NgZone,
    private afAuth: AngularFireAuth,
  ) {
    afAuth.user.subscribe(user => {
      if (user) {
        this.userDetail = user;
        console.log(this.userDetail);
      } else {
        this.userDetail = null;
      }
    });
  }

  loginWithGoogle() {
    this.afAuth.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider());
  }

  loginWithEmail(login: string, password: string) {
    this.afAuth.auth.signInWithEmailAndPassword(login, password);
  }

  logout() {
    this.afAuth.auth.signOut().then(() => {
      this.ngzone.run(() => this.router.navigate(['/']));
    });
  }

  isLoggedIn(): boolean {
    return this.userDetail ? true : false;
  }

  getDisplayUserName(): string {
    return (this.userDetail) ? this.userDetail.displayName : '';
  }

  getUserPhotoUrl(): string {
    return (this.userDetail) ? this.userDetail.photoURL : '';
  }

  getUID(): string {
    return (this.userDetail) ? this.userDetail.uid : '';
  }
}

