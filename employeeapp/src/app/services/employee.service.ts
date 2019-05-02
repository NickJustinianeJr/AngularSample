import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

import { Employee, Roles } from '../models/employee';

const httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  }; 


@Injectable({ providedIn: 'root' })
export class EmployeeService {

  private usersUrl = 'http://localhost:50386/api/users';
  private menusUrl = 'http://localhost:50386/api/menus';
  private rolesUrl = 'http://localhost:60000/api/roles';

  constructor(
    private http: HttpClient) { }

  /** GET employees from the server */
  getEmployees (): Observable<Employee[]> {
    return this.http.get<Employee[]>(this.usersUrl)
      .pipe(
        tap(_ => this.log('fetched employees')),
        catchError(this.handleError('getEmployees', []))
      );
  }

  getRoles (): Observable<Roles[]> {
    return this.http.get<Roles[]>(this.rolesUrl)
      .pipe(
        tap(_ => this.log('fetched roles')),
        catchError(this.handleError('getRoles', []))
      );
  }

  /** GET Menus from the server */
  // getMenus (): Observable<Menu[]> {
  //   return this.http.get<Menu[]>(this.menusUrl)
  //     .pipe(
  //       tap(_ => this.log('fetched menusUrl')),
  //       catchError(this.handleError('getMenus', []))
  //     );
  // }

// addEmployee(employee: Employee): Observable<Employee> {


// } 

/** POST: add a new hero to the server */
addEmployee (employee: Employee): Observable<Employee> {
  return this.http.post<Employee>(this.usersUrl, employee, httpOptions).pipe(
    tap((employee: Employee) => this.log(`added employee w/ id=${employee.userId}`)),
    catchError(this.handleError<Employee>('addEmployee'))
  );
}


 /** PUT: update the hero on the server */
 updateEmployee (employee: Employee): Observable<any> {
  return this.http.put(this.usersUrl, employee, httpOptions).pipe(
    tap(_ => this.log(`updated employee id=${employee.userId}`)),
    catchError(this.handleError<any>('updateEmployee'))
  );
}

 /** DELETE: delete the hero from the server */
 deleteHero (employee: Employee | string): Observable<Employee> {
  const id = typeof employee === 'string' ? employee : employee.userId;
  const url = `${this.usersUrl}/${id}`;

  return this.http.delete<Employee>(url, httpOptions).pipe(
    tap(_ => this.log(`deleted employee id=${id}`)),
    catchError(this.handleError<Employee>('deleteEmployee'))
  );
}

/* GET heroes whose name contains search term */
// searchHeroes(term: string): Observable<Hero[]> {
//   if (!term.trim()) {
//     // if not search term, return empty hero array.
//     return of([]);
//   }
//   return this.http.get<Hero[]>(`${this.heroesUrl}/?name=${term}`).pipe(
//     tap(_ => this.log(`found heroes matching "${term}"`)),
//     catchError(this.handleError<Hero[]>('searchHeroes', []))
//   );
// }


      /**
   * Handle Http operation that failed.
   * Let the app continue.
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
   */
  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      this.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

  /** Log a HeroService message with the MessageService */
  private log(message: string) {
    console.log("EmployeeService: " + message);
  }



}
