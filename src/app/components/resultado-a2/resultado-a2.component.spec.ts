import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResultadoA2Component } from './resultado-a2.component';

describe('ResultadoA2Component', () => {
  let component: ResultadoA2Component;
  let fixture: ComponentFixture<ResultadoA2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ResultadoA2Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ResultadoA2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
