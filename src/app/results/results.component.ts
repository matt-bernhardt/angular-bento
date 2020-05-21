import { Component, OnInit } from '@angular/core';
import { Result } from '../result';
import { RESULTS } from '../mock-results';

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.css']
})
export class ResultsComponent implements OnInit {

  results = RESULTS;
  result: Result = {
    link: 'https://us.cnn.com',
    title: 'A History of Popcorn',
  }

  constructor() { }

  ngOnInit(): void {
  }

}
