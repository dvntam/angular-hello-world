import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root',
})

const httpOptions = {
  headers : new HttpHeaders ({
    'Content-Type': 'application/json',
    // Authorization: 'my-auth-token',
  }),
};
export class ServerHttpService {

  constructor(private httpClient: HttpClient) { }
  private REST_API_SERVER = 'http://localhost:3000';
  
  public getProfile(): Observable<any> {
    const url = `${this.REST_API_SERVER}/profile`;
    return this.httpClient
      .get<any>(url, httpOptions)
      .pipe(catchError(this.handleError));
  }

  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error.message);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      console.error(
        `Backend returned code ${error.status}, ` + `body was: ${error.error}`
      );
    }
    // return an observable with a user-facing error message
    return throwError('Something bad happened; please try again later.');
  }
}
