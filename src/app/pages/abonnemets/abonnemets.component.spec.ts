import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AbonnemetsComponent } from './abonnemets.component';

describe('AbonnemetsComponent', () => {
  let component: AbonnemetsComponent;
  let fixture: ComponentFixture<AbonnemetsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AbonnemetsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AbonnemetsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
