import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserprofComponent } from './userprof.component';

describe('UserprofComponent', () => {
  let component: UserprofComponent;
  let fixture: ComponentFixture<UserprofComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserprofComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserprofComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
