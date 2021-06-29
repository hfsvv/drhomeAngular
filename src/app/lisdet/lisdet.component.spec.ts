import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LisdetComponent } from './lisdet.component';

describe('LisdetComponent', () => {
  let component: LisdetComponent;
  let fixture: ComponentFixture<LisdetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LisdetComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LisdetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
