import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfesorGuardarComponent } from './profesor-guardar.component';

describe('ProfesorGuardarComponent', () => {
  let component: ProfesorGuardarComponent;
  let fixture: ComponentFixture<ProfesorGuardarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProfesorGuardarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfesorGuardarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
