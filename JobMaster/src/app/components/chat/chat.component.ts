// chat.component.ts
import { Component, OnInit } from '@angular/core';
// import { WebSocketService } from '../../services/web-socket.service'; // dịch vụ WebSocket
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-chat',  
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css'],


})
export class ChatComponent {
  // messages: { content: string, isMine: boolean }[] = [];
  // newMessage: string = '';

  // constructor(private webSocketService: WebSocketService) {}

  // ngOnInit(): void {
  //   // Lắng nghe tin nhắn mới
  //   // this.webSocketService.listen('chatMessage').subscribe((message: string) => {
  //   //   this.messages.push({ content: message, isMine: false });
  //   // });
  // }

  // sendMessage(): void {
  //   // if (this.newMessage.trim()) {
  //   //   this.messages.push({ content: this.newMessage, isMine: true });
  //   //   this.webSocketService.emit('chatMessage', this.newMessage); // Gửi tin nhắn qua WebSocket
  //   //   this.newMessage = '';
  //   // }
  // }
}
