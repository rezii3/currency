import { Injectable } from '@angular/core';
import { Datum, Welcome } from '../interfaces/cash.model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private _http:HttpClient) {}
  apiURl: string = "https://bankofgeorgia.ge/api/currencies/history"
  getData(){
    return this._http.get<Welcome>(this.apiURl)
  }
}
