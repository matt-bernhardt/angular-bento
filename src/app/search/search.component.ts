import { Component, OnInit } from '@angular/core';
import { Search } from '../search';
import { ResultService } from '../result.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  search: Search = {
    text: '',
  }

  results: Result[];

  constructor(
    public resultService: ResultService
  ) { }

  ngOnInit(): void {
    console.log('Search Component ngOnInit');
  }

  clearResults(): void {
    console.log('Clearing results');
    this.results = [];
  }

  getResults(string): void {
    console.log('Search Component getResults');
    this.clearResults();
    this.resultService.getResults(string)
      .subscribe(results => this.results = results);
  }


}
