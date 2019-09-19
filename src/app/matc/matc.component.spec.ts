import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MatcComponent } from './matc.component';

describe('MatcComponent', () => {
  let component: MatcComponent;
  let fixture: ComponentFixture<MatcComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MatcComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MatcComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
