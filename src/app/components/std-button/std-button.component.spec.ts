import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StdButtonComponent } from './std-button.component';

describe('StdButtonComponent', () => {
  let component: StdButtonComponent;
  let fixture: ComponentFixture<StdButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StdButtonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StdButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
