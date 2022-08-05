import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EscolherDataComponent } from './escolher-data.component';

describe('EscolherDataComponent', () => {
  let component: EscolherDataComponent;
  let fixture: ComponentFixture<EscolherDataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EscolherDataComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EscolherDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
