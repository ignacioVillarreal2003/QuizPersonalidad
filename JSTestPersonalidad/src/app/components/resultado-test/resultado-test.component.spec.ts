import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResultadoTestComponent } from './resultado-test.component';

describe('ResultadoTestComponent', () => {
  let component: ResultadoTestComponent;
  let fixture: ComponentFixture<ResultadoTestComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ResultadoTestComponent]
    });
    fixture = TestBed.createComponent(ResultadoTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
