import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeninedPageComponent } from './denined-page.component';

describe('DeninedPageComponent', () => {
  let component: DeninedPageComponent;
  let fixture: ComponentFixture<DeninedPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeninedPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeninedPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
