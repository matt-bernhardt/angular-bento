import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { MessageService } from './message.service';

import { Result } from './result'; // <-- Interface
import { RESULTS } from './mock-results'; // <-- Mock results

@Injectable({
  providedIn: 'root'
})
export class ResultService {

  constructor(
    private messageService: MessageService
  ) { }

  clearResults(): void {
    return null;
  }

  getResults(string): Observable<Result[]> {
    console.log('Result Service getResults: search for ' + string);
    if (!string.length) {
      this.messageService.add('ResultService: Cannot conduct a search for nothing...', 'warning');
      return;
    }
    this.messageService.add('ResultService: Fetched search results for ' + string, 'success');
    return of(RESULTS);
  }
}
