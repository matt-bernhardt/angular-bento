import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

import { MessageService } from './message.service';

import { Result } from './result'; // <-- Interface
import { RESULTS } from './mock-results'; // <-- Mock results

@Injectable({
  providedIn: 'root'
})
export class ResultService {

  private searchUrl = 'https://timdex.mit.edu/api/v1/search'; // URL to web api

  constructor(
    private http: HttpClient,
    private messageService: MessageService
  ) { }

  clearResults(): void {
    return null;
  }

  /** GET results from Timdex */
  getResults(string: string): Observable<Result[]> {
    const url = `${this.searchUrl}?q=${string}`;
    console.log('Result Service getResults: search for ' + string);
    if (!string.length) {
      this.log('Cannot conduct a search for nothing...', 'warning');
      return;
    }
    this.log('Fetched search results for ' + string, 'success');
    return this.http.get<Result[]>(url)
      .pipe(
        map(results => results.results),
        tap(x => console.log(x)),
        tap(_ => this.log(`Fetched ${_.length} results`, 'success')),
        catchError(this.handleError<Result[]>('getResults', []))
      );
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);

      this.log(`${operation} failed: ${error.message}`, 'error');

      return of(result as T);
    };
  }

  private log(message: string, type: string) {
    this.messageService.add(`ResultService: ${message}`, type);
  }
}
