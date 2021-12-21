import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddLignComponent } from './add-lign.component';

describe('AddLignComponent', () => {
  let component: AddLignComponent;
  let fixture: ComponentFixture<AddLignComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddLignComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddLignComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
