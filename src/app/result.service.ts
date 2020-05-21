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

  getResults(): Observable<Result[]> {
    this.messageService.add('ResultService: Fetched search results', 'success');
    return of(RESULTS);
  }
}
