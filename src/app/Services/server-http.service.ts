import { HttpClient, 
  HttpErrorResponse, 
  HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, 
         Observable, 
        throwError } from 'rxjs';
import { Student } from '../models/student';

@Injectable({
    providedIn: 'root',
 })

export class ServerHttpService {
 
  private httpOptions = {
    headers : new HttpHeaders ({
      'Content-Type': 'application/json',
      // Authorization: 'my-auth-token',
    }),
  };
  private REST_API_SERVER = 'http://localhost:3000';

  constructor(private httpClient: HttpClient) { }
  
  public getStudents() {
    const url = `${this.REST_API_SERVER}/students`;
    return this.httpClient
      .get<any>(url, this.httpOptions)
      .pipe(catchError(this.handleError));
  }
  public addStudents(data: Student) {
    const url = `${this.REST_API_SERVER}/students`;
    return this.httpClient
      .post<any>(url,data, this.httpOptions)
      .pipe(catchError(this.handleError));
  }
 public getProfile(): Observable<any> {
    const url = `${this.REST_API_SERVER}/profile`;
    return this.httpClient
      .get<any>(url, this.httpOptions)
      .pipe(catchError(this.handleError));
  }
 
  public getComments(){
    const url = `${this.REST_API_SERVER}/comments`;
    return this.httpClient
      .get<any>(url, this.httpOptions)
      .pipe(catchError(this.handleError));
  }


  public getPosts(){
    const url = `${this.REST_API_SERVER}/posts`;
    return this.httpClient
      .get<any>(url, this.httpOptions)
      .pipe(catchError(this.handleError));
  }
  public addPosts(data: any) {
    const url = `${this.REST_API_SERVER}/posts`;
    return this.httpClient
      .post<any>(url, data, this.httpOptions)
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


