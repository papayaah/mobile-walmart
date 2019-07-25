import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TabFilterPage } from './tab-filter.page';

describe('TabFilterPage', () => {
  let component: TabFilterPage;
  let fixture: ComponentFixture<TabFilterPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [TabFilterPage],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TabFilterPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
