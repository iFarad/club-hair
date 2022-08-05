import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BarbeariasUsuarioComponent } from './barbearias-usuario.component';

describe('BarbeariasUsuarioComponent', () => {
  let component: BarbeariasUsuarioComponent;
  let fixture: ComponentFixture<BarbeariasUsuarioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BarbeariasUsuarioComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BarbeariasUsuarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
