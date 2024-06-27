import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResultadoA1Component } from './resultado-a1.component';

describe('ResultadoA1Component', () => {
  let component: ResultadoA1Component;
  let fixture: ComponentFixture<ResultadoA1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ResultadoA1Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ResultadoA1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
