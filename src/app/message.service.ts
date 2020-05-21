import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MessageService {
  messages: string[] = [];

  add(message: string, type: string) {
    var icon;
    switch(type) {
      case 'error': {
        icon = 'fa-exclamation-triangle';
        break;
      }
      case 'warning': {
        icon = 'fa-exclamation-circle';
        break;
      }
      case 'success': {
        icon = 'fa-check-circle';
        break;
      }
      default: {
        type = '';
        icon = 'fa-info-circle';
        break;
      }
    }
    this.messages.push({
      text: message,
      type: type,
      icon: icon
    });
  }

  clear() {
    this.messages = [];
  }
}
