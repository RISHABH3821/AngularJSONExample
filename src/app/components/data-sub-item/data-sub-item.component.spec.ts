import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DataSubItemComponent } from './data-sub-item.component';

describe('DataSubItemComponent', () => {
  let component: DataSubItemComponent;
  let fixture: ComponentFixture<DataSubItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DataSubItemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DataSubItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
