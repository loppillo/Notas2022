import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CursoGuardarComponent } from './curso-guardar.component';

describe('CursoGuardarComponent', () => {
  let component: CursoGuardarComponent;
  let fixture: ComponentFixture<CursoGuardarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CursoGuardarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CursoGuardarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
