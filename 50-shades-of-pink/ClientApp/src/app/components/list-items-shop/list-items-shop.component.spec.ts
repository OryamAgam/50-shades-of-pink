import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListItemsShopComponent } from './list-items-shop.component';

describe('ListItemsShopComponent', () => {
  let component: ListItemsShopComponent;
  let fixture: ComponentFixture<ListItemsShopComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListItemsShopComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListItemsShopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
