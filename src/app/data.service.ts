import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Department } from './department';
import { catchError, Observable, retry, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  // Define API
  apiURL = 'http://localhost:8080/RESTWebService/rest/portal';
  constructor(private http: HttpClient) { }
  /*========================================
    CRUD Methods for consuming RESTful API
  =========================================*/
  // Http Options
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    }),
  };
  // HttpClient API get() method => Fetch departments list
  getDepartments(): Observable<Department> {
    return this.http
      .get<Department>(this.apiURL + '/departments')
      .pipe(retry(1), catchError(this.handleError));
  }
  // HttpClient API get() method => Fetch department
  getDepartment(id: any): Observable<Department> {
    return this.http
      .get<Department>(this.apiURL + '/departments/' + id)
      .pipe(retry(1), catchError(this.handleError));
  }
  // HttpClient API post() method => Create department
  createDepartment(department: any): Observable<Department> {
    return this.http
      .post<Department>(
        this.apiURL + '/departments',
        JSON.stringify(department),
        this.httpOptions
      )
      .pipe(retry(1), catchError(this.handleError));
  }
  // HttpClient API put() method => Update department
  updateDepartment(id: any, department: any): Observable<Department> {
    return this.http
      .put<Department>(
        this.apiURL + '/departments/' + id,
        JSON.stringify(department),
        this.httpOptions
      )
      .pipe(retry(1), catchError(this.handleError));
  }
  // HttpClient API delete() method => Delete department
  deleteDepartment(id: any) {
    return this.http
      .delete<Department>(this.apiURL + '/departments/' + id, this.httpOptions)
      .pipe(retry(1), catchError(this.handleError));
  }
  // Error handling
  handleError(error: any) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      // Get client-side error
      errorMessage = error.error.message;
    } else {
      // Get server-side error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    window.alert(errorMessage);
    return throwError(() => {
      return errorMessage;
    });
  }

}
