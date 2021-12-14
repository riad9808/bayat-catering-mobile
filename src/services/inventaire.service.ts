import { Injectable } from '@angular/core';
import {environment} from "../environments/environment";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class InventaireService {


  public url: string = environment.host ; // 'bayat/';



  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'

    })
  };

  constructor(private _http: HttpClient) { }

  getMontant(): Observable<number>{
    return this._http.get<number>(this.url + 'inventaire/montant' ,this.httpOptions );
  }
  getAllSitesResults() : Observable<any> {
    return this._http.get<any>(this.url+'inventaire/sitesresults',this.httpOptions);
  }

  getAllClientResults() : Observable<any> {
    return this._http.get<any>(this.url+'inventaire/clientresult',this.httpOptions);
  }

  getAllFamilleresults() {
    return this._http.get<any>(this.url+'inventaire/familleresult',this.httpOptions);

  }
}
