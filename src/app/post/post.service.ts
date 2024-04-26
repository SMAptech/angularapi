import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  // private apiUrl = "https://jsonplaceholder.typicode.com";
  private apiUrl = "https://api.aladhan.com/v1/hijriCalendar";

  

  hhtpOptions = {
    headers: new HttpHeaders({
      'Content-type':'application/json'
    })
  }

  constructor(private httpClient: HttpClient) { }

  getAll(year): Observable<any> {
    // return this.httpClient.get(this.apiUrl + '/posts/' )
    // return this.httpClient.get("https://api.aladhan.com/v1/hijriCalendar/1437/4?latitude=51.508515&longitude=-0.1254872&method=2" )
    return this.httpClient.get( this.apiUrl + "/" + year  +"/4?latitude=51.508515&longitude=-0.1254872&method=2" )

  }

}
