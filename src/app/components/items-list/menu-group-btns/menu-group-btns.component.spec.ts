import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuGroupBtnsComponent } from './menu-group-btns.component';

describe('MenuGroupBtnsComponent', () => {
  let component: MenuGroupBtnsComponent;
  let fixture: ComponentFixture<MenuGroupBtnsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MenuGroupBtnsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MenuGroupBtnsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
