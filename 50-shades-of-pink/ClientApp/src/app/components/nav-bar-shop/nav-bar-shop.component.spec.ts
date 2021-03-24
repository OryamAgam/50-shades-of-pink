import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NavBarShopComponent } from './nav-bar-shop.component';

describe('NavBarShopComponent', () => {
  let component: NavBarShopComponent;
  let fixture: ComponentFixture<NavBarShopComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NavBarShopComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavBarShopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
