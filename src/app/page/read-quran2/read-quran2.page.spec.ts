import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReadQuran2Page } from './read-quran2.page';

describe('ReadQuran2Page', () => {
  let component: ReadQuran2Page;
  let fixture: ComponentFixture<ReadQuran2Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReadQuran2Page ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReadQuran2Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
