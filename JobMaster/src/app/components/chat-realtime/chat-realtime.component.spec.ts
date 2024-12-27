import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChatRealtimeComponent } from './chat-realtime.component';

describe('ChatRealtimeComponent', () => {
  let component: ChatRealtimeComponent;
  let fixture: ComponentFixture<ChatRealtimeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChatRealtimeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ChatRealtimeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
