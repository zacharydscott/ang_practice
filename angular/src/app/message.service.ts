import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MessageService {
  messages: string[] = [];
  add(message: string) {
    window.console.log(`logged: ${message}`);
    this.messages.push(message);
  }
  clear(): void {
    this.messages = ['cleared'];
  }
}
