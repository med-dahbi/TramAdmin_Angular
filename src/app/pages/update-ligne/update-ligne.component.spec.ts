import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateLigneComponent } from './update-ligne.component';

describe('UpdateLigneComponent', () => {
  let component: UpdateLigneComponent;
  let fixture: ComponentFixture<UpdateLigneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateLigneComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateLigneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
