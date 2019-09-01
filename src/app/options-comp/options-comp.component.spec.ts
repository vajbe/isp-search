import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OptionsCompComponent } from './options-comp.component';

describe('OptionsCompComponent', () => {
  let component: OptionsCompComponent;
  let fixture: ComponentFixture<OptionsCompComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OptionsCompComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OptionsCompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
