import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdatePvComponent } from './update-pv.component';

describe('UpdatePvComponent', () => {
  let component: UpdatePvComponent;
  let fixture: ComponentFixture<UpdatePvComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdatePvComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdatePvComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
