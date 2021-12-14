import {Component, OnInit} from '@angular/core';
import {InventaireService} from "../../services/inventaire.service";
import {Observable} from "rxjs";
import {Clientresult} from "../models/results";
import {finalize} from "rxjs/operators";
import {ConsommationService} from "../../services/consommation.service";
@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page  implements OnInit{
  datevalue: string;


  montant$ : Observable<number>;
  clients:Clientresult[];
  dataloading=false;
  constructor(private consomation_service :ConsommationService ){}



  ngOnInit() {
    const today = new Date();
    this.datevalue = today.getUTCFullYear()+'-'+today.getMonth()+1 +'-'+today.getDay();

      this.getdata(this.datevalue);

  }

  changed(){
      this.getdata(this.datevalue);
  }
  getdata(date){
    this.montant$ = this.consomation_service.getMontant(this.datevalue);
    this.dataloading =true
    this.consomation_service.getAllClientResults(this.datevalue).pipe(finalize(()=>{
      this.dataloading =false;
    })).subscribe(res=>{
      this.clients =res;
    });
  }




}
