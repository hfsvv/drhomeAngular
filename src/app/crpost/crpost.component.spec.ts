import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrpostComponent } from './crpost.component';

describe('CrpostComponent', () => {
  let component: CrpostComponent;
  let fixture: ComponentFixture<CrpostComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CrpostComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CrpostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
