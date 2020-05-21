import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MessageService {
  messages: string[] = [];

  add(message: string, type: string) {
    var icon, newMessage;
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
    newMessage = {
      text: message,
      type: type,
      icon: icon
    }
    this.messages.push(newMessage);
  }

  clear() {
    this.messages = [];
  }
}
