import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TabAttributePage } from './tab-attribute.page';

describe('TabAttributePage', () => {
  let component: TabAttributePage;
  let fixture: ComponentFixture<TabAttributePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [TabAttributePage],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TabAttributePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
