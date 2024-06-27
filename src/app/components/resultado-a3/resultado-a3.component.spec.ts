import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResultadoA3Component } from './resultado-a3.component';

describe('ResultadoA3Component', () => {
  let component: ResultadoA3Component;
  let fixture: ComponentFixture<ResultadoA3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ResultadoA3Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ResultadoA3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
