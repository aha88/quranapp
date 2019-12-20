import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QiblatPage } from './qiblat.page';

describe('QiblatPage', () => {
  let component: QiblatPage;
  let fixture: ComponentFixture<QiblatPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QiblatPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QiblatPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
