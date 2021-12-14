import { Component, OnDestroy, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { AuthActions, AuthService, IAuthAction } from 'ionic-appauth';
import {Observable, Subscription} from 'rxjs';
import {Clientresult} from "../models/results";
import {ConsommationService} from "../../services/consommation.service";
import {finalize} from "rxjs/operators";
import {ChiffreaffaireService} from "../../services/chiffreaffaire.service";

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit {



  datevalue: string;


  montant$ : Observable<number>;
  clients:Clientresult[];
  dataloading=false;
  constructor(private ch_service :ChiffreaffaireService ){}



  ngOnInit() {
    const today = new Date();
    this.datevalue = today.getUTCFullYear()+'-'+today.getMonth()+1 +'-'+today.getDay();

    this.getdata(this.datevalue);

  }

  changed(){
    this.getdata(this.datevalue);
  }
  getdata(date){
    this.montant$ = this.ch_service.getMontant(this.datevalue);
    this.dataloading =true
    this.ch_service.getAllClientResults(this.datevalue).pipe(finalize(()=>{
      this.dataloading =false;
    })).subscribe(res=>{
      this.clients =res;
    });
  }


  /*

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
  }*/
}
