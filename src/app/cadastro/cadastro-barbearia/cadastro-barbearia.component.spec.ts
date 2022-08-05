import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastroBarbeariaComponent } from './cadastro-barbearia.component';

describe('CadastroBarbeariaComponent', () => {
  let component: CadastroBarbeariaComponent;
  let fixture: ComponentFixture<CadastroBarbeariaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CadastroBarbeariaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CadastroBarbeariaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
