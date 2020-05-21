import { Component, OnInit } from '@angular/core';
import { Search } from '../search';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  search: Search = {
    text: '',
    confirm: false
  }

  constructor() { }

  ngOnInit(): void {
  }

}
