import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EscolherServicosComponent } from './escolher-servicos.component';

describe('EscolherServicosComponent', () => {
  let component: EscolherServicosComponent;
  let fixture: ComponentFixture<EscolherServicosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EscolherServicosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EscolherServicosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
