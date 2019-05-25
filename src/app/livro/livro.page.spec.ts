import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LivroPage } from './livro.page';

describe('LivroPage', () => {
  let component: LivroPage;
  let fixture: ComponentFixture<LivroPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [LivroPage],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LivroPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
