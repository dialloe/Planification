import { Injectable } from '@angular/core';
import { catchError, map } from 'rxjs/operators';
import { HttpClient, HttpHeaders, HttpErrorResponse, HttpParams } from '@angular/common/http';
import { Router } from '@angular/router';
import { Professeur} from './professeur';
import { Observable, throwError } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ProfesseurService {

  endpoint: string = 'http://ipserveur/backend/api';
  headers = new HttpHeaders().set('Content-Type', 'application/json');

  constructor(private http:HttpClient, public router:Router ) {

    this.headers.append('Access-Control-Allow-Headers', 'Authorization');
   }

    save(prof: Professeur): Observable<any> {
      let api = `${this.endpoint}/createProf.asp`;
      return this.http.post(api, prof)
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
