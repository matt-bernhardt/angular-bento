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

  constructor(
    public resultService: ResultService
  ) { }

  ngOnInit(): void {
  }

}
