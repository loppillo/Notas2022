import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlumnoGuardarComponent } from './alumno-guardar.component';

describe('AlumnoGuardarComponent', () => {
  let component: AlumnoGuardarComponent;
  let fixture: ComponentFixture<AlumnoGuardarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AlumnoGuardarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AlumnoGuardarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
