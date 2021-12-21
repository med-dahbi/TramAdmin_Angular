import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateVoyageComponent } from './update-voyage.component';

describe('UpdateVoyageComponent', () => {
  let component: UpdateVoyageComponent;
  let fixture: ComponentFixture<UpdateVoyageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateVoyageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateVoyageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
