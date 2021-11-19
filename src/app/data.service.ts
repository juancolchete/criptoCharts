import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private REST_API_SERVER = "https://619551c574c1bd00176c6ce4.mockapi.io/users";

  constructor(private httpClient: HttpClient) { }

  public sendGetRequest(){
    console.log(this.REST_API_SERVER);
    return this.httpClient.get(this.REST_API_SERVER);
  }
}