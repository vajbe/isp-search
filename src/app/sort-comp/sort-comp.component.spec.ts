import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SortCompComponent } from './sort-comp.component';

describe('SortCompComponent', () => {
  let component: SortCompComponent;
  let fixture: ComponentFixture<SortCompComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SortCompComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SortCompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
