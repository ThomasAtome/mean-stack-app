import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SaleCreatorViewComponent } from './sale-creator-view.component';

describe('SaleCreatorViewComponent', () => {
  let component: SaleCreatorViewComponent;
  let fixture: ComponentFixture<SaleCreatorViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SaleCreatorViewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SaleCreatorViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
