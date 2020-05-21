import { Component, OnInit } from '@angular/core';
import { Result } from '../result';
import { ResultService } from '../result.service';

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.css']
})
export class ResultsComponent implements OnInit {

  results: Result[];

  constructor(private resultService: ResultService) { }

  ngOnInit(): void {
    console.log('Results Component ngOnInit');
    this.getResults('foo');
  }

  getResults(string): void {
    console.log('Results Component getResults');
    this.resultService.getResults(string)
      .subscribe(results => this.results = results);
  }
}
