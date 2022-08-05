import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EscolherFuncionarioComponent } from './escolher-funcionario.component';

describe('EscolherFuncionarioComponent', () => {
  let component: EscolherFuncionarioComponent;
  let fixture: ComponentFixture<EscolherFuncionarioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EscolherFuncionarioComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EscolherFuncionarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
