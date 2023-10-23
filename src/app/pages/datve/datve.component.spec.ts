import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DatveComponent } from './datve.component';

describe('DatveComponent', () => {
  let component: DatveComponent;
  let fixture: ComponentFixture<DatveComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DatveComponent]
    });
    fixture = TestBed.createComponent(DatveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
