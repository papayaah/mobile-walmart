import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalFilterOptionPage } from './modal-filter-option.page';

describe('ModalFilterOptionPage', () => {
  let component: ModalFilterOptionPage;
  let fixture: ComponentFixture<ModalFilterOptionPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ModalFilterOptionPage],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalFilterOptionPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
