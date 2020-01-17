import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CategoriesBtnsComponent } from './categories-btns.component';

describe('CategoriesBtnsComponent', () => {
  let component: CategoriesBtnsComponent;
  let fixture: ComponentFixture<CategoriesBtnsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CategoriesBtnsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CategoriesBtnsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
