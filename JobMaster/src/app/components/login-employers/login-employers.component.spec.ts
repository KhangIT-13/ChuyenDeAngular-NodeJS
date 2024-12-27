import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginEmployersComponent } from './login-employers.component';

describe('LoginEmployersComponent', () => {
  let component: LoginEmployersComponent;
  let fixture: ComponentFixture<LoginEmployersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LoginEmployersComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LoginEmployersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
