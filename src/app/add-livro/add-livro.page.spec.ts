import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddLivroPage } from './add-livro.page';

describe('AddLivroPage', () => {
  let component: AddLivroPage;
  let fixture: ComponentFixture<AddLivroPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [AddLivroPage],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddLivroPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
