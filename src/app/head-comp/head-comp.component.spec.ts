import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeadCompComponent } from './head-comp.component';

describe('HeadCompComponent', () => {
  let component: HeadCompComponent;
  let fixture: ComponentFixture<HeadCompComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeadCompComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeadCompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
