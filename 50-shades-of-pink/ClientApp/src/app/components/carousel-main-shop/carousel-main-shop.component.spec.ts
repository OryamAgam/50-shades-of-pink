import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CarouselMainShopComponent } from './carousel-main-shop.component';

describe('CarouselMainShopComponent', () => {
  let component: CarouselMainShopComponent;
  let fixture: ComponentFixture<CarouselMainShopComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CarouselMainShopComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CarouselMainShopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
