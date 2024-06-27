import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResultadoA4Component } from './resultado-a4.component';

describe('ResultadoA4Component', () => {
  let component: ResultadoA4Component;
  let fixture: ComponentFixture<ResultadoA4Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ResultadoA4Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ResultadoA4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
