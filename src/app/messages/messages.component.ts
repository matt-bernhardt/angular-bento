import { Component, OnInit } from '@angular/core';
import { MessageService } from '../message.service';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./font-awesome.min.css','./messages.component.css']
})
export class MessagesComponent implements OnInit {

  constructor(
  	public messageService: MessageService
  ) { }

  ngOnInit(): void {
  }

}
