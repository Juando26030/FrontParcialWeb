import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InsertarContratoComponent } from './insertar-contrato.component';

describe('InsertarContratoComponent', () => {
  let component: InsertarContratoComponent;
  let fixture: ComponentFixture<InsertarContratoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InsertarContratoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InsertarContratoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
