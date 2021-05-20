import { Injectable } from '@angular/core';
import { catchError, map } from 'rxjs/operators';
import { HttpClient, HttpHeaders, HttpErrorResponse, HttpParams } from '@angular/common/http';
import { Router } from '@angular/router';
import { Conference} from './conference';
import { Observable, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ConferenceService {

  endpoint: string = 'http://ipserveur/backend/api';
  headers = new HttpHeaders().set('Content-Type', 'application/json');

  constructor(private http:HttpClient, public router:Router ) {

    this.headers.append('Access-Control-Allow-Headers', 'Authorization');
   }

    save(conf: Conference): Observable<any> {
      let api = `${this.endpoint}/createConference.asp`;
      return this.http.post(api, conf)
        .pipe(
          catchError(this.handleError)
        )
    }

      // Error 
  handleError(error: HttpErrorResponse) {
    let msg = '';
    if (error.error instanceof ErrorEvent) {
      // client-side error
      msg = error.error.message;
    } else {
      // server-side error
      msg = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    return throwError(msg);
  }

}

