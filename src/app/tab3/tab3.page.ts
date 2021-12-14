import {Component, OnDestroy, OnInit} from '@angular/core';
import {InventaireService} from "../../services/inventaire.service";
import {Observable} from "rxjs";
import {finalize} from "rxjs/operators";
import {Clientresult} from "../models/results";

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page implements OnInit{

  constructor(private inventaire_service : InventaireService){}

  montant$ : Observable<number>;
  clients:Clientresult[];
  dataloading=false;

  ngOnInit() {
    this.montant$ = this.inventaire_service.getMontant();
    this.dataloading =true
    this.inventaire_service.getAllClientResults().pipe(finalize(()=>{
      this.dataloading =false
    })).subscribe(res=>{
      this.clients =res;
    });

  }
}

