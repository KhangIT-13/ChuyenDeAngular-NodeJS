import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PublishListComponent } from './publish-list.component';

describe('PublishListComponent', () => {
  let component: PublishListComponent;
  let fixture: ComponentFixture<PublishListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PublishListComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PublishListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
