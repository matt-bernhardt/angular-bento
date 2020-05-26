import { Component, OnInit } from '@angular/core';
import { ResultService } from '../result.service';
import { Result } from '../result';
import { Search } from '../search';

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

  newResults(string): void {
    console.log('Clearing and starting a new search');
    this.clearResults();
    this.updateResults(string);
  }

  updateResults(string): void {
    console.log('Conducting search for ' + string);
    this.resultService.getResults(string)
      .subscribe(results => this.results = results);
    console.log('Received the following:');
    console.log(this.results);
  }


}
