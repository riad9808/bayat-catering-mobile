import {Component, OnDestroy, OnInit} from '@angular/core';
import {Subscription} from "rxjs";
import {AuthActions, AuthService, IAuthAction} from "ionic-appauth";
import {NavController} from "@ionic/angular";

@Component({
  selector: 'app-tabs',
  templateUrl: 'tabs.page.html',
  styleUrls: ['tabs.page.scss']
})
export class TabsPage implements OnInit, OnDestroy {
  user$ = this.auth.user$;
  events$ = this.auth.events$;
  sub: Subscription;
  action: IAuthAction;

  constructor(private navCtrl: NavController, private auth: AuthService) {
  }

  ngOnInit() {
    this.sub = this.auth.events$.subscribe((action) => this.onAction(action));
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

  private onAction(action: IAuthAction) {
    if (action.action === AuthActions.LoadTokenFromStorageFailed ||
      action.action === AuthActions.SignInFailed ||
      action.action === AuthActions.SignOutSuccess) {
      delete this.action;
    } else {
      this.action = action;
    }
  }

  public async signOut() {
    await this.auth.signOut();
  }

  public signIn() {
    this.auth.signIn().catch(error => console.error(`Sign in error: ${error}`));
  }

  public async getUserInfo(): Promise<void> {
    await this.auth.loadUserInfo();
  }

  public async refreshToken(): Promise<void> {
    await this.auth.refreshToken();
  }
}
