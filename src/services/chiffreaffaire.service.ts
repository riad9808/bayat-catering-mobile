import { Injectable } from '@angular/core';
import {environment} from "../environments/environment";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ChiffreaffaireService {

  public url: string = environment.host ; // 'bayat/';



  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'

    })
  };

  constructor(private _http: HttpClient) { }

  getMontant(date): Observable<number>{
    return this._http.get<number>(this.url + 'mobile/ca/montant?date='+date ,this.httpOptions );
  }


  getAllClientResults(date) : Observable<any> {
    return this._http.get<any>(this.url+'mobile/ca/clientresult?date='+date,this.httpOptions);
  }
}
