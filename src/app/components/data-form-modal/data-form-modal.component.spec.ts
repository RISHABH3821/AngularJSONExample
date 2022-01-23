import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DataFormModalComponent } from './data-form-modal.component';

describe('DataFormModalComponent', () => {
  let component: DataFormModalComponent;
  let fixture: ComponentFixture<DataFormModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DataFormModalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DataFormModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
