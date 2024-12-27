import {
  Component,
  HostListener,
  Inject,
  Input,
  PLATFORM_ID,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'chat-component',
  templateUrl: 'chat-realtime.component.html',
  styleUrls: ['chat-realtime.component.css'],
  standalone: true,
  imports: [CommonModule, FormsModule],
})
export class ChatRealtimeComponent {
  @Input() partnerProfilePic!: string;
  @Input() userProfilePic!: string;

  windowWidth: number = 0; // Initialize to 0
  selectedUser: { name: string; avatar: string; isOnline: boolean } | null =
    null;

  users: { name: string; avatar: string; isOnline: boolean }[] = [
    {
      name: 'User 1',
      avatar:
        'https://cdn.builder.io/api/v1/image/assets%2FYJIGb4i01jvw0SRdL5Bt%2F3c50a0582c6c418abada5c25103249eb',
      isOnline: true,
    },
    {
      name: 'User 2',
      avatar:
        'https://cdn.builder.io/api/v1/image/assets%2FYJIGb4i01jvw0SRdL5Bt%2Faa380a88ce784cf595bbb7bb352e06eb',
      isOnline: false,
    },
  ];

  currentUser: string = 'Current User';

  messages: { content: string; isUser: boolean }[] = [
    { content: 'Hello, how are you?', isUser: false },
    { content: "I'm good, thank you!", isUser: true },
    { content: 'Hello, how are you?', isUser: false },
    { content: "I'm good, thank you!", isUser: true },
  ];

  selectedUserMessages: { content: string; isUser: boolean }[] = [];

  newMessage: string = '';

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {
    // Check if we are in the browser environment
    if (isPlatformBrowser(this.platformId)) {
      this.windowWidth = window.innerWidth; // Access window only if in the browser
    }
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: Event): void {
    if (isPlatformBrowser(this.platformId)) {
      this.windowWidth = window.innerWidth; // Update windowWidth on window resize
    }
  }

  selectUser(user: { name: string; avatar: string; isOnline: boolean }): void {
    this.selectedUser = user;
    this.loadMessagesForUser(user); // Load messages for the selected user
  }

  loadMessagesForUser(user: {
    name: string;
    avatar: string;
    isOnline: boolean;
  }): void {
    // Placeholder logic for loading messages based on selected user
    this.selectedUserMessages = [
      { content: `Hello ${user.name}, how are you?`, isUser: false },
      { content: "I'm good, thank you!", isUser: true },
      { content: `Nice to meet you, ${user.name}!`, isUser: false },
      { content: 'Great to chat with you!', isUser: true },
    ];
  }

  goBack(): void {
    // Implement go back functionality
  }

  sendMessage(): void {
    if (this.newMessage.trim() && this.selectedUser) {
      this.selectedUserMessages.push({
        content: this.newMessage,
        isUser: true,
      });
      this.newMessage = '';
    }
  }

  attachFile(): void {
    // Implement file attachment functionality
  }
}
