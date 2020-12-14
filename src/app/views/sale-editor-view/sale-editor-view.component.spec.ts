import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SaleEditorViewComponent } from './sale-editor-view.component';

describe('SaleEditorViewComponent', () => {
  let component: SaleEditorViewComponent;
  let fixture: ComponentFixture<SaleEditorViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SaleEditorViewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SaleEditorViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
