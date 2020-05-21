import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { Result } from './result'; // <-- Interface
import { RESULTS } from './mock-results'; // <-- Mock results

@Injectable({
  providedIn: 'root'
})
export class ResultService {

  constructor() { }

  getResults(): Observable<Result[]> {
  	return of(RESULTS);
  }
}
