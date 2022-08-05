import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginBarbeariaComponent } from './login-barbearia.component';

describe('LoginBarbeariaComponent', () => {
  let component: LoginBarbeariaComponent;
  let fixture: ComponentFixture<LoginBarbeariaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoginBarbeariaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginBarbeariaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
