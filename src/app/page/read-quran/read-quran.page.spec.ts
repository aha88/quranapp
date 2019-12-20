import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReadQuranPage } from './read-quran.page';

describe('ReadQuranPage', () => {
  let component: ReadQuranPage;
  let fixture: ComponentFixture<ReadQuranPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReadQuranPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReadQuranPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
