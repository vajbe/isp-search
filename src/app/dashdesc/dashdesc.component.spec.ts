import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DashdescComponent } from './dashdesc.component';

describe('DashdescComponent', () => {
  let component: DashdescComponent;
  let fixture: ComponentFixture<DashdescComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DashdescComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashdescComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
