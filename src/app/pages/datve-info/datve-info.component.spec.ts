import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DatveInfoComponent } from './datve-info.component';

describe('DatveInfoComponent', () => {
  let component: DatveInfoComponent;
  let fixture: ComponentFixture<DatveInfoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DatveInfoComponent]
    });
    fixture = TestBed.createComponent(DatveInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
