import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterEmployersComponent } from './register-employers.component';

describe('RegisterEmployersComponent', () => {
  let component: RegisterEmployersComponent;
  let fixture: ComponentFixture<RegisterEmployersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RegisterEmployersComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RegisterEmployersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
